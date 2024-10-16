import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from './component/Screnn1';
import { Screen2 } from './component/Screen2';
import { Screen3 } from './component/Screen3';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="AppScreen1">
      <Stack.Screen name="AppScreen1" component={Screen1} />
      <Stack.Screen name="AppScreen2" component={Screen2} />
      <Stack.Screen name="AppScreen3" component={Screen3} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

