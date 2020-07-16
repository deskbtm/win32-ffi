import { TsWin32FnsBasic } from "../common";

export interface LibLoaderApiFns extends TsWin32FnsBasic {
	AddDllDirectory: (NewDirectory: any) => any;
	DisableThreadLibraryCalls: (hLibModule: any) => any;
	EnumResourceLanguagesExA: (hModule: any, lpType: any, lpName: any, lpEnumFunc: any, lParam: any, dwFlags: any, LangId: any) => any;
	EnumResourceLanguagesExW: (hModule: any, lpType: any, lpName: any, lpEnumFunc: any, lParam: any, dwFlags: any, LangId: any) => any;
	EnumResourceNamesExA: (hModule: any, lpType: any, lpEnumFunc: any, lParam: any, dwFlags: any, LangId: any) => any;
	EnumResourceNamesExW: (hModule: any, lpType: any, lpEnumFunc: any, lParam: any, dwFlags: any, LangId: any) => any;
	EnumResourceTypesExA: (hModule: any, lpEnumFunc: any, lParam: any, dwFlags: any, LangId: any) => any;
	EnumResourceTypesExW: (hModule: any, lpEnumFunc: any, lParam: any, dwFlags: any, LangId: any) => any;
	FindStringOrdinal: (dwFindStringOrdinalFlags: any, lpStringSource: any, cchSource: any, lpStringValue: any, cchValue: any, bIgnoreCase: any) => any;
	FreeLibrary: (hLibModule: any) => any;
	FreeLibraryAndExitThread: (hLibModule: any, dwExitCode: any) => any;
	FreeResource: (hResData: any) => any;
	GetModuleFileNameA: (hModule: any, lpFilename: any, nSize: any) => any;
	GetModuleFileNameW: (hModule: any, lpFilename: any, nSize: any) => any;
	GetModuleHandleA: (lpModuleName: any) => any;
	GetModuleHandleExA: (dwFlags: any, lpModuleName: any, phModule: any) => any;
	GetModuleHandleExW: (dwFlags: any, lpModuleName: any, phModule: any) => any;
	GetModuleHandleW: (lpModuleName: any) => any;
	GetProcAddress: (hModule: any, lpProcName: any) => any;
	LoadLibraryA: (lpLibFileName: any) => any;
	LoadLibraryExA: (lpLibFileName: any, hFile: any, dwFlags: any) => any;
	LoadLibraryExW: (lpLibFileName: any, hFile: any, dwFlags: any) => any;
	LoadLibraryW: (lpLibFileName: any) => any;
	LoadResource: (hModule: any, hResInfo: any) => any;
	LockResource: (hResData: any) => any;
	RemoveDllDirectory: (Cookie: any) => any;
	SetDefaultDllDirectories: (DirectoryFlags: any) => any;
	SizeofResource: (hModule: any, hResInfo: any) => any;
}