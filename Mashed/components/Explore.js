// explore screen (alan)


import React, { Component } from "react";
import { Button, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Explore() {
  return (
    <>
    {/* mashed logo */}
    <View style={styles.viewOne}>
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Chat')}>
                <Icon style={{ marginLeft: 355, marginTop: 20 }} name="commenting" size={25} color="#FFC42D"/>
            </TouchableOpacity>
            <Image
            style={{ 
                marginLeft: 127, 
                marginBottom: 10,
                width:"35%", 
                height:25}}
            source={{
            uri:'https://i.postimg.cc/65XBkHNg/logo.png',
            }}
            /> 
      </View>
    </View>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Explore</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  viewOne: {
      textAlign: "center",
      margin: 20,
      marginBottom: 10
  },
})