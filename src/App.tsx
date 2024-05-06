/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { StatusBar, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home, { options } from "./screens/Home";


const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const theme = useColorScheme()
  return (
    <NavigationContainer>
      {/* 状态栏控制 */}
      <StatusBar backgroundColor="transparent" barStyle={theme ? theme === 'light' ? 'light-content' : 'dark-content' : 'default'} />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
