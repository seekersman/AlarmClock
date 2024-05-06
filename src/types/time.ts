export type TimeType = 'once' | 'day' | 'week' | 'mouth' | 'year' | 'custom';
export type TimeFrame = 'AM' | 'PM';
export type DataType = {
  id: number; // id标识，也可以用来识别是第多少个
  time: string; // 存储时间节点
  type: TimeType; // 闹钟类型
  frame: TimeFrame; // 时段，上午 am ，下午 pm
  match: string | undefined; // 匹配的正则表达式
  remakr?: string; // 备注
  isEnabled: boolean; // 是否可用
}