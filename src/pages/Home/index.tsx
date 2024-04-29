import { View, Text, StyleSheet } from 'react-native';

import type { PropsWithChildren } from "react";

type HomeProps = PropsWithChildren<{}>;

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
  }
]

const Home = ({ children }: HomeProps) => {
  return (
    <View style={style.container}>
      {
        data.map((item) => {
          return (
            <View key={item.id}>
              <Text>{item.time}</Text>
            </View>
          )
        })
      }
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Home;