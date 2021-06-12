import { HWND, UINT, WPARAM, LPARAM, POINT } from './win_def';
/**
 *			AUTHOR --- sewerganger <wanghan9423@outlook.com>
 *			LICENSE --- MIT
 *			LASTMODIFY --- 2020-07-01T15:35:49.199Z
 *			DESCRIPTION --- TODO: description
 *			REPOSITORY --- git+https://github.com/sewerganger/shadow.git
 */

import { DWORD } from "./win_def";
import * as ref from 'ref-napi';
import StructDi = require('ref-struct-di');
import { LONG } from './win_nt';
import { ULONG_PTR } from './base_tsd';

const Struct = StructDi(ref);

/**
 *			Contains status information for the application - switching(ALT + TAB) window.
 *			https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-alttabinfo 
 */

// export const Tag_ALTTABINFO = {
// 	cbSize: DWORD,
// 	cItems: INT,
// 	cColumns: INT,
// 	cRows: INT,
// 	iColFocus: INT,
// 	iRowFocus: INT,
// 	cxItem: INT,
// 	cyItem: INT,
// 	ptStart: POINT
// };

export const tagRECT = {
	left: LONG,
	top: LONG,
	right: LONG,
	bottom: LONG
};
export const RECT = 'pointer';
export const StructRECT = Struct(tagRECT);

export const tagMSG = {
	hwnd: HWND,
	message: UINT,
	wParam: WPARAM,
	lParam: LPARAM,
	time: DWORD,
	pt: POINT
};

export const StructMSG = Struct(tagMSG);
export const MSG = 'pointer';

export const tagMOUSEHOOKSTRUCT = {
	pt: POINT,
	hwnd: HWND,
	wHitTestCode: UINT,
	dwExtraInfo: ULONG_PTR
};
export const MOUSEHOOKSTRUCT = 'pointer';
export const StructMOUSEHOOKSTRUCT = Struct(tagMOUSEHOOKSTRUCT);

export const tagMOUSEHOOKSTRUCTEX = {
	mouseData: DWORD,
	...tagMOUSEHOOKSTRUCT
};

export const MOUSEHOOKSTRUCTEX = 'pointer';
export const StructMOUSEHOOKSTRUCTEX = Struct(tagMOUSEHOOKSTRUCTEX);

export const tagKBDLLHOOKSTRUCT = {
	vkCode: DWORD,
	scanCode: DWORD,
	flags: DWORD,
	time: DWORD,
	dwExtraInfo: ULONG_PTR
};

export const KBDLLHOOKSTRUCT = 'pointer';
export const StructKBDLLHOOKSTRUCT = Struct(tagKBDLLHOOKSTRUCT);

export const LPRECT = 'pointer';

export const LPCDLGTEMPLATE = 'pointer';

export const LPCDLGTEMPLATEW = 'pointer';

export const LPCDLGTEMPLATEA = 'pointer';

export const PGESTUREINFO = 'pointer';

export const LPCMENUITEMINFOA = 'pointer';

export const LPCMENUITEMINFOW = 'pointer';

export const LPPAINTSTRUCT = 'pointer';

export const PBSMINFO = 'pointer';

export const LPCRECT = 'pointer';

export const LPMSG = 'pointer';

export const DEVMODEA = 'pointer';

export const DEVMODEW = 'pointer';

export const PCHANGEFILTERSTRUCT = 'pointer';

export const LPPOINT = 'pointer';

export const LPACCEL = 'pointer';

export const PICONINFO = 'pointer';

export const PRAWINPUT = 'pointer';

export const LPTPMPARAMS = 'pointer';

export const LPTRACKMOUSEEVENT = 'pointer';

export const WINDOWPLACEMENT = 'pointer';

export const LPCSCROLLINFO = 'pointer';

export const LPCMENUINFO = 'pointer';

export const PGESTURECONFIG = 'pointer';

export const DISPLAYCONFIG_PATH_INFO = 'pointer';

export const LPINPUT = 'pointer';

export const PCRAWINPUTDEVICE = 'pointer';

export const LPCGUID = 'pointer';

export const LPDRAWTEXTPARAMS = 'pointer';

export const PAINTSTRUCT = 'pointer';

export const TOUCH_HIT_TESTING_INPUT = 'pointer';

export const TOUCH_HIT_TESTING_PROXIMITY_EVALUATION = 'pointer';

export const PFLASHWINFO = 'pointer';

export const PALTTABINFO = 'pointer';

export const WNDCLASSA = 'pointer';

export const WNDCLASSEXA = 'pointer';

export const WNDCLASSEXW = 'pointer';

export const WNDCLASSW = 'pointer';

export const MSGBOXPARAMSA = 'pointer';

export const MSGBOXPARAMSW = 'pointer';

export const PWINDOWINFO = 'pointer';

export const POINTER_TOUCH_INFO = 'pointer';

export const POINTER_TYPE_INFO = 'pointer';

export const PTITLEBARINFO = 'pointer';

export const PTOUCHINPUT = 'pointer';

export const LPSCROLLINFO = 'pointer';

export const PSCROLLBARINFO = 'pointer';

export const PRAWINPUTDEVICE = 'pointer';

export const POINTER_DEVICE_PROPERTY = 'pointer';

export const PRAWINPUTDEVICELIST = 'pointer';

export const POINTER_PEN_INFO = 'pointer';

export const INPUT_TRANSFORM = 'pointer';

export const POINTER_INFO = 'pointer';

export const POINTER_DEVICE_INFO = 'pointer';

export const POINTER_DEVICE_CURSOR_INFO = 'pointer';

export const LPMOUSEMOVEPOINT = 'pointer';

export const LPMONITORINFO = 'pointer';

export const LPMENUITEMINFOA = 'pointer';

export const LPMENUITEMINFOW = 'pointer';

export const LPMENUINFO = 'pointer';

export const INPUT_MESSAGE_SOURCE = 'pointer';

export const LPWNDCLASSA = 'pointer';

export const LPWNDCLASSEXA = 'pointer';

export const LPWNDCLASSEXW = 'pointer';

export const LPWNDCLASSW = 'pointer';

export const PCOMBOBOXINFO = 'pointer';

export const PCURSORINFO = 'pointer';

export const PGUITHREADINFO = 'pointer';

export const PICONINFOEXA = 'pointer';

export const PICONINFOEXW = 'pointer';

export const PLASTINPUTINFO = 'pointer';

export const PMENUBARINFO = 'pointer';

