// challenge screen (alan)


import { Card } from '@rneui/themed';
import React, { Component } from "react";
import { View, ScrollView, Text, Image, StyleSheet, SectionList, TouchableOpacity } from 'react-native';
import { ListItem } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Challenge() {
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
    <ScrollView
        horizontal= {true}
        showsHorizontalScrollIndicator={true}
        pagingEnabled={true}>

    <Card>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}></View>
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://dinnerthendessert.com/wp-content/uploads/2021/05/Berry-Stuffed-French-Toast-1-1-1.jpg'
            }}
          />
          <Card.Title>Berry Stuffed French Toast</Card.Title>
          <ListItem>
            <ListItem.Content>
              <Icon name="nutfree" type="material-community" color="purple"></Icon>
              <ListItem.Title>Nut-Free</ListItem.Title>  
            </ListItem.Content>  
          </ListItem>    
          <ListItem>
            <ListItem.Content>
            <Icon name="dietary" type="material-community" color="purple"></Icon>
             <ListItem.Title>Halal, Kosher</ListItem.Title> 
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Content>
            <Icon name="WarningOutlined" type="material-community" color="purple"></Icon>
             <ListItem.Title>Contains Eggs, Diary</ListItem.Title> 
            </ListItem.Content>
          </ListItem>
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
  header: {
      marginRight: 10,
  },
  avatarSpacing: {
      marginRight: 10,
  },
  followFor: {
      textAlign: "center",
  },
  followForColor: {
      color: "#FFC42D",
      fontWeight: 'bold'
  }
})