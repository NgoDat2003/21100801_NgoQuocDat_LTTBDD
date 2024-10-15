import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Master_Potraint } from './component/Master_Potraint';
import { Home } from './component/Home';

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={Master_Potraint} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

