import { _LONG, _WORD, _DWORD, _PDWORD, _BYTE } from './win_common';

import { arch, iconv } from "../utils";

export const TBYTE = ['ushort', 'uchar'][arch()];
export const PTBYTE = ['ushort*', 'uchar*'][arch()];

export const PVOID = 'void*';
export const HANDLE = 'void *';

export const LONG = _LONG;
export const LONGLONG = ['int64', 'double'][arch()];
export const PLONG = 'long*';
export const PLONGLONG = ['int64*', 'double*'][arch()];
export const ULONGLONG = ['uint64', 'double'][arch()];

export const CHAR = 'char';
export const CCHAR = 'char';

export const TCHAR = ['ushort', 'char'][arch()];
export const PTCHAR = ['ushort*', 'char*'][arch()];

export const SHORT = 'short';
export const PSHORT = 'short*';

export const VOID = 'void';

export const LANGID = _WORD;
export const LCID = _DWORD;
export const LPCSTR = 'char*';
export const LPCWSTR = 'ushort*';
export const LPSTR = 'char*';
export const LPCTSTR = [LPCWSTR, LPCSTR][iconv()];
export const LPTSTR = [LPCWSTR, LPSTR][iconv()];
export const LPWSTR = 'ushort*';

export const WCHAR = 'ushort';
export const PWCHAR = 'ushort*';
export const PCHAR = 'char*';
export const PSTR = 'char*';
export const PCSTR = 'char*';
export const PCWSTR = 'ushort*';
export const PLCID = _PDWORD;
export const PCTSTR = [LPCWSTR, LPCSTR][iconv()];
export const PTSTR = [LPWSTR, LPSTR][iconv()];

export const PHANDLE = 'void**';
export const PHKEY = 'void**';

export const PDWORDLONG = 'uint64*';

export const BOOLEAN = _BYTE;
export const PBOOLEAN = 'uchar*';

export const USN = LONGLONG;

export const ACCESS_MASK = _DWORD;

export const PSECURITY_DESCRIPTOR = _DWORD;

export const PSECURITY_INFORMATION = 'uint*';
// export const USN = LONGLONG;

