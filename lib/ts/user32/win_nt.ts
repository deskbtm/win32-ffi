import { WORD, DWORD, BYTE, PDWORD } from './win_def';
import { Pointer, BigIntString } from '../common';

export type TBYTE = string | number;
export type PTBYTE = Pointer;

export type PVOID = Pointer;
export type HANDLE = PVOID | number | BigIntString;

export type LONG = number;
export type LONGLONG = number;
export type PLONG = Pointer;
export type PLONGLONG = Pointer;
export type ULONGLONG = number;

export type CHAR = string;
export type CCHAR = string;

export type TCHAR = string | number;
export type PTCHAR = Pointer;

export type SHORT = string | number;
export type PSHORT = Pointer;

export type VOID = void | Pointer | number;

export type LANGID = WORD;
export type LCID = DWORD;
export type LPCSTR = Pointer;
export type LPCWSTR = Pointer;
export type LPSTR = Pointer;
export type LPCTSTR = Pointer;
export type LPTSTR = Pointer;
export type LPWSTR = Pointer;

export type WCHAR = string | number;
export type PWCHAR = Pointer;
export type PCHAR = Pointer;
export type PSTR = Pointer;
export type PCSTR = Pointer;
export type PCWSTR = Pointer;
export type PLCID = PDWORD;
export type PCTSTR = Pointer;
export type PTSTR = Pointer;

export type PHANDLE = Pointer;
export type PHKEY = Pointer;
export type PDWORDLONG = Pointer;

export type BOOLEAN = BYTE;
export type PBOOLEAN = Pointer;
export type USN = LONGLONG;
export type PULONG = Pointer;

/**
 *
 */

export type ACCESS_MASK = DWORD;

export type PSECURITY_INFORMATION = Pointer;
export type PSECURITY_DESCRIPTOR = PVOID;
