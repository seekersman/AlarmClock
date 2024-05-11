import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import WheelPicker from "react-native-wheely";

import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import CancelIcon from '@/assets/images/cancel.svg';
import EnsureIcon from '@/assets/images/ensure.svg';
import type { DataType, ScreenOptions, KeyValue } from "@/types/type.ts";
import styles from "./index.css.ts";


type EditProps = {
  navigation: any;
  route: any;
}
type Route = {
  key: string;
  name: string;
  params: {
    data: DataType,
    type: 'update' | 'add'
  }
}
type Navigation = {
  goBack: () => void;
}

const frames = ['上午', '下午'];
const hours = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
];
const minutes = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59"
]

const Edit = ({ route, navigation }: EditProps) => {
  const r = route as Route, n = navigation as Navigation;
  const handleCancel = () => {
    n.goBack();
  }
  const [frame, setSelectedFrame] = useState(0);
  const [hour, setSelectedHour] = useState(0);
  const [minute, setSelectedMinute] = useState(0);
  return (
    // 根容器
    <View>
      {/* 标题栏 */}
      <View style={styles.setting}>
        <View>
          <Pressable onPress={handleCancel}>
            <CancelIcon width={15} height={15} />
          </Pressable>
        </View>
        <View>
          <View>
            <Text style={{ fontSize: 24, color: 'black' }}>{r.params.type === 'add' ? '添加' : '编辑'}闹钟</Text>
          </View>
        </View>
        <View>
          <EnsureIcon width={20} height={20} />
        </View>
      </View>
      <View style={styles.date}>
        <WheelPicker
          selectedIndex={frame}
          options={frames}
          onChange={(index) => setSelectedFrame(index)}
        />
        <WheelPicker
          selectedIndex={hour}
          options={hours}
          onChange={(index) => setSelectedHour(index)}
        />
        <View>
          <Text>时</Text>
        </View>
        <WheelPicker
          selectedIndex={minute}
          options={minutes}
          onChange={(index) => setSelectedMinute(index)}
        />
        <View>
          <Text>分</Text>
        </View>
      </View>
    </View >
  )
}

export default Edit;


export const editOptions: (props: ScreenOptions) => NativeStackNavigationOptions = () => {
  return {
    headerShown: false
  }
}