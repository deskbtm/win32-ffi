import {
	UINT,
	HWND,
	HKL,
	BOOL,
	DWORD,
	HMENU,
	UINT_PTR,
	LPCSTR,
	LPCWSTR,
	INT,
	HDWP,
	HDC,
	LPDWORD,
	WPARAM,
	LPARAM,
	LONG,
	POINT,
	HHOOK,
	LPVOID,
	LPSTR,
	LPWSTR,
	WORD,
	HDESK,
	HWINSTA,
	HACCEL,
	HICON,
	HANDLE,
	HBITMAP,
	HINSTANCE,
	VOID,
	ULONG,
	PVOID,
	BYTE,
	PBYTE,
	HCURSOR,
	HBRUSH,
	LPCTSTR,
	INT_PTR,
	UINT32,
	LPTSTR,
	HRGN,
	PUINT,
	COLORREF,
	LPINT,
	CHAR,
	WCHAR,
	ULONG_PTR,
	LRESULT,
	PDWORD_PTR,
	LONG_PTR,
	LPBYTE,
	HOOKPROC,
	HMODULE,
	LPWORD,
	ATOM,
	SHORT,
	DISPLAYCONFIG_PATH_INFO,
	ACCESS_MASK,
	SIZE,
	PDISPLAY_DEVICEA,
	PDISPLAY_DEVICEW,
	LPCRECT,
	PSECURITY_INFORMATION,
	PSECURITY_DESCRIPTOR,
	PULONG,
	POINTS,
	DISPLAYCONFIG_MODE_INFO,
} from '.';
import {
	LPMSG,
	PBSMINFO,
	RECT,
	DEVMODEW,
	DEVMODEA,
	PCHANGEFILTERSTRUCT,
	LPPOINT,
	LPACCEL,
	LPRECT,
	DISPLAYCONFIG_DEVICE_INFO_HEADER,
	POINTER_DEVICE_INFO,
	POINTER_DEVICE_CURSOR_INFO,
	POINTER_DEVICE_PROPERTY,
	POINTER_PEN_INFO,
	POINTER_INFO,
	POINTER_TOUCH_INFO,
	PICONINFO,
	LPTRACKMOUSEEVENT,
	MSG,
	PAINTSTRUCT,
	PRAWINPUT,
	LPDRAWTEXTPARAMS,
	PGESTURECONFIG,
	PGUITHREADINFO,
	PICONINFOEXA,
	PICONINFOEXW,
	LPTPMPARAMS,
	PWINDOWINFO,
	TOUCH_HIT_TESTING_INPUT,
	TOUCH_HIT_TESTING_PROXIMITY_EVALUATION,
	PFLASHWINFO,
	PALTTABINFO,
	INPUT_MESSAGE_SOURCE,
	LPWNDCLASSA,
	LPWNDCLASSEXA,
	LPWNDCLASSEXW,
	LPWNDCLASSW,
	PCOMBOBOXINFO,
	PCURSORINFO,
	PLASTINPUTINFO,
	PMENUBARINFO,
	LPMENUINFO,
	LPMENUITEMINFOW,
	LPMENUITEMINFOA,
	LPMONITORINFO,
	LPMOUSEMOVEPOINT,
	PTITLEBARINFO,
	PTOUCHINPUT,
	PRAWINPUTDEVICELIST,
	PRAWINPUTDEVICE,
	PSCROLLBARINFO,
	LPSCROLLINFO,
	INPUT_TRANSFORM,
	WINDOWPLACEMENT,
	POINTER_TYPE_INFO,
	BLENDFUNCTION,
	MSGBOXPARAMSA,
	MSGBOXPARAMSW,
	WNDCLASSA,
	WNDCLASSEXA,
	WNDCLASSEXW,
	WNDCLASSW,
	PCRAWINPUTDEVICE,
	LPCSCROLLINFO,
	LPINPUT,
	LPCMENUINFO,
	LPCDLGTEMPLATE,
	LPCDLGTEMPLATEA,
	LPPAINTSTRUCT,
	LPCMENUITEMINFOW,
	LPCMENUITEMINFOA,
	PGESTUREINFO,
	LPCDLGTEMPLATEW,
} from './win_user_struct';
import {
	WNDPROC,
	DLGPROC,
	HGESTUREINFO,
	HTOUCHINPUT,
	POINTER_INPUT_TYPE,
	HWINEVENTHOOK,
	WNDENUMPROC,
	DESKTOPENUMPROCA,
	DESKTOPENUMPROCW,
	HSYNTHETICPOINTERDEVICE,
	POINTER_FEEDBACK_MODE,
	DRAWSTATEPROC,
	HDEVNOTIFY,
	DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS,
	DIALOG_DPI_CHANGE_BEHAVIORS,
	ORIENTATION_PREFERENCE,
	TIMERPROC,
	DPI_AWARENESS_CONTEXT,
	HPOWERNOTIFY,
	WINEVENTPROC,
	GRAYSTRINGPROC,
	PROPENUMPROCEXA,
	PROPENUMPROCA,
	PROPENUMPROCEXW,
	PROPENUMPROCW,
	WINSTAENUMPROCA,
	WINSTAENUMPROCW,
	MONITORENUMPROC,
	PAR_STATE,
	DPI_AWARENESS,
	HMONITOR,
	DPI_HOSTING_BEHAVIOR,
	FEEDBACK_TYPE,
	HRAWINPUT,
	MENUTEMPLATEA,
	MENUTEMPLATEW,
	DISPLAYCONFIG_TOPOLOGY_ID,
	SENDASYNCPROC,
} from './win_user_type';
import { LPCGUID } from './guid_def';
import { TsWin32FnsBasic, Pointer } from '../common';
import { LPSECURITY_ATTRIBUTES } from './win_base';

