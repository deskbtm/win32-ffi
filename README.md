## win32-ffi

win32 api binding for nodejs

## Install

`npm i win32-ffi`/`yarn add win32-ffi`

## Usage

<br>

* Since ffi cannot use the macro function of c++ #define, MAKEWPARAM, MAKELPARAM, etc. can only realize the operation of the numbers. For details, please refer to the document of `user_macro_fns.ts`

```ts
export const MAKELONG = (a: number, b: number): number => (a & 0xfff) | ((b & 0xfff) << 16);
```

---

<br>

- ffi cannot force type conversion, so you need to use refType to define the type

c++

```cpp
MOUSEHOOKSTRUCT* mouse = (MOUSEHOOKSTRUCT*)(lParam)
```

ts

```ts
ffi.Callback(CPP.LRESULT, [CPP.INT, CPP.WPARAM, ref.refType(CPP.MOUSEHOOKSTRUCT)],(nCode: TS.INT, wParam: TS.WPARAM, lParam: TS.RefStruct) => {})
```

---

### Electron

```ts

// get system endianness, cast Buffer to decimal
const bufferCastInt32 = function (buf: Buffer): number {
	return os.endianness() == "LE" ?
		buf.readInt32LE() : buf.readInt32BE();
};

const mainWindow = new BrowserWindow({
	frame: false,
	transparent: true,
	webPreferences: {
		nodeIntegration: true,
		webSecurity: false,
		webviewTag: true,
		sandbox: false,
		enableRemoteModule: true 
	}
});

const decimalHwnd = bufferCastInt32(mainWindow.getNativeWindowHandle());
SetWindowPos(decimalHwnd, 0, 0, 0, 100, 100, CPP.SWP_NOZORDER);

```

### Samples

- Create thread

```ts
const { Win32ffi, ffi, CPP, L, NULL } = require('win32-ffi');

const { CreateThread, MessageBoxW } = new Win32ffi().winFns();

const proc = ffi.Callback(CPP.INT, [CPP.PVOID], () => {
	MessageBoxW(0, L("exmpale"), null, CPP.MB_OK | CPP.MB_ICONEXCLAMATION);
});

CreateThread(null, 0, proc, NULL, 0, NULL);
```

- Create Mouse Hook

```ts
const _createMouseHookProc = () => ffi.Callback(CPP.LRESULT, [CPP.INT, CPP.WPARAM, ref.refType(CPP.StructMOUSEHOOKSTRUCT)],
		(nCode: TS.INT, wParam: TS.WPARAM, lParam: TS.RefStruct) => {
			const mouse: TS.MOUSEHOOKSTRUCT = lParam.deref();
			const pt = mouse.pt;
			const { x, y } = pt;
			const currentHwnd = WindowFromPoint(mouse.pt);

			return CallNextHookEx(0, nCode, wParam, lParam); // need overwrite
		}
	)
const _mouseHook = SetWindowsHookExW(CPP.WH_MOUSE_LL, this._createMouseHookProc(), 0, 0);
 const msg: TS.RefStruct = new CPP.StructMSG();
 while (GetMessageW(msg.ref(), 0, 0, 0) && this._trigger) {
 	TranslateMessage(msg.ref());
 	DispatchMessageW(msg.ref());
 }

UnhookWindowsHookEx(_mouseHook);

```

### More Examples

**[Exmaples](./example)**

### [API DOCS](https://deskbtm.github.io/win32-ffi/)

### Main Api

* Win32ffi

```ts
const win32ffi =new Win32ffi();

win32ffi.user32();
win32ffi.kernel32();

const winFns = win32ffi.winFns(); // include user32 and kernel32

const _createEnumWindowProc = () => ffi.Callback(CPP.BOOL, [CPP.HWND, CPP.LPARAM],
 (hWnd: TS.HWND) => {
	......
	return true;
});

winFns.EnumWindows(this._createEnumWindowProc(), 0);
```

* L, _T,  TEXT  _[https://docs.microsoft.com/en-us/windows/win32/learnwin32/working-with-strings]()_

```ts
const tmp: TS.HWND = FindWindowExW(0, 0, L('progman'), null);
```

* ref  see [http://tootallnate.github.io/ref/](http://tootallnate.github.io/ref/)
* ffi [https://www.npmjs.com/package/ffi-napi](https://www.npmjs.com/package/ffi-napi)
* NULL = ref.NULL
* Struct
  win320ffi provides litte struct e.g `StructRECT` `StructMSG` `StructMOUSEHOOKSTRUCT`... see win_user_struct.ts for more details

```ts
import {ref, StructType,CPP} from 'win32-ffi';

const Struct = StructType(ref);

const MSG = Struct({
	hwnd: CPP.HWND,
	message: CPP.UINT,
	wParam: CPP.WPARAM,
	lParam: CPP.LPARAM,
	time: CPP.DWORD,
	pt: CPP.POINT
});
const msg = new MSG();
console.log(msg.ref());
```

* TS: ts types
* CPP: c++ types that refer to ffi

Warning

* If you can't get the certain C++ parameter types, you can create a file and rewrite this function

```ts
overwrite.ts

import { CPP, ref } from 'win32-ffi';
export const customFns = {
	CallNextHookEx: [CPP.LRESULT, [CPP.HHOOK, CPP.INT, CPP.WPARAM, ref.refType(CPP.MOUSEHOOKSTRUCT)]]
};
```

```ts
index.ts

import { customFns } from './overwrite';
Win32ffi.assign({ user32Fns: customFns });
```

* win32-ffi does not include Comctl32, because almost all macro-defined functions, but you can use `SendMessage` to achieve, win32ffi provides
* **It is impossible to include all win32 api. If there is no prompt, it means you need to define it by yourself. And you can get type details from visual studio.**

## License

The scripts and documentation in this project are released under the [Apache 2.0 License](./LICENSE)
