import { DWORD, LPDWORD } from './../user32/win_def';

import { TsWin32FnsBasic } from "../common";
import { LPSECURITY_ATTRIBUTES, LPTHREAD_START_ROUTINE } from "../user32/win_base";
import { SIZE_T } from "../user32/base_tsd";
import { LPVOID } from "../user32/win_def";
import { HANDLE } from '../user32/win_nt';

export interface ProcessThreadsApiFns extends TsWin32FnsBasic {
	CreateThread: (lpThreadAttributes: LPSECURITY_ATTRIBUTES | null, dwStackSize: SIZE_T, lpStartAddress: LPTHREAD_START_ROUTINE, lpParameter: LPVOID, dwCreationFlags: DWORD, lpThreadId: LPDWORD) => HANDLE;
	ExitThread: (dwExitCode: DWORD) => void;
}