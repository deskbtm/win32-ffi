import { PVOID, VOID } from './win_nt';
import { DWORD } from './win_def';
import { _DECLARE_HANDLE } from './win_common';

/**
 *	Proc
 */
export const WNDPROC = 'pointer';
export const DLGPROC = 'pointer';
export const WNDENUMPROC = 'pointer';
export const DRAWSTATEPROC = 'pointer';
export const DESKTOPENUMPROCA = 'pointer';
export const DESKTOPENUMPROCW = 'pointer';
export const TIMERPROC = 'pointer';
export const WINEVENTPROC = 'pointer';
export const WINSTAENUMPROCA = 'pointer';
export const GRAYSTRINGPROC = 'pointer';
export const PROPENUMPROCA = 'pointer';
export const PROPENUMPROCEXA = 'pointer';
export const PROPENUMPROCEXW = 'pointer';
export const PROPENUMPROCW = 'pointer';
export const WINSTAENUMPROCW = 'pointer';
export const MONITORENUMPROC = 'pointer';
export const SENDASYNCPROC = 'pointer';

export const HGESTUREINFO = _DECLARE_HANDLE;
export const HTOUCHINPUT = _DECLARE_HANDLE;
export const HRAWINPUT = _DECLARE_HANDLE;
export const HSYNTHETICPOINTERDEVICE = _DECLARE_HANDLE;
export const HWINEVENTHOOK = _DECLARE_HANDLE;
export const DPI_AWARENESS_CONTEXT = _DECLARE_HANDLE;
export const HMONITOR = _DECLARE_HANDLE;

export const HDEVNOTIFY = PVOID;
export const HPOWERNOTIFY = PVOID;
export const MENUTEMPLATEA = VOID;
export const MENUTEMPLATEW = VOID;

/**
 * Enum
 */
export const POINTER_INPUT_TYPE = DWORD;
export const POINTER_FEEDBACK_MODE = DWORD;
export const DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS = 'pointer';
export const DIALOG_DPI_CHANGE_BEHAVIORS = 'pointer';
export const ORIENTATION_PREFERENCE = 'pointer';
export const PAR_STATE = 'pointer';
export const DPI_AWARENESS = 'pointer';
export const DPI_HOSTING_BEHAVIOR = 'pointer';
export const FEEDBACK_TYPE = 'pointer';
export const DISPLAYCONFIG_TOPOLOGY_ID = 'pointer';
export const DISPLAYCONFIG_MODE_INFO = 'pointer';
