import { View, Image, Text, TouchableOpacity } from "react-native";

export default function Screen_1({ navigation }) {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: 20,
        paddingRight: 40,
        paddingLeft: 40,
        gap: 15,
      }}
    >
      <View style={{ width: 150, height: 200 }}>
        <Image
          style={{ width: 150, height: 200 }}
          source={require("../../assets/anh1.jpg")}
        />
      </View>
      <View style={{ width: "100%" }}>
        <Text style={{ textAlign: "left" }}>
          
          Điện thoại VSmart Joy 3 - Hàng Chính Hãng
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          gap: 4,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
          <Image source={require("../../assets/star.jpg")} />
          <Image source={require("../../assets/star.jpg")} />
          <Image source={require("../../assets/star.jpg")} />
          <Image source={require("../../assets/star.jpg")} />
          <Image source={require("../../assets/star.jpg")} />
        </View>
        <View>
          <Text> Xem 828 đánh giá </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          gap: 4,
        }}
      >
        <Text style={{ fontWeight: "bold" }}> 1.700 .000 đ </Text>
        <Text style={{ textDecorationLine: "line-through", color: "gray" }}>
          
          1.700 .000 đ
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          gap: 4,
        }}
      >
        <Text style={{ color: "red" }}> Ở đâu rẻ hơn hoàn tiền </Text>
        <Image source={require("../../assets/anhhoi.jpg")} />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          gap: 4,
        }}
      >
        <TouchableOpacity
        onPress={() => navigation.push('Screen_2')}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            gap: 4,
            border: "1px solid gray",
            padding: "4px",
            cursor: "pointer",
          }}
        >
          <Text> </Text> <Text> 4 màu chọn màu </Text>
          <Image source={require("../../assets/muitenphai.jpg")} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            color: "white",
            width: "100%",
            textAlign: "center",
            padding: "6px",
            borderRadius: 4,
            marginTop: 40,
          }}
        >
          
          Chọn mua
        </TouchableOpacity>
      </View>
    </View>
  );
}
