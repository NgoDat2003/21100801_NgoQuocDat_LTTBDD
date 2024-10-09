import { View, TextInput, Text, Button, StyleSheet, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { TouchableOpacity } from 'react-native';
import axios from 'axios';

function AppScreen3({ navigation }) {
    const [name, setName] = useState('');
    const handleAddname = async () => {
        try {
            const response = await axios.post('https://66fc9741c3a184a84d176b30.mockapi.io/user', { name: name });
            if (response && response.status === 201) {
              console.log('User added:', response.data);
              setName("")
              Alert.alert('Add  user success');
              navigation.navigate('AppScreen2')
            } else {
              Alert.alert('Error adding user');
            }
          } catch (error) {
            console.log('Error adding user:', error);
            Alert.alert('Error adding user');
          }
    };

    return (
        <View style={styles.container}>
            <View>
            <Text style={styles.text}>Add Your Jobs</Text>
               
            </View>
            <View >
                <View style={styles.inputContainer}>
                    <MdOutlineEmail />
                    <TextInput
                        placeholder="Input your job"
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                    />
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() =>{
                    handleAddname()
                }}>
                    <FaArrowRight />
                    <Text style={{ color: "#fff" }}>Finish</Text>
                </TouchableOpacity>
            </View>
            <View>
               <Image style={{height:271,width:271}} source={require("../assets/pen.png")} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: 'space-around',
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    input: {
        width: "100%",
        height: "100%"

    },
    text: {
        fontSize: 24,
        color: "#8353E2",
        lineHeight: 26,
        textAlign: "center",
        marginBottom: 30,
        fontWeight: "bold"
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderColor: '#9095A0',
        height: 40,
        borderWidth: 1,
        borderStyle: "solid",
        width: 334,
        gap: 12,
        paddingLeft: 8,
        cursor: "pointer"
    },
    button: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        justifyContent: "center",
        backgroundColor: "#00BDD6",
        color: "#fff",
        height: 44,
        width: 190,
        borderRadius: 12

    }

});


export default AppScreen3