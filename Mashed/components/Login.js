// login screen (shelby)


import React, { Component } from "react";
import { SafeAreaView, View, ScrollView, Text, StyleSheet, SectionList, TouchableOpacity, Image } from 'react-native';

import { SocialIcon, Input, Button } from '@rneui/themed'; 

const styles = StyleSheet.create({
  backgroundPurple: {
      zIndex:0,
      backgroundColor:'#9492ef',
      flexDirection:"column",
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
    marginTop:50,
    zIndex:2,   
    top: 0,
    width: '75%',
    alignItems: 'center',
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
})



export default function Login({navigation}) {
  return (  

    <View style={styles.backgroundPurple}>  

      <View style={{ zIndex:11, marginTop: -400, width:'100%'}}>
        <Image  
              style={{ height: 50, resizeMode:'contain'}}
              source={{uri:'https://i.postimg.cc/65XBkHNg/logo.png'}}>  
      </Image> 
      <Image  
              style={{ height: 50, width: '100%' , resizeMode:'contain'}}
              source={{uri:'https://ibb.co/XzwByw3'}}>  
      </Image> 
      </View>
        
      <View style={styles.containerWhite}>
        <View style={[styles.userInfo, {flex:1, flexDirection: 'column'},]}>   
          
          
          <View style={{ width:'100%', height: 60}}><Input style={styles.userInputStyle} placeholder="Email Address"/></View>
          <View style={{width:'100%', height:60}}><Input style={styles.userInputStyle} placeholder="Password"/></View>
            
          <View style={{ width:'100%'}}>
              <Button 
                    onPress={()=> navigation.navigate('Home')}
                    title="LOG IN"
                    buttonStyle={{backgroundColor: '#FFC42D', borderWidth: 2, borderColor: 'white', borderRadius: 30,}}
                    containerStyle={{ width: 200, marginHorizontal: 50,  marginVertical: 10,}}
                    titleStyle={{ fontWeight: 'bold' }}>
              </Button>
          </View>

          <View style={{alignItems:'center',marginVertical: 20, width:'100%'}}>
            <Text>- Log In With -</Text>
            <View style={[styles.userInfo, {flex:1, flexDirection: 'row'},]}>
            <SocialIcon type="instagram"></SocialIcon>
            <SocialIcon type="facebook"></SocialIcon>
            <SocialIcon type="google"></SocialIcon>
            </View>
            
          </View>
          
          <View style={{alignItems:'center', width:'100%', marginVertical: 40}}>
            <Text>Dont Have An Account? </Text>
            
              <Button title="SIGN UP" type="clear" onPress={()=> navigation.navigate('Signup')}/>
            
          </View>

        </View>     
      </View> 
    </View> 
  );
}
