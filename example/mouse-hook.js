const { Win32ffi, ffi, CPP, ref, NULL } = require('../dist');

const win32ffi = new Win32ffi();
const {
	CallNextHookEx,
	WindowFromPoint,
	SetWindowsHookExW,
	GetMessageW,
	DispatchMessageW,
	TranslateMessage,
	UnhookWindowsHookEx,
} = win32ffi.user32();
const { GetModuleHandleW } = win32ffi.kernel32();

const cb = function (nCode, wParam, lParam) {
	const mouse = lParam.deref();
	const pt = mouse.pt;
	const { x, y } = pt;
	const currentHwnd = WindowFromPoint(mouse.pt);
	console.log('x: ' + x, 'y: ' + y, 'point hwnd:' + currentHwnd);

	return CallNextHookEx(0, nCode, wParam, lParam);
};

const _createMouseHookProc = ffi.Callback(
	CPP.LRESULT, // 相当于C++ 的CALLBACK
	[CPP.INT, CPP.WPARAM, ref.refType(CPP.StructMOUSEHOOKSTRUCT)],
	cb
);

const hInst = GetModuleHandleW(NULL);

const _mouseHook = SetWindowsHookExW(CPP.WH_MOUSE_LL, _createMouseHookProc, hInst, 0);
const msg = new CPP.StructMSG();

// 创建消息循环
while (GetMessageW(msg.ref(), 0, 0, 0)) {
	TranslateMessage(msg.ref());
	DispatchMessageW(msg.ref());
}

// 释放hook
UnhookWindowsHookEx(_mouseHook);
