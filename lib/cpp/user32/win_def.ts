
import { _LONG, _DECLARE_HANDLE, _WORD, _DWORD, _BYTE, _BOOL, _LPVOID, _LONG_PTR, _UINT_PTR } from "./win_common";
import * as ref from 'ref-napi';
import StructType = require('ref-struct-di');
import { types } from 'ref-napi';
const Struct = StructType(ref);
/**
 *			short == int16;
 *			int == int32;
 *			long == int64
 */

export const DWORD = _DWORD;
export const WORD = _WORD;

export const DWORDLONG = 'uint64';

export const UCHAR = 'uchar';
export const PUCHAR = 'uchar*';

export const USHORT = 'ushort';

export const BOOL = _BOOL;
export const BYTE = _BYTE;

export const FLOAT = 'float';
export const PFLOAT = 'float*';

//BUGBUG - might want to remove this from minwin
export const ATOM = WORD;
/**
 *			near: a 16 bit pointer that can address any byte in a 64k segment
 *			far: a 32 bit pointer that contains a segment and an offset.Note that because segments can
 *			@see https://stackoverflow.com/questions/3575592/what-are-near-far-and-huge-pointers
 */
export const PBOOL = 'int32*';
export const LPBOOL = 'int32*';
export const PBYTE = 'uchar*';
export const LPBYTE = 'uchar*';
export const LPINT = 'int*';

export const PWORD = 'int16*';
export const LPWORD = 'int16*';
export const PDWORD = _DWORD;
export const LPDWORD = 'uint32*';
export const LPVOID = _LPVOID;
export const LPCVOID = 'void*';
export const LPCOLORREF = 'int32*';

export const INT = 'int';
export const UINT = 'uint';
export const PINT = 'int*';
export const PUINT = 'uint*';

export const LPLONG = 'int32*';
export const ULONG = 'ulong';
export const PULONG = 'ulong*';

export const SPHANDLE = 'void**';
export const LPHANDLE = 'void**';
export const HFILE = 'int';

/**
 *			AUTHOR --- sewerganger <wanghan9423@outlook.com>
 *			LASTMODIFY --- 2020-07-01T14:28:50.384Z
 *			BLOCK --- _DECLARE_HANDLE
 *			DESCRIPTION --- 
 */

export const HLOCAL = _DECLARE_HANDLE;
export const HACCEL = _DECLARE_HANDLE;
export const HBITMAP = _DECLARE_HANDLE;
export const HBRUSH = _DECLARE_HANDLE;
export const HCOLORSPACE = _DECLARE_HANDLE;
export const HCONV = _DECLARE_HANDLE;
export const HCONVLIST = _DECLARE_HANDLE;
export const HICON = _DECLARE_HANDLE;
export const HCURSOR = HICON;
export const HDC = _DECLARE_HANDLE;
export const HDDEDATA = _DECLARE_HANDLE;
export const HDESK = _DECLARE_HANDLE;
export const HDROP = _DECLARE_HANDLE;
export const HDWP = _DECLARE_HANDLE;
export const HENHMETAFILE = _DECLARE_HANDLE;
export const HFONT = _DECLARE_HANDLE;
export const HGDIOBJ = _DECLARE_HANDLE;
export const HGLOBAL = _DECLARE_HANDLE;
export const HHOOK = _DECLARE_HANDLE;
export const HINSTANCE = _DECLARE_HANDLE;
export const HKEY = _DECLARE_HANDLE;
export const HKL = _DECLARE_HANDLE;
export const HMENU = _DECLARE_HANDLE;
export const HMETAFILE = _DECLARE_HANDLE;
export const HMODULE = HINSTANCE;
// export const HMONITOR = ?;
export const HPALETTE = _DECLARE_HANDLE;
export const HPEN = _DECLARE_HANDLE;
export const HRESULT = _LONG;
export const HRGN = _DECLARE_HANDLE;
export const HRSRC = _DECLARE_HANDLE;
export const HSZ = _DECLARE_HANDLE;
export const HWINSTA = _DECLARE_HANDLE;
export const HWND = _DECLARE_HANDLE;

export const CALLBACK = 'pointer';
export const WINAPI = 'pointer';
export const APIENTRY = WINAPI;

/**
 *			AUTHOR --- sewerganger <wanghan9423@outlook.com>
 *			LASTMODIFY --- 2020-07-01T14:28:22.070Z
 *			BLOCK --- PROCEDURE;
 *			DESCRIPTION --- 
 */

export const FARPROC = 'pointer';
export const NEARPROC = 'pointer';
export const HOOKPROC = 'pointer';

export const COLORREF = DWORD;

export const LPARAM = _LONG_PTR;
export const WPARAM = _UINT_PTR;
export const LRESULT = _LONG_PTR;

/**
 *			
 */

export const tagSIZE = {
	cx: _LONG,
	cy: _LONG
};

export const SIZE = Struct(tagSIZE);

export const tagPOINT = {
	x: _LONG,
	y: _LONG
};

export const POINT = Struct(tagPOINT);