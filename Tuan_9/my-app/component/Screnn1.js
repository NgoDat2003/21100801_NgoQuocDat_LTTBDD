import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Image, View } from "react-native";

export function Screen1({navigation}) {

    return <View style={styles.container}>
        <View style={styles.header}>
            A premium online store for sporter and their stylish choice
        </View>
        <View>
            <Image style={{ height: 270, width: 292, marginTop: 30 }} source={{ uri: "https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ffBKVxcHy15mVMq7OEP3o5hFHCJWxypoIz0H2ESLy-4mPStipA-AYPsiCTlQ4yOvkI6l2ZE2ZmhSRODPwqreye3Xt1rTP5UI-xRnCrcDzf92w1UkN2AJrbv4N8em6Ugi~bSArHE6icqM7XCIbkuLofZJX~lI6IgkscUqGAkUGYBZTQgAaMU~sM8W2WLGsxdklUbkVmTIODLQDDZtAOoKaPhULcxg64F3vf2-houa-vw2XoIqWI5xBcL26x9xJiLD1ylWlmK~0OAwlboimHTt599QF5H0HpYzln9WMKcDqlntVTZQegSIZm-xBZa6-Jsdwi4kpOh4KK~35aZRM3jhag__" }} />
        </View>
        <View style={styles.content}>
            POWER BIKE SHOP
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppScreen2')}>
            <Text style={{ color: "#fff", textAlign: "center" }}>Get started</Text>
        </TouchableOpacity>
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
        backgroundColor: "#E94141",
        borderRadius: 12,
        width: "100%",
        paddingTop: 12,
        paddingBottom: 12,
        textAlign: "center"
    }

})