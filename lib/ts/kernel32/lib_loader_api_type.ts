import { Pointer } from '../common';
import { PVOID } from "../user32";

export type DLL_DIRECTORY_COOKIE = PVOID;

/**
 *			Proc
 */

export type ENUMRESLANGPROCA = Pointer;
export type ENUMRESLANGPROCW = Pointer;
export type ENUMRESNAMEPROCA = Pointer;
export type ENUMRESNAMEPROCW = Pointer;
export type ENUMRESTYPEPROCA = Pointer;
export type ENUMRESTYPEPROCW = Pointer;