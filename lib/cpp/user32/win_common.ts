/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import { arch } from "../utils";

export const _BOOL = 'int';

export const _LONG = 'int32';

export const _WORD = 'int16';
export const _DWORD = 'int32';
export const _PDWORD = 'uint32*';

export const _BYTE = 'uchar';

/**
 *	
 */

export const _DECLARE_HANDLE = ['uint64', 'uint32'][arch()];

/**
 *			win_def
 */
export const _LPVOID = 'void*';
/**
 *			base_tsd
 */
export const _LONG_PTR = ['int64', 'long'][arch()];
export const _UINT_PTR = ['uint64', 'uint'][arch()];
