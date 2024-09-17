import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Home from './components/Home';
import Login from './components/Login';
export default function App() {
  const [screen, setScreen] = useState('Login'); // Quản lý trạng thái màn hình hiện tại

  const navigationHandler = (screenName) => {
    setScreen(screenName); // Thay đổi trạng thái màn hình
  };
  return (
    <>
      {/* {screen === 'Home' && <Home navigationHandler={navigationHandler} />} */}
      {screen === 'Login' && <Login navigationHandler={navigationHandler} />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
