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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    flexDirection: 'row'
  },
  item_left: {
    flex: 1
  },
  item_left_time: {
    flex: 1.3,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  item_left_time_text: {
    fontSize: 24,
    color: 'black'
  },
  item_left_info: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  item_right: {
    width: '20%',
  }
})

export default styles;