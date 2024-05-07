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
import type { DataType } from '@/types/time.ts';

import styles from './index.css.ts';
import AddIcon from './add.svg';


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
type ItemProps = DataType & { handleSwitchToggle: (value: boolean) => void, handleItemPress: (id: number) => void }
const Item = (props: ItemProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.item,
        {
          backgroundColor: pressed ? '#f5f5f5' : 'white',
        },
      ]}
      onPress={() => props.handleItemPress(props.id)}>
      <View style={styles.item_left}>
        <View style={styles.item_left_time}>
          <MText style={styles.item_left_time_text} isEnabled={props.isEnabled}>{props.time}</MText>
          <MText isEnabled={props.isEnabled}>{props.frame === 'AM' ? '上午' : "下午"}</MText>
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
      <View style={styles.item_right}>
        <Switch
          trackColor={{ false: '#EEEEEE', true: '#3482fe' }}
          thumbColor="#ffffff"
          ios_backgroundColor="#3e3e3e"
          onValueChange={props.handleSwitchToggle}
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
  const handleItemPress = (id: number) => {
    const d = data.find(i => i.id === id);
    navigation.push('Edit', {
      ...d,
      name: 'update'
    })
  }
  // 渲染子项函数
  const ListRender: ListRenderItem<DataType> = ({ item }) => {
    return <Item {...item} handleSwitchToggle={(value) => handleItemSwtichToggle(item, value)} handleItemPress={handleItemPress} />
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

export const homeOptions: (props: { navigation: any }) => NativeStackNavigationOptions = ({ navigation }) => {
  return {
    title: '闹钟',
    headerRight: () => {
      return (
        <Pressable onPress={() => {
          navigation.push('Edit', {
            name: 'add'
          })
        }}>
          <View>
            <AddIcon height={30} width={30} />
          </View>
        </Pressable>
      )
    }
  }
}