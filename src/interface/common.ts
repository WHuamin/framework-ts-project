// export namespace Common {
export interface IObjectType {
  [key: string]: string | number | undefined | null | void;
}

// export interface DateFormatType extends ObjectType {
export interface IDateFormatType {
  [key: string]: string;
  // yyyy: number;
  // M: number;
  // d: number;
  // H: number;
  // m: number;
  // s: number;
  // MM: string;
  // dd: string;
  // HH: string;
  // mm: string;
  // ss: string;
}
// }
