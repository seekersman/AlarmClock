import { View, Text } from "react-native";

import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

type EditProps = {
  navigation: any;
  route: any;
}
const Edit = ({ navigation }: EditProps) => {
  return (
    <View>
      <Text>Edit</Text>
    </View>
  )
}

export default Edit;

type Options = {
  route: any;
  navigation: any;
}
export const editOptions: (props: Options) => NativeStackNavigationOptions = ({ route, navigation }) => {
  console.log(route)
  return {
    title: route.params.name === 'add' ? '新增闹钟' : '编辑闹钟',
    headerRight: () => {
      return (
        <View>
          <Text>√</Text>
        </View>
      )
    }
  }
}