// login screen (shelby)


import React, { Component } from "react";
import { SafeAreaView, View, ScrollView, Text, StyleSheet, SectionList, TouchableOpacity, Image } from 'react-native';
//below is the library for the social media icons
import { SocialIcon, SocialIconProps, Input, Button, Icon } from '@rneui/themed'; 

//no clue what this does yet lol
/*type IconData = {
  type: SocialMediaType;
  iconType:string;
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

const SocialIcons:React.FunctionComponent<SocialIconsComponentProps> = () => {
  const socialProps = {};*/

const styles = StyleSheet.create({
  backgroundPurple: {
      zIndex:0,
      backgroundColor:'#9492ef',
      margin:0,
      flex: 1, 
      alignItems: "center", 
      justifyContent: "center",      
  },
  containerWhite:{
    zIndex:1,
    position:'absolute',    
    bottom: 0,
    height:"60%",
    width: "100%",
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    backgroundColor: '#fff',    
    alignItems: "center", 
    justifyContent: "center",  
  },
  userInfo: {
    marginTop:30,
    zIndex:2,   
    top: 0,
    width: '75%',
    alignItems: 'center',
    //justifyContent: 'center',
    //height:'100%',
    padding: 10,
   
  },
  userInputStyle: { 
    zIndex:3,     
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 25,
    padding:4,
    textAlign:'center',
    
    
  },  
  buttonOne:{
    zIndex:4,
    backgroundColor: 'white',
    color:'white',
    textColor: 'black', 
    fontWeight:'bold'
  },
  signUp:{
    marginBottom:10,
    zIndex:5,

  }
})



export default function Login({navigation}) {
  return (  

    <View style={styles.backgroundPurple}>       
      <View style={styles.containerWhite}>
        <View style={[styles.userInfo, {flex:1, flexDirection: 'column'},]}>   

          <View style={{ width:'100%', height: 60}}><Input style={styles.userInputStyle} placeholder="Email Address"/></View>
          <View style={{width:'100%', height:60}}><Input style={styles.userInputStyle} placeholder="Password"/></View>
            
          <View style={{ width:'100%'}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Home.js')}>
              <Button
                    title="LOG IN"
                    buttonStyle={{backgroundColor: '#9492ef', borderWidth: 2, borderColor: 'white', borderRadius: 30,}}
                    containerStyle={{ width: 200, marginHorizontal: 50,  marginVertical: 10,}}
                    titleStyle={{ fontWeight: 'bold' }}>
              </Button>
            </TouchableOpacity>
          </View>

          <View style={{alignItems:'center',marginVertical: 20, width:'100%'}}>
            <Text>- Log In With -</Text>
            
          </View>
          
          <View style={{alignItems:'center', width:'100%',marginTop:100}}>
            <Text>Dont Have An Account? </Text>
            <Button title="SIGN UP" type="clear" />
          </View>

        </View>     
      </View> 
    </View> 
  );
}
