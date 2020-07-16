/**
 *			AUTHOR --- sewerganger <wanghan9423@outlook.com>
 *			LICENSE --- MIT
 *			LASTMODIFY --- 2020-07-01T12:48:39.005Z
 *			DESCRIPTION --- TODO: description
 *			REPOSITORY --- git+https://github.com/sewerganger/shadow.git
 */

import StructType = require('ref-struct-di');
import { Ref } from './ts/ref';
import * as missDeclarationRef from 'ref-napi';

export * as TS from './ts';
export * as CPP from './cpp';
export * from './cpp/string';
export * from './win-win';
const ref: Ref = missDeclarationRef as Ref;
const { NULL_POINTER, NULL } = missDeclarationRef;
/**
 * @see https://www.npmjs.com/package/ffi-napi
 */
export * as ffi from 'ffi-napi';

/**
 * @see https://www.npmjs.com/package/ref-struct-di 
 */
// export { default as Struct } from 'ref-struct-di';
export { StructType, ref, NULL, NULL_POINTER };

