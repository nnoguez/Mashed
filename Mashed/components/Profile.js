// profile screen


import React, { Component } from "react";
import { Button, View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Profile() {
  return (
    <>
    {/* mashed logo */}
    <View style={styles.viewOne}>
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Settings')}>
                <Icon style={{ marginLeft: 355, marginTop: 20 }} name="gear" size={25} color="#FFC42D"/>
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
      <Text>Profile</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  viewOne: {
    textAlign: "center",
    margin: 20,
    marginBottom: 10
}
})