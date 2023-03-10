// Signup screen (shelby)


import React, { Component } from "react";
import { SafeAreaView, View, ScrollView, Text, StyleSheet, SectionList, TouchableOpacity, Image } from 'react-native';

import { SocialIcon, SocialIconProps, Input, Button, Icon } from '@rneui/themed'; 


const styles = StyleSheet.create({
  backgroundPurple: {
      zIndex:0,
      backgroundColor:'#9492ef',
      //margin:0,
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
    marginTop:40,
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
    // borderColor: 'gray',
    // borderWidth: 2,
    // borderRadius: 25,
    padding:4,
    textAlign:'center',
  }
})



export default function Signup({navigation}) {
  return (

    
    <View style={styles.backgroundPurple}> 

      <View style={{ zIndex:11, marginTop: -450, width:'100%',marginBottom:-55,}}>
        <Image  
              style={{ height: 50, resizeMode:'contain'}}
              source={{uri:'https://i.postimg.cc/65XBkHNg/logo.png'}}>  
        </Image> 
      </View>
      
      <View style={{ zIndex:12, marginTop: 0, marginBottom:-130, width:'100%'}}>
        <Image  
              style={{ height: 250, width: '100%' , resizeMode:'contain'}}
              source={{uri:'https://www.linkpicture.com/q/Food-for-thanksgiving.png'}}>  
        </Image> 
      </View>

      {/*<View style={{ zIndex:11, marginTop: -400, width:'100%'}}>
        <Image  
              style={{ height: 50, resizeMode:'contain'}}
              source={{uri:'https://i.postimg.cc/65XBkHNg/logo.png'}}>  
      </Image> 
      </View>
      <Image
          style={{
          width:"35%", 
          height:25}}
          source={{
          uri:'https://ibb.co/XzwByw3',
          }}
        />*/}

      <View style={styles.containerWhite}>
        <View style={[styles.userInfo, {flex:1, flexDirection: 'column'},]}>   
       
          
          <View style={{ width:'100%', height: 60}}><Input clearButtonMode="always" style={styles.userInputStyle} placeholder="First Name"/></View>
          <View style={{width:'100%', height:60}}><Input style={styles.userInputStyle} placeholder="Last Name"/></View>
          <View style={{width:'100%', height:60}}><Input style={styles.userInputStyle} placeholder="Email Address"/></View>
          <View style={{width:'100%', height:60}}><Input style={styles.userInputStyle} placeholder="Password"/></View>
          <View style={{width:'100%', height:60}}><Input style={styles.userInputStyle} placeholder="Confirm Password"/></View>
          <View style={{ width:'100%'}}>
            
              <Button
                    onPress={()=> navigation.navigate('Home')}
                    title="SIGN UP"
                    buttonStyle={{backgroundColor: '#FFC42D', borderWidth: 2, borderColor: 'white', borderRadius: 30,}}
                    containerStyle={{ width: 200, marginHorizontal: 50,  marginVertical: 10,}}
                    titleStyle={{ fontWeight: 'bold' }}>
              </Button>
            
          </View>

          
          <View style={{alignItems:'center', width:'100%', marginVertical: 20}}>
            <Text>Already Have An Account? </Text>
            <Button 
              onPress={()=> navigation.navigate('Login')}
              title="LOG IN" 
              type="clear" 
            />
          </View>

        </View>     
      </View> 
    </View> 
  );
}
