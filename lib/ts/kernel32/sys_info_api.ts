import { TsWin32FnsBasic } from "../common";

export interface SysInfoApiFns extends TsWin32FnsBasic {
	GetTickCount: () => any
}