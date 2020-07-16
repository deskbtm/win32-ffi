/* eslint-disable @typescript-eslint/ban-types */
/**
 *  for 64bit 
 */
/// <reference types="node" />
import * as ref from 'ref-napi';

export type BigIntString = bigint | string;
export type Value = number | boolean | BigIntString | void | Buffer;
export type Pointer = Buffer;

export interface TsWin32FnsBasic {
	[fnName: string]: (...args: any[]) => Value;
}

export interface FfiWin32Fns {
	[fnName: string]: any[];
}

interface _AsyncCallback<P> {
	(err: Error, res: P): void;
}

export type TsWin32Fns<T extends TsWin32FnsBasic> = {
	[P in keyof T]: T[P] & { async: (...args: Array<_AsyncCallback<ReturnType<T[P]>> | Value>) => void };
}

// export type RefStruct<T> = RefBuffer<T>;
// fix struct doesn't have ref
export interface _RefBuffer extends Buffer {
	address(): number;
	isNull(): boolean;
	ref(): any;
	deref(): any;
	readObject: any;
	writeObject: any;
	readPointer: any;
	writePointer: any;
	readCString: any;
	writeCString: any;
	readInt64BE: any;
	writeInt64BE: any;
	readUInt64BE: any;
	writeUInt64BE: any;
	readInt64LE: any;
	writeInt64LE: any;
	reinterpret: any;
	reinterpretUntilZeros: any;
	type?: ref.Type;
}

export interface RefBuffer extends _RefBuffer {
	readObject: (offset?: number) => Object;
	writeObject: (offset: number, object: Object) => void;
	readPointer: (offset?: number, length?: number) => RefBuffer;
	writePointer: (offset: number, pointer: RefBuffer) => void;
	readCString: (offset?: number) => string;
	writeCString: (offset: number, string: string, encoding?: string) => void;
	readInt64BE: (offset?: number) => any;
	writeInt64BE: (offset: number, input: number) => void;
	readUInt64BE: (offset?: number) => any;
	writeUInt64BE: (offset: number, input: number) => void;
	readInt64LE: (offset?: number) => any;
	writeInt64LE: (offset: number, input: number) => void;
	reinterpret: (size: number, offset?: number) => RefBuffer;
	reinterpretUntilZeros: (size: number, offset?: number) => RefBuffer;
}

// export interface RefStruct<T = {}> extends RefBuffer {

// }

export type RefStruct<T = {}> = RefBuffer & T;

// fix struct doesn't have ref
// export interface RefStruct<T = {}> extends TempRefBuffer<T> {
	// address(buffer: RefBuffer): number;
	// isNull(buffer: RefBuffer): boolean;
	// ref(): T;
	// deref(): T;
	// deref(buffer: Buffer): any;
	// readObject(buffer: Buffer, offset?: number): Object;
	// writeObject(buffer: Buffer, offset: number, object: Object): void;
	// readPointer(buffer: Buffer, offset?: number,
	// 	length?: number): Buffer;
	// writePointer(buffer: Buffer, offset: number,
	// 	pointer: Buffer): void;
	// readCString(buffer: Buffer, offset?: number): string;
	// writeCString(buffer: Buffer, offset: number,
	// 	string: string, encoding?: string): void;
	// readInt64BE(buffer: Buffer, offset?: number): any;

	// writeInt64BE(buffer: Buffer, offset: number, input: number): void;
	// readUInt64BE(buffer: Buffer, offset?: number): any;
	// writeUInt64BE(buffer: Buffer, offset: number, input: number): void;
	// readInt64LE(buffer: Buffer, offset?: number): any;
	// writeInt64LE: typeof writeInt64LE;
	// reinterpret: typeof reinterpret;
	// reinterpretUntilZeros: typeof reinterpretUntilZeros;
	// type?: ref.Type;
// }
