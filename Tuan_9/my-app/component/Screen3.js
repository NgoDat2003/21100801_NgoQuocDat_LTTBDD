import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { act, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Image, View } from "react-native";

export function Screen3({ navigation }) {
    const route = useRoute()
    const [active, setActive] = useState(false)
    const { item } = route.params;
    console.log(item);


    useEffect(() => {
    }, [])

    return <View style={styles.container}>
        <View style={styles.header}>
            <Image style={{ height: 297, width: 340 }} source={{ uri: `${item.img}` }} />
        </View>
        <View >
            <Text style={{ fontSize: 35, fontWeight: 400 }}>{item.name}</Text>
            <View style={styles.content}>
                <Text style={{ color: "#00000096", fontSize: 25 }}>15% OFF {item.price / 100 * 15} </Text>
                <Text style={{ fontSize: 25, fontStyle: 400, textDecorationLine: "line-through" }}>{item.price}</Text>
            </View>
        </View>
        <View>
            <Text style={{ fontSize: 25, fontWeight: 400 }}>Description</Text>
            <Text>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
        </View>
        <View style={styles.content}>
            <TouchableOpacity onPress={()=>setActive(true)}><Image source={require("../assets/heart.jpg")} style={ styles.active} /></TouchableOpacity>

            <TouchableOpacity style={styles.button} >
                <Text style={{ color: "#fff", textAlign: "center" }}>Add to cart</Text>
            </TouchableOpacity>
        </View>



    </View>
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
        height: 388,
        width: 359,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E941411A"
    },
    content: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 30,
    },
    button: {
        backgroundColor: "#E94141",
        borderRadius: 12,
        width: "100%",
        paddingTop: 12,
        paddingBottom: 12,
        textAlign: "center"
    },



})