
# Win-Win


## Usage

1. 如果无法获取确定的C++参数类型，所以 你可创建一个文件 重写这个函数

```ts
overwrite.ts

import { CPP, ref } from 'win-win';
export const customFns = {
	CallNextHookEx: [CPP.LRESULT, [CPP.HHOOK, CPP.INT, CPP.WPARAM, ref.refType(CPP.MOUSEHOOKSTRUCT)]]
};
```

```ts
index.ts

import { customFns } from './overwrite';
WinWin.overwrite({ user32Fns: customFns });
```

## Notice 

- ***win-win 不可能包含所有win api 如果没有提示，那就意味着你需要自己定义***

- win-win 没有包含Comctl32, 因为几乎都是宏定义的函数 但是你可以用`SendMessage`实现, winwin提供了部分常量 

---
<br>

## Tutorial
<br >

- Struct

```ts 
import {ref, DefStruct,CPP} from 'win-win';

const Struct = DefStruct(ref);

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

---
<br>

- 由于ffi无法 使用 c++ #define 的宏函数, 所以MAKEWPARAM，MAKELPARAM等等只能实现对数字的s操作 具体见`*_macro_fns.ts`的文件

```ts

export const MAKELONG = (a: number, b: number): number => (a & 0xfff) | ((b & 0xfff) << 16);

```
---
<br>

- ffi 无法强制类型转换， 所以你需要使用refType 定义好类型

- c++

```cpp
MOUSEHOOKSTRUCT* mouse = (MOUSEHOOKSTRUCT*)(lParam)
```

- ts

```ts
ffi.Callback(CPP.LRESULT, [CPP.INT, CPP.WPARAM, ref.refType(CPP.MOUSEHOOKSTRUCT)],(nCode: TS.INT, wParam: TS.WPARAM, lParam: TS.RefStruct) => {})
```
---
<br>

- 创建线程
```ts
const { WinWin, ffi, CPP, L } = require('win-win');

const { CreateThread, MessageBoxW } = new WinWin().winFns();

const proc = ffi.Callback('int32', ['void*'], () => {
	MessageBoxW(0, L("exmpale"), null, CPP.MB_OK | CPP.MB_ICONEXCLAMATION);
});

CreateThread(null, 0, proc, Buffer.alloc(0), 0, Buffer.alloc(0));
```