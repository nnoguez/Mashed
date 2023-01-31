// post screen (laura)

// need to find way of adding this screen without it showing up in nav tabs



import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Splash () {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        {/* <img src={img1} alt="Mashed Logo"/> */}
        <Text> post </Text>

      </TouchableOpacity>
    </View>
  );
}
