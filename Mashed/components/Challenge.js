// challenge screen (alan)
import { Card } from '@rneui/themed';
import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { ListItem } from '@rneui/themed';

export default function Challenge() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Challenge</Text>
    </View>
  );
  <Card>
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
}