import { Text, View, TextInput, Image, StyleSheet, Button } from 'react-native';
function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <Image source={require('../../assets/avatar_user.png')} style={styles.icon} />
        <TextInput placeholder={'Name'} style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('../../assets/lock.png')} style={styles.icon} />
        <TextInput
          secureTextEntry={true}
          placeholder={'Password'}
          style={styles.input}
        />
        <Image
          source={require('../../assets/eye.png')}
          style={styles.eyeIcon}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="Login" color="#000" />
      </View>

      <Text style={styles.forgotPassword}>Forgot Password?</Text>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    padding: 8,
    width: '100%',
    height: '100%',
    justifyContent: 'center', 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C4C4C44D',
    paddingHorizontal: 8,
    marginBottom: 10,
    height: 40,
    borderRadius: 5, 
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1, 
    height: 40,
    paddingHorizontal: 10,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  forgotPassword: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
