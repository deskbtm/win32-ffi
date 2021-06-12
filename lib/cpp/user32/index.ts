/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
/**
 *	 data types base on  @see https://docs.microsoft.com/en-us/windows/win32/winprog/windows-data-types
 *		api @see https://docs.microsoft.com/en-us/windows/win32/api/winuser/
 * 	 basic types from @see https://github.com/libffi/libffi
 */
import { winUserFns } from './win_user_fns';

export * from './win_nt';
export * from './win_def';
export * from './win_ternl';
export * from './base_tsd';
export * from './user_macro_fns';

export * from './win_user_struct';
export * from './win_user_constant';
export * from './win_user_type';

export const user32Fns = Object.assign({}, winUserFns);

/**
 *			FFI  types
 * 			{
 *			  void: {
 *			    size: 0,
 *			    indirection: 1,
 *			    get: [Function: get],
 *			    set: [Function: set],
 *			    name: 'void',
 *			    ffi_type: <Buffer@0x00007FF912462C70 name: 'void'>
 *			  },
 *			  int8: {
 *			    size: 1,
 *			    indirection: 1,
 *			    get: [Function: get],
 *			    set: [Function: set],
 *			    alignment: 1,
 *			    name: 'int8',
 *			    ffi_type: <Buffer@0x00007FF912462CA0 name: 'int8'>
 *			  },
 *			  uint8: {
 *			    size: 1,
 *			    indirection: 1,
 *			    get: [Function: get],
 *			    set: [Function: set],
 *			    alignment: 1,
 *			    name: 'uint8',
 *			    ffi_type: <Buffer@0x00007FF912462C88 name: 'uint8'>
 *			  },
 *			  int16: {
 *			    size: 2,
 *			    indirection: 1,
 *			    get: [Function: get],
 *			    set: [Function: set],
 *			    alignment: 2,
 *			    name: 'int16',
 *			    ffi_type: <Buffer@0x00007FF912462CD0 name: 'int16'>
 *			  },
 *			  uint16: {
 *			    size: 2,
 *			    indirection: 1,
 *			    get: [Function: get],
 *			    set: [Function: set],
 *			    alignment: 2,
 *			    name: 'uint16',
 *			    ffi_type: <Buffer@0x00007FF912462CB8 name: 'uint16'>
 *			  },
 *			  int32: {
 *			    size: 4,
 *			    indirection: 1,
 *			    get: [Function: get],
 *			    set: [Function: set],
 *			    alignment: 4,
 *			    name: 'int32',
 *			    ffi_type: <Buffer@0x00007FF912462D00 name: 'int32'>
 *			  },
 *			  uint32: {
 *			    size: 4,
 *			    indirection: 1,
 *			    get: [Function: get],
 *			    set: [Function: set],
 *			    alignment: 4,
 *			    name: 'uint32',
 *			    ffi_type: <Buffer@0x00007FF912462CE8 name: 'uint32'>
 *			  },
 *			  int64: {
 *			    size: 8,
 *			    indirection: 1,
 *			    get: [Function: get],
 *			    set: [Function: set],
 *			    alignment: 8,
 *			    name: 'int64',
 *			    ffi_type: <Buffer@0x00007FF912462D30 name: 'int64'>
 *			  },
 *			  uint64: {
 *			    size: 8,
 *			    indirection: 1,
 *			    get: [Function: get],
 *			    set: [Function: set],
 *			    alignment: 8,
 *			    name: 'uint64',
 *			    ffi_type: <Buffer@0x00007FF912462D18 name: 'uint64'>
 *			  },
 *			  float: {
 *			    size: 4,
 *			    indirection: 1,
 *			    get: [Function: get],
 *			    set: [Function: set],
 *			    alignment: 4,
 *			    name: 'float',
 *			    ffi_type: <Buffer@0x00007FF912462D60 name: 'float'>
 *			  },
 *			  double: {
 *			    size: 8,
 *			    indirection: 1,
 *			    get: [Function: get],
 *			    set: [Function: set],
 *			    alignment: 8,
 *			    name: 'double',
 *			    ffi_type: <Buffer@0x00007FF912462D78 name: 'double'>
 *			  },
 *			  Object: {
 *			    size: 24,
 *			    indirection: 1,
 *			    get: [Function: get],
 *			    set: [Function: set],
 *			    alignment: 8,
 *			    name: 'Object',
 *			    ffi_type: <Buffer@0x00007FF912462D48 name: 'pointer'>
 *			  },
 *			  CString: {
 *			    size: 8,
 *			    alignment: 8,
 *			    indirection: 1,
 *			    get: [Function: get],
 *			    set: [Function: set],
 *			    name: 'CString',
 *			    ffi_type: <Buffer@0x00007FF912462D48 name: 'pointer'>
 *			  },
 *			  bool: {
 *			    alignment: 1,
 *			    get: [Function: get],
 *			    set: [Function: set],
 *			    name: 'bool'
 *			  },
 *			  byte: { name: 'byte' },
 *			  char: {
 *			    alignment: 1,
 *			    name: 'char',
 *			    ffi_type: <Buffer@0x00007FF912462CA0 name: 'char'>
 *			  },
 *			  uchar: {
 *			    alignment: 1,
 *			    name: 'uchar',
 *			    ffi_type: <Buffer@0x00007FF912462C88 name: 'uchar'>
 *			  },
 *			  short: {
 *			    alignment: 2,
 *			    name: 'short',
 *			    ffi_type: <Buffer@0x00007FF912462CD0 name: 'short'>
 *			  },
 *			  ushort: {
 *			    alignment: 2,
 *			    name: 'ushort',
 *			    ffi_type: <Buffer@0x00007FF912462CB8 name: 'ushort'>
 *			  },
 *			  int: {
 *			    alignment: 4,
 *			    name: 'int',
 *			    ffi_type: <Buffer@0x00007FF912462D00 name: 'int'>
 *			  },
 *			  uint: {
 *			    alignment: 4,
 *			    name: 'uint',
 *			    ffi_type: <Buffer@0x00007FF912462CE8 name: 'uint'>
 *			  },
 *			  long: {
 *			    alignment: 4,
 *			    name: 'long',
 *			    ffi_type: <Buffer@0x00007FF912462D00 name: 'int32'>
 *			  },
 *			  ulong: {
 *			    alignment: 4,
 *			    name: 'ulong',
 *			    ffi_type: <Buffer@0x00007FF912462CE8 name: 'uint32'>
 *			  },
 *			  longlong: {
 *			    alignment: 8,
 *			    name: 'longlong',
 *			    ffi_type: <Buffer@0x00007FF912462D00 name: 'longlong'>
 *			  },
 *			  ulonglong: {
 *			    alignment: 8,
 *			    name: 'ulonglong',
 *			    ffi_type: <Buffer@0x00007FF912462CE8 name: 'ulonglong'>
 *			  },
 *			  size_t: {
 *			    alignment: 8,
 *			    name: 'size_t',
 *			    ffi_type: <Buffer@0x00007FF912462D48 name: 'pointer'>
 *			  }
 *			}
 */

