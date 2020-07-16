# Win-Win

## Usage

export

* WinWin

``` ts
const winwin =new WinWin();

winwin.user32();
winwin.kernel32();

const winFns = winwin.winFns(); // include user32 and kernel32

const _createEnumWindowProc = () => ffi.Callback(CPP.BOOL, [CPP.HWND, CPP.LPARAM],
 (hWnd: TS.HWND) => {
		......
		return true;
});

winFns.EnumWindows(this._createEnumWindowProc(), 0);
```

* L, _T,  _TEXT_

``` ts
const tmp: TS.HWND = FindWindowExW(0, 0, L('progman'), null);
```

* ref
see [http://tootallnate.github.io/ref/](http://tootallnate.github.io/ref/)
* NULL = ref.NULL
* Struct

``` ts
import {ref, StructType,CPP} from 'win-win';

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
* CPP: c++ types

## Api

### [DOC](https://github.com/sewerganger/win-win/docs)

## Notice

* If you can't get certain C++ parameter types, you can create a file and rewrite this function

``` ts
overwrite.ts

import { CPP, ref } from 'win-win';
export const customFns = {
	CallNextHookEx: [CPP.LRESULT, [CPP.HHOOK, CPP.INT, CPP.WPARAM, ref.refType(CPP.MOUSEHOOKSTRUCT)]]
};
```

``` ts
index.ts

import { customFns } from './overwrite';
WinWin.overwrite({ user32Fns: customFns });
```

* Win-win does not include Comctl32, because almost all macro-defined functions, but you can use `SendMessage` to achieve, winwin provides
* ***It is impossible to include all win api. If there is no prompt, it means you need to define it yourself.***

## Tutorial
<br>
* Since ffi cannot use the macro function of c++ #define, MAKEWPARAM, MAKELPARAM, etc. can only realize the operation of the number s. For details, please refer to the document of \*\_macro\_fns.ts\`

``` ts
export const MAKELONG = (a: number, b: number): number => (a & 0xfff) | ((b & 0xfff) << 16);
```

- - -

<br>

- ffi cannot force type conversion, so you need to use refType to define the type

c++

``` cpp
MOUSEHOOKSTRUCT* mouse = (MOUSEHOOKSTRUCT*)(lParam)
```

ts

``` ts
ffi.Callback(CPP.LRESULT, [CPP.INT, CPP.WPARAM, ref.refType(CPP.MOUSEHOOKSTRUCT)],(nCode: TS.INT, wParam: TS.WPARAM, lParam: TS.RefStruct) => {})
```

- - -
<br>

- Create thread

``` ts
const { WinWin, ffi, CPP, L, NULL } = require('win-win');

const { CreateThread, MessageBoxW } = new WinWin().winFns();

const proc = ffi.Callback(CPP.INT, [CPP.PVOID], () => {
	MessageBoxW(0, L("exmpale"), null, CPP.MB_OK | CPP.MB_ICONEXCLAMATION);
});

CreateThread(null, 0, proc, NULL, 0, NULL);
```

- Create Hook

``` ts
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
