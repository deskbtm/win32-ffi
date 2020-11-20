
import { Pointer } from "../common";
import { HWND, UINT, WPARAM, LPARAM, DWORD, POINT } from "./win_def";
import { ULONG_PTR } from "./base_tsd";

export type LPMSG = Pointer;
export type MSG = {
	hwnd: HWND,
	message: UINT,
	wParam: WPARAM,
	lParam: LPARAM,
	time: DWORD,
	pt: POINT
};

export type MOUSEHOOKSTRUCT = {
	pt: POINT,
	hwnd: HWND,
	wHitTestCode: UINT,
	dwExtraInfo: ULONG_PTR
};

export type MOUSEHOOKSTRUCTEX = {
	mouseData: DWORD
};

export type KBDLLHOOKSTRUCT = {
	vkCode: DWORD,
	scanCode: DWORD,
	flags: DWORD,
	time: DWORD,
	dwExtraInfo: ULONG_PTR
};

export type PBSMINFO = Pointer;

export type RECT = Pointer;

export type LPRECT = Pointer;

export type DEVMODEA = Pointer;

export type DEVMODEW = Pointer;

export type PCHANGEFILTERSTRUCT = Pointer;

export type LPPOINT = Pointer;

export type LPACCEL = Pointer;

export type DISPLAYCONFIG_DEVICE_INFO_HEADER = Pointer;

export type PICONINFO = Pointer;

export type POINTER_DEVICE_INFO = Pointer;

export type POINTER_DEVICE_CURSOR_INFO = Pointer;

export type POINTER_DEVICE_PROPERTY = Pointer;

export type POINTER_INFO = Pointer;

export type POINTER_PEN_INFO = Pointer;

export type INPUT_TRANSFORM = Pointer;

export type POINTER_TOUCH_INFO = Pointer;

export type LPTRACKMOUSEEVENT = Pointer;

export type PAINTSTRUCT = Pointer;

export type PRAWINPUT = Pointer;

export type LPDRAWTEXTPARAMS = Pointer;

export type PGESTURECONFIG = Pointer;

export type PGUITHREADINFO = Pointer;

export type PICONINFOEXA = Pointer;

export type PICONINFOEXW = Pointer;

export type TPMPARAMS = Pointer;

export type LPTPMPARAMS = Pointer;

export type POINTER_TYPE_INFO = Pointer;

export type PWINDOWINFO = Pointer;

export type TOUCH_HIT_TESTING_INPUT = Pointer;

export type TOUCH_HIT_TESTING_PROXIMITY_EVALUATION = Pointer;

export type PFLASHWINFO = Pointer;

export type PALTTABINFO = Pointer;

export type INPUT_MESSAGE_SOURCE = Pointer;

export type LPWNDCLASSA = Pointer;

export type LPWNDCLASSEXA = Pointer;

export type LPWNDCLASSEXW = Pointer;

export type LPWNDCLASSW = Pointer;

export type PCOMBOBOXINFO = Pointer;

export type PCURSORINFO = Pointer;

export type PLASTINPUTINFO = Pointer;

export type PMENUBARINFO = Pointer;

export type LPMENUINFO = Pointer;

export type LPMENUITEMINFOA = Pointer;
export type LPMENUITEMINFOW = Pointer;

export type LPMONITORINFO = Pointer;
export type LPMOUSEMOVEPOINT = Pointer;

export type PTITLEBARINFO = Pointer;

export type PTOUCHINPUT = Pointer;

export type PRAWINPUTDEVICELIST = Pointer;
export type PRAWINPUTDEVICE = Pointer;

export type PSCROLLBARINFO = Pointer;
export type LPSCROLLINFO = Pointer;
export type LPCSCROLLINFO = Pointer;

export type WINDOWPLACEMENT = Pointer;

export type BLENDFUNCTION = Pointer;

export type MSGBOXPARAMSA = Pointer;
export type MSGBOXPARAMSW = Pointer;

export type WNDCLASSA = Pointer;
export type WNDCLASSEXA = Pointer;
export type WNDCLASSEXW = Pointer;
export type WNDCLASSW = Pointer;

export type RAWINPUTDEVICE = Pointer;
export type PCRAWINPUTDEVICE = Pointer;

export type LPINPUT = Pointer;
export type LPCMENUINFO = Pointer;

export type LPCDLGTEMPLATE = Pointer;
export type LPCDLGTEMPLATEW = Pointer;
export type LPCDLGTEMPLATEA = Pointer;

export type PGESTUREINFO = Pointer;

export type LPCMENUITEMINFOA = Pointer;
export type LPCMENUITEMINFOW = Pointer;

export type LPPAINTSTRUCT = Pointer;

