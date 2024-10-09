import { View, TextInput, Text, Button, StyleSheet, FlatList, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { CiSearch } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { IoIosCheckboxOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

function AppScreen2({ navigation }) {
    const [text, setText] = useState('');
    const [names, setNames] = useState([]);
    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://66fc9741c3a184a84d176b30.mockapi.io/user');
            console.log(response.data); // Kiểm tra dữ liệu trả về
            setNames(response.data);
        } catch (error) {
            console.error(error); // Ghi lại lỗi
            Alert.alert('Error fetching data');
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchUsers(); // Fetch users khi màn hình được tập trung
        }, [])
    );

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: 'center', gap: 8 }}>
                <IoIosCheckboxOutline style={{ color: "green" }} />
                <Text >{item.name}</Text>
            </View>
            <View>
                <CiEdit style={{ color: "red" }} />
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <CiSearch />
                <TextInput
                    placeholder="Search"
                    value={text}
                    onChangeText={setText}
                    style={styles.input}
                />
            </View>
            <View style={styles.container_list}>
                <FlatList
                    data={names}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />

            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppScreen3')}>
                    <IoIosAdd />
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

    },
    container_list: {
        paddingTop: 50,
    },
    item: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#9095A0",
        marginTop: 6,
        width: 300,
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 12
    },

});


export default AppScreen2