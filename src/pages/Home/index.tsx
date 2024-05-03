import {
  View,
  Text,
  Switch,
  StatusBar,
  FlatList
} from 'react-native';

import styles from './index.css.ts'

type DataType = {
  id: number;
  time: string;
  matchType: 'once' | 'day' | 'week' | 'mouth' | 'year' | 'custom',
  match: string;
  isExpired: boolean;
  isEnabled: boolean
}

const data: DataType[] = [
  {
    id: 1,
    time: '16:30',
    matchType: 'day',
    match: 'day',
    isExpired: false,
    isEnabled: true
  },
  {
    id: 2,
    time: '16:30',
    matchType: 'day',
    match: 'day',
    isExpired: false,
    isEnabled: true
  },
  {
    id: 3,
    time: '16:30',
    matchType: 'day',
    match: 'day',
    isExpired: false,
    isEnabled: true
  },
  {
    id: 4,
    time: '16:30',
    matchType: 'day',
    match: 'day',
    isExpired: false,
    isEnabled: true
  }
]

type ItemProps = DataType & { handleSwitchToggle: (value: boolean) => void }

const Item = (props: ItemProps) => {
  return (
    <View key={props.id} style={styles.item}>
      <View></View>
      <View>
        <Switch
          trackColor={{ false: '#EEEEEE', true: '#3482fe' }}
          thumbColor={props.isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={props.handleSwitchToggle}
          value={props.isEnabled}
        />
      </View>
    </View>
  )
}

const Home = () => {
  const handleItemSwtichToggle = (item: DataType, value: boolean): void => {
    item.isEnabled = value;
    console.log(value)
  }

  return (
    // 界面根容器
    <View style={styles.container}>
      {/* 状态栏控制 */}
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      {/* 下拉列表 */}
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) => <Item {...item} handleSwitchToggle={(value) => handleItemSwtichToggle(item, value)} />}
        keyExtractor={(item) => item.id + ''}
      />
      {
        // data.map(item => (
        //   <View key={item.id} style={styles.item}>
        //     <Text>{item.time}</Text>
        //   </View>
        // ))
      }
    </View>
  )
}

export default Home;