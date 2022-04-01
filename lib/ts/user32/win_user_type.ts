
import { Pointer } from '../common';
import { HANDLE, PVOID, VOID } from './win_nt';
import { DWORD } from './win_def';

/**
 *		Proc		
 */
export type WNDPROC = Pointer;
export type DLGPROC = Pointer;
export type WNDENUMPROC = Pointer;
export type DRAWSTATEPROC = Pointer;
export type DESKTOPENUMPROCA = Pointer;
export type DESKTOPENUMPROCW = Pointer;
export type TIMERPROC = Pointer;
export type WINEVENTPROC = Pointer;
export type WINSTAENUMPROCA = Pointer;
export type GRAYSTRINGPROC = Pointer;
export type PROPENUMPROCA = Pointer;
export type PROPENUMPROCEXA = Pointer;
export type PROPENUMPROCEXW = Pointer;
export type PROPENUMPROCW = Pointer;
export type WINSTAENUMPROCW = Pointer;
export type MONITORENUMPROC = Pointer;
export type SENDASYNCPROC = Pointer;

/**
 *			
 */

export type HGESTUREINFO = HANDLE;
export type HTOUCHINPUT = HANDLE;
export type HRAWINPUT = HANDLE;
export type HSYNTHETICPOINTERDEVICE = HANDLE;
export type HWINEVENTHOOK = HANDLE;
export type DPI_AWARENESS_CONTEXT = HANDLE;
export type HMONITOR = HANDLE;

export type HDEVNOTIFY = PVOID;
export type HPOWERNOTIFY = PVOID;
export type MENUTEMPLATEA = VOID;
export type MENUTEMPLATEW = VOID;

/**
 *			enum
 */
export type POINTER_INPUT_TYPE = DWORD;
export type POINTER_FEEDBACK_MODE = DWORD;
export type DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS = Pointer;
export type DIALOG_DPI_CHANGE_BEHAVIORS = Pointer;
export type ORIENTATION_PREFERENCE = Pointer;
export type PAR_STATE = Pointer;
export type DPI_AWARENESS = Pointer;
export type DPI_HOSTING_BEHAVIOR = Pointer;
export type FEEDBACK_TYPE = Pointer;
export type DISPLAYCONFIG_TOPOLOGY_ID = Pointer;
