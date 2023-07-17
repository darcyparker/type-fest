import type {JsonPrimitive} from './basic';

export type StructuredPrimitive =
	| JsonPrimitive
	| undefined
	| bigint
	| Boolean
	| String
	| Date
	| RegExp
	| ArrayBuffer
	| ArrayBufferView
	| Int8Array
	| Uint8Array
	| Uint8ClampedArray
	| Int16Array
	| Uint16Array
	| Int32Array
	| Uint32Array
	| Float32Array
	| Float64Array
	| BigInt64Array
	| BigUint64Array;

type StructuredWebAPIType =
	// | CropTarget
	// | GPUCompilationInfo //TODO https://github.com/gpuweb/types/blob/main/dist/index.d.ts
	// | GPUCompilationMessage //TODO https://github.com/gpuweb/types/blob/main/dist/index.d.ts
	| AudioData
	| Blob
	| CryptoKey
	| DOMException
	| DOMMatrix
	| DOMMatrixReadOnly
	| DOMPoint
	| DOMPointReadOnly
	| DOMQuad
	| DOMRect
	| DOMRectReadOnly
	| File
	| FileList
	| FileSystemDirectoryHandle
	| FileSystemFileHandle
	| ImageBitmap
	| ImageData
	| RTCCertificate
	| VideoFrame;

export type StructedClonableObject = {
	[Key in string | number]: StructedClonable;
};

export type StructedClonableArray =
	| StructedClonable[]
	| readonly StructedClonable[];

type StructuredCloneableError<
	T extends
	| Error
	| EvalError
	| RangeError
	| ReferenceError
	| SyntaxError
	| TypeError
	| URIError,
> = Error extends T
	? Error
	: T extends EvalError
		? EvalError
		: T extends RangeError
			? RangeError
			: T extends ReferenceError
				? ReferenceError
				: T extends SyntaxError
					? SyntaxError
					: T extends TypeError
						? TypeError
						: T extends URIError
							? URIError
							: Error;

export type StructedClonable =
	| StructuredPrimitive
	| StructuredWebAPIType
	| StructedClonableArray
	| StructedClonableObject
	| StructuredCloneableError<any>
	| Map<StructedClonable, StructedClonable>
	| Set<StructedClonable>;
