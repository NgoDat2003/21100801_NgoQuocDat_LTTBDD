import { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Login from "./components/Login";
import Cau2B from "./components/2b";
import Cau2C from "./components/2c";
import Cau2D from "./components/2d";

export default function App() {
    const [screen, setScreen] = useState("");

    const navigationHandler = (screenName) => {
        setScreen(screenName);
    };

    return ( <
        View style = { styles.container } > {
            screen === "" && ( <
                >
                <
                Text style = { styles.title } > Chọn Giao Diện: < /Text>

                <
                TouchableHighlight style = { styles.button }
                underlayColor = "#DDDDDD"
                onPress = {
                    () => navigationHandler("Login") } >
                <
                Text style = { styles.buttonText } > 2 A < /Text> <
                /TouchableHighlight>

                <
                TouchableHighlight style = { styles.button }
                underlayColor = "#DDDDDD"
                onPress = {
                    () => navigationHandler("Cau2B") } >
                <
                Text style = { styles.buttonText } > 2 B < /Text> <
                /TouchableHighlight>

                <
                TouchableHighlight style = { styles.button }
                underlayColor = "#DDDDDD"
                onPress = {
                    () => navigationHandler("Cau2C") } >
                <
                Text style = { styles.buttonText } > 2 C < /Text> <
                /TouchableHighlight>

                <
                TouchableHighlight style = { styles.button }
                underlayColor = "#DDDDDD"
                onPress = {
                    () => navigationHandler("Cau2D") } >
                <
                Text style = { styles.buttonText } > 2 D < /Text> <
                /TouchableHighlight> <
                />
            )
        }

        { screen === "Login" && < Login / > } { screen === "Cau2C" && < Cau2C / > } { screen === "Cau2B" && < Cau2B / > } { screen === "Cau2D" && < Cau2D / > } <
        /View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#841584",
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
    },
});