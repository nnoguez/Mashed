// challenge screen (alan)


import { Card } from '@rneui/themed';
import React, { Component } from "react";
import { View, ScrollView, Text, Image, StyleSheet, SectionList, TouchableOpacity } from 'react-native';
import { ListItem } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Challenge ({ navigation }) {
  const image = {uri: 'https://dinnerthendessert.com/wp-content/uploads/2021/05/Berry-Stuffed-French-Toast-1-1-1.jpg'};
  return (
    <>
    <ScrollView>
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

        {/* card posting 2*/}
        <Card borderRadius={25}>
        <Card.Image
            style={{width:"100%", height:500, marginTop: 5, borderRadius: 25 }}
            source={{
            uri:'https://dinnerthendessert.com/wp-content/uploads/2021/05/Berry-Stuffed-French-Toast-1-1-1.jpg',
            }}
        />
        {/* post bio */}
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
            </View>
          <Text style={{ marginTop: 5, fontWeight: 'bold', fontSize: '20' }}>
              Berry-Stuffed French Toast 
          </Text>

          {/* row 1 */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginLeft: 3, marginRight: 50 }}>
            <Text style={styles.fontBig}>
              <Icon name="plus" color="#9492EF" size={20} paddingRight={20} />
              Nut-free
            </Text>
            
            <Text style={styles.fontBig}>
              <Icon name="plus" color="#9492EF" size={20} paddingRight={20} />
              Halal, Kosher
            </Text>
          </View>

          {/* row 2 */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginLeft: 3, marginRight: 50 }}> 
            <Text style={styles.fontBig}>
              <Icon name="plus" color="#9492EF" size={20} />
              Contains Egg, Dairy
            </Text>
          </View>

        </Card>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}> 
          <TouchableOpacity
          style={styles.roundButton1}>
            <Icon name="times"  size={35} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.roundButton2}>
            <Icon name="random"c size={35} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.roundButton1}>
            <Icon name="heart" size={35} color="#EE7E74" />
          </TouchableOpacity>
        </View>
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
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  fontBig: {
    fontSize: 15,
  },
  roundButton1: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  roundButton2:{
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#FFC42D',
  }

})