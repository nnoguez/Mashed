// splash screen (naomy)

// still needs some fixing no real way to fill whole bg w color 

import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";

export default function Splash ({ navigation }) {
  return (
    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
    <View style={{ backgroundColor: '#9492EF'}}>
          <View>
            <Image
              style={{ 
                height:850,
                width:'80%',
                margin: 40,
                resizeMode:'contain',
                     }}
                  source={{
                  uri:'https://i.postimg.cc/65XBkHNg/logo.png',
                  }}
                  /> 
          </View>
    </View>
  </TouchableOpacity>
  );
}
