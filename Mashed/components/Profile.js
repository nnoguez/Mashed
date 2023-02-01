// profile screen


import React, { Component } from "react";
import { Avatar } from '@rneui/themed';
import { Button, View, Image, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const image = {uri: 'https://i.pinimg.com/736x/27/1a/b9/271ab997e179c7dde6530e8d8ae632d4.jpg'};

export default function Profile ({ navigation }) {
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
      <ImageBackground source={image} resizeMode="cover">
        <View style={{ 
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 25,
        }}
        >
          <Avatar
            avatarStyle={{ 
            borderWidth: 10, 
            borderColor: 'white', 
            borderRadius: 100, 
            }}        
              size={150}
              rounded
              source={{ uri: "https://communication.ucf.edu/wp-content/uploads/sites/2/2018/05/Daniel-V.-Novatnak-1.jpeg" }}
          />
        </View>
      </ImageBackground>






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