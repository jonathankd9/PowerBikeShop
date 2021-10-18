import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          width: 200,
          height: 200,
          borderRadius: 30,
          marginBottom: 20,
          transform: [{ rotate: "0deg" }],
        }}
        source={require("../assets/bike.jpg")}
      />

      <Text style={{ color: "rgba(0,0,0,0.6)", fontSize: 24 }}>Welcome, </Text>
      <Text style={{ color: "black", fontSize: 30, fontWeight: "600" }}>
        POWER BIKE SHOP{" "}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#e3e3e3",
          padding: 10,
          paddingHorizontal: 60,
          marginTop: 20,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <AntDesign name="google" size={24} color="black" />
        <Text style={{ fontSize: 17, marginLeft: 15 }}>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          padding: 10,
          paddingHorizontal: 60,
          marginTop: 20,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ fontSize: 17, color: "white", marginLeft: 15 }}>
          Login with Apple
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "500",
            color: "grey",
            marginTop: 10,
          }}
        >
          Not a member?{" "}
          <Text style={{ color: "orange", fontWeight: "bold" }}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
