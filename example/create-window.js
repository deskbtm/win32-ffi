const { Win32ffi, L, CPP, StructType, ref, NULL } = require('../dist');

const winFns = new Win32ffi().winFns();

const { CreateWindowExW, GetMessageW, TranslateMessage, DispatchMessageW, GetModuleHandleW } = winFns;
const sampleName = L('Sample Window Name\0');
const sampleText = L('description\0');

const tagWNDCLASSSTRUCT = {
	lpszClassName: CPP.LPCWSTR,
};

const Struct = StructType(ref);

const WNDCLASSSTRUCT = 'pointer';
const StructWNDCLASSSTRUCT = Struct(tagWNDCLASSSTRUCT);

const WS_OVERLAPPED = 0x00000000;
const WS_CAPTION = 0x00c00000;
const WS_SYSMENU = 0x00080000;
const WS_THICKFRAME = 0x00040000;
const WS_MINIMIZEBOX = 0x00020000;
const WS_MAXIMIZEBOX = 0x00020000;

const CW_USEDEFAULT = 0x00000000;

const WS_OVERLAPPEDWINDOW = WS_OVERLAPPED | WS_CAPTION | WS_SYSMENU | WS_THICKFRAME | WS_MINIMIZEBOX | WS_MAXIMIZEBOX;

const hInst = GetModuleHandleW(NULL);

const hWnd = CreateWindowExW(
	0,
	sampleName,
	sampleText,
	WS_OVERLAPPEDWINDOW,
	CW_USEDEFAULT,
	CW_USEDEFAULT,
	CW_USEDEFAULT,
	CW_USEDEFAULT,
	0,
	0,
	hInst,
	NULL
);

const msg = new CPP.StructMSG();
while (GetMessageW(msg.ref(), 0, 0, 0)) {
	TranslateMessage(msg.ref());
	DispatchMessageW(msg.ref());
}
