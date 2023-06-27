export const WM_MOUSEFIRST = 0x0200;
export const WM_MOUSEMOVE = 0x0200;
export const WM_LBUTTONDOWN = 0x0201;
export const WM_LBUTTONUP = 0x0202;
export const WM_LBUTTONDBLCLK = 0x0203;
export const WM_RBUTTONDOWN = 0x0204;
export const WM_RBUTTONUP = 0x0205;
export const WM_RBUTTONDBLCLK = 0x0206;
export const WM_MBUTTONDOWN = 0x0207;
export const WM_MBUTTONUP = 0x0208;
export const WM_MBUTTONDBLCLK = 0x0209;
export const WM_MOUSEWHEEL = 0x020a;

export const WH_KEYBOARD_LL = 13;
export const WH_MOUSE_LL = 14;

export const SM_CXSCREEN = 0;
export const SM_CYSCREEN = 1;
export const SM_CXVSCROLL = 2;
export const SM_CYHSCROLL = 3;
export const SM_CYCAPTION = 4;
export const SM_CXBORDER = 5;
export const SM_CYBORDER = 6;
export const SM_CXDLGFRAME = 7;
export const SM_CYDLGFRAME = 8;
export const SM_CYVTHUMB = 9;
export const SM_CXHTHUMB = 10;
export const SM_CXICON = 11;
export const SM_CYICON = 12;
export const SM_CXCURSOR = 13;
export const SM_CYCURSOR = 14;
export const SM_CYMENU = 15;
export const SM_CXFULLSCREEN = 16;
export const SM_CYFULLSCREEN = 17;
export const SM_CYKANJIWINDOW = 18;
export const SM_MOUSEPRESENT = 19;
export const SM_CYVSCROLL = 20;
export const SM_CXHSCROLL = 21;
export const SM_DEBUG = 22;
export const SM_SWAPBUTTON = 23;
export const SM_RESERVED1 = 24;
export const SM_RESERVED2 = 25;
export const SM_RESERVED3 = 26;
export const SM_RESERVED4 = 27;
export const SM_CXMIN = 28;
export const SM_CYMIN = 29;
export const SM_CXSIZE = 30;
export const SM_CYSIZE = 31;
export const SM_CXFRAME = 32;
export const SM_CYFRAME = 33;
export const SM_CXMINTRACK = 34;
export const SM_CYMINTRACK = 35;
export const SM_CXDOUBLECLK = 36;
export const SM_CYDOUBLECLK = 37;
export const SM_CXICONSPACING = 38;
export const SM_CYICONSPACING = 39;
export const SM_MENUDROPALIGNMENT = 40;
export const SM_PENWINDOWS = 41;
export const SM_DBCSENABLED = 42;
export const SM_CMOUSEBUTTONS = 43;

export const SWP_NOSIZE = 0x0001;
export const SWP_NOMOVE = 0x0002;
export const SWP_NOZORDER = 0x0004;
export const SWP_NOREDRAW = 0x0008;
export const SWP_NOACTIVATE = 0x0010;
export const SWP_FRAMECHANGED = 0x0020; /* The frame changed: send WM_NCCALCSIZE */
export const SWP_SHOWWINDOW = 0x0040;
export const SWP_HIDEWINDOW = 0x0080;
export const SWP_NOCOPYBITS = 0x0100;
export const SWP_NOOWNERZORDER = 0x0200; /* Don't do owner Z ordering */
export const SWP_NOSENDCHANGING = 0x0400; /* Don't send WM_WINDOWPOSCHANGING */

export const SWP_DRAWFRAME = SWP_FRAMECHANGED;
export const SWP_NOREPOSITION = SWP_NOOWNERZORDER;

/**
 *   MW_USER WINVER>400
 */

