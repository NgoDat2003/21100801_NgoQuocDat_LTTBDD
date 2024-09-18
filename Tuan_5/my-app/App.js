import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen_1 from "./components/Screen1";
import Screen_2 from "./components/Screen2";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen_1">
        <Stack.Screen name="Screen_1" component={Screen_1} />
        <Stack.Screen name="Screen_2" component={Screen_2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
