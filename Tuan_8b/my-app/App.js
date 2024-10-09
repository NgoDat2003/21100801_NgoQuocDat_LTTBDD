import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Master_Potraint from './component/Master_Potraint';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Master_Potraint">
      <Stack.Screen name="Master_Potraint" component={Master_Potraint} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

