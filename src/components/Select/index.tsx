import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";


const styles = StyleSheet.create({
  date: {

  },
  selected: {

  }
})

type SelectProps = {
  data: Array<any>
}
const Select = ({ data }: SelectProps) => {
  const [seleted, setSelected] = useState(0);
  return (
    <View style={styles.date}>
      {
        data.map((i, n) => <Text>{i}</Text>)
      }
    </View>
  )
}


export default Select;