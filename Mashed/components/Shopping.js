import React, {useState} from "react";
import { Card, SearchBar } from "@rneui/base";
import React, { Component } from "react";
import { Button, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    backgroundWhite: {
        zIndex:0,
        flexDirection:'column',
    
    },
    Headers: {
      fontSize: 15,
      fontWeight:'bold',
      marginTop: 10
    },
    Subheaders: {
      fontSize: 13,
      color: 'grey'
    }
  })
export default function Shopping ({ navigation }) {
   
    return (
      <>
     
      <View style>
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
       
      <View>
          <Card borderRadius={25} margin >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            </View>
            <Card.Image
                style={{width:"100%", height:200, borderRadius: 25}}
                source={{
                uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/thanksgivingmenus-1634134898.jpg',
                }}
            />
            <Text style={{ marginTop: 5 }}>
                Give thanks and celebrate Thanksgiving with some yummy recipes! <Icon name="arrow-right" color="#FFC42D"></Icon>
            </Text>
          </Card>
  
       
      </View>
      </>
    );
  }
  
  