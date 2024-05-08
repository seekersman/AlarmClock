import { useState } from 'react';
import {
  View,
  Text,
  Switch,
  FlatList,
  Pressable,
  ListRenderItem,
} from 'react-native';
import type { PropsWithChildren } from 'react';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { timeType2CN, calculateRestTime } from '@/utils/time.ts';
import type { DataType, ScreenOptions } from '@/types/type.ts';

import styles from './index.css.ts';
import MoreIcon from '@/assets/images/more.svg';
import AddIcon from '@/assets/images/add.svg';

const initData: DataType[] = [
  {
    id: 1,
    time: '16:30',
    type: 'day',
    match: 'day',
    isEnabled: true,
    frame: 'AM',
    remark: '备注来的'
  },
  {
    id: 2,
    time: '16:30',
    type: 'day',
    match: 'day',
    isEnabled: true,
    frame: 'PM'
  },
  {
    id: 3,
    time: '16:30',
    type: 'day',
    match: 'day',
    isEnabled: true,
    frame: 'AM'
  },
  {
    id: 4,
    time: '16:30',
    type: 'day',
    match: 'day',
    isEnabled: true,
    frame: 'AM'
  },
  {
    id: 5,
    time: '16:30',
    type: 'day',
    match: 'day',
    isEnabled: true,
    frame: 'AM'
  },
  {
    id: 6,
    time: '16:30',
    type: 'day',
    match: 'day',
    isEnabled: true,
    frame: 'AM'
  },
  {
    id: 7,
    time: '16:30',
    type: 'day',
    match: 'day',
    isEnabled: true,
    frame: 'AM'
  },
  {
    id: 8,
    time: '16:30',
    type: 'day',
    match: 'day',
    isEnabled: true,
    frame: 'AM'
  }
]

// 自定义文本
type MTextProps = PropsWithChildren<{
  isEnabled: boolean;
  style?: Object;
}>
const MText = ({ style, isEnabled, children }: MTextProps) => {
  return <Text style={[style, !isEnabled && { color: '#9a9a9a' }]}>{children}</Text>
}

// 子项渲染函数
type ItemProps = DataType & {
  handleSwitchToggle: (item: DataType, value: boolean) => void;
  handleItemPress: (id: number, type: "update" | 'add') => void
}
const Item = (props: ItemProps) => {
  const handleToggle = (value: boolean) => props.handleSwitchToggle(props, value);
  const handlePress = () => props.handleItemPress(props.id, "update")
  return (
    <Pressable
      style={({ pressed }) => [
        styles.list_item,
        {
          backgroundColor: pressed ? '#f5f5f5' : 'white',
        },
      ]}
      onPress={handlePress}>
      <View style={styles.item_left}>
        <View style={styles.item_left_time}>
          <MText style={styles.item_left_time_text} isEnabled={props.isEnabled}>{props.time}</MText>
          <MText isEnabled={props.isEnabled}>{props.frame === 'AM' ? ' 上午' : " 下午"}</MText>
          {props.remark && (
            <MText isEnabled={props.isEnabled}> | </MText>
          )}
          {props.remark && (
            <MText isEnabled={props.isEnabled}>{props.remark}</MText>
          )}
        </View>
        <View style={styles.item_left_info}>
          <MText isEnabled={props.isEnabled}>{timeType2CN(props.type)}</MText>
          <MText isEnabled={props.isEnabled}> | </MText>
          <MText isEnabled={props.isEnabled}>{calculateRestTime(props.time, props.type)}</MText>
        </View>
      </View>
      <View>
        <Switch
          trackColor={{ false: '#EEEEEE', true: '#3482fe' }}
          thumbColor="#ffffff"
          ios_backgroundColor="#3482fe"
          onValueChange={handleToggle}
          value={props.isEnabled}
        />
      </View>
    </Pressable>
  )
}

// 显示页面
type HomeProps = {
  navigation: any;
}
const Home = ({ navigation }: HomeProps) => {
  const [data, setData] = useState(initData);
  const handleItemSwtichToggle: ItemProps['handleSwitchToggle'] = (item, value) => {
    item.isEnabled = value;
    setData((value) => {
      value = value.map(i => {
        if (i.id === item.id) return item;
        return i;
      })
      return value;
    })
  }
  const handNavigation: ItemProps['handleItemPress'] = (id, type) => {
    const d = data.find(i => i.id === id);
    navigation.push('Edit', {
      data: d,
      type
    })
  }
  const handlePress = () => {
    navigation.push('Edit', {
      type: 'add'
    })
  }
  // 渲染子项函数
  const ListRender: ListRenderItem<DataType> = ({ item }) => {
    return <Item {...item} handleSwitchToggle={handleItemSwtichToggle} handleItemPress={handNavigation} />
  }
  return (
    // 界面根容器
    <View style={styles.container}>
      {/* 设置栏 */}
      <View style={styles.setting}>
        {/* 占位 */}
        <View></View>
        {/* 标题栏 */}
        <View style={styles.setting_item}>
          <Text style={{ fontSize: 24, color: 'black' }}>闹钟</Text>
        </View>
        {/* 设置图标 */}
        <View style={styles.setting_item}>
          <MoreIcon width={20} height={20} />
        </View>
      </View>
      {/* 下拉列表 */}
      <FlatList
        style={styles.list}
        data={data}
        renderItem={ListRender}
        keyExtractor={(item) => item.id + ''}
        showsVerticalScrollIndicator={false}
      />
      <Pressable style={styles.add} onPress={handlePress}>
        <AddIcon />
      </Pressable>
    </View>
  )
}

export default Home;

export const homeOptions: (props: ScreenOptions) => NativeStackNavigationOptions = () => {
  return {
    headerShown: false
  }
}