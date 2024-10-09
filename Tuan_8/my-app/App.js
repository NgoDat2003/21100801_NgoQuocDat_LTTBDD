import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppScreen1 from './component/AppScreen1';
import AppScreen2 from './component/AppScreen2';
import AppScreen3 from './component/AppScreen3';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="AppScreen1">
      <Stack.Screen name="AppScreen1" component={AppScreen1} />
      <Stack.Screen name="AppScreen2" component={AppScreen2} />
      <Stack.Screen name="AppScreen3" component={AppScreen3} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

