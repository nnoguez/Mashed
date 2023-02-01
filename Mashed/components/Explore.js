// explore screen (alan)

import { Card, SearchBar } from "@rneui/base";
import React, { Component } from "react";
import { Button, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Explore() {
  const [value, setValue] = React.useState("");
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
      <SearchBar
          bordercolor="grey"
          color= "white"
          platform="default"
          containerStyle={{}}
          inputContainerStyle={{}}
          inputStyle={{}}
          leftIconContainerStyle={{}}
          rightIconContainerStyle={{}}
          loadingProps={{}}
          onChangeText={newVal => setValue(newVal)}
          onClearText={() => console.log(onClearText())}
          placeholder="Entire a Recipe..."
          placeholderTextColor="grey"
          cancelButtonTitle="Cancel"
          cancelButtonProps={{}}
          onCancel={() => console.log(onCancel())}
          value={value}
       />
       <Text style={styles.Headers}>Featured</Text>
        <Card borderRadius={25} margin>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          </View>
          <Card.Image
              style={{width:"100%", height:300, marginTop: 5, marginTop: 5, borderBottomRightRadius: 25, borderBottomLeftRadius: 25}}
              source={{
              uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/thanksgivingmenus-1634134898.jpg',
              }}
          />
          <Text style={{ marginTop: 5 }}>
              Give thanks and celebrate Thanksgiving with some yummy recipes! <Icon name="arrow-right" color="#FFC42D"></Icon>
          </Text>
        </Card>
      <Text style={styles.Headers}>For You</Text>
      <Text style={styles.Subheaders}>Based on your recent likes and creations.</Text>    
      <ScrollView horizontal= {true} showsHorizontalScrollIndicator={true} pagingEnabled={true}> 
              <Card>
                <Card.Image style= {{width: "50%", height:100, marginTop:5}}
                source={{uri:'https://dinnerthendessert.com/wp-content/uploads/2021/05/Berry-Stuffed-French-Toast-1-1-1.jpg',}}></Card.Image>
              </Card>
      
      
      
      
      
      
      
      </ScrollView>        
    </>
  );
}

const styles = StyleSheet.create({
  viewOne: {
      textAlign: "center",
      margin: 20,
      marginBottom: 10
  },
  Headers: {
    fontSize: 15,
    fontWeight:'bold'
  },
  Subheaders: {
    fontSize: 13,
    color: 'grey'
  }
})