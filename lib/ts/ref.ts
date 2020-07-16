/* eslint-disable @typescript-eslint/ban-types */

// Type definitions for ref-napi 1.4
// Project: https://github.com/node-ffi-napi/ref-napi
// Definitions by: Keerthi Niranjan <https://github.com/keerthi16>, Kiran Niranjan <https://github.com/KiranNiranjan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Type {
	/** The size in bytes required to hold this datatype. */
	size: number;
	/** The current level of indirection of the buffer. */
	indirection: number;
	/** To invoke when `ref.get` is invoked on a buffer of this type. */
	get(buffer: Buffer, offset: number): any;
	/** To invoke when `ref.set` is invoked on a buffer of this type. */
	set(buffer: Buffer, offset: number, value: any): void;
	/** The name to use during debugging for this datatype. */
	name?: string;
	/** The alignment of this datatype when placed inside a struct. */
	alignment?: number;
}

export interface Ref {

	NULL: Buffer;

	NULL_POINTER: Buffer;
	/** Get the memory address of buffer. */
	address(buffer: Buffer): number;

	hexAddress(buffer: Buffer): number;

	/** Allocate the memory with the given value written to it. */
	alloc(type: Type, value?: any): Buffer;
	/** Allocate the memory with the given value written to it. */
	alloc(type: string, value?: any): Buffer;

	/**
	 * Allocate the memory with the given string written to it with the given
	 * encoding (defaults to utf8). The buffer is 1 byte longer than the
	 * string itself, and is NULL terminated.
	 */
	allocCString(string: string, encoding?: string): Buffer;

	/** Coerce a type.*/
	coerceType(type: Type): Type;
	/** Coerce a type. String are looked up from the ref.types object. */
	coerceType(type: string): Type;

	/**
	 * Get value after dereferencing buffer.
	 * That is, first it checks the indirection count of buffer's type, and
	 * if it's greater than 1 then it merely returns another Buffer, but with
	 * one level less indirection.
	 */
	deref(buffer: Buffer): any;

	/** Create clone of the type, with decremented indirection level by 1. */
	derefType(type: Type): Type;
	/** Create clone of the type, with decremented indirection level by 1. */
	derefType(type: string): Type;
	/** Represents the native endianness of the processor ("LE" or "BE"). */
	endianness: string;
	/** Check the indirection level and return a dereferenced when necessary. */
	get(buffer: Buffer, offset?: number, type?: Type): any;
	/** Check the indirection level and return a dereferenced when necessary. */
	get(buffer: Buffer, offset?: number, type?: string): any;
	/** Get type of the buffer. Create a default type when none exists. */
	getType(buffer: Buffer): Type;
	/** Check the NULL. */
	isNull(buffer: Buffer): boolean;
	/** Read C string until the first NULL. */
	readCString(buffer: Buffer, offset?: number): string;

	/**
	 * Read a big-endian signed 64-bit int.
	 * If there is losing precision, then return a string, otherwise a number.
	 * @return {number|string}
	 */
	readInt64BE(buffer: Buffer, offset?: number): any;

	/**
	 * Read a little-endian signed 64-bit int.
	 * If there is losing precision, then return a string, otherwise a number.
	 * @return {number|string}
	 */
	readInt64LE(buffer: Buffer, offset?: number): any;

	/** Read a JS Object that has previously been written. */
	readObject(buffer: Buffer, offset?: number): Object;
	/** Read data from the pointer. */
	readPointer(buffer: Buffer, offset?: number,
		length?: number): Buffer;
	/**
	 * Read a big-endian unsigned 64-bit int.
	 * If there is losing precision, then return a string, otherwise a number.
	 * @return {number|string}
	 */
	readUInt64BE(buffer: Buffer, offset?: number): any;

	/**
	 * Read a little-endian unsigned 64-bit int.
	 * If there is losing precision, then return a string, otherwise a number.
	 * @return {number|string}
	 */
	readUInt64LE(buffer: Buffer, offset?: number): any;

	/** Create pointer to buffer. */
	ref(buffer: Buffer): Buffer;
	/** Create clone of the type, with incremented indirection level by 1. */
	refType(type: Type): Type;
	/** Create clone of the type, with incremented indirection level by 1. */
	refType(type: string): Type;

	/**
	 * Create buffer with the specified size, with the same address as source.
	 * This  "attaches" source to the returned buffer to prevent it from
	 * being garbage collected.
	 */
	reinterpret(buffer: Buffer, size: number,
		offset?: number): Buffer;
	/**
	 * Scan past the boundary of the buffer's length until it finds size number
	 * of aligned NULL bytes.
	 */
	reinterpretUntilZeros(buffer: Buffer, size: number,
		offset?: number): Buffer;

	/** Write pointer if the indirection is 1, otherwise write value. */
	set(buffer: Buffer, offset: number, value: any, type?: Type): void;
	/** Write pointer if the indirection is 1, otherwise write value. */
	set(buffer: Buffer, offset: number, value: any, type?: string): void;
	/** Write the string as a NULL terminated. Default encoding is utf8. */
	writeCString(buffer: Buffer, offset: number,
		string: string, encoding?: string): void;
	/** Write a big-endian signed 64-bit int. */
	writeInt64BE(buffer: Buffer, offset: number, input: number): void;
	/** Write a big-endian signed 64-bit int. */
	writeInt64BE(buffer: Buffer, offset: number, input: string): void;
	/** Write a little-endian signed 64-bit int. */
	writeInt64LE(buffer: Buffer, offset: number, input: number): void;
	/** Write a little-endian signed 64-bit int. */
	writeInt64LE(buffer: Buffer, offset: number, input: string): void;

	/**
	 * Write the JS Object. This  "attaches" object to buffer to prevent
	 * it from being garbage collected.
	 */
	writeObject(buffer: Buffer, offset: number, object: Object): void;

	/**
	 * Write the memory address of pointer to buffer at the specified offset. This
	 *  "attaches" object to buffer to prevent it from being garbage collected.
	 */
	writePointer(buffer: Buffer, offset: number,
		pointer: Buffer): void;

	/** Write a little-endian unsigned 64-bit int. */
	writeUInt64BE(buffer: Buffer, offset: number, input: number): void;
	/** Write a little-endian unsigned 64-bit int. */
	writeUInt64BE(buffer: Buffer, offset: number, input: string): void;

	/**
	 * Attach object to buffer such.
	 * It prevents object from being garbage collected until buffer does.
	 */
	_attach(buffer: Buffer, object: Object): void;

	/** Same as ref.reinterpret, except that this version does not attach buffer. */
	_reinterpret(buffer: Buffer, size: number,
		offset?: number): Buffer;
	/** Same as ref.reinterpretUntilZeros, except that this version does not attach buffer. */
	_reinterpretUntilZeros(buffer: Buffer, size: number,
		offset?: number): Buffer;
	/** Same as ref.writePointer, except that this version does not attach pointer. */
	_writePointer(buffer: Buffer, offset: number,
		pointer: Buffer): void;
	/** Same as ref.writeObject, except that this version does not attach object. */
	_writeObject(buffer: Buffer, offset: number, object: Object): void;

	/** Default types. */
	types: {
		void: Type; int64: Type; ushort: Type;
		int: Type; uint64: Type; float: Type;
		uint: Type; long: Type; double: Type;
		int8: Type; ulong: Type; Object: Type;
		uint8: Type; longlong: Type; CString: Type;
		int16: Type; ulonglong: Type; bool: Type;
		uint16: Type; char: Type; byte: Type;
		int32: Type; uchar: Type; size_t: Type;
		uint32: Type; short: Type;
	};

}

