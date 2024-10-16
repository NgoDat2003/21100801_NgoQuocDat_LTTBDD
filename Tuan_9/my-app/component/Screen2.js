import axios from "axios";
import { act, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Image, View } from "react-native";

export function Screen2({ navigation }) {
    const [list, setList] = useState([]);
    const [active, setActive] = useState("All")
    const handleItem = async () => {
        const response = await axios.get("https://66fc9741c3a184a84d176b30.mockapi.io/user")
        console.log(response);
        if (response && response.status === 200) {
            setList(response.data)
        }

    }
    const handleGetitem = async (filter) => {
        setActive(filter)
        if (filter === "All") {
            handleItem()
        } else {
            const response = await axios.get("https://66fc9741c3a184a84d176b30.mockapi.io/user", { params: { category: filter } })
            if (response && response.status === 200) {
                setList(response.data)
            }
        }
    }
    useEffect(() => {
        handleItem()
    }, [])
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <TouchableOpacity
                onPress={() => navigation.navigate('AppScreen3', {item})}
                style={{ width: 167, height: 200, display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center", gap: 8, backgroundColor: "#F7BA8326", marginTop: 4, marginBottom: 4, marginLeft: 12, marginRight: 12 }}>
                <Image style={{ height: 108, width: 124 }} source={{ uri: `${item.img}` }} />
                <Text >{item.name}</Text>
                <Text >$ {item.price}</Text>
            </TouchableOpacity>
            <View>
            </View>
        </View>
    );
    return <View style={styles.container}>
        <View style={styles.header}>
            The world’s Best Bike
        </View>
        <View style={styles.list_button}>
            <TouchableOpacity style={active === "All" ? styles.active_button : styles.button} onPress={() => handleGetitem("All")}  >
                <Text style={active === "All" ? styles.active_color : styles.button_color}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={active === "Roadbike" ? styles.active_button : styles.button} onPress={() => handleGetitem("Roadbike")} >
                <Text style={active === "Roadbike" ? styles.active_color : styles.button_color}>Roadbike</Text>
            </TouchableOpacity>
            <TouchableOpacity style={active === "Mountain" ? styles.active_button : styles.button} onPress={() => handleGetitem("Mountain")} >
                <Text style={active === "Mountain" ? styles.active_color : styles.button_color}>Mountain</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container_list}>
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.flatListContent}
            />
        </View>


    </View>
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        marginLeft: 12,
        marginRight: 12
    },
    list_button: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },
    header: {
        fontSize: 26,
        textAlign: "center",
        color: "#000",
        fontWeight: 400
    },
    content: {
        color: "#000",
        fontWeight: 700,
        fontSize: 26
    },
    button: {
        borderColor: "#E9414187",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 12,
        width: 99,
        height: 32,
        textAlign: "center",
    },
    button_color: {
        fontSize: 20,
        color: "#BEB6B6",
        textAlign: "center",

    },
    active_button: {
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 12,
        width: 99,
        height: 32,
        textAlign: "center",
        borderColor: "#E94141",
        color: "#E94141"
    },
    active_color: {
        fontSize: 20,
        color: "#E94141",
        textAlign: "center",
    }


})