import { Pointer, BigIntString } from "../common";

export type UINT_PTR = number | BigIntString;
export type PUINT_PTR = Pointer;

export type LONG_PTR = number | BigIntString;
export type PLONG_PTR = Pointer;

export type ULONG_PTR = number | BigIntString;
export type DWORD_PTR = ULONG_PTR;

export type HALF_PTR = number;
export type PHALF_PTR = Pointer;
export type UHALF_PTR = number;
export type PUHALF_PTR = Pointer;

export type PDWORD_PTR = Pointer;

export type DWORD32 = number;
export type DWORD64 = number | BigIntString;

export type PDWORD32 = Pointer;
export type PDWORD64 = Pointer;

export type INT8 = number;
export type INT16 = number;
export type INT32 = number;
export type INT64 = number | BigIntString;

export type INT_PTR = number;
export type PINT_PTR = Pointer;

export type UINT8 = number;
export type UINT16 = number;
export type UINT32 = number;
export type UINT64 = number | BigIntString;

export type PINT8 = Pointer;
export type PINT16 = Pointer;
export type PINT32 = Pointer;
export type PINT64 = Pointer;

export type PUINT8 = Pointer;
export type PUINT16 = Pointer;
export type PUINT32 = Pointer;
export type PUINT64 = Pointer;

export type LONG32 = Pointer;
export type LONG64 = number | BigIntString;

export type ULONG32 = Pointer;
export type ULONG64 = number | BigIntString;

export type PLONG32 = Pointer;
export type PLONG64 = Pointer;

export type POINTER_32 = Pointer;
export type POINTER_64 = Pointer;
export type POINTER_SIGNED = Pointer;
export type POINTER_UNSIGNED = Pointer;

export type PSIZE_T = Pointer;
export type PSSIZE_T = Pointer;
export type SSIZE_T = LONG_PTR;
export type SIZE_T = ULONG_PTR;

