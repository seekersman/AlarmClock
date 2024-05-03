import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: '#EEEEEE'
  },
  list: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  item: {
    backgroundColor: 'white',
    width: '100%',
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10
  },
  item_left: {
    flex: 1,

  },
  item_right: {
    width: '20%'
  }
})

export default styles;