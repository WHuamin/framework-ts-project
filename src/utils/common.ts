import { IDateFormatType } from "@/interface/common";

// 动态获取对象的属性值
export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

/**
 * 格式化日期时间
 * @param date 日期时间
 * @param format 格式，默认【yyyy-MM-dd HH:mm:ss】
 * @returns 返回匹配格式的日期时间
 */
export const formatDatetime = (date: Date | string = "1970-01-01 00:00:00", format: string = "yyyy-MM-dd HH:mm:ss"): string => {
  if (typeof date === "string") {
    date = new Date(date.replace(/-/g, "/"));
  } else if (typeof date === "number") {
    date = new Date(date);
  }

  if (!(date instanceof Date)) return "";

  const dict: IDateFormatType = {
    yyyy: date.getFullYear() + "",
    M: date.getMonth() + 1 + "",
    d: date.getDate() + "",
    H: date.getHours() + "",
    m: date.getMinutes() + "",
    s: date.getSeconds() + "",
    MM: ("" + (date.getMonth() + 101)).slice(1),
    dd: ("" + (date.getDate() + 100)).slice(1),
    HH: ("" + (date.getHours() + 100)).slice(1),
    mm: ("" + (date.getMinutes() + 100)).slice(1),
    ss: ("" + (date.getSeconds() + 100)).slice(1)
  };

  return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, (item) => dict[item]);
};