export interface WinUserFns extends TsWin32FnsBasic {
	ActivateKeyboardLayout: (hkl: HKL, Flags: UINT) => HKL;
	AddClipboardFormatListener: (hwnd: HWND) => BOOL;
	AdjustWindowRect: (lpRect: LPRECT, dwStyle: DWORD, bMenu: BOOL) => BOOL;
	AdjustWindowRectEx: (lpRect: LPRECT, dwStyle: DWORD, bMenu: BOOL, dwExStyle: DWORD) => BOOL;
	AdjustWindowRectExForDpi: (lpRect: LPRECT, dwStyle: DWORD, bMenu: BOOL, dwExStyle: DWORD, dpi: UINT) => BOOL;
	AllowSetForegroundWindow: (dwProcessId: DWORD) => BOOL;
	AnimateWindow: (hWnd: HWND, dwTime: DWORD, dwFlags: DWORD) => BOOL;
	AnyPopup: () => BOOL;
	AppendMenuA: (hMenu: HMENU, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCSTR) => BOOL;
	AppendMenuW: (hMenu: HMENU, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCWSTR) => BOOL;
	AreDpiAwarenessContextsEqual: (dpiContextA: DPI_AWARENESS_CONTEXT, dpiContextB: DPI_AWARENESS_CONTEXT) => BOOL;
	ArrangeIconicWindows: (hWnd: HWND) => UINT;
	AttachThreadInput: (idAttach: DWORD, idAttachTo: DWORD, fAttach: BOOL) => BOOL;
	BeginDeferWindowPos: (nNumWindows: INT) => HDWP;
	BeginPaint: (hWnd: HWND, lpPaint: LPPAINTSTRUCT) => HDC;
	BlockInput: (fBlockIt: BOOL) => BOOL;
	BringWindowToTop: (hWnd: HWND) => BOOL;
	BroadcastSystemMessage: (flags: DWORD, lpInfo: LPDWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM) => LONG;
	BroadcastSystemMessageExA: (
		flags: DWORD,
		lpInfo: LPDWORD,
		Msg: UINT,
		wParam: WPARAM,
		lParam: LPARAM,
		pbsmInfo: PBSMINFO
	) => LONG;
	BroadcastSystemMessageExW: (
		flags: DWORD,
		lpInfo: LPDWORD,
		Msg: UINT,
		wParam: WPARAM,
		lParam: LPARAM,
		pbsmInfo: PBSMINFO
	) => LONG;
	BroadcastSystemMessageW: (flags: DWORD, lpInfo: LPDWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM) => LONG;
	CalculatePopupWindowPosition: (
		anchorPoint: POINT,
		windowSize: SIZE,
		flags: UINT,
		excludeRect: RECT,
		popupWindowPosition: RECT
	) => BOOL;
	CallMsgFilterA: (lpMsg: LPMSG, nCode: INT) => BOOL;
	CallMsgFilterW: (lpMsg: LPMSG, nCode: INT) => BOOL;
	CallNextHookEx: (hhk: HHOOK, nCode: INT, wParam: any, lParam: any) => LRESULT;
	CallWindowProcA: (lpPrevWndFunc: WNDPROC, hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM) => LRESULT;
	CallWindowProcW: (lpPrevWndFunc: WNDPROC, hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM) => LRESULT;
	CascadeWindows: (hwndParent: HWND, wHow: UINT, lpRect: RECT, cKids: UINT, lpKids: HWND) => WORD;
	ChangeClipboardChain: (hWndRemove: HWND, hWndNewNext: HWND) => BOOL;
	ChangeDisplaySettingsA: (lpDevMode: DEVMODEA, dwFlags: DWORD) => LONG;
	ChangeDisplaySettingsExA: (
		lpszDeviceName: LPCSTR,
		lpDevMode: DEVMODEA,
		hwnd: HWND,
		dwflags: DWORD,
		lParam: LPVOID
	) => LONG;
	ChangeDisplaySettingsExW: (
		lpszDeviceName: LPCWSTR,
		lpDevMode: DEVMODEW,
		hwnd: HWND,
		dwflags: DWORD,
		lParam: LPVOID
	) => LONG;
	ChangeDisplaySettingsW: (lpDevMode: DEVMODEW, dwFlags: DWORD) => LONG;
	ChangeWindowMessageFilter: (message: UINT, dwFlag: DWORD) => BOOL;
	ChangeWindowMessageFilterEx: (
		hwnd: HWND,
		message: UINT,
		action: DWORD,
		pChangeFilterStruct: PCHANGEFILTERSTRUCT
	) => BOOL;
	CharLowerA: (lpsz: LPSTR) => LPSTR;
	CharLowerBuffA: (lpsz: LPSTR, cchLength: DWORD) => DWORD;
	CharLowerBuffW: (lpsz: LPWSTR, cchLength: DWORD) => DWORD;
	CharLowerW: (lpsz: LPWSTR) => LPWSTR;
	CharNextA: (lpsz: LPCSTR) => LPSTR;
	CharNextExA: (CodePage: WORD, lpCurrentChar: LPCSTR, dwFlags: DWORD) => LPSTR;
	CharNextW: (lpsz: LPCWSTR) => LPWSTR;
	CharPrevA: (lpszStart: LPCSTR, lpszCurrent: LPCSTR) => LPSTR;
	CharPrevExA: (CodePage: WORD, lpStart: LPCSTR, lpCurrentChar: LPCSTR, dwFlags: DWORD) => LPSTR;
	CharPrevW: (lpszStart: LPCWSTR, lpszCurrent: LPCWSTR) => LPWSTR;
	CharToOemA: (pSrc: LPCSTR, pDst: LPSTR) => BOOL;
	CharToOemBuffA: (lpszSrc: LPCSTR, lpszDst: LPSTR, cchDstLength: DWORD) => BOOL;
	CharToOemBuffW: (lpszSrc: LPCWSTR, lpszDst: LPSTR, cchDstLength: DWORD) => BOOL;
	CharToOemW: (pSrc: LPCWSTR, pDst: LPSTR) => BOOL;
	CharUpperA: (lpsz: LPSTR) => LPSTR;
	CharUpperBuffA: (lpsz: LPSTR, cchLength: DWORD) => DWORD;
	CharUpperBuffW: (lpsz: LPWSTR, cchLength: DWORD) => DWORD;
	CharUpperW: (lpsz: LPWSTR) => LPWSTR;
	CheckDlgButton: (hDlg: HWND, nIDButton: INT, uCheck: UINT) => BOOL;
	CheckMenuItem: (hMenu: HMENU, uIDCheckItem: UINT, uCheck: UINT) => DWORD;
	CheckMenuRadioItem: (hmenu: HMENU, first: UINT, last: UINT, check: UINT, flags: UINT) => BOOL;
	CheckRadioButton: (hDlg: HWND, nIDFirstButton: INT, nIDLastButton: INT, nIDCheckButton: INT) => BOOL;
	ChildWindowFromPoint: (hWndParent: HWND, Point: POINT) => HWND;
	ChildWindowFromPointEx: (hwnd: HWND, pt: POINT, flags: UINT) => HWND;
	ClientToScreen: (hWnd: HWND, lpPoint: LPPOINT) => BOOL;
	ClipCursor: (lpRect: RECT) => BOOL;
	CloseClipboard: () => BOOL;
	CloseDesktop: (hDesktop: HDESK) => BOOL;
	CloseGestureInfoHandle: (hGestureInfo: HGESTUREINFO) => BOOL;
	CloseTouchInputHandle: (hTouchInput: HTOUCHINPUT) => BOOL;
	CloseWindow: (hWnd: HWND) => BOOL;
	CloseWindowStation: (hWinSta: HWINSTA) => BOOL;
	CopyAcceleratorTableA: (hAccelSrc: HACCEL, lpAccelDst: LPACCEL, cAccelEntries: INT) => INT;
	CopyAcceleratorTableW: (hAccelSrc: HACCEL, lpAccelDst: LPACCEL, cAccelEntries: INT) => INT;
	CopyCursor: (pcur: HCURSOR) => VOID;
	CopyIcon: (hIcon: HICON) => HICON;
	CopyImage: (h: HANDLE, type: UINT, cx: INT, cy: INT, flags: UINT) => HANDLE;
	CopyRect: (lprcDst: LPRECT, lprcSrc: RECT) => BOOL;
	CountClipboardFormats: () => INT;
	CreateAcceleratorTableA: (paccel: LPACCEL, cAccel: INT) => HACCEL;
	CreateAcceleratorTableW: (paccel: LPACCEL, cAccel: INT) => HACCEL;
	CreateCaret: (hWnd: HWND, hBitmap: HBITMAP, nWidth: INT, nHeight: INT) => BOOL;
	CreateCursor: (
		hInst: HINSTANCE,
		xHotSpot: INT,
		yHotSpot: INT,
		nWidth: INT,
		nHeight: INT,
		pvANDPlane: VOID,
		pvXORPlane: VOID
	) => HCURSOR;
	CreateDesktopA: (
		lpszDesktop: LPCSTR,
		lpszDevice: LPCSTR,
		pDevmode: DEVMODEA,
		dwFlags: DWORD,
		dwDesiredAccess: ACCESS_MASK,
		lpsa: LPSECURITY_ATTRIBUTES
	) => HDESK;
	CreateDesktopExA: (
		lpszDesktop: LPCSTR,
		lpszDevice: LPCSTR,
		pDevmode: DEVMODEA,
		dwFlags: DWORD,
		dwDesiredAccess: ACCESS_MASK,
		lpsa: LPSECURITY_ATTRIBUTES,
		ulHeapSize: ULONG,
		pvoid: PVOID
	) => HDESK;
	CreateDesktopExW: (
		lpszDesktop: LPCWSTR,
		lpszDevice: LPCWSTR,
		pDevmode: DEVMODEW,
		dwFlags: DWORD,
		dwDesiredAccess: ACCESS_MASK,
		lpsa: LPSECURITY_ATTRIBUTES,
		ulHeapSize: ULONG,
		pvoid: PVOID
	) => HDESK;
	CreateDesktopW: (
		lpszDesktop: LPCWSTR,
		lpszDevice: LPCWSTR,
		pDevmode: DEVMODEW,
		dwFlags: DWORD,
		dwDesiredAccess: ACCESS_MASK,
		lpsa: LPSECURITY_ATTRIBUTES
	) => HDESK;
	CreateDialogA: (hInstance: HINSTANCE, lpName: LPCTSTR, hWndParent: HWND, lpDialogFunc: DLGPROC) => VOID;
	CreateDialogIndirectA: (
		hInstance: HINSTANCE,
		lpTemplate: LPCDLGTEMPLATE,
		hWndParent: HWND,
		lpDialogFunc: DLGPROC
	) => VOID;
	CreateDialogIndirectParamA: (
		hInstance: HINSTANCE,
		lpTemplate: LPCDLGTEMPLATEA,
		hWndParent: HWND,
		lpDialogFunc: DLGPROC,
		dwInitParam: LPARAM
	) => HWND;
	CreateDialogIndirectParamW: (
		hInstance: HINSTANCE,
		lpTemplate: LPCDLGTEMPLATEW,
		hWndParent: HWND,
		lpDialogFunc: DLGPROC,
		dwInitParam: LPARAM
	) => HWND;
	CreateDialogIndirectW: (
		hInstance: HINSTANCE,
		lpTemplate: LPCDLGTEMPLATEW,
		hWndParent: HWND,
		lpDialogFunc: DLGPROC
	) => VOID;
	CreateDialogParamA: (
		hInstance: HINSTANCE,
		lpTemplateName: LPCSTR,
		hWndParent: HWND,
		lpDialogFunc: DLGPROC,
		dwInitParam: LPARAM
	) => HWND;
	CreateDialogParamW: (
		hInstance: HINSTANCE,
		lpTemplateName: LPCWSTR,
		hWndParent: HWND,
		lpDialogFunc: DLGPROC,
		dwInitParam: LPARAM
	) => HWND;
	CreateDialogW: (hInstance: HINSTANCE, lpName: LPCTSTR, hWndParent: HWND, lpDialogFunc: DLGPROC) => VOID;
	CreateIcon: (
		hInstance: HINSTANCE,
		nWidth: INT,
		nHeight: INT,
		cPlanes: BYTE,
		cBitsPixel: BYTE,
		lpbANDbits: BYTE,
		lpbXORbits: BYTE
	) => HICON;
	CreateIconFromResource: (presbits: PBYTE, dwResSize: DWORD, fIcon: BOOL, dwVer: DWORD) => HICON;
	CreateIconFromResourceEx: (
		presbits: PBYTE,
		dwResSize: DWORD,
		fIcon: BOOL,
		dwVer: DWORD,
		cxDesired: INT,
		cyDesired: INT,
		Flags: UINT
	) => HICON;
	CreateIconIndirect: (piconinfo: PICONINFO) => HICON;
	CreateMDIWindowA: (
		lpClassName: LPCSTR,
		lpWindowName: LPCSTR,
		dwStyle: DWORD,
		X: INT,
		Y: INT,
		nWidth: INT,
		nHeight: INT,
		hWndParent: HWND,
		hInstance: HINSTANCE,
		lParam: LPARAM
	) => HWND;
	CreateMDIWindowW: (
		lpClassName: LPCWSTR,
		lpWindowName: LPCWSTR,
		dwStyle: DWORD,
		X: INT,
		Y: INT,
		nWidth: INT,
		nHeight: INT,
		hWndParent: HWND,
		hInstance: HINSTANCE,
		lParam: LPARAM
	) => HWND;
	CreateMenu: () => HMENU;
	CreatePopupMenu: () => HMENU;
	CreateSyntheticPointerDevice: (
		pointerType: POINTER_INPUT_TYPE,
		maxCount: ULONG,
		mode: POINTER_FEEDBACK_MODE
	) => HSYNTHETICPOINTERDEVICE;
	CreateWindowA: (
		lpClassName: LPCTSTR,
		lpWindowName: LPCTSTR,
		dwStyle: DWORD,
		x: INT,
		y: INT,
		nWidth: INT,
		nHeight: INT,
		hWndParent: HWND,
		hMenu: HMENU,
		hInstance: HINSTANCE,
		lpParam: LPVOID
	) => VOID;
	CreateWindowExA: (
		dwExStyle: DWORD,
		lpClassName: LPCSTR,
		lpWindowName: LPCSTR,
		dwStyle: DWORD,
		X: INT,
		Y: INT,
		nWidth: INT,
		nHeight: INT,
		hWndParent: HWND,
		hMenu: HMENU,
		hInstance: HINSTANCE,
		lpParam: LPVOID
	) => HWND;
	CreateWindowExW: (
		dwExStyle: DWORD,
		lpClassName: LPCWSTR,
		lpWindowName: LPCWSTR,
		dwStyle: DWORD,
		X: INT,
		Y: INT,
		nWidth: INT,
		nHeight: INT,
		hWndParent: HWND,
		hMenu: HMENU,
		hInstance: HINSTANCE,
		lpParam: LPVOID
	) => HWND;
	CreateWindowStationA: (
		lpwinsta: LPCSTR,
		dwFlags: DWORD,
		dwDesiredAccess: ACCESS_MASK,
		lpsa: LPSECURITY_ATTRIBUTES
	) => HWINSTA;
	CreateWindowStationW: (
		lpwinsta: LPCWSTR,
		dwFlags: DWORD,
		dwDesiredAccess: ACCESS_MASK,
		lpsa: LPSECURITY_ATTRIBUTES
	) => HWINSTA;
	CreateWindowW: (
		lpClassName: LPCTSTR,
		lpWindowName: LPCTSTR,
		dwStyle: DWORD,
		x: INT,
		y: INT,
		nWidth: INT,
		nHeight: INT,
		hWndParent: HWND,
		hMenu: HMENU,
		hInstance: HINSTANCE,
		lpParam: LPVOID
	) => VOID;
	DefDlgProcW: (hDlg: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM) => LRESULT | LRESULT;
	DeferWindowPos: (
		hWinPosInfo: HDWP,
		hWnd: HWND,
		hWndInsertAfter: HWND,
		x: INT,
		y: INT,
		cx: INT,
		cy: INT,
		uFlags: UINT
	) => HDWP;
	DefFrameProcA: (hWnd: HWND, hWndMDIClient: HWND, uMsg: UINT, wParam: WPARAM, lParam: LPARAM) => LRESULT;
	DefFrameProcW: (hWnd: HWND, hWndMDIClient: HWND, uMsg: UINT, wParam: WPARAM, lParam: LPARAM) => LRESULT;
	DefMDIChildProcA: (hWnd: HWND, uMsg: UINT, wParam: WPARAM, lParam: LPARAM) => LRESULT | LRESULT;
	DefMDIChildProcW: (hWnd: HWND, uMsg: UINT, wParam: WPARAM, lParam: LPARAM) => LRESULT | LRESULT;
	DefRawInputProc: (paRawInput: PRAWINPUT, nInput: INT, cbSizeHeader: UINT) => LRESULT;
	DefWindowProcA: (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM) => LRESULT | LRESULT;
	DefWindowProcW: (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM) => LRESULT | LRESULT;
	DeleteMenu: (hMenu: HMENU, uPosition: UINT, uFlags: UINT) => BOOL;
	DeregisterShellHookWindow: (hwnd: HWND) => BOOL;
	DestroyAcceleratorTable: (hAccel: HACCEL) => BOOL;
	DestroyCaret: () => BOOL;
	DestroyCursor: (hCursor: HCURSOR) => BOOL;
	DestroyIcon: (hIcon: HICON) => BOOL;
	DestroyMenu: (hMenu: HMENU) => BOOL;
	DestroySyntheticPointerDevice: (device: HSYNTHETICPOINTERDEVICE) => VOID;
	DestroyWindow: (hWnd: HWND) => BOOL;
	DialogBoxA: (hInstance: HINSTANCE, lpTemplate: LPCDLGTEMPLATE, hWndParent: HWND, lpDialogFunc: DLGPROC) => VOID;
	DialogBoxIndirectA: (
		hInstance: HINSTANCE,
		lpTemplate: LPCDLGTEMPLATE,
		hWndParent: HWND,
		lpDialogFunc: DLGPROC
	) => VOID;
	DialogBoxIndirectParamA: (
		hInstance: HINSTANCE,
		hDialogTemplate: LPCDLGTEMPLATEA,
		hWndParent: HWND,
		lpDialogFunc: DLGPROC,
		dwInitParam: LPARAM
	) => INT_PTR;
	DialogBoxIndirectParamW: (
		hInstance: HINSTANCE,
		hDialogTemplate: LPCDLGTEMPLATEW,
		hWndParent: HWND,
		lpDialogFunc: DLGPROC,
		dwInitParam: LPARAM
	) => INT_PTR;
	DialogBoxIndirectW: (
		hInstance: HINSTANCE,
		lpTemplate: LPCDLGTEMPLATE,
		hWndParent: HWND,
		lpDialogFunc: DLGPROC
	) => VOID;
	DialogBoxParamA: (
		hInstance: HINSTANCE,
		lpTemplateName: LPCSTR,
		hWndParent: HWND,
		lpDialogFunc: DLGPROC,
		dwInitParam: LPARAM
	) => INT_PTR;
	DialogBoxParamW: (
		hInstance: HINSTANCE,
		lpTemplateName: LPCWSTR,
		hWndParent: HWND,
		lpDialogFunc: DLGPROC,
		dwInitParam: LPARAM
	) => INT_PTR;
	DialogBoxW: (hInstance: HINSTANCE, lpTemplate: LPCDLGTEMPLATE, hWndParent: HWND, lpDialogFunc: DLGPROC) => VOID;
	DisableProcessWindowsGhosting: () => VOID;
	DispatchMessage: (lpMsg: MSG) => LRESULT;
	DispatchMessageA: (lpMsg: MSG) => LRESULT;
	DispatchMessageW: (lpMsg: MSG) => LRESULT;
	DisplayConfigGetDeviceInfo: (requestPacket: DISPLAYCONFIG_DEVICE_INFO_HEADER) => LONG;
	DisplayConfigSetDeviceInfo: (setPacket: DISPLAYCONFIG_DEVICE_INFO_HEADER) => LONG;
	DlgDirListA: (hDlg: HWND, lpPathSpec: LPSTR, nIDListBox: INT, nIDStaticPath: INT, uFileType: UINT) => INT;
	DlgDirListComboBoxA: (hDlg: HWND, lpPathSpec: LPSTR, nIDComboBox: INT, nIDStaticPath: INT, uFiletype: UINT) => INT;
	DlgDirListComboBoxW: (hDlg: HWND, lpPathSpec: LPWSTR, nIDComboBox: INT, nIDStaticPath: INT, uFiletype: UINT) => INT;
	DlgDirListW: (hDlg: HWND, lpPathSpec: LPWSTR, nIDListBox: INT, nIDStaticPath: INT, uFileType: UINT) => INT;
	DlgDirSelectComboBoxExA: (hwndDlg: HWND, lpString: LPSTR, cchOut: INT, idComboBox: INT) => BOOL;
	DlgDirSelectComboBoxExW: (hwndDlg: HWND, lpString: LPWSTR, cchOut: INT, idComboBox: INT) => BOOL;
	DlgDirSelectExA: (hwndDlg: HWND, lpString: LPSTR, chCount: INT, idListBox: INT) => BOOL;
	DlgDirSelectExW: (hwndDlg: HWND, lpString: LPWSTR, chCount: INT, idListBox: INT) => BOOL;
	DragDetect: (hwnd: HWND, pt: POINT) => BOOL;
	DrawAnimatedRects: (hwnd: HWND, idAni: INT, lprcFrom: RECT, lprcTo: RECT) => BOOL;
	DrawCaption: (hwnd: HWND, hdc: HDC, lprect: RECT, flags: UINT) => BOOL;
	DrawEdge: (hdc: HDC, qrc: LPRECT, edge: UINT, grfFlags: UINT) => BOOL;
	DrawFocusRect: (hDC: HDC, lprc: RECT) => BOOL;
	// DrawFrameControl: (: HDC,: LPRECT,: UINT,: UINT)=> BOOL;
	DrawIcon: (hDC: HDC, X: INT, Y: INT, hIcon: HICON) => BOOL;
	DrawIconEx: (
		hdc: HDC,
		xLeft: INT,
		yTop: INT,
		hIcon: HICON,
		cxWidth: INT,
		cyWidth: INT,
		istepIfAniCur: UINT,
		hbrFlickerFreeDraw: HBRUSH,
		diFlags: UINT
	) => BOOL;
	DrawMenuBar: (hWnd: HWND) => BOOL;
	DrawStateA: (
		hdc: HDC,
		hbrFore: HBRUSH,
		qfnCallBack: DRAWSTATEPROC,
		lData: LPARAM,
		wData: WPARAM,
		x: INT,
		y: INT,
		cx: INT,
		cy: INT,
		uFlags: UINT
	) => BOOL;
	DrawStateW: (
		hdc: HDC,
		hbrFore: HBRUSH,
		qfnCallBack: DRAWSTATEPROC,
		lData: LPARAM,
		wData: WPARAM,
		x: INT,
		y: INT,
		cx: INT,
		cy: INT,
		uFlags: UINT
	) => BOOL;
	DrawText: (hdc: HDC, lpchText: LPCTSTR, cchText: INT, lprc: LPRECT, format: UINT) => INT;
	DrawTextA: (hdc: HDC, lpchText: LPCSTR, cchText: INT, lprc: LPRECT, format: UINT) => INT;
	DrawTextExA: (hdc: HDC, lpchText: LPSTR, cchText: INT, lprc: LPRECT, format: UINT, lpdtp: LPDRAWTEXTPARAMS) => INT;
	DrawTextExW: (hdc: HDC, lpchText: LPWSTR, cchText: INT, lprc: LPRECT, format: UINT, lpdtp: LPDRAWTEXTPARAMS) => INT;
	DrawTextW: (hdc: HDC, lpchText: LPCWSTR, cchText: INT, lprc: LPRECT, format: UINT) => INT;
	EmptyClipboard: () => BOOL;
	EnableMenuItem: (hMenu: HMENU, uIDEnableItem: UINT, uEnable: UINT) => BOOL;
	EnableMouseInPointer: (fEnable: BOOL) => BOOL;
	EnableNonClientDpiScaling: (hwnd: HWND) => BOOL;
	EnableScrollBar: (hWnd: HWND, wSBflags: UINT, wArrows: UINT) => BOOL;
	EnableWindow: (hWnd: HWND, bEnable: BOOL) => BOOL;
	EndDeferWindowPos: (hWinPosInfo: HDWP) => BOOL;
	EndDialog: (hDlg: HWND, nResult: INT_PTR) => BOOL;
	EndMenu: () => BOOL;
	EndPaint: (hWnd: HWND, lpPaint: PAINTSTRUCT) => BOOL;
	EndTask: (hWnd: HWND, fShutDown: BOOL, fForce: BOOL) => BOOL;
	EnumChildWindows: (hWndParent: HWND, lpEnumFunc: WNDENUMPROC, lParam: LPARAM) => BOOL;
	EnumClipboardFormats: (format: UINT) => UINT;
	EnumDesktopsA: (hwinsta: HWINSTA, lpEnumFunc: DESKTOPENUMPROCA, lParam: LPARAM) => BOOL;
	EnumDesktopsW: (hwinsta: HWINSTA, lpEnumFunc: DESKTOPENUMPROCW, lParam: LPARAM) => BOOL;
	EnumDesktopWindows: (hDesktop: HDESK, lpfn: WNDENUMPROC, lParam: LPARAM) => BOOL;
	EnumDisplayDevicesA: (lpDevice: LPCSTR, iDevNum: DWORD, lpDisplayDevice: PDISPLAY_DEVICEA, dwFlags: DWORD) => BOOL;
	EnumDisplayDevicesW: (lpDevice: LPCWSTR, iDevNum: DWORD, lpDisplayDevice: PDISPLAY_DEVICEW, dwFlags: DWORD) => BOOL;
	EnumDisplayMonitors: (hdc: HDC, lprcClip: LPCRECT, lpfnEnum: MONITORENUMPROC, dwData: LPARAM) => BOOL;
	EnumDisplaySettingsA: (lpszDeviceName: LPCSTR, iModeNum: DWORD, lpDevMode: DEVMODEA) => BOOL;
	EnumDisplaySettingsExA: (lpszDeviceName: LPCSTR, iModeNum: DWORD, lpDevMode: DEVMODEA, dwFlags: DWORD) => BOOL;
	EnumDisplaySettingsExW: (lpszDeviceName: LPCWSTR, iModeNum: DWORD, lpDevMode: DEVMODEW, dwFlags: DWORD) => BOOL;
	EnumDisplaySettingsW: (lpszDeviceName: LPCWSTR, iModeNum: DWORD, lpDevMode: DEVMODEW) => BOOL;
	EnumPropsA: (hWnd: HWND, lpEnumFunc: PROPENUMPROCA) => INT;
	EnumPropsExA: (hWnd: HWND, lpEnumFunc: PROPENUMPROCEXA, lParam: LPARAM) => INT;
	EnumPropsExW: (hWnd: HWND, lpEnumFunc: PROPENUMPROCEXW, lParam: LPARAM) => INT;
	EnumPropsW: (hWnd: HWND, lpEnumFunc: PROPENUMPROCW) => INT;
	EnumThreadWindows: (dwThreadId: DWORD, lpfn: WNDENUMPROC, lParam: LPARAM) => BOOL;
	EnumWindows: (lpEnumFunc: WNDENUMPROC, lParam: LPARAM) => BOOL;
	EnumWindowStationsA: (lpEnumFunc: WINSTAENUMPROCA, lParam: LPARAM) => BOOL;
	EnumWindowStationsW: (lpEnumFunc: WINSTAENUMPROCW, lParam: LPARAM) => BOOL;
	EqualRect: (lprc1: RECT, lprc2: RECT) => BOOL;
	EvaluateProximityToPolygon: (
		numVertices: UINT32,
		controlPolygon: POINT,
		pHitTestingInput: TOUCH_HIT_TESTING_INPUT,
		pProximityEval: TOUCH_HIT_TESTING_PROXIMITY_EVALUATION
	) => BOOL;
	EvaluateProximityToRect: (
		controlBoundingBox: RECT,
		pHitTestingInput: TOUCH_HIT_TESTING_INPUT,
		pProximityEval: TOUCH_HIT_TESTING_PROXIMITY_EVALUATION
	) => BOOL;
	ExcludeUpdateRgn: (hDC: HDC, hWnd: HWND) => INT;
	ExitWindows: (dwReserved: any, Code: any) => VOID;
	ExitWindowsEx: (uFlags: UINT, dwReason: DWORD) => BOOL;
	FillRect: (hDC: HDC, lprc: RECT, hbr: HBRUSH) => INT;
	FindWindowA: (lpClassName: LPCSTR, lpWindowName: LPCSTR) => HWND;
	FindWindowExA: (hWndParent: HWND, hWndChildAfter: HWND, lpszClass: LPCSTR | null, lpszWindow: LPCSTR | null) => HWND;
	FindWindowExW: (
		hWndParent: HWND,
		hWndChildAfter: HWND,
		lpszClass: LPCWSTR | null,
		lpszWindow: LPCWSTR | null
	) => HWND;
	FindWindowW: (lpClassName: LPCWSTR, lpWindowName: LPCWSTR) => HWND;
	FlashWindow: (hWnd: HWND, bInvert: BOOL) => BOOL;
	FlashWindowEx: (pfwi: PFLASHWINFO) => BOOL;
	FrameRect: (hDC: HDC, lprc: RECT, hbr: HBRUSH) => INT;
	GET_APPCOMMAND_LPARAM: (lParam: any) => VOID;
	GET_DEVICE_LPARAM: (lParam: any) => VOID;
	GET_FLAGS_LPARAM: (lParam: any) => VOID;
	GET_KEYSTATE_LPARAM: (lParam: any) => VOID;
	GET_KEYSTATE_WPARAM: (wParam: any) => VOID;
	GET_NCHITTEST_WPARAM: (wParam: any) => VOID;
	GET_POINTERID_WPARAM: (wParam: any) => VOID;
	GET_RAWINPUT_CODE_WPARAM: (wParam: any) => VOID;
	GET_WHEEL_DELTA_WPARAM: (wParam: any) => VOID;
	GET_XBUTTON_WPARAM: (wParam: any) => VOID;
	GetActiveWindow: () => HWND;
	GetAltTabInfoA: (hwnd: HWND, iItem: INT, pati: PALTTABINFO, pszItemText: LPSTR, cchItemText: UINT) => BOOL;
	GetAltTabInfoW: (hwnd: HWND, iItem: INT, pati: PALTTABINFO, pszItemText: LPWSTR, cchItemText: UINT) => BOOL;
	GetAncestor: (hwnd: HWND, gaFlags: UINT) => HWND;
	GetAsyncKeyState: (vKey: INT) => SHORT;
	GetAutoRotationState: (pState: PAR_STATE) => BOOL;
	GetAwarenessFromDpiAwarenessContext: (value: DPI_AWARENESS_CONTEXT) => DPI_AWARENESS;
	GetCapture: () => HWND;
	GetCaretBlinkTime: () => UINT;
	GetCaretPos: (lpPoint: LPPOINT) => BOOL;
	GetCIMSSM: (inputMessageSource: INPUT_MESSAGE_SOURCE) => BOOL;
	GetClassInfoA: (hInstance: HINSTANCE, lpClassName: LPCSTR, lpWndClass: LPWNDCLASSA) => BOOL;
	GetClassInfoExA: (hInstance: HINSTANCE, lpszClass: LPCSTR | null, lpwcx: LPWNDCLASSEXA) => BOOL;
	GetClassInfoExW: (hInstance: HINSTANCE, lpszClass: LPCWSTR | null, lpwcx: LPWNDCLASSEXW) => BOOL;
	GetClassInfoW: (hInstance: HINSTANCE, lpClassName: LPCWSTR, lpWndClass: LPWNDCLASSW) => BOOL;
	GetClassLongA: (hWnd: HWND, nIndex: INT) => DWORD;
	GetClassLongPtrA: (hWnd: HWND, nIndex: INT) => ULONG_PTR;
	GetClassLongPtrW: (hWnd: HWND, nIndex: INT) => ULONG_PTR;
	GetClassLongW: (hWnd: HWND, nIndex: INT) => DWORD;
	GetClassName: (hWnd: HWND, lpClassName: LPTSTR, nMaxCount: INT) => INT;
	GetClassNameA: (hWnd: HWND, lpClassName: LPSTR, nMaxCount: INT) => INT;
	GetClassNameW: (hWnd: HWND, lpClassName: LPWSTR, nMaxCount: INT) => INT;
	GetClassWord: (hWnd: HWND, nIndex: INT) => WORD;
	GetClientRect: (hWnd: HWND, lpRect: LPRECT) => BOOL;
	GetClipboardData: (uFormat: UINT) => HANDLE;
	GetClipboardFormatNameA: (format: UINT, lpszFormatName: LPSTR, cchMaxCount: INT) => INT;
	GetClipboardFormatNameW: (format: UINT, lpszFormatName: LPWSTR, cchMaxCount: INT) => INT;
	GetClipboardOwner: () => HWND;
	GetClipboardSequenceNumber: () => DWORD;
	GetClipboardViewer: () => HWND;
	GetClipCursor: (lpRect: LPRECT) => BOOL;
	GetComboBoxInfo: (hwndCombo: HWND, pcbi: PCOMBOBOXINFO) => BOOL;
	GetCurrentInputMessageSource: (inputMessageSource: INPUT_MESSAGE_SOURCE) => BOOL;
	GetCursor: () => HCURSOR;
	GetCursorInfo: (pci: PCURSORINFO) => BOOL;
	GetCursorPos: (lpPoint: LPPOINT) => BOOL;
	GetDC: (hWnd: HWND) => HDC;
	GetDCEx: (hWnd: HWND, hrgnClip: HRGN, flags: DWORD) => HDC;
	GetDesktopWindow: () => HWND;
	GetDialogBaseUnits: () => LONG;
	GetDialogControlDpiChangeBehavior: (hWnd: HWND) => DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS;
	GetDialogDpiChangeBehavior: (hDlg: HWND) => DIALOG_DPI_CHANGE_BEHAVIORS;
	GetDisplayAutoRotationPreferences: (pOrientation: ORIENTATION_PREFERENCE) => BOOL;
	GetDisplayAutoRotationPreferencesByProcessId: (
		dwProcessId: DWORD,
		pOrientation: ORIENTATION_PREFERENCE,
		fRotateScreen: BOOL
	) => BOOL;
	GetDisplayConfigBufferSizes: (flags: UINT32, numPathArrayElements: UINT32, numModeInfoArrayElements: UINT32) => LONG;
	GetDlgCtrlID: (hWnd: HWND) => INT;
	GetDlgItem: (hDlg: HWND, nIDDlgItem: INT) => HWND;
	GetDlgItemInt: (hDlg: HWND, nIDDlgItem: INT, lpTranslated: BOOL, bSigned: BOOL) => UINT;
	GetDlgItemTextA: (hDlg: HWND, nIDDlgItem: INT, lpString: LPSTR, cchMax: INT) => UINT;
	GetDlgItemTextW: (hDlg: HWND, nIDDlgItem: INT, lpString: LPWSTR, cchMax: INT) => UINT;
	GetDoubleClickTime: () => UINT;
	GetDpiForSystem: () => UINT;
	GetDpiForWindow: (hwnd: HWND) => UINT;
	GetDpiFromDpiAwarenessContext: (value: DPI_AWARENESS_CONTEXT) => UINT;
	GetFocus: () => HWND;
	GetForegroundWindow: () => HWND;
	GetGestureConfig: (
		hwnd: HWND,
		dwReserved: DWORD,
		dwFlags: DWORD,
		pcIDs: PUINT,
		pGestureConfig: PGESTURECONFIG,
		cbSize: UINT
	) => BOOL;
	GetGestureExtraArgs: (hGestureInfo: HGESTUREINFO, cbExtraArgs: UINT, pExtraArgs: PBYTE) => BOOL;
	GetGestureInfo: (hGestureInfo: HGESTUREINFO, pGestureInfo: PGESTUREINFO) => BOOL;
	GetGuiResources: (hProcess: HANDLE, uiFlags: DWORD) => DWORD;
	GetGUIThreadInfo: (idThread: DWORD, pgui: PGUITHREADINFO) => BOOL;
	GetIconInfo: (hIcon: HICON, piconinfo: PICONINFO) => BOOL;
	GetIconInfoExA: (hicon: HICON, piconinfo: PICONINFOEXA) => BOOL;
	GetIconInfoExW: (hicon: HICON, piconinfo: PICONINFOEXW) => BOOL;
	GetInputState: () => BOOL;
	GetKBCodePage: () => UINT;
	GetKeyboardLayout: (idThread: DWORD) => HKL;
	GetKeyboardLayoutList: (nBuff: INT, lpList: HKL) => INT;
	GetKeyboardLayoutNameA: (pwszKLID: LPSTR) => BOOL;
	GetKeyboardLayoutNameW: (pwszKLID: LPWSTR) => BOOL;
	GetKeyboardState: (lpKeyState: PBYTE) => BOOL;
	GetKeyboardType: (nTypeFlag: INT) => INT;
	GetKeyNameTextA: (lParam: LONG, lpString: LPSTR, cchSize: INT) => INT;
	GetKeyNameTextW: (lParam: LONG, lpString: LPWSTR, cchSize: INT) => INT;
	GetKeyState: (nVirtKey: INT) => SHORT;
	GetLastActivePopup: (hWnd: HWND) => HWND;
	GetLastInputInfo: (plii: PLASTINPUTINFO) => BOOL;
	GetLayeredWindowAttributes: (hwnd: HWND, pcrKey: COLORREF, pbAlpha: BYTE, pdwFlags: DWORD) => BOOL;
	GetListBoxInfo: (hwnd: HWND) => DWORD;
	GetMenu: (hWnd: HWND) => HMENU;
	GetMenuBarInfo: (hwnd: HWND, idObject: LONG, idItem: LONG, pmbi: PMENUBARINFO) => BOOL;
	GetMenuCheckMarkDimensions: () => LONG;
	GetMenuContextHelpId: (Arg1: HMENU) => DWORD;
	GetMenuDefaultItem: (hMenu: HMENU, fByPos: UINT, gmdiFlags: UINT) => UINT;
	GetMenuInfo: (arg1: HMENU, arg2: LPMENUINFO) => BOOL;
	GetMenuItemCount: (hMenu: HMENU) => INT;
	GetMenuItemID: (hMenu: HMENU, nPos: INT) => UINT;
	GetMenuItemInfoA: (hmenu: HMENU, item: UINT, fByPosition: BOOL, lpmii: LPMENUITEMINFOA) => BOOL;
	GetMenuItemInfoW: (hmenu: HMENU, item: UINT, fByPosition: BOOL, lpmii: LPMENUITEMINFOW) => BOOL;
	GetMenuItemRect: (hWnd: HWND, hMenu: HMENU, uItem: UINT, lprcItem: LPRECT) => BOOL;
	GetMenuState: (hMenu: HMENU, uId: UINT, uFlags: UINT) => UINT;
	GetMenuStringA: (hMenu: HMENU, uIDItem: UINT, lpString: LPSTR, cchMax: INT, flags: UINT) => INT;
	GetMenuStringW: (hMenu: HMENU, uIDItem: UINT, lpString: LPWSTR, cchMax: INT, flags: UINT) => INT;
	GetMessage: (
		lpMsg: LPMSG,
		hWnd: HWND | number | null,
		wMsgFilterMin: UINT | null | number,
		wMsgFilterMax: UINT | null | number
	) => BOOL;
	GetMessageA: (
		lpMsg: LPMSG,
		hWnd: HWND | number | null,
		wMsgFilterMin: UINT | null | number,
		wMsgFilterMax: UINT | null | number
	) => BOOL;
	GetMessageExtraInfo: () => LPARAM;
	GetMessagePos: () => DWORD;
	GetMessageTime: () => LONG;
	GetMessageW: (
		lpMsg: LPMSG,
		hWnd: HWND | number | null,
		wMsgFilterMin: UINT | null | number,
		wMsgFilterMax: UINT | null | number
	) => BOOL;
	GetMonitorInfoA: (hMonitor: HMONITOR, lpmi: LPMONITORINFO) => BOOL;
	GetMonitorInfoW: (hMonitor: HMONITOR, lpmi: LPMONITORINFO) => BOOL;
	GetMouseMovePointsEx: (
		cbSize: UINT,
		lppt: LPMOUSEMOVEPOINT,
		lpptBuf: LPMOUSEMOVEPOINT,
		nBufPoints: INT,
		resolution: DWORD
	) => INT;
	GetNextDlgGroupItem: (hDlg: HWND, hCtl: HWND, bPrevious: BOOL) => HWND;
	GetNextDlgTabItem: (hDlg: HWND, hCtl: HWND, bPrevious: BOOL) => HWND;
	GetNextWindow: (hWnd: HWND, wCmd: UINT) => VOID;
	GetOpenClipboardWindow: () => HWND;
	GetParent: (hWnd: HWND) => HWND;
	GetPhysicalCursorPos: (lpPoint: LPPOINT) => BOOL;
	GetPointerCursorId: (pointerId: UINT32, cursorId: UINT32) => BOOL;
	GetPointerDevice: (device: HANDLE, pointerDevice: POINTER_DEVICE_INFO) => BOOL;
	GetPointerDeviceCursors: (device: HANDLE, cursorCount: UINT32, deviceCursors: POINTER_DEVICE_CURSOR_INFO) => BOOL;
	GetPointerDeviceProperties: (
		device: HANDLE,
		propertyCount: UINT32,
		pointerProperties: POINTER_DEVICE_PROPERTY
	) => BOOL;
	GetPointerDeviceRects: (device: HANDLE, pointerDeviceRect: RECT, displayRect: RECT) => BOOL;
	GetPointerDevices: (deviceCount: UINT32, pointerDevices: POINTER_DEVICE_INFO) => BOOL;
	GetPointerFrameInfo: (pointerId: UINT32, pointerCount: UINT32, pointerInfo: POINTER_INFO) => BOOL;
	GetPointerFrameInfoHistory: (
		pointerId: UINT32,
		entriesCount: UINT32,
		pointerCount: UINT32,
		pointerInfo: POINTER_INFO
	) => BOOL;
	GetPointerFramePenInfo: (pointerId: UINT32, pointerCount: UINT32, penInfo: POINTER_PEN_INFO) => BOOL;
	GetPointerFramePenInfoHistory: (
		pointerId: UINT32,
		entriesCount: UINT32,
		pointerCount: UINT32,
		penInfo: POINTER_PEN_INFO
	) => BOOL;
	GetPointerFrameTouchInfo: (pointerId: UINT32, pointerCount: UINT32, touchInfo: POINTER_TOUCH_INFO) => BOOL;
	GetPointerFrameTouchInfoHistory: (
		pointerId: UINT32,
		entriesCount: UINT32,
		pointerCount: UINT32,
		touchInfo: POINTER_TOUCH_INFO
	) => BOOL;
	GetPointerInfo: (pointerId: UINT32, pointerInfo: POINTER_INFO) => BOOL;
	GetPointerInfoHistory: (pointerId: UINT32, entriesCount: UINT32, pointerInfo: POINTER_INFO) => BOOL;
	GetPointerInputTransform: (pointerId: UINT32, historyCount: UINT32, inputTransform: INPUT_TRANSFORM) => BOOL;
	GetPointerPenInfo: (pointerId: UINT32, penInfo: POINTER_PEN_INFO) => BOOL;
	GetPointerPenInfoHistory: (pointerId: UINT32, entriesCount: UINT32, penInfo: POINTER_PEN_INFO) => BOOL;
	GetPointerTouchInfo: (pointerId: UINT32, touchInfo: POINTER_TOUCH_INFO) => BOOL;
	GetPointerTouchInfoHistory: (pointerId: UINT32, entriesCount: UINT32, touchInfo: POINTER_TOUCH_INFO) => BOOL;
	GetPointerType: (pointerId: UINT32, pointerType: POINTER_INPUT_TYPE) => BOOL;
	GetPriorityClipboardFormat: (paFormatPriorityList: UINT, cFormats: INT) => INT;
	GetProcessDefaultLayout: (pdwDefaultLayout: DWORD) => BOOL;
	GetProcessWindowStation: () => HWINSTA;
	GetPropA: (hWnd: HWND, lpString: LPCSTR) => HANDLE;
	GetPropW: (hWnd: HWND, lpString: LPCWSTR) => HANDLE;
	GetQueueStatus: (flags: UINT) => DWORD;
	GetRawInputBuffer: (pData: PRAWINPUT, pcbSize: PUINT, cbSizeHeader: UINT) => UINT;
	GetRawInputData: (hRawInput: HRAWINPUT, uiCommand: UINT, pData: LPVOID, pcbSize: PUINT, cbSizeHeader: UINT) => UINT;
	GetRawInputDeviceInfoA: (hDevice: HANDLE, uiCommand: UINT, pData: LPVOID, pcbSize: PUINT) => UINT;
	GetRawInputDeviceInfoW: (hDevice: HANDLE, uiCommand: UINT, pData: LPVOID, pcbSize: PUINT) => UINT;
	GetRawInputDeviceList: (pRawInputDeviceList: PRAWINPUTDEVICELIST, puiNumDevices: PUINT, cbSize: UINT) => UINT;
	GetRawPointerDeviceData: (
		pointerId: UINT32,
		historyCount: UINT32,
		propertiesCount: UINT32,
		pProperties: POINTER_DEVICE_PROPERTY,
		pValues: LONG
	) => BOOL;
	GetRegisteredRawInputDevices: (pRawInputDevices: PRAWINPUTDEVICE, puiNumDevices: PUINT, cbSize: UINT) => UINT;
	GetScrollBarInfo: (hwnd: HWND, idObject: LONG, psbi: PSCROLLBARINFO) => BOOL;
	GetScrollInfo: (hwnd: HWND, nBar: INT, lpsi: LPSCROLLINFO) => BOOL;
	GetScrollPos: (hWnd: HWND, nBar: INT) => INT;
	GetScrollRange: (hWnd: HWND, nBar: INT, lpMinPos: LPINT, lpMaxPos: LPINT) => BOOL;
	GetShellWindow: () => HWND;
	GetSubMenu: (hMenu: HMENU, nPos: INT) => HMENU;
	GetSysColor: (nIndex: INT) => DWORD;
	GetSysColorBrush: (nIndex: INT) => HBRUSH;
	GetSystemDpiForProcess: (hProcess: HANDLE) => UINT;
	GetSystemMenu: (hWnd: HWND, bRevert: BOOL) => HMENU;
	GetSystemMetrics: (nIndex: INT) => INT;
	GetSystemMetricsForDpi: (nIndex: INT, dpi: UINT) => INT;
	GetTabbedTextExtentA: (
		hdc: HDC,
		lpString: LPCSTR,
		chCount: INT,
		nTabPositions: INT,
		lpnTabStopPositions: INT
	) => DWORD;
	GetTabbedTextExtentW: (
		hdc: HDC,
		lpString: LPCWSTR,
		chCount: INT,
		nTabPositions: INT,
		lpnTabStopPositions: INT
	) => DWORD;
	GetThreadDesktop: (dwThreadId: DWORD) => HDESK;
	GetThreadDpiAwarenessContext: () => DPI_AWARENESS_CONTEXT;
	GetThreadDpiHostingBehavior: () => DPI_HOSTING_BEHAVIOR;
	GetTitleBarInfo: (hwnd: HWND, pti: PTITLEBARINFO) => BOOL;
	GetTopWindow: (hWnd: HWND) => HWND;
	GetTouchInputInfo: (hTouchInput: HTOUCHINPUT, cInputs: UINT, pInputs: PTOUCHINPUT, cbSize: INT) => BOOL;
	GetUnpredictedMessagePos: () => DWORD;
	GetUpdatedClipboardFormats: (lpuiFormats: PUINT, cFormats: UINT, pcFormatsOut: PUINT) => BOOL;
	GetUpdateRect: (hWnd: HWND, lpRect: LPRECT, bErase: BOOL) => BOOL;
	GetUpdateRgn: (hWnd: HWND, hRgn: HRGN, bErase: BOOL) => INT;
	GetUserObjectInformationA: (
		hObj: HANDLE,
		nIndex: INT,
		pvInfo: PVOID,
		nLength: DWORD,
		lpnLengthNeeded: LPDWORD
	) => BOOL;
	GetUserObjectInformationW: (
		hObj: HANDLE,
		nIndex: INT,
		pvInfo: PVOID,
		nLength: DWORD,
		lpnLengthNeeded: LPDWORD
	) => BOOL;
	GetUserObjectSecurity: (
		hObj: HANDLE,
		pSIRequested: PSECURITY_INFORMATION,
		pSID: PSECURITY_DESCRIPTOR,
		nLength: DWORD,
		lpnLengthNeeded: LPDWORD
	) => BOOL;
	GetWindow: (hWnd: HWND, uCmd: UINT) => HWND;
	GetWindowContextHelpId: (Arg1: HWND) => DWORD;
	GetWindowDC: (hWnd: HWND) => HDC;
	GetWindowDisplayAffinity: (hWnd: HWND, pdwAffinity: DWORD) => BOOL;
	GetWindowDpiAwarenessContext: (hwnd: HWND) => DPI_AWARENESS_CONTEXT;
	GetWindowDpiHostingBehavior: (hwnd: HWND) => DPI_HOSTING_BEHAVIOR;
	GetWindowFeedbackSetting: (hwnd: HWND, feedback: FEEDBACK_TYPE, dwFlags: DWORD, pSize: UINT32, config: VOID) => BOOL;
	GetWindowInfo: (hwnd: HWND, pwi: PWINDOWINFO) => BOOL;
	GetWindowLongA: (hWnd: HWND, nIndex: INT) => LONG;
	GetWindowLongPtrA: (hWnd: HWND, nIndex: INT) => LONG_PTR;
	GetWindowLongPtrW: (hWnd: HWND, nIndex: INT) => LONG_PTR;
	GetWindowLongW: (hWnd: HWND, nIndex: INT) => LONG;
	GetWindowModuleFileNameA: (hwnd: HWND, pszFileName: LPSTR, cchFileNameMax: UINT) => UINT;
	GetWindowModuleFileNameW: (hwnd: HWND, pszFileName: LPWSTR, cchFileNameMax: UINT) => UINT;
	GetWindowPlacement: (hWnd: HWND, lpwndpl: WINDOWPLACEMENT) => BOOL;
	GetWindowRect: (hWnd: HWND, lpRect: LPRECT) => BOOL;
	GetWindowRgn: (hWnd: HWND, hRgn: HRGN) => INT;
	GetWindowRgnBox: (hWnd: HWND, lprc: LPRECT) => INT;
	GetWindowTextA: (hWnd: HWND, lpString: LPSTR, nMaxCount: INT) => INT;
	GetWindowTextLengthA: (hWnd: HWND) => INT;
	GetWindowTextLengthW: (hWnd: HWND) => INT;
	GetWindowTextW: (hWnd: HWND, lpString: LPWSTR, nMaxCount: INT) => INT;
	GetWindowThreadProcessId: (hWnd: HWND, lpdwProcessId: LPDWORD) => DWORD;
	GID_ROTATE_ANGLE_FROM_ARGUMENT: (_arg_: any) => VOID;
	GID_ROTATE_ANGLE_TO_ARGUMENT: (_arg_: any) => VOID;
	GrayStringA: (
		hDC: HDC,
		hBrush: HBRUSH,
		lpOutputFunc: GRAYSTRINGPROC,
		lpData: LPARAM,
		nCount: INT,
		X: INT,
		Y: INT,
		nWidth: INT,
		nHeight: INT
	) => BOOL;
	GrayStringW: (
		hDC: HDC,
		hBrush: HBRUSH,
		lpOutputFunc: GRAYSTRINGPROC,
		lpData: LPARAM,
		nCount: INT,
		X: INT,
		Y: INT,
		nWidth: INT,
		nHeight: INT
	) => BOOL;
	HAS_POINTER_CONFIDENCE_WPARAM: (wParam: WPARAM) => VOID;
	HideCaret: (hWnd: HWND) => BOOL;
	HiliteMenuItem: (hWnd: HWND, hMenu: HMENU, uIDHiliteItem: UINT, uHilite: UINT) => BOOL;
	InflateRect: (lprc: LPRECT, dx: INT, dy: INT) => BOOL;
	InitializeTouchInjection: (maxCount: UINT32, dwMode: DWORD) => BOOL;
	InjectSyntheticPointerInput: (device: HSYNTHETICPOINTERDEVICE, pointerInfo: POINTER_TYPE_INFO, count: UINT32) => BOOL;
	InjectTouchInput: (count: UINT32, contacts: POINTER_TOUCH_INFO) => BOOL;
	InSendMessage: () => BOOL;
	InSendMessageEx: (lpReserved: LPVOID) => DWORD;
	InsertMenuA: (hMenu: HMENU, uPosition: UINT, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCSTR) => BOOL;
	InsertMenuItemA: (hmenu: HMENU, item: UINT, fByPosition: BOOL, lpmi: LPCMENUITEMINFOA) => BOOL;
	InsertMenuItemW: (hmenu: HMENU, item: UINT, fByPosition: BOOL, lpmi: LPCMENUITEMINFOW) => BOOL;
	InsertMenuW: (hMenu: HMENU, uPosition: UINT, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCWSTR) => BOOL;
	InternalGetWindowText: (hWnd: HWND, pString: LPWSTR, cchMaxCount: INT) => INT;
	IntersectRect: (lprcDst: LPRECT, lprcSrc1: RECT, lprcSrc2: RECT) => BOOL;
	InvalidateRect: (hWnd: HWND, lpRect: RECT, bErase: BOOL) => BOOL;
	InvalidateRgn: (hWnd: HWND, hRgn: HRGN, bErase: BOOL) => BOOL;
	InvertRect: (hDC: HDC, lprc: RECT) => BOOL;
	IS_INTRESOURCE: (_r: Pointer) => VOID;
	IS_POINTER_CANCELED_WPARAM: (wParam: WPARAM) => VOID;
	IS_POINTER_FIFTHBUTTON_WPARAM: (wParam: WPARAM) => VOID;
	IS_POINTER_FIRSTBUTTON_WPARAM: (wParam: WPARAM) => VOID;
	IS_POINTER_FLAG_SET_WPARAM: (wParam: WPARAM, flag: INT) => VOID;
	IS_POINTER_FOURTHBUTTON_WPARAM: (wParam: WPARAM) => VOID;
	IS_POINTER_INCONTACT_WPARAM: (wParam: WPARAM) => VOID;
	IS_POINTER_INRANGE_WPARAM: (wParam: WPARAM) => VOID;
	IS_POINTER_NEW_WPARAM: (wParam: WPARAM) => VOID;
	IS_POINTER_SECONDBUTTON_WPARAM: (wParam: WPARAM) => VOID;
	IS_POINTER_THIRDBUTTON_WPARAM: (wParam: WPARAM) => VOID;
	IsCharAlphaA: (ch: CHAR) => BOOL;
	IsCharAlphaNumericA: (ch: CHAR) => BOOL;
	IsCharAlphaNumericW: (ch: WCHAR) => BOOL;
	IsCharAlphaW: (ch: WCHAR) => BOOL;
	IsCharLowerA: (ch: CHAR) => BOOL;
	IsCharLowerW: (ch: WCHAR) => BOOL;
	IsCharUpperA: (ch: CHAR) => BOOL;
	IsCharUpperW: (ch: WCHAR) => BOOL;
	IsChild: (hWndParent: HWND, hWnd: HWND) => BOOL;
	IsClipboardFormatAvailable: (format: UINT) => BOOL;
	IsDialogMessageA: (hDlg: HWND, lpMsg: LPMSG) => BOOL;
	IsDialogMessageW: (hDlg: HWND, lpMsg: LPMSG) => BOOL;
	IsDlgButtonChecked: (hDlg: HWND, nIDButton: INT) => UINT;
	IsGUIThread: (bConvert: BOOL) => BOOL;
	IsHungAppWindow: (hwnd: HWND) => BOOL;
	IsIconic: (hWnd: HWND) => BOOL;
	IsImmersiveProcess: (hProcess: HANDLE) => BOOL;
	IsMenu: (hMenu: HMENU) => BOOL;
	IsMouseInPointerEnabled: () => BOOL;
	IsProcessDPIAware: () => BOOL;
	IsRectEmpty: (lprc: RECT) => BOOL;
	IsTouchWindow: (hwnd: HWND, pulFlags: PULONG) => BOOL;
	IsValidDpiAwarenessContext: (value: DPI_AWARENESS_CONTEXT) => BOOL;
	IsWindow: (hWnd: HWND) => BOOL;
	IsWindowEnabled: (hWnd: HWND) => BOOL;
	IsWindowUnicode: (hWnd: HWND) => BOOL;
	IsWindowVisible: (hWnd: HWND) => BOOL;
	IsWinEventHookInstalled: (event: DWORD) => BOOL;
	IsWow64Message: () => BOOL;
	IsZoomed: (hWnd: HWND) => BOOL;
	keybd_event: (bVk: BYTE, bScan: BYTE, dwFlags: DWORD, dwExtraInfo: ULONG_PTR) => VOID;
	KillTimer: (hWnd: HWND, uIDEvent: UINT_PTR) => BOOL;
	LoadAcceleratorsA: (hInstance: HINSTANCE, lpTableName: LPCSTR) => HACCEL;
	LoadAcceleratorsW: (hInstance: HINSTANCE, lpTableName: LPCWSTR) => HACCEL;
	LoadBitmapA: (hInstance: HINSTANCE, lpBitmapName: LPCSTR) => HBITMAP;
	LoadBitmapW: (hInstance: HINSTANCE, lpBitmapName: LPCWSTR) => HBITMAP;
	LoadCursorA: (hInstance: HINSTANCE, lpCursorName: LPCSTR) => HCURSOR;
	LoadCursorFromFileA: (lpFileName: LPCSTR) => HCURSOR;
	LoadCursorFromFileW: (lpFileName: LPCWSTR) => HCURSOR;
	LoadCursorW: (hInstance: HINSTANCE, lpCursorName: LPCWSTR) => HCURSOR;
	LoadIconA: (hInstance: HINSTANCE, lpIconName: LPCSTR) => HICON;
	LoadIconW: (hInstance: HINSTANCE, lpIconName: LPCWSTR) => HICON;
	LoadImageA: (hInst: HINSTANCE, name: LPCSTR, type: UINT, cx: INT, cy: INT, fuLoad: UINT) => HANDLE;
	LoadImageW: (hInst: HINSTANCE, name: LPCWSTR, type: UINT, cx: INT, cy: INT, fuLoad: UINT) => HANDLE;
	LoadKeyboardLayoutA: (pwszKLID: LPCSTR, Flags: UINT) => HKL;
	LoadKeyboardLayoutW: (pwszKLID: LPCWSTR, Flags: UINT) => HKL;
	LoadMenuA: (hInstance: HINSTANCE, lpMenuName: LPCSTR) => HMENU;
	LoadMenuIndirectA: (lpMenuTemplate: MENUTEMPLATEA) => HMENU;
	LoadMenuIndirectW: (lpMenuTemplate: MENUTEMPLATEW) => HMENU;
	LoadMenuW: (hInstance: HINSTANCE, lpMenuName: LPCWSTR) => HMENU;
	LoadStringA: (hInstance: HINSTANCE, uID: UINT, lpBuffer: LPSTR, cchBufferMax: INT) => INT;
	LoadStringW: (hInstance: HINSTANCE, uID: UINT, lpBuffer: LPWSTR, cchBufferMax: INT) => INT;
	LockSetForegroundWindow: (uLockCode: UINT) => BOOL;
	LockWindowUpdate: (hWndLock: HWND) => BOOL;
	LockWorkStation: () => BOOL;
	LogicalToPhysicalPoint: (hWnd: HWND, lpPoint: LPPOINT) => BOOL;
	LogicalToPhysicalPointForPerMonitorDPI: (hWnd: HWND, lpPoint: LPPOINT) => BOOL;
	LookupIconIdFromDirectory: (presbits: PBYTE, fIcon: BOOL) => INT;
	LookupIconIdFromDirectoryEx: (presbits: PBYTE, fIcon: BOOL, cxDesired: INT, cyDesired: INT, Flags: UINT) => INT;
	MAKEINTRESOURCEA: (i: any) => any;
	MAKEINTRESOURCEW: (i: any) => any;
	MAKELPARAM: (l: any, h: any) => any;
	MAKELRESULT: (l: any, h: any) => any;
	MAKEWPARAM: (l: any, h: any) => any;
	MapDialogRect: (hDlg: HWND, lpRect: LPRECT) => BOOL;
	MapVirtualKeyA: (uCode: UINT, uMapType: UINT) => UINT;
	MapVirtualKeyExA: (uCode: UINT, uMapType: UINT, dwhkl: HKL) => UINT;
	MapVirtualKeyExW: (uCode: UINT, uMapType: UINT, dwhkl: HKL) => UINT;
	MapVirtualKeyW: (uCode: UINT, uMapType: UINT) => UINT;
	MapWindowPoints: (hWndFrom: HWND, hWndTo: HWND, lpPoints: LPPOINT, cPoints: UINT) => INT;
	MenuItemFromPoint: (hWnd: HWND, hMenu: HMENU, ptScreen: POINT) => INT;
	MessageBeep: (uType: UINT) => BOOL;
	// MessageBox: (hWnd: HWND, lpText: LPCTSTR, lpCaption: LPCTSTR, uType: UINT) => INT;
	MessageBoxA: (hWnd: HWND, lpText: LPCSTR, lpCaption: LPCSTR, uType: UINT) => INT;
	MessageBoxExA: (hWnd: HWND, lpText: LPCSTR, lpCaption: LPCSTR, uType: UINT, wLanguageId: WORD) => INT;
	MessageBoxExW: (hWnd: HWND, lpText: LPCWSTR, lpCaption: LPCWSTR, uType: UINT, wLanguageId: WORD) => INT;
	MessageBoxIndirectA: (lpmbp: MSGBOXPARAMSA) => INT;
	MessageBoxIndirectW: (lpmbp: MSGBOXPARAMSW) => INT;
	MessageBoxW: (hWnd: HWND, lpText: LPCWSTR, lpCaption: LPCWSTR, uType: UINT) => INT;
	ModifyMenuA: (hMnu: HMENU, uPosition: UINT, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCSTR) => BOOL;
	ModifyMenuW: (hMnu: HMENU, uPosition: UINT, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCWSTR) => BOOL;
	MonitorFromPoint: (pt: POINT, dwFlags: DWORD) => HMONITOR;
	MonitorFromRect: (lprc: LPCRECT, dwFlags: DWORD) => HMONITOR;
	MonitorFromWindow: (hwnd: HWND, dwFlags: DWORD) => HMONITOR;
	mouse_event: (dwFlags: DWORD, dx: DWORD, dy: DWORD, dwData: DWORD, dwExtraInfo: ULONG_PTR) => VOID;
	MoveWindow: (hWnd: HWND, X: INT, Y: INT, nWidth: INT, nHeight: INT, bRepaint: BOOL) => BOOL;
	MsgWaitForMultipleObjects: (
		nCount: DWORD,
		pHandles: HANDLE,
		fWaitAll: BOOL,
		dwMilliseconds: DWORD,
		dwWakeMask: DWORD
	) => DWORD;
	MsgWaitForMultipleObjectsEx: (
		nCount: DWORD,
		pHandles: HANDLE,
		dwMilliseconds: DWORD,
		dwWakeMask: DWORD,
		dwFlags: DWORD
	) => DWORD;
	NEXTRAWINPUTBLOCK: (ptr: Pointer) => VOID;
	NotifyWinEvent: (event: DWORD, hwnd: HWND, idObject: LONG, idChild: LONG) => VOID;
	OemKeyScan: (wOemChar: WORD) => DWORD;
	OemToCharA: (pSrc: LPCSTR, pDst: LPSTR) => BOOL;
	OemToCharBuffA: (lpszSrc: LPCSTR, lpszDst: LPSTR, cchDstLength: DWORD) => BOOL;
	OemToCharBuffW: (lpszSrc: LPCSTR, lpszDst: LPWSTR, cchDstLength: DWORD) => BOOL;
	OemToCharW: (pSrc: LPCSTR, pDst: LPWSTR) => BOOL;
	OffsetRect: (lprc: LPRECT, dx: INT, dy: INT) => BOOL;
	OpenClipboard: (hWndNewOwner: HWND) => BOOL;
	OpenDesktopA: (lpszDesktop: LPCSTR, dwFlags: DWORD, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK) => HDESK;
	OpenDesktopW: (lpszDesktop: LPCWSTR, dwFlags: DWORD, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK) => HDESK;
	OpenIcon: (hWnd: HWND) => BOOL;
	OpenInputDesktop: (dwFlags: DWORD, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK) => HDESK;
	OpenWindowStationA: (lpszWinSta: LPCSTR, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK) => HWINSTA;
	OpenWindowStationW: (lpszWinSta: LPCWSTR, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK) => HWINSTA;
	PackTouchHitTestingProximityEvaluation: (
		pHitTestingInput: TOUCH_HIT_TESTING_INPUT,
		pProximityEval: TOUCH_HIT_TESTING_PROXIMITY_EVALUATION
	) => LRESULT;
	PaintDesktop: (hdc: HDC) => BOOL;
	PeekMessageA: (lpMsg: LPMSG, hWnd: HWND, wMsgFilterMin: UINT, wMsgFilterMax: UINT, wRemoveMsg: UINT) => BOOL;
	PeekMessageW: (lpMsg: LPMSG, hWnd: HWND, wMsgFilterMin: UINT, wMsgFilterMax: UINT, wRemoveMsg: UINT) => BOOL;
	PhysicalToLogicalPoint: (hWnd: HWND, lpPoint: LPPOINT) => BOOL;
	PhysicalToLogicalPointForPerMonitorDPI: (hWnd: HWND, lpPoint: LPPOINT) => BOOL;
	POINTSTOPOINT: (pt: POINT, pts: POINTS) => VOID;
	POINTTOPOINTS: (pt: POINT) => VOID;
	PostMessageA: (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM) => BOOL;
	PostMessageW: (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM) => BOOL;
	PostQuitMessage: (nExitCode: INT) => VOID;
	PostThreadMessageA: (idThread: DWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM) => BOOL;
	PostThreadMessageW: (idThread: DWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM) => BOOL;
	PrintWindow: (hwnd: HWND, hdcBlt: HDC, nFlags: UINT) => BOOL;
	PrivateExtractIconsA: (
		szFileName: LPCSTR,
		nIconIndex: INT,
		cxIcon: INT,
		cyIcon: INT,
		phicon: HICON,
		piconid: UINT,
		nIcons: UINT,
		flags: UINT
	) => UINT;
	PrivateExtractIconsW: (
		szFileName: LPCWSTR,
		nIconIndex: INT,
		cxIcon: INT,
		cyIcon: INT,
		phicon: HICON,
		piconid: UINT,
		nIcons: UINT,
		flags: UINT
	) => UINT;
	PtInRect: (lprc: RECT, pt: POINT) => BOOL;
	QueryDisplayConfig: (
		flags: UINT32,
		numPathArrayElements: UINT32,
		pathArray: DISPLAYCONFIG_PATH_INFO,
		numModeInfoArrayElements: UINT32,
		modeInfoArray: DISPLAYCONFIG_MODE_INFO,
		currentTopologyId: DISPLAYCONFIG_TOPOLOGY_ID
	) => LONG;
	RealChildWindowFromPoint: (hwndParent: HWND, ptParentClientCoords: POINT) => HWND;
	RealGetWindowClassW: (hwnd: HWND, ptszClassName: LPWSTR, cchClassNameMax: UINT) => UINT;
	RedrawWindow: (hWnd: HWND, lprcUpdate: RECT, hrgnUpdate: HRGN, flags: UINT) => BOOL;
	RegisterClassA: (lpWndClass: WNDCLASSA) => ATOM;
	RegisterClassExA: (Arg1: WNDCLASSEXA) => ATOM;
	RegisterClassExW: (Arg1: WNDCLASSEXW) => ATOM;
	RegisterClassW: (lpWndClass: WNDCLASSW) => ATOM;
	RegisterClipboardFormatA: (lpszFormat: LPCSTR) => UINT;
	RegisterClipboardFormatW: (lpszFormat: LPCWSTR) => UINT;
	RegisterDeviceNotificationA: (hRecipient: HANDLE, NotificationFilter: LPVOID, Flags: DWORD) => HDEVNOTIFY;
	RegisterDeviceNotificationW: (hRecipient: HANDLE, NotificationFilter: LPVOID, Flags: DWORD) => HDEVNOTIFY;
	RegisterHotKey: (hWnd: HWND, id: INT, fsModifiers: UINT, vk: UINT) => BOOL;
	RegisterPointerDeviceNotifications: (window: HWND, notifyRange: BOOL) => BOOL;
	RegisterPointerInputTarget: (hwnd: HWND, pointerType: POINTER_INPUT_TYPE) => BOOL;
	RegisterPointerInputTargetEx: (hwnd: HWND, pointerType: POINTER_INPUT_TYPE, fObserve: BOOL) => BOOL;
	RegisterPowerSettingNotification: (hRecipient: HANDLE, PowerSettingGuid: LPCGUID, Flags: DWORD) => HPOWERNOTIFY;
	RegisterRawInputDevices: (pRawInputDevices: PCRAWINPUTDEVICE, uiNumDevices: UINT, cbSize: UINT) => BOOL;
	RegisterShellHookWindow: (hwnd: HWND) => BOOL;
	RegisterSuspendResumeNotification: (hRecipient: HANDLE, Flags: DWORD) => HPOWERNOTIFY;
	RegisterTouchHitTestingWindow: (hwnd: HWND, value: ULONG) => BOOL;
	RegisterTouchWindow: (hwnd: HWND, ulFlags: ULONG) => BOOL;
	RegisterWindowMessageA: (lpString: LPCSTR) => UINT;
	RegisterWindowMessageW: (lpString: LPCWSTR) => UINT;
	ReleaseCapture: () => BOOL;
	ReleaseDC: (hWnd: HWND, hDC: HDC) => INT;
	RemoveClipboardFormatListener: (hwnd: HWND) => BOOL;
	RemoveMenu: (hMenu: HMENU, uPosition: UINT, uFlags: UINT) => BOOL;
	RemovePropA: (hWnd: HWND, lpString: LPCSTR) => HANDLE;
	RemovePropW: (hWnd: HWND, lpString: LPCWSTR) => HANDLE;
	ReplyMessage: (lResult: LRESULT) => BOOL;
	ScreenToClient: (hWnd: HWND, lpPoint: LPPOINT) => BOOL;
	ScrollDC: (
		hDC: HDC,
		dx: INT,
		dy: INT,
		lprcScroll: RECT,
		lprcClip: RECT,
		hrgnUpdate: HRGN,
		lprcUpdate: LPRECT
	) => BOOL;
	ScrollWindow: (hWnd: HWND, XAmount: INT, YAmount: INT, lpRect: RECT, lpClipRect: RECT) => BOOL;
	ScrollWindowEx: (
		hWnd: HWND,
		dx: INT,
		dy: INT,
		prcScroll: RECT,
		prcClip: RECT,
		hrgnUpdate: HRGN,
		prcUpdate: LPRECT,
		flags: UINT
	) => INT;
	SendDlgItemMessageA: (hDlg: HWND, nIDDlgItem: INT, Msg: UINT, wParam: WPARAM, lParam: LPARAM) => LRESULT;
	SendDlgItemMessageW: (hDlg: HWND, nIDDlgItem: INT, Msg: UINT, wParam: WPARAM, lParam: LPARAM) => LRESULT;
	SendInput: (cInputs: UINT, pInputs: LPINPUT, cbSize: INT) => UINT;
	SendMessage: (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM) => LRESULT;
	SendMessageA: (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM) => LRESULT;
	SendMessageCallbackA: (
		hWnd: HWND,
		Msg: UINT,
		wParam: WPARAM,
		lParam: LPARAM,
		lpResultCallBack: SENDASYNCPROC,
		dwData: ULONG_PTR
	) => BOOL;
	SendMessageCallbackW: (
		hWnd: HWND,
		Msg: UINT,
		wParam: WPARAM,
		lParam: LPARAM,
		lpResultCallBack: SENDASYNCPROC,
		dwData: ULONG_PTR
	) => BOOL;
	SendMessageTimeoutA: (
		hWnd: HWND,
		Msg: UINT,
		wParam: WPARAM,
		lParam: LPARAM,
		fuFlags: UINT,
		uTimeout: UINT,
		lpdwResult: PDWORD_PTR
	) => LRESULT;
	SendMessageTimeoutW: (
		hWnd: HWND,
		Msg: UINT,
		wParam: WPARAM,
		lParam: LPARAM,
		fuFlags: UINT,
		uTimeout: UINT,
		lpdwResult: PDWORD_PTR
	) => LRESULT;
	SendMessageW: (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM) => LRESULT;
	SendNotifyMessageA: (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM) => BOOL;
	SendNotifyMessageW: (hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM) => BOOL;
	SetActiveWindow: (hWnd: HWND) => HWND;
	SetCapture: (hWnd: HWND) => HWND;
	SetCaretBlinkTime: (uMSeconds: UINT) => BOOL;
	SetCaretPos: (X: INT, Y: INT) => BOOL;
	SetClassLongA: (hWnd: HWND, nIndex: INT, dwNewLong: LONG) => DWORD;
	SetClassLongPtrA: (hWnd: HWND, nIndex: INT, dwNewLong: LONG_PTR) => ULONG_PTR;
	SetClassLongPtrW: (hWnd: HWND, nIndex: INT, dwNewLong: LONG_PTR) => ULONG_PTR;
	SetClassLongW: (hWnd: HWND, nIndex: INT, dwNewLong: LONG) => DWORD;
	SetClassWord: (hWnd: HWND, nIndex: INT, wNewWord: WORD) => WORD;
	SetClipboardData: (uFormat: UINT, hMem: HANDLE) => HANDLE;
	SetClipboardViewer: (hWndNewViewer: HWND) => HWND;
	SetCoalescableTimer: (
		hWnd: HWND,
		nIDEvent: UINT_PTR,
		uElapse: UINT,
		lpTimerFunc: TIMERPROC,
		uToleranceDelay: ULONG
	) => UINT_PTR;
	SetCursor: (hCursor: HCURSOR) => HCURSOR;
	SetCursorPos: (X: INT, Y: INT) => BOOL;
	SetDialogControlDpiChangeBehavior: (
		hWnd: HWND,
		mask: DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS,
		values: DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS
	) => BOOL;
	SetDialogDpiChangeBehavior: (
		hDlg: HWND,
		mask: DIALOG_DPI_CHANGE_BEHAVIORS,
		values: DIALOG_DPI_CHANGE_BEHAVIORS
	) => BOOL;
	SetDisplayAutoRotationPreferences: (orientation: ORIENTATION_PREFERENCE) => BOOL;
	SetDisplayConfig: (
		numPathArrayElements: UINT32,
		pathArray: DISPLAYCONFIG_PATH_INFO,
		numModeInfoArrayElements: UINT32,
		modeInfoArray: DISPLAYCONFIG_MODE_INFO,
		flags: UINT32
	) => LONG;
	SetDlgItemInt: (hDlg: HWND, nIDDlgItem: INT, uValue: UINT, bSigned: BOOL) => BOOL;
	SetDlgItemTextA: (hDlg: HWND, nIDDlgItem: INT, lpString: LPCSTR) => BOOL;
	SetDlgItemTextW: (hDlg: HWND, nIDDlgItem: INT, lpString: LPCWSTR) => BOOL;
	SetDoubleClickTime: (Arg1: UINT) => BOOL;
	SetFocus: (hWnd: HWND) => HWND;
	SetForegroundWindow: (hWnd: HWND) => BOOL;
	SetGestureConfig: (hwnd: HWND, dwReserved: DWORD, cIDs: UINT, pGestureConfig: PGESTURECONFIG, cbSize: UINT) => BOOL;
	SetKeyboardState: (lpKeyState: LPBYTE) => BOOL;
	SetLastErrorEx: (dwErrCode: DWORD, dwType: DWORD) => VOID;
	SetLayeredWindowAttributes: (hwnd: HWND, crKey: COLORREF, bAlpha: BYTE, dwFlags: DWORD) => BOOL;
	SetMenu: (hWnd: HWND, hMenu: HMENU) => BOOL;
	SetMenuContextHelpId: (arg1: HMENU, arg2: DWORD) => BOOL;
	SetMenuDefaultItem: (hMenu: HMENU, uItem: UINT, fByPos: UINT) => BOOL;
	SetMenuInfo: (arg1: HMENU, arg2: LPCMENUINFO) => BOOL;
	SetMenuItemBitmaps: (
		hMenu: HMENU,
		uPosition: UINT,
		uFlags: UINT,
		hBitmapUnchecked: HBITMAP,
		hBitmapChecked: HBITMAP
	) => BOOL;
	SetMenuItemInfoA: (hmenu: HMENU, item: UINT, fByPositon: BOOL, lpmii: LPCMENUITEMINFOA) => BOOL;
	SetMenuItemInfoW: (hmenu: HMENU, item: UINT, fByPositon: BOOL, lpmii: LPCMENUITEMINFOW) => BOOL;
	SetMessageExtraInfo: (lParam: LPARAM) => LPARAM;
	SetParent: (hWndChild: HWND, hWndNewParent: HWND) => HWND;
	SetPhysicalCursorPos: (X: INT, Y: INT) => BOOL;
	SetProcessDefaultLayout: (dwDefaultLayout: DWORD) => BOOL;
	SetProcessDPIAware: () => BOOL;
	SetProcessDpiAwarenessContext: (value: DPI_AWARENESS_CONTEXT) => BOOL;
	SetProcessRestrictionExemption: (fEnableExemption: BOOL) => BOOL;
	SetProcessWindowStation: (hWinSta: HWINSTA) => BOOL;
	SetPropA: (hWnd: HWND, lpString: LPCSTR, hData: HANDLE) => BOOL;
	SetPropW: (hWnd: HWND, lpString: LPCWSTR, hData: HANDLE) => BOOL;
	SetRect: (lprc: LPRECT, xLeft: INT, yTop: INT, xRight: INT, yBottom: INT) => BOOL;
	SetRectEmpty: (lprc: LPRECT) => BOOL;
	SetScrollInfo: (hwnd: HWND, nBar: INT, lpsi: LPCSCROLLINFO, redraw: BOOL) => INT;
	SetScrollPos: (hWnd: HWND, nBar: INT, nPos: INT, bRedraw: BOOL) => INT;
	SetScrollRange: (hWnd: HWND, nBar: INT, nMinPos: INT, nMaxPos: INT, bRedraw: BOOL) => BOOL;
	SetSysColors: (cElements: INT, lpaElements: INT, lpaRgbValues: COLORREF) => BOOL;
	SetSystemCursor: (hcur: HCURSOR, id: DWORD) => BOOL;
	SetThreadDesktop: (hDesktop: HDESK) => BOOL;
	SetThreadDpiAwarenessContext: (dpiContext: DPI_AWARENESS_CONTEXT) => DPI_AWARENESS_CONTEXT;
	SetThreadDpiHostingBehavior: (value: DPI_HOSTING_BEHAVIOR) => DPI_HOSTING_BEHAVIOR;
	SetTimer: (hWnd: HWND, nIDEvent: UINT_PTR, uElapse: UINT, lpTimerFunc: TIMERPROC) => UINT_PTR;
	SetUserObjectInformationA: (hObj: HANDLE, nIndex: INT, pvInfo: PVOID, nLength: DWORD) => BOOL;
	SetUserObjectInformationW: (hObj: HANDLE, nIndex: INT, pvInfo: PVOID, nLength: DWORD) => BOOL;
	SetUserObjectSecurity: (hObj: HANDLE, pSIRequested: PSECURITY_INFORMATION, pSID: PSECURITY_DESCRIPTOR) => BOOL;
	SetWindowContextHelpId: (arg1: HWND, arg2: DWORD) => BOOL;
	SetWindowDisplayAffinity: (hWnd: HWND, dwAffinity: DWORD) => BOOL;
	SetWindowFeedbackSetting: (
		hwnd: HWND,
		feedback: FEEDBACK_TYPE,
		dwFlags: DWORD,
		size: UINT32,
		configuration: VOID
	) => BOOL;
	SetWindowLongA: (hWnd: HWND, nIndex: INT, dwNewLong: LONG) => LONG;
	SetWindowLongPtrA: (hWnd: HWND, nIndex: INT, dwNewLong: LONG_PTR) => LONG_PTR;
	SetWindowLongPtrW: (hWnd: HWND, nIndex: INT, dwNewLong: LONG_PTR) => LONG_PTR;
	SetWindowLongW: (hWnd: HWND, nIndex: INT, dwNewLong: LONG) => LONG;
	SetWindowPlacement: (hWnd: HWND, lpwndpl: WINDOWPLACEMENT) => BOOL;
	SetWindowPos: (hWnd: HWND, hWndInsertAfter: HWND, X: INT, Y: INT, cx: INT, cy: INT, uFlags: UINT) => BOOL;
	SetWindowRgn: (hWnd: HWND, hRgn: HRGN, bRedraw: BOOL) => INT;
	SetWindowsHookExA: (idHook: INT, lpfn: HOOKPROC, hmod: HINSTANCE, dwThreadId: DWORD) => HHOOK;
	SetWindowsHookExW: (idHook: INT, lpfn: HOOKPROC, hmod: HINSTANCE, dwThreadId: DWORD) => HHOOK;
	SetWindowTextA: (hWnd: HWND, lpString: LPCSTR) => BOOL;
	SetWindowTextW: (hWnd: HWND, lpString: LPCWSTR) => BOOL;
	SetWinEventHook: (
		eventMin: DWORD,
		eventMax: DWORD,
		hmodWinEventProc: HMODULE,
		pfnWinEventProc: WINEVENTPROC,
		idProcess: DWORD,
		idThread: DWORD,
		dwFlags: DWORD
	) => HWINEVENTHOOK;
	ShowCaret: (hWnd: HWND) => BOOL;
	ShowCursor: (bShow: BOOL) => INT;
	ShowOwnedPopups: (hWnd: HWND, fShow: BOOL) => BOOL;
	ShowScrollBar: (hWnd: HWND, wBar: INT, bShow: BOOL) => BOOL;
	ShowWindow: (hWnd: HWND, nCmdShow: INT) => BOOL;
	ShowWindowAsync: (hWnd: HWND, nCmdShow: INT) => BOOL;
	ShutdownBlockReasonCreate: (hWnd: HWND, pwszReason: LPCWSTR) => BOOL;
	ShutdownBlockReasonDestroy: (hWnd: HWND) => BOOL;
	ShutdownBlockReasonQuery: (hWnd: HWND, pwszBuff: LPWSTR, pcchBuff: DWORD) => BOOL;
	SkipPointerFrameMessages: (pointerId: UINT32) => BOOL;
	SoundSentry: () => BOOL;
	SubtractRect: (lprcDst: LPRECT, lprcSrc1: RECT, lprcSrc2: RECT) => BOOL;
	SwapMouseButton: (fSwap: BOOL) => BOOL;
	SwitchDesktop: (hDesktop: HDESK) => BOOL;
	SwitchToThisWindow: (hwnd: HWND, fUnknown: BOOL) => VOID;
	SystemParametersInfoA: (uiAction: UINT, uiParam: UINT, pvParam: PVOID, fWinIni: UINT) => BOOL;
	SystemParametersInfoForDpi: (uiAction: UINT, uiParam: UINT, pvParam: PVOID, fWinIni: UINT, dpi: UINT) => BOOL;
	SystemParametersInfoW: (uiAction: UINT, uiParam: UINT, pvParam: PVOID, fWinIni: UINT) => BOOL;
	TabbedTextOutA: (
		hdc: HDC,
		x: INT,
		y: INT,
		lpString: LPCSTR,
		chCount: INT,
		nTabPositions: INT,
		lpnTabStopPositions: INT,
		nTabOrigin: INT
	) => LONG;
	TabbedTextOutW: (
		hdc: HDC,
		x: INT,
		y: INT,
		lpString: LPCWSTR,
		chCount: INT,
		nTabPositions: INT,
		lpnTabStopPositions: INT,
		nTabOrigin: INT
	) => LONG;
	TileWindows: (hwndParent: HWND, wHow: UINT, lpRect: RECT, cKids: UINT, lpKids: HWND) => WORD;
	ToAscii: (uVirtKey: UINT, uScanCode: UINT, lpKeyState: BYTE, lpChar: LPWORD, uFlags: UINT) => INT;
	ToAsciiEx: (uVirtKey: UINT, uScanCode: UINT, lpKeyState: BYTE, lpChar: LPWORD, uFlags: UINT, dwhkl: HKL) => INT;
	TOUCH_COORD_TO_PIXEL: (l: any) => VOID;
	ToUnicode: (wVirtKey: UINT, wScanCode: UINT, lpKeyState: BYTE, pwszBuff: LPWSTR, cchBuff: INT, wFlags: UINT) => INT;
	ToUnicodeEx: (
		wVirtKey: UINT,
		wScanCode: UINT,
		lpKeyState: BYTE,
		pwszBuff: LPWSTR,
		cchBuff: INT,
		wFlags: UINT,
		dwhkl: HKL
	) => INT;
	TrackMouseEvent: (lpEventTrack: LPTRACKMOUSEEVENT) => BOOL;
	TrackPopupMenu: (hMenu: HMENU, uFlags: UINT, x: INT, y: INT, nReserved: INT, hWnd: HWND, prcRect: RECT) => BOOL;
	TrackPopupMenuEx: (hMenu: HMENU, uFlags: UINT, x: INT, y: INT, hwnd: HWND, lptpm: LPTPMPARAMS) => BOOL;
	TranslateAcceleratorA: (hWnd: HWND, hAccTable: HACCEL, lpMsg: LPMSG) => INT;
	TranslateAcceleratorW: (hWnd: HWND, hAccTable: HACCEL, lpMsg: LPMSG) => INT;
	TranslateMDISysAccel: (hWndClient: HWND, lpMsg: LPMSG) => BOOL;
	TranslateMessage: (lpMsg: MSG) => BOOL;
	UnhookWindowsHookEx: (hhk: HHOOK) => BOOL;
	UnhookWinEvent: (hWinEventHook: HWINEVENTHOOK) => BOOL;
	UnionRect: (lprcDst: LPRECT, lprcSrc1: RECT, lprcSrc2: RECT) => BOOL;
	UnloadKeyboardLayout: (hkl: HKL) => BOOL;
	UnregisterClassA: (lpClassName: LPCSTR, hInstance: HINSTANCE) => BOOL;
	UnregisterClassW: (lpClassName: LPCWSTR, hInstance: HINSTANCE) => BOOL;
	UnregisterDeviceNotification: (Handle: HDEVNOTIFY) => BOOL;
	UnregisterHotKey: (hWnd: HWND, id: INT) => BOOL;
	UnregisterPointerInputTarget: (hwnd: HWND, pointerType: POINTER_INPUT_TYPE) => BOOL;
	UnregisterPointerInputTargetEx: (hwnd: HWND, pointerType: POINTER_INPUT_TYPE) => BOOL;
	UnregisterPowerSettingNotification: (Handle: HPOWERNOTIFY) => BOOL;
	UnregisterSuspendResumeNotification: (Handle: HPOWERNOTIFY) => BOOL;
	UnregisterTouchWindow: (hwnd: HWND) => BOOL;
	UpdateLayeredWindow: (
		hWnd: HWND,
		hdcDst: HDC,
		pptDst: POINT,
		psize: SIZE,
		hdcSrc: HDC,
		pptSrc: POINT,
		crKey: COLORREF,
		pblend: BLENDFUNCTION,
		dwFlags: DWORD
	) => BOOL;
	UpdateWindow: (hWnd: HWND) => BOOL;
	UserHandleGrantAccess: (hUserHandle: HANDLE, hJob: HANDLE, bGrant: BOOL) => BOOL;
	ValidateRect: (hWnd: HWND, lpRect: RECT) => BOOL;
	ValidateRgn: (hWnd: HWND, hRgn: HRGN) => BOOL;
	VkKeyScanA: (ch: CHAR) => SHORT;
	VkKeyScanExA: (ch: CHAR, dwhkl: HKL) => SHORT;
	VkKeyScanExW: (ch: WCHAR, dwhkl: HKL) => SHORT;
	VkKeyScanW: (ch: WCHAR) => SHORT;
	WaitForInputIdle: (hProcess: HANDLE, dwMilliseconds: DWORD) => DWORD;
	WaitMessage: () => BOOL;
	WindowFromDC: (hDC: HDC) => HWND;
	WindowFromPhysicalPoint: (Point: POINT) => HWND;
	WindowFromPoint: (Point: POINT) => HWND;
	WinHelpA: (hWndMain: HWND, lpszHelp: LPCSTR, uCommand: UINT, dwData: ULONG_PTR) => BOOL;
	WinHelpW: (hWndMain: HWND, lpszHelp: LPCWSTR, uCommand: UINT, dwData: ULONG_PTR) => BOOL;
	// 	wsprintfA: (arg1: LPSTR, arg2: LPCSTR,: ...) => INT | WINAPIV;
	// 	wsprintfW: (: LPWSTR,: LPCWSTR,:...)=> INT | WINAPIV;
	// wvsprintfA: (: LPSTR,: LPCSTR, arglist: VA_LIST)=> INT;
	// wvsprintfW: (: LPWSTR,: LPCWSTR, arglist: VA_LIST)=> INT;
}
