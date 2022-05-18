const _ARCH_ = process.arch;
const _UNICODE_ = process.env.WIN_ICONV;
/**
 *			@return {number} x64 = 0  x32 = 1
 */

export const arch = (): number => {
	switch (_ARCH_) {
		case 'x64':
			return 0;
		case 'x32':
			return 1;
		default:
			return 0;
	}
};

/**
 *			@return {number} unicode = 0  ascii = 1
 */

export const iconv = (): number => {
	switch (_UNICODE_) {
		case '_UNICODE_':
			return 0;
		default:
			return 1;
	}
};
