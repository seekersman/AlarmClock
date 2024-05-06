/**
 * 关于时间方面的计算工具方法
 */

import type { TimeType } from "@/types/time.ts";

/** 将类型转成中文 */
export const timeType2CN = (type: TimeType): string => {
  switch (type) {
    case 'once': return '单次';
    case 'day': return '每天';
    case 'week': return '每周';
    case 'mouth': return '每月';
    case 'year': return '每年';
    default: return '自定义';
  }
}

/** 计算闹钟距离下次响铃时间 */
export const calculateRestTime = (time: string, type: TimeType) => {
  const now = new Date();
  let t: Date;
  // if (type === 'day') {
  // }
  return time
}