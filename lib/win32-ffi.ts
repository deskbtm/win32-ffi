/* eslint-disable no-unused-vars */
import { TsWin32Fns, User32Fns, Kernel32Fns, FfiWin32Fns } from './ts';
import { userMacroFns } from './cpp/user32/user_macro_fns';
import { user32Fns } from './cpp/user32';
import { kernel32Fns } from './cpp/kernel32';
import { SecureLibrary } from './library';

interface FFIOptions {
	unicode: boolean;
}

interface WindowsLibs {
	user32Fns?: FfiWin32Fns;
	kernel32Fns?: FfiWin32Fns;
}

export type Win32Fns = User32Fns & Kernel32Fns;

export enum LibraryNames {
	user32 = 'User32',
	kernel32 = 'Kernel32',
}

let overrideOptions: WindowsLibs = {
	user32Fns: {},
	kernel32Fns: {},
};

const defaultOptions = {
	/**
	 * false ascii
	 * @see {@link https://docs.microsoft.com/en-us/windows/win32/learnwin32/working-with-strings}
	 */
	unicode: true,
};

export class Win32ffi {
	constructor(arg: FFIOptions = defaultOptions) {
		!!arg.unicode && (process.env.WIN_ICONV = '_UNICODE_');
	}
	/**
	 * User32
	 * @template T
	 * @returns user32
	 */
	// eslint-disable-next-line @typescript-eslint/ban-types
	public user32<T = {}>(): TsWin32Fns<User32Fns & T> {
		const fns: TsWin32Fns<User32Fns> = SecureLibrary(
			LibraryNames.user32,
			Object.assign({}, user32Fns as any, overrideOptions.user32Fns)
		);
		return Object.assign({}, fns, userMacroFns(fns));
	}

	/**
	 * Kernel32
	 * @template T
	 * @returns kernel32
	 */
	public kernel32<T = Record<string, any>>(): TsWin32Fns<Kernel32Fns & T> {
		return SecureLibrary(LibraryNames.kernel32, Object.assign({}, kernel32Fns, overrideOptions.kernel32Fns));
	}

	/**
	 * win32 Api
	 * @template T
	 * @returns fns
	 */
	public winFns<T = Record<string, any>>(): TsWin32Fns<Win32Fns & T> {
		return Object.assign({}, this.user32(), this.kernel32()) as TsWin32Fns<Win32Fns & T>;
	}

	/**
	 * @param opt [WindowsLibs]
	 */
	static assign(opt: WindowsLibs = overrideOptions): void {
		overrideOptions = opt;
	}
}
