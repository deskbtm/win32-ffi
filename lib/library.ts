// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore

import { ForeignFunction, VariadicForeignFunction } from 'ffi-napi';
import * as util from 'util';
import assert from 'assert';
import * as ref from 'ref-napi';
import { join } from 'path';
import { readFileSync } from 'fs';

const debug = util.debuglog('win32-ffi:library');

let bindings = require('node-gyp-build')(join(require.resolve('ffi-napi'), '../..'));
bindings = bindings.initializeBindings(ref.instance);

const funcs = bindings.StaticFunctions;
const int = ref.types.int;
const voidPtr = ref.refType(ref.types.void);
const dlopen = ForeignFunction(funcs.dlopen, voidPtr, ['string', int]);
const dlclose = ForeignFunction(funcs.dlclose, int, [voidPtr]);
const dlsym = ForeignFunction(funcs.dlsym, voidPtr, [voidPtr, 'string']);
const dlerror = ForeignFunction(funcs.dlerror, 'string', []);

/**
 * The extension to use on libraries.
 * i.e.  libm  ->  libm.so   on linux
 */

const EXT = (SecureLibrary.EXT = {
	linux: '.so',
	linux2: '.so',
	sunos: '.so',
	solaris: '.so',
	freebsd: '.so',
	openbsd: '.so',
	darwin: '.dylib',
	mac: '.dylib',
	win32: '.dll',
} as any)[process.platform];

/**
 * `SecureDynamicLibrary` loads and fetches function pointers for dynamic libraries
 * (.so, .dylib, etc). After the libray's function pointer is acquired, then you
 * call `get(symbol)` to retreive a pointer to an exported symbol. You need to
 * call `get___()` on the pointer to dereference it into its actual value, or
 * turn the pointer into a callable function with `ForeignFunction`.
 */

export const SecureDynamicLibrary = function (path?: string, mode?: number) {
	if (!(this instanceof SecureDynamicLibrary)) {
		return new SecureDynamicLibrary(path, mode);
	}
	debug('new SecureDynamicLibrary()', path, mode);

	if (null == mode) {
		mode = SecureDynamicLibrary.FLAGS.RTLD_LAZY;
	}

	this._path = path;
	this._handle = dlopen(path, mode);
	assert(Buffer.isBuffer(this._handle), 'expected a Buffer instance to be returned from `dlopen()`');

	if (this._handle.isNull()) {
		const err = this.error();

		// THIS CODE IS BASED ON GHC Trac ticket #2615
		// http://hackage.haskell.org/trac/ghc/attachment/ticket/2615

		// On some systems (e.g., Gentoo Linux) dynamic files (e.g. libc.so)
		// contain linker scripts rather than ELF-format object code. This
		// code handles the situation by recognizing the real object code
		// file name given in the linker script.

		// If an "invalid ELF header" error occurs, it is assumed that the
		// .so file contains a linker script instead of ELF object code.
		// In this case, the code looks for the GROUP ( ... ) linker
		// directive. If one is found, the first file name inside the
		// parentheses is treated as the name of a dynamic library and the
		// code attempts to dlopen that file. If this is also unsuccessful,
		// an error message is returned.

		// see if the error message is due to an invalid ELF header
		let match;

		if ((match = err.match(/^(([^ \t()])+\.so([^ \t:()])*):([ \t])*/))) {
			const content = readFileSync(match[1], 'ascii');
			// try to find a GROUP ( ... ) command
			if ((match = content.match(/GROUP *\( *(([^ )])+)/))) {
				return SecureDynamicLibrary.call(this, match[1], mode);
			}
		}

		throw new Error('Dynamic Linking Error: ' + err);
	}
};

/**
 * Set the exported flags from "dlfcn.h"
 */

SecureDynamicLibrary.FLAGS = {} as any;
Object.keys(bindings).forEach(function (k) {
	if (!/^RTLD_/.test(k)) return;
	const desc = Object.getOwnPropertyDescriptor(bindings, k);
	Object.defineProperty(SecureDynamicLibrary.FLAGS, k, desc!);
});

/**
 * Close this library, returns the result of the dlclose() system function.
 */

SecureDynamicLibrary.prototype.close = function () {
	debug('dlclose()');
	return dlclose(this._handle);
};

/**
 * Get a symbol from this library, returns a Pointer for (memory address of) the symbol
 */

SecureDynamicLibrary.prototype.get = function (symbol: string): Buffer {
	debug('dlsym()', symbol);
	assert.strictEqual('string', typeof symbol);

	const ptr = dlsym(this._handle, symbol);
	assert(Buffer.isBuffer(ptr));

	if (ptr.isNull()) {
		return;
	}

	ptr.name = symbol;

	return ptr;
};

/**
 * Returns the result of the dlerror() system function
 */
SecureDynamicLibrary.prototype.error = function error() {
	debug('dlerror()');
	return dlerror();
};

/**
 * Returns the path originally passed to the constructor
 */
SecureDynamicLibrary.prototype.path = function error() {
	return this._path;
};

const RTLD_NOW = SecureDynamicLibrary.FLAGS.RTLD_NOW;

/**
 * Provides a friendly abstraction/API on-top of SecureDynamicLibrary and
 * ForeignFunction.
 */

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function SecureLibrary(libfile: string, funcs: any, lib?: any): any {
	debug('creating Library object for %s', libfile);

	if (libfile && typeof libfile === 'string' && libfile.indexOf(EXT) === -1) {
		debug('appending library extension to library name');
		libfile += EXT;
	}

	if (!lib) {
		lib = {};
	}
	let dl: any;
	if (typeof libfile === 'string' || !libfile) {
		dl = new SecureDynamicLibrary(libfile, RTLD_NOW);
	} else {
		dl = libfile;
	}

	for (const func of Object.keys(funcs || {})) {
		debug('defining function %s', func);

		const fptr = dl.get(func);
		const info = funcs[func];

		if (!fptr) {
			continue;
		}

		if (fptr.isNull()) {
			throw new Error('Library: "' + dl.path() + '" returned NULL function pointer for "' + func + '"');
		}

		const resultType = info[0];
		const paramTypes = info[1];
		const fopts = info[2];
		const abi = fopts && fopts.abi;
		const async = fopts && fopts.async;
		const varargs = fopts && fopts.varargs;

		if (varargs) {
			lib[func] = VariadicForeignFunction(fptr, resultType, paramTypes, abi);
		} else {
			const ff = ForeignFunction(fptr, resultType, paramTypes, abi);
			lib[func] = async ? ff.async : ff;
		}
	}

	return lib;
}
