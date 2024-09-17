import { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Login from './components/Login';
import Cau2B from './components/2b';
import Cau2C from './components/2c';
import Cau2D from './components/2d';

export default function App() {
  const [screen, setScreen] = useState(''); // Quản lý trạng thái màn hình hiện tại

  const navigationHandler = (screenName) => {
    setScreen(screenName); // Thay đổi trạng thái màn hình
  };

  return (
    <View style={styles.container}>
      {screen === '' && ( // Nếu không có màn hình nào được chọn thì hiển thị lựa chọn
        <>
          <Text style={styles.title}>Chọn Giao Diện:</Text>

          <TouchableHighlight
            style={styles.button}
            underlayColor="#DDDDDD"
            onPress={() => navigationHandler('Login')}
          >
            <Text style={styles.buttonText}>2A</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.button}
            underlayColor="#DDDDDD"
            onPress={() => navigationHandler('Cau2B')}
          >
            <Text style={styles.buttonText}>2B</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.button}
            underlayColor="#DDDDDD"
            onPress={() => navigationHandler('Cau2C')}
          >
            <Text style={styles.buttonText}>2C</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.button}
            underlayColor="#DDDDDD"
            onPress={() => navigationHandler('Cau2D')}
          >
            <Text style={styles.buttonText}>2D</Text>
          </TouchableHighlight>
        </>
      )}

      {screen === 'Login' && <Login />}
      {screen === 'Cau2C' && <Cau2C />}
      {screen === 'Cau2B' && <Cau2B />}
      {screen === 'Cau2D' && <Cau2D />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#841584',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
