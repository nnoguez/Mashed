// login screen (shelby)


import React, { Component } from "react";
import { SafeAreaView, View, ScrollView, Text, StyleSheet, SectionList, TouchableOpacity, Image } from 'react-native';
//below is the library for the social media icons
import { SocialIcon, SocialIconProps, Input, Button, Icon } from '@rneui/themed'; 

//no clue what this does yet lol
/*type IconData ={
  type: SocialMediaType;
  iconType:string
};

//I think this is how I add the icon array (don't know how to input them into the login screen)
const dataList: Partial<IconData>[] = [
  {
    type:'instagram',
  },
  {
    type:'facebook',
  },
  {
    type:'google',
  }
  
];

type SocialIconsComponentProps = {};

const SocialIcons:
React.FunctionComponent<SocialIconsComponentProps*/
const styles = StyleSheet.create({
  viewOne: {
      backgroundColor:'#9492ef',
      margin:0,
      flex: 1, 
      alignItems: "center", 
      justifyContent: "center",      
  },
  viewTwo:{

  },
  viewThree:{
    zIndex:1,
    position:'absolute',
    flexDirection: "column",
    bottom: 0,
    height:"70%",
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#fff',
    
    alignItems: "center", 
    justifyContent: "center",  

  },
  imageStyle: {
      zIndex:2,
      width:"35%", 
      height:25,    
  },
  input:{
    borderRadius: 15
  }
})



export default function Login({navigation}) {
  return (  

      <View style={styles.viewOne}>
        <Image 
          style={styles.imageStyle}
          source={{uri:'https://i.postimg.cc/65XBkHNg/logo.png',}}/>
    
        <View style={styles.viewThree}>
        <Input placeholder="Email Address"/>
        <Input placeholder="Password"/>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
          <Button
                title="LOG IN"
                buttonStyle={{
                  backgroundColor: '#9492ef',
                  borderWidth: 2,
                  borderColor: 'white',
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                titleStyle={{ fontWeight: 'bold' }}/>
        </TouchableOpacity>
        <Text>- Log In With -</Text>
      </View>
  
  </View>
 
  );
}
