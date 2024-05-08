/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { StatusBar, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home, { homeOptions } from "./screens/Home";
import Edit, { editOptions } from "./screens/Edit";


const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const theme = useColorScheme()
  return (
    <NavigationContainer>
      {/* 状态栏控制 */}
      <StatusBar backgroundColor="#EEEEEE" barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={homeOptions} />
        <Stack.Screen name="Edit" component={Edit} options={editOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