export const WM_IME_STARTCOMPOSITION = 0x010d;
export const WM_IME_ENDCOMPOSITION = 0x010e;
export const WM_IME_COMPOSITION = 0x010f;
export const WM_IME_KEYLAST = 0x010f;
export const WM_INITDIALOG = 0x0110;
export const WM_COMMAND = 0x0111;
export const WM_SYSCOMMAND = 0x0112;
export const WM_TIMER = 0x0113;
export const WM_HSCROLL = 0x0114;
export const WM_VSCROLL = 0x0115;
export const WM_INITMENU = 0x0116;
export const WM_INITMENUPOPUP = 0x0117;

/**
 *			System Menu Command Values
 */

/*
 * System Menu Command Values
 */
export const SC_SIZE = 0xf000;
export const SC_MOVE = 0xf010;
export const SC_MINIMIZE = 0xf020;
export const SC_MAXIMIZE = 0xf030;
export const SC_NEXTWINDOW = 0xf040;
export const SC_PREVWINDOW = 0xf050;
export const SC_CLOSE = 0xf060;
export const SC_VSCROLL = 0xf070;
export const SC_HSCROLL = 0xf080;
export const SC_MOUSEMENU = 0xf090;
export const SC_KEYMENU = 0xf100;
export const SC_ARRANGE = 0xf110;
export const SC_RESTORE = 0xf120;
export const SC_TASKLIST = 0xf130;
export const SC_SCREENSAVE = 0xf140;
export const SC_HOTKEY = 0xf150;
export const SC_DEFAULT = 0xf160;
export const SC_MONITORPOWER = 0xf170;
export const SC_CONTEXTHELP = 0xf180;
export const SC_SEPARATOR = 0xf00f;

/**
 *	MessageBox() Flags
 */

export const MB_OK = 0x00000000;
export const MB_OKCANCEL = 0x00000001;
export const MB_ABORTRETRYIGNORE = 0x00000002;
export const MB_YESNOCANCEL = 0x00000003;
export const MB_YESNO = 0x00000004;
export const MB_RETRYCANCEL = 0x00000005;
export const MB_CANCELTRYCONTINUE = 0x00000006;

export const MB_ICONHAND = 0x00000010;
export const MB_ICONQUESTION = 0x00000020;
export const MB_ICONEXCLAMATION = 0x00000030;
export const MB_ICONASTERISK = 0x00000040;

export const MB_USERICON = 0x00000080;
export const MB_ICONWARNING = MB_ICONEXCLAMATION;
export const MB_ICONERROR = MB_ICONHAND;

export const MB_ICONINFORMATION = MB_ICONASTERISK;
export const MB_ICONSTOP = MB_ICONHAND;

export const MB_DEFBUTTON1 = 0x00000000;
export const MB_DEFBUTTON2 = 0x00000100;
export const MB_DEFBUTTON3 = 0x00000200;
export const MB_DEFBUTTON4 = 0x00000300;

export const MB_APPLMODAL = 0x00000000;
export const MB_SYSTEMMODAL = 0x00001000;
export const MB_TASKMODAL = 0x00002000;
export const MB_HELP = 0x00004000; // Help Butto;

export const MB_NOFOCUS = 0x00008000;
export const MB_SETFOREGROUND = 0x00010000;
export const MB_DEFAULT_DESKTOP_ONLY = 0x00020000;

// #if(WINVER >= 0x0400)
export const MB_TOPMOST = 0x00040000;
export const MB_RIGHT = 0x00080000;
export const MB_RTLREADING = 0x00100000;

// #endif /* WINVER >= 0x0400 */

// #ifdef _WIN32_WINNT
// #if(_WIN32_WINNT >= 0x0400)
// export const MB_SERVICE_NOTIFICATION = 0x00200000;
// #else
// export const MB_SERVICE_NOTIFICATION = 0x00040000;
// #endif
export const MB_SERVICE_NOTIFICATION_NT3X = 0x00040000;
// #endif

export const MB_TYPEMASK = 0x0000000f;
export const MB_ICONMASK = 0x000000f0;
export const MB_DEFMASK = 0x00000f00;
export const MB_MODEMASK = 0x00003000;
export const MB_MISCMASK = 0x0000c000;
