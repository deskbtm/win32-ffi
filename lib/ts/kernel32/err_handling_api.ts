import { DWORD } from './../user32/win_def';
import { TsWin32FnsBasic } from "../common";

export interface ErrHandlingApi extends TsWin32FnsBasic {
	GetLastError: () => DWORD,
}