// import { RefStruct } from '../common';
import { BigIntString, Pointer } from '../common';
import { UINT_PTR, LONG_PTR } from './base_tsd';
import { HANDLE, LONG } from './win_nt';

/**
 *			short == int16;
 *			int == int32;
 *			long == int64
 */

export type DWORD = number;
export type WORD = number;

export type DWORDLONG = number | BigIntString;

export type UCHAR = string;
export type PUCHAR = Pointer;

export type USHORT = number;

export type BOOL = number;
export type BYTE = string | number;

export type FLOAT = number;
export type PFLOAT = Pointer;

export type ATOM = WORD;
/**
 *	near: a 16 bit pointer that can address any byte in a 64k segment
 *	far: a 32 bit pointer that contains a segment and an offset.Note that because segments can
 *	@see {@link https://stackoverflow.com/questions/3575592/what-are-near-far-and-huge-pointers}
 */
export type PBOOL = Pointer;
export type LPBOOL = Pointer;
export type PBYTE = Pointer;
export type LPBYTE = Pointer;
export type LPINT = Pointer;
export type PWORD = Pointer;
export type LPWORD = Pointer;
export type PDWORD = Pointer;
export type LPDWORD = Pointer;
export type LPVOID = Pointer;
export type LPCVOID = Pointer;
export type LPCOLORREF = Pointer;
export type INT = number;
export type UINT = number;
export type PINT = Pointer;
export type PUINT = Pointer;
export type LPLONG = Pointer;
export type ULONG = number;
export type SPHANDLE = Pointer;
export type LPHANDLE = Pointer;
export type HFILE = number;
export type HLOCAL = HANDLE;
export type HACCEL = HANDLE;
export type HBITMAP = HANDLE;
export type HBRUSH = HANDLE;
export type HCOLORSPACE = HANDLE;
export type HCONV = HANDLE;
export type HCONVLIST = HANDLE;
export type HICON = HANDLE;
export type HCURSOR = HICON;
export type HDC = HANDLE;
export type HDDEDATA = HANDLE;
export type HDESK = HANDLE;
export type HDROP = HANDLE;
export type HDWP = HANDLE;
export type HENHMETAFILE = HANDLE;
export type HFONT = HANDLE;
export type HGDIOBJ = HANDLE;
export type HGLOBAL = HANDLE;
export type HHOOK = HANDLE;
export type HINSTANCE = HANDLE;
export type HKEY = HANDLE;
export type HKL = HANDLE;
export type HMENU = HANDLE;
export type HMETAFILE = HANDLE;
export type HMODULE = HINSTANCE;
// export type HMONITOR = ?;
export type HPALETTE = HANDLE;
export type HPEN = HANDLE;
export type HRESULT = LONG;
export type HRGN = HANDLE;
export type HRSRC = HANDLE;
export type HSZ = HANDLE;
export type HWINSTA = HANDLE;
export type HWND = HANDLE;
export type CALLBACK = Pointer;
export type WINAPI = Pointer;
export type APIENTRY = WINAPI;
export type FARPROC = Pointer;
export type NEARPROC = Pointer;
export type HOOKPROC = Pointer;
export type COLORREF = DWORD;
export type LPARAM = LONG_PTR;
export type WPARAM = UINT_PTR;
export type LRESULT = LONG_PTR;
export type LPCRECT = Pointer;

export type POINT = {
	x: LONG;
	y: LONG;
};
export type POINTS = Pointer;
export type SIZE = Pointer;
