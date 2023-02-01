

// explore screen (alan)

import { Card, SearchBar } from "@rneui/base";
import React, { Component } from "react";
import { Button, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Explore() {
  const [value, setValue] = React.useState("");
  return (
    <>
    <View style={styles.viewOne}>
      {/* mashed logo */}
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
          platform="android"
          containerStyle={{}}
          inputContainerStyle={{}}
          inputStyle={{}}
          leftIconContainerStyle={{}}
          rightIconContainerStyle={{}}
          loadingProps={{}}
          onChangeText={newVal => setValue(newVal)}
          onClearText={() => console.log(onClearText())}
          placeholder="Enter a Recipe..."
          placeholderTextColor="grey"
          cancelButtonTitle="Cancel"
          cancelButtonProps={{}}
          onCancel={() => console.log(onCancel())}
          value={value}
       />
    <View style={styles.viewOne}>
       
       <Text style={styles.Headers}>Featured</Text>
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
      <Text style={styles.Headers}>For You</Text>
      <Text style={styles.Subheaders}>Based on your recent likes and creations.</Text>    
      <ScrollView horizontal= {true} showsHorizontalScrollIndicator={true} pagingEnabled={true}> 


    {/* <View style={{ flexDirection: 'row' }}> */}
    {/* card posting 1*/}
      <Card borderRadius={25} width={160} margin>
            <Card.Image
                style={{ height:100, borderRadius: 25}}
                source={{
                uri:'https://dinnerthendessert.com/wp-content/uploads/2021/05/Berry-Stuffed-French-Toast-1-1-1.jpg',
                }}
            />
          <Text style={{ marginTop: 5, textAlign: 'center', fontWeight: 'bold'}}> Berry-Stuffed French Toast </Text>
      </Card>

    {/* card posting 2*/}
    <Card borderRadius={25} width={160} marginLeft={-5} marginRight={-5}>
            <Card.Image
                style={{ height:100, borderRadius: 25}}
                source={{
                uri:'https://dinnerthendessert.com/wp-content/uploads/2021/05/Berry-Stuffed-French-Toast-1-1-1.jpg',
                }}
            />
          <Text style={{ marginTop: 5, textAlign: 'center', fontWeight: 'bold' }}> Berry-Stuffed French Toast </Text>
    </Card>

    {/* card posting 1*/}
    <Card borderRadius={25} width={160} marginRight={-5}>
            <Card.Image
                style={{ height:100, borderRadius: 25}}
                source={{
                uri:'https://dinnerthendessert.com/wp-content/uploads/2021/05/Berry-Stuffed-French-Toast-1-1-1.jpg',
                }}
            />
          <Text style={{ marginTop: 5, textAlign: 'center', fontWeight: 'bold' }}> Berry-Stuffed French Toast </Text>
      </Card>

    {/* card posting 2*/}
    <Card borderRadius={25} width={160} marginRight={-5}>
            <Card.Image
                style={{ height:100, borderRadius: 25}}
                source={{
                uri:'https://dinnerthendessert.com/wp-content/uploads/2021/05/Berry-Stuffed-French-Toast-1-1-1.jpg',
                }}
            />
          <Text style={{ marginTop: 5, textAlign: 'center', fontWeight: 'bold' }}> Berry-Stuffed French Toast </Text>
    </Card>
    {/* </View> */}














      
      
      
      
      </ScrollView> 
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
  Headers: {
    fontSize: 15,
    fontWeight:'bold'
  },
  Subheaders: {
    fontSize: 13,
    color: 'grey'
  }
})