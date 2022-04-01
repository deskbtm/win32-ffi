/* eslint-disable no-unused-vars */
import { BOOL, DWORD, HRESULT, INT, LPDWORD, UINT } from './../user32/win_def';

import { TsWin32FnsBasic } from '../common';
import { LPSECURITY_ATTRIBUTES, LPTHREAD_START_ROUTINE } from '../user32/win_base';
import { SIZE_T } from '../user32/base_tsd';
import { LPVOID } from '../user32/win_def';
import { HANDLE, PCWSTR, PHANDLE, PULONG } from '../user32/win_nt';

export interface ProcessThreadsApiFns extends TsWin32FnsBasic {
	CreateThread: (
		lpThreadAttributes: LPSECURITY_ATTRIBUTES | null,
		dwStackSize: SIZE_T,
		lpStartAddress: LPTHREAD_START_ROUTINE,
		lpParameter: LPVOID,
		dwCreationFlags: DWORD,
		lpThreadId: LPDWORD
	) => HANDLE;
	ExitThread: (dwExitCode: DWORD) => void;
	SetThreadDescription: (hThread: HANDLE, lpThreadDescription: PCWSTR) => HRESULT;

	SetThreadPriority: (hThread: HANDLE, nPriority: INT) => BOOL;
	SetThreadPriorityBoost: (hThread: HANDLE, bDisablePriorityBoost: BOOL) => BOOL;
	SetThreadStackGuarantee: (StackSizeInBytes: PULONG) => BOOL;
	SetThreadToken: (Thread: PHANDLE, Token: HANDLE) => BOOL;
	SuspendThread: (hThread: HANDLE) => DWORD;
	SwitchToThread: () => BOOL;
	TerminateProcess: (hProcess: HANDLE, uExitCode: UINT) => BOOL;
	TerminateThread: (hThread: HANDLE, dwExitCode: DWORD) => BOOL;
	TlsAlloc: () => DWORD;
	TlsFree: (dwTlsIndex: DWORD) => BOOL;
	TlsGetValue: (dwTlsIndex: DWORD) => LPVOID;
	TlsSetValue: (dwTlsIndex: DWORD, lpTlsValue: LPVOID) => BOOL;
}
