import { useState } from 'react';
import {
  View,
  Text,
  Switch,
  FlatList,
  ListRenderItem
} from 'react-native';
import type { PropsWithChildren } from 'react';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { timeType2CN, calculateRestTime } from '@/utils/time.ts';
import type { DataType } from '@/types/time.ts';

import styles from './index.css.ts';


const initData: DataType[] = [
  {
    id: 1,
    time: '16:30',
    type: 'day',
    match: 'day',
    isEnabled: true,
    frame: 'AM'
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
  }
]

type ItemProps = DataType & { handleSwitchToggle: (value: boolean) => void }

type MTextProps = PropsWithChildren<{
  isEnabled: boolean;
  style?: Object;
}>
const MText = ({ style, isEnabled, children }: MTextProps) => {
  return <Text style={[style, !isEnabled && { color: '#9a9a9a' }]}>{children}</Text>
}

const Item = (props: ItemProps) => {
  return (
    <View key={props.id} style={styles.item}>
      <View style={styles.item_left}>
        <View style={styles.item_left_time}>
          <MText style={styles.item_left_time_text} isEnabled={props.isEnabled}>{props.time}</MText>
          {/* <Text style={[styles.item_left_time_text, !props.isEnabled && { color: '#9a9a9a' }]}></Text> */}
          <MText isEnabled={props.isEnabled}>{props.frame === 'AM' ? '上午' : "下午"}</MText>
          {/* <Text style={[!props.isEnabled && { color: '#9a9a9a' }]}>{props.frame === 'AM' ? '上午' : "下午"}</Text> */}
          <MText isEnabled={props.isEnabled}> | </MText>
          {/* <Text style={[!props.isEnabled && { color: '#9a9a9a' }]}> | </Text> */}

        </View>
        <View style={styles.item_left_info}>
          <MText isEnabled={props.isEnabled}>{timeType2CN(props.type)}</MText>
          {/* <Text style={[!props.isEnabled && { color: '#9a9a9a' }]}>{timeType2CN(props.type)}</Text> */}
          <MText isEnabled={props.isEnabled}> | </MText>
          {/* <Text style={[!props.isEnabled && { color: '#9a9a9a' }]}> | </Text> */}
          <MText isEnabled={props.isEnabled}>{calculateRestTime(props.time, props.type)}</MText>
          {/* <Text style={[!props.isEnabled && { color: '#9a9a9a' }]}>{calculateRestTime(props.time, props.type)}</Text> */}
        </View>
      </View>
      <View style={styles.item_right}>
        <Switch
          trackColor={{ false: '#EEEEEE', true: '#3482fe' }}
          thumbColor="#ffffff"
          ios_backgroundColor="#3e3e3e"
          onValueChange={props.handleSwitchToggle}
          value={props.isEnabled}
        />
      </View>
    </View>
  )
}

const Home = () => {
  const [data, setData] = useState(initData);
  const handleItemSwtichToggle = (item: DataType, value: boolean): void => {
    item.isEnabled = value;
    setData((value) => {
      value = value.map(i => {
        if (i.id === item.id) return item;
        return i;
      })
      return value;
    })
  }

  const ListRender: ListRenderItem<DataType> = ({ item }) => {
    return <Item {...item} handleSwitchToggle={(value) => handleItemSwtichToggle(item, value)} />
  }

  return (
    // 界面根容器
    <View style={styles.container}>
      {/* 下拉列表 */}
      <FlatList
        style={styles.list}
        data={data}
        renderItem={ListRender}
        keyExtractor={(item) => item.id + ''}
      />
    </View>
  )
}

export default Home;

export const options: NativeStackNavigationOptions = {
  title: '闹钟'
}