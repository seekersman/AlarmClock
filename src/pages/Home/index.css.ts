import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20
  },
  item: {
    width: '100%',
    height: 30,
    borderRadius: 30,
    shadowColor: '#d9d9d9',
    shadowOffset: {
      width: 10,
      height: 10
    }
  }
})

export default styles;