import { View, Text, Pressable } from "react-native";

import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import CancelIcon from '@/assets/images/cancel.svg';
import EnsureIcon from '@/assets/images/ensure.svg';
import type { DataType, ScreenOptions } from "@/types/type.ts";
import styles from "./index.css.ts";
import Select from "@/components/Select/index.tsx";


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

const data = ['上午', '下午']

const Edit = ({ route, navigation }: EditProps) => {
  const r = route as Route, n = navigation as Navigation;
  const handleCancel = () => {
    n.goBack();
  }
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
      <Select data={data} />
    </View >
  )
}

export default Edit;


export const editOptions: (props: ScreenOptions) => NativeStackNavigationOptions = () => {
  return {
    headerShown: false
  }
}