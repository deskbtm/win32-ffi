import { arch } from "../utils";
import { _UINT_PTR, _LONG_PTR } from "./win_common";

export const UINT_PTR = _UINT_PTR;
export const PUINT_PTR = ['uint64*', 'uint*'][arch()];

export const LONG_PTR = _LONG_PTR;
export const PLONG_PTR = ['int64*', 'long*'][arch()];

export const ULONG_PTR = ['uint64', 'ulong'][arch()];
export const DWORD_PTR = ULONG_PTR;

export const HALF_PTR = ['int', 'short'][arch()];
export const PHALF_PTR = ['int*', 'short*'][arch()];
export const UHALF_PTR = ['uint', 'ushort'][arch()];
export const PUHALF_PTR = ['uint*', 'ushort*'][arch()];

export const PDWORD_PTR = ['uint64*', 'ulong*'][arch()];

export const DWORD32 = 'uint';
export const DWORD64 = 'uint64';

export const PDWORD32 = 'uint*';
export const PDWORD64 = 'uint64*';

export const INT8 = 'char';
export const INT16 = 'short';
export const INT32 = 'int';
export const INT64 = 'int64';

export const INT_PTR = ['int64', 'int'][arch()];
export const PINT_PTR = ['int64*', 'int*'][arch()];

export const UINT8 = 'uchar';
export const UINT16 = 'ushort';
export const UINT32 = 'uint';
export const UINT64 = 'uint64';

export const PINT8 = 'char*';
export const PINT16 = 'short*';
export const PINT32 = 'int*';
export const PINT64 = 'int64*';

export const PUINT8 = 'char*';
export const PUINT16 = 'short*';
export const PUINT32 = 'int*';
export const PUINT64 = 'int64*';

export const LONG32 = 'int';
export const LONG64 = 'int64';

export const ULONG32 = 'uint';
export const ULONG64 = 'uint64';

export const PLONG32 = 'int*';
export const PLONG64 = 'int64*';

export const POINTER_32 = 'pointer';
export const POINTER_64 = 'pointer';
export const POINTER_SIGNED = 'pointer';
export const POINTER_UNSIGNED = 'pointer';

export const PSIZE_T = 'size_t*';
export const PSSIZE_T = 'size_t*';
export const SSIZE_T = _LONG_PTR;
export const SIZE_T = ULONG_PTR;

