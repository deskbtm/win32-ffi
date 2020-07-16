'use strict';

const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs');
const { resolve } = require('path');
const { promisify } = require('util');

const appendFile = promisify(fs.appendFile);

const chalk = require('chalk');
// '/winuser', '/libloaderapi' , '/processthreadsapi'
const libList = ['/processthreadsapi'];
const baseUrl = 'https://docs.microsoft.com/';

const configure = { baseUrl };
const rp = request.defaults(configure);

const createAbortError = () => {
	const error = new Error('Delay aborted');
	error.name = 'AbortError';
	return error;
};

const createDelay = ({ clearTimeout: defaultClear, setTimeout: set, willResolve }) => (ms, { value, signal } = {}) => {
	if (signal && signal.aborted) {
		return Promise.reject(createAbortError());
	}

	let timeoutId;
	let settle;
	let rejectFn;
	const clear = defaultClear || clearTimeout;

	const signalListener = () => {
		clear(timeoutId);
		rejectFn(createAbortError());
	};

	const cleanup = () => {
		if (signal) {
			signal.removeEventListener('abort', signalListener);
		}
	};

	const delayPromise = new Promise((resolve, reject) => {
		settle = () => {
			cleanup();
			if (willResolve) {
				resolve(value);
			} else {
				reject(value);
			}
		};

		rejectFn = reject;
		timeoutId = (set || setTimeout)(settle, ms);
	});

	if (signal) {
		signal.addEventListener('abort', signalListener, { once: true });
	}

	delayPromise.clear = () => {
		clear(timeoutId);
		timeoutId = null;
		settle();
	};

	return delayPromise;
};

const delay = createDelay({ willResolve: true });

// 这里本应该使用自动机来写 
var parseCppToTs = (code) => {
	const list = code.replace(/\n+/g, '').split(/\s+/g);
	let isStartParam = false;
	let retTsCode = '';
	let retTsCppCode = '';
	let funcName = '';
	const retType = [];
	let paramType = [];
	let cppParamType = [];
	let tsParamString = '';

	for (const c of list) {
		if (c.endsWith(');')) {
			if (c.includes('(')) {
				funcName = c.replace(/\(.*\);/g, '');
			} else {
				tsParamString += (c.replace(');', '') + (paramType.length !== 0 ? ':' + paramType.join('|') : ''));
			}
			retTsCode = funcName + ':' + `(${tsParamString})=> ${retType.join('|')};`;
			retTsCppCode = cppParamType.length > 0 ?
				`${funcName}:[${retType.join('')}, [${cppParamType.join(',')}]],` :
				`${funcName}:[${retType.join('')},[\\placeholder]],`;
		} else if (isStartParam) {

			if (c.endsWith(',')) {
				if (paramType.length == 0) {
					tsParamString += c;
				} else {
					tsParamString += (c.replace(',', '') + ':' + paramType.join('|') + ',');
				}
				paramType = [];
			} else {
				paramType.push(c.toUpperCase());
				cppParamType.push(c.toUpperCase());
			}
		} else if (c.endsWith('(')) {
			isStartParam = true;
			funcName = c.replace('(', '');
		} else {
			retType.push(c.toUpperCase());
		}

	}
	return { ts: retTsCode, ffi: retTsCppCode };
};

const extractContent = async (content) => {
	const $ = cheerio.load(content);
	const cppCode = $('pre').children('code').eq(0).text();
	return parseCppToTs(cppCode);
};

(async () => {

	for await (const lib of libList) {
		const intrefaceTemplate = `export interface WinUserFns extends TsWin32FnsBasic {\n`;
		const ffiTemplate = `export const ${lib.replace('/', '')}Fns = {\n `;

		const contentsBody = await rp.get('/en-us/windows/win32/api' + lib).catch((err) => console.log(err));
		const $ = cheerio.load(contentsBody);
		const trs = $('#functions').next().children('tbody').children('tr');

		const uid = ((Math.random() + Date.now()) * 0xffffff).toString(36);

		const typePath = resolve(__dirname, `../temp${lib}.type.${uid}.txt`);
		const ffiPath = resolve(__dirname, `../temp${lib}.ffi.${uid}.txt`);

		await appendFile(typePath, intrefaceTemplate).catch((err) => console.log(err));
		await appendFile(ffiPath, ffiTemplate).catch((err) => console.log(err));

		for (let index = 0; index < trs.length; index++) {
			const tr = trs[index];
			const aLink = $(tr).children('td').eq(0).children('a');
			const href = aLink.attr()['href'];
			const detailContent = await rp.get(href).catch((err) => console.log(err));
			const codes = await extractContent(detailContent);

			console.log(chalk.green('Code Generate ----------------'));
			console.log(chalk.yellow(`Ts:${codes.ts}`));
			console.log(chalk.green('----------------------------------'));
			console.log(chalk.yellow(`FFi:${codes.ffi}`));
			console.log(chalk.green('----------------------------------'));
			console.log('\n');

			await appendFile(typePath, codes.ts + '\n').catch((err) => console.log(err));
			await appendFile(ffiPath, codes.ffi + '\n').catch((err) => console.log(err));
			await delay(1000);
		}

		await appendFile(typePath, '}').catch((err) => console.log(err));
		await appendFile(ffiPath, '}').catch((err) => console.log(err));
	}
})();

