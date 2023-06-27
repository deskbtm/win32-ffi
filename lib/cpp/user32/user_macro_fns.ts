import { TsWin32Fns, User32Fns } from '../../ts';
import { iconv } from '../utils';

export const MAKELONG = (a: number, b: number): number => (a & 0xfff) | ((b & 0xfff) << 16);

export const userMacroFns = (fns: TsWin32Fns<User32Fns>): any => {
	return {
		MAKELONG,
		CopyCursor: fns.CopyIcon,
		MAKELPARAM: MAKELONG,
		MAKELRESULT: MAKELONG,
		MAKEWPARAM: MAKELONG,
		GetMessage: [fns.GetMessageW, fns.GetMessageA][iconv()],
	};
};
