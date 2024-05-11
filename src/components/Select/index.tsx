import { StyleSheet, Text, View, FlatList } from "react-native";

import type { KeyValue } from "@/types/type";


const styles = StyleSheet.create({
  wrapper: {
    height: 200,
    backgroundColor: 'yellow'
  },
  container: {
    height: 100,
  },
  list: {
    height: 20,
  },
  item: {
    height: 40,
  }
})

type SelectProps = {
  data: Array<KeyValue>
}
const Select = ({ data }: SelectProps) => {
  const l = data.length,
    d = new Array(l).fill(null).concat(data).concat(new Array(l).fill(null))
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <FlatList
          data={d}
          renderItem={({ item }) => (
            <View style={styles.item}>
              {item ? <Text>{item.label}</Text> : <Text>test</Text>}
            </View>
          )}
          getItemLayout={(data, index) => (
            { length: data!.length, offset: 20 * index, index }
          )}
          initialScrollIndex={l}
          onScroll={(event) => {
            const y = event.nativeEvent.contentOffset.y;
            event.nativeEvent.contentOffset.y = 0;
            event.preventDefault();
          }}
        />
      </View>
    </View>
  )
}


export default Select;