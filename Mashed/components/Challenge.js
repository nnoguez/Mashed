// challenge screen (alan)


import { Card } from '@rneui/themed';
import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet, SectionList, TouchableOpacity } from 'react-native';
import { ListItem } from '@rneui/themed';

export default function Challenge() {
  return (
    <ScrollView
        horizontal= {true}
        showsHorizontalScrollIndicator={true}
        pagingEnabled={true}>
        <View>
            <Text style={styles.followFor}> 
            <Text style={styles.followForColor}> Following | </Text>
            For You</Text>
        </View>
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