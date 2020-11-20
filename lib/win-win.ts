
import { TsWin32Fns, User32Fns, Kernel32Fns, FfiWin32Fns } from "./ts";
import { userMacroFns } from "./cpp/user32/user_macro_fns";
import * as ffi from 'ffi-napi';
import { user32Fns } from './cpp/user32';
import { kernel32Fns } from "./cpp/kernel32";

interface WinWinOptions {
	unicode: boolean;
}

interface OverwriteOptions {
	user32Fns?: FfiWin32Fns;
	kernel32Fns?: FfiWin32Fns;
}

export type WinFns = User32Fns & Kernel32Fns;

export enum LibraryNames {
	user32 = 'User32',
	kernel32 = 'Kernel32',
}

let overwriteOptions: OverwriteOptions = {
	user32Fns: {},
	kernel32Fns: {}
};

const initialOptions = { unicode: true };

export class WinWin {

	/**
	 * User32 函数合集
	 * @template T 
	 * @returns user32 
	 */
	// eslint-disable-next-line @typescript-eslint/ban-types
	public user32<T = {}>(): TsWin32Fns<User32Fns & T> {
		const fns: TsWin32Fns<User32Fns> = ffi.Library(LibraryNames.user32, Object.assign({}, user32Fns, overwriteOptions.user32Fns));
		return Object.assign({}, fns, userMacroFns(fns));
	}
	
	/**
	 * Kernel32 函数集合
	 * @template T 
	 * @returns kernel32 
	 */
	// eslint-disable-next-line @typescript-eslint/ban-types
	public kernel32<T = {}>(): TsWin32Fns<Kernel32Fns & T> {
		return ffi.Library(LibraryNames.kernel32, Object.assign({}, kernel32Fns, overwriteOptions.kernel32Fns));
	}

	/**
	 * win32 所有函数集合
	 * @template T 
	 * @returns fns 
	 */
	// eslint-disable-next-line @typescript-eslint/ban-types
	public winFns<T = {}>(): TsWin32Fns<WinFns & T> {
		return Object.assign({}, this.user32(), this.kernel32()) as TsWin32Fns<WinFns & T>;
	}

	/**
	 * 自定义原生函数
	 * @param opt [OverwriteOptions]
	 */
	static overwrite(opt: OverwriteOptions = overwriteOptions): void {
		overwriteOptions = opt;
	}

	constructor (arg: WinWinOptions = initialOptions) {
		!!arg.unicode && (process.env.WIN_ICONV = '_UNICODE_');
	}
}

