import { View, Text, StyleSheet } from 'react-native';

import styles from './index.css.ts'

type DataType = {
  id: number;
  time: string;
  matchType: 'once' | 'day' | 'week' | 'mouth' | 'year' | 'custom',
  match: string;
  isExpired: boolean;
}

const data: DataType[] = [
  {
    id: 1,
    time: '16:30',
    matchType: 'day',
    match: 'day',
    isExpired: false
  },
  {
    id: 2,
    time: '16:30',
    matchType: 'day',
    match: 'day',
    isExpired: false
  },
  {
    id: 3,
    time: '16:30',
    matchType: 'day',
    match: 'day',
    isExpired: false
  },
  {
    id: 4,
    time: '16:30',
    matchType: 'day',
    match: 'day',
    isExpired: false
  }
]

const Home = () => {
  return (
    <View style={styles.container}>
      {
        data.map((item) => {
          return (
            <View key={item.id} style={styles.item}>
              <Text>{item.time}</Text>
            </View>
          )
        })
      }
    </View>
  )
}

export default Home;