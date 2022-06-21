/**
 * Windows C++ Node.JS addon, that implements COM IDispatch object wrapper, analog ActiveXObject on cscript.exe
 * all documentation is available here: https://github.com/durs/node-activex/blob/master/README.md
 */
declare module "winax" {

  /**
   * Supported COMVariant Types
   */
  export type COMVariantType =
    "int" | //VT_INT
    "uint" | //VT_UINT
    "int8" | "char" | //VT_I1
    "uint8" | " uchar" | " byte" | //VT_UI1
    "int16" | " short" | //VT_I2
    "uint16" | " ushort" | //VT_UI2
    "int32" | //VT_I4
    "uint32" | //VT_UI4
    "int64" | " long" | //VT_I8
    "uint64" | " ulong" | //VT_UI8
    "currency" | //VT_CY
    "float" | //VT_R4
    "double" | //VT_R8
    "string" | //VT_BSTR
    "date" | //VT_DATE
    "decimal" | //VT_DECIMAL
    "variant" | //VT_VARIANT
    "null" | //VT_NULL
    "empty" | //VT_EMPTY
    "byref"; //VT_BYREF or use prefix 'p' to indicate reference to the current type

  /**
   * Creates an object wrapper to an ActiveX Component
   */
  export class Object {
    constructor(string: string, options?: {
      activate: boolean,
      async: boolean,
      type: boolean
    });
  }

  /**
   * Return a value casted by
   *
   * @param      {any}     value   The value passed to be cased
   * @param      {COMVariantType}  type    The COM Variant Type
   * @return     {any}     { Returns a value of type COM Variant }
   */
  export function cast(value: any, type?: COMVariantType): any;

  /**
   * Releases the resources declared by an winax Object
   *
   * @param      {winax ActiveX Object}  winaxObj  The winax object
   * @param      {any}     params    temporary resources created from the first parameter. its optional
   * @return     {any}     { could return void or anything depending on the type of object }
   */
  export function release(winaxObj: Object, ...params: any): any;

  /**
   * Gets the connection points of an winax object
   *
   * @param      {Object}  winaxObj  The winax object
   */
  export function getConnectionPoints(winaxObj: Object): any[];

  /**
   * allows ActiveX event to be dispatched
   */
  export function peekAndDispatchMessages():void;

  /**
   * This class describes a variant.
   *
   * @class      Variant (name)
   */
  export class Variant {
    /**
     * Constructs a new instance.
     *
     * @class      ClassName (name)
     * @param      {any}             value    Any value to use for the Variant Value
     * @param      {COMVariantType}  variant  Optional: A COM Variant Type string
     */
    constructor(value: any, variant?: COMVariantType);
    public assign(value: any): void;
    public cast(type: COMVariantType): void;
    public clear(): void;
  }
}
