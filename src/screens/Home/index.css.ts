import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: '#EEEEEE'
  },
  setting: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  setting_item: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    paddingHorizontal: 20,
  },
  list_item: {
    backgroundColor: 'white',
    width: '100%',
    height: 90,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    flexDirection: 'row'
  },
  item_left: {
    flex: 1,
  },
  item_left_time: {
    flex: 1.3,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  item_left_time_text: {
    fontSize: 26,
    color: 'black'
  },
  item_left_info: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  add: {
    position: 'absolute',
    bottom: 60,
    right: 30,
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 120,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3.5,
    shadowColor: '#000000',
    shadowOffset: { width: -2, height: -5 },
    shadowOpacity: 1,
    shadowRadius: 1.5,
  }
})

export default styles;