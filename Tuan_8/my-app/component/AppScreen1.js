import { View, TextInput, Text, Button, StyleSheet,Image } from 'react-native';
import React, { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
function AppScreen1({ navigation }) {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <View>
               <Image style={{height:271,width:271}} source={require("../assets/pen.png")} />
            </View>
            <View >
                <Text style={styles.text}>Manage Your Task</Text>
                <View style={styles.inputContainer}>
                    <MdOutlineEmail />
                    <TextInput
                        placeholder="Enter your name"
                        value={text}
                        onChangeText={setText}
                        style={styles.input}
                    />
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppScreen2')}>
                    <FaArrowRight />
                    <Text style={{ color: "#fff" }}>Get started</Text>
                </TouchableOpacity>
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


export default AppScreen1