// profile screen


import React, { Component } from "react";
import { Card } from "@rneui/base";
import { Avatar, Button } from '@rneui/themed';
import { View, Image, Text, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
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
      <ImageBackground source={image} resizeMode="cover" borderBottomLeftRadius={25} borderBottomRightRadius={25}>
        <View style={{ 
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 75,
        }}
        >
          <Avatar
            avatarStyle={{ 
            borderWidth: 10, 
            borderColor: '#F5F5F5', 
            borderRadius: 100, 
            }}        
              size={150}
              rounded
              source={{ uri: "https://communication.ucf.edu/wp-content/uploads/sites/2/2018/05/Daniel-V.-Novatnak-1.jpeg" }}
          />
        </View>
      </ImageBackground>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
          <Text>Following</Text>
          <Text style={{ fontWeight:'bold' }}>@dnovatnak007</Text>
          <Text>Followers</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: 10 }}>
          <Text style={{ fontWeight:'bold', fontSize: 17 }}>208</Text>
          <Button
            title="Edit Profile"
            buttonStyle={{
              backgroundColor: '#9492EF',
              borderRadius: 30,
              padding: 1,
          }}
          containerStyle={{
            marginHorizontal: 25,
            marginVertical: 5,
          }}
          />
          <Text style={{ fontWeight:'bold', fontSize: 17 }}>103</Text>
      </View>
      <Text style={{ textAlign: 'center', margin: 10 }}>design professor, food-enthusiast, better than you </Text>
      
      <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgrey', marginBottom: 10 }}></View>

      <View style={{ margin: 15 }}>
        <Text style={{ textAlign: "center", fontSize: 17 }}> 
        <Text style={{color: "#FFC42D",fontWeight: 'bold'}}> My Posts | </Text>
            My Saved
        </Text>
      </View>
      <ScrollView>
      <View style={{ marginBottom: 480 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <Image
          style={{ width: 180, height: 180, borderRadius: 25 }}
          source={{
            uri: 'https://gastroplant.com/wp-content/uploads/2019/06/1404_Vegan-Pasta-Primavera_004.jpg',
          }}
        />
        <Image
          style={{ width: 180, height: 180, borderRadius: 25 }}
          source={{
            uri: 'https://i.pinimg.com/originals/ae/5f/e4/ae5fe4f0cf45873edff54880072f2256.png',
          }}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <Image
          style={{ width: 180, height: 180, borderRadius: 25 }}
          source={{
            uri: 'https://media.istockphoto.com/id/1171787426/photo/enjoying-lunch-with-friends.jpg?s=170667a&w=0&k=20&c=oZTwKx671f_40Mv1i1hIITBZUavqQWWPemYwNRm3Kqo=',
          }}
        />
        <Image
          style={{ width: 180, height: 180, borderRadius: 25 }}
          source={{
            uri: 'https://i.pinimg.com/736x/cb/76/ee/cb76ee697d878eb34e60e148a76de699.jpg',
          }}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <Image
          style={{ width: 180, height: 180, borderRadius: 25 }}
          source={{
            uri: 'https://i.pinimg.com/originals/f4/0a/ac/f40aacbe07d228a34d8f579dfa8b1675.jpg',
          }}
        />
        <Image
          style={{ width: 180, height: 180, borderRadius: 25 }}
          source={{
            uri: 'https://i.pinimg.com/originals/28/3c/14/283c148e460e9a93bcf57e5a3d2c97b3.jpg',
          }}
        />
      </View>
      </View>
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
}
})