/**
 * Copyright 2022 WangHan
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import StructType = require('ref-struct-di');
import { Ref } from './ts/ref';
import * as missDeclarationRef from 'ref-napi';

export * as TS from './ts';
export * as CPP from './cpp';
export * from './cpp/string';
export * from './win32-ffi';
const ref: Ref = missDeclarationRef as Ref;
const { NULL_POINTER, NULL } = missDeclarationRef;
/**
 * @see https://www.npmjs.com/package/ffi-napi
 */
export * as ffi from 'ffi-napi';

/**
 * @see https://www.npmjs.com/package/ref-struct-di
 */
export { StructType, ref, NULL, NULL_POINTER };

export * from './library';
