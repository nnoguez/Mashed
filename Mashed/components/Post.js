// post screen (laura)


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
