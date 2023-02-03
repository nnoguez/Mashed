import { Card,Button } from "@rneui/base";
import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    backgroundWhite: {
      zIndex:0,
      backgroundColor:' #FAF9F6',
      flexDirection:"column",
      flex: 1, 
      alignItems: "center", 
      justifyContent: "center",   
    },
    containerWhite:{
      zIndex:1,
      flex:1,
      position:'absolute',    
      bottom: 0,
      height:"15%",
      width: "100%",
      borderTopLeftRadius: 25,
      borderTopRightRadius:25,
      shadowColor: 'gray',
      shadowOpacity: '20%',  
      shadowOffset:{width: 0, height: -3},
      backgroundColor: '#fff',    
      alignItems: "center",
      paddingTop:20, 
      //justifyContent: "center",  
    },
    totalStyle:{
      fontSize: 20,
      fontWeight: 'bold',
      paddingRight:60,
      color:'dark gray',
    },
    priceStyle:{
      fontSize: 20,
      fontWeight: 'bold',
      color:"#9492ef",
      paddingLeft:60,
    },
    headerStyle:{
      zIndex:2,
      position:'relative',    
      marginTop:-750,
      height:"20%",
      width: "100%",
      backgroundColor: '#fff',    
      alignItems: "center", 
      justifyContent: "center",
      shadowColor:'gray',
      shadowOffset: {width:0,height:-3},
      shadowOpacity: '30%', 
    },
    logoStyle:{
      //:'center',
     
      alignItems:'center',
      
      //marginTop:-60,
      zIndex:4,
    },
    cardStyle:{
      zindex:1,
      marginVertical: 10,
      marginHorizontal:5,
      width: "80%",
      height:30,
      borderRadius:25,

    },

  })



export default function Shopping ({ navigation }) {
   
    return (
      <>   
      <View style={styles.backgroundWhite}>
       
      <View style={{flexDirection:'row'}}>
              
              <View style={{paddingLeft:0,paddingTop:60}}>
                <Icon onPress={()=> navigation.navigate('Recipe')}  name="angle-left" size={35} color="#FFC42D"/>
              </View>
              <View style={{width:'35%', height: 35}}>   
                  <Image   
                        style={{marginLeft: 127, 
                          marginBottom: 10,
                          width:"35%", 
                          height:25}}
                        source={{uri:'https://i.postimg.cc/65XBkHNg/logo.png'}}>  
                  </Image>           
              </View>
        </View>

<ScrollView>

        <View>
          <Text style={{zIndex: 1, color:'dark gray', fontSize: 15,}}>My Cart</Text>
        </View>
</ScrollView>


       
        
       

        <View style={styles.containerWhite}>
          <View style={{flexDirection: 'row', flex: 1,}}>
            <Text style={styles.totalStyle}>TOTAL</Text>
            <Text style={styles.priceStyle}>$20.65</Text>
          </View>
          <Button title="PROCEED TO CHECKOUT"
                    buttonStyle={{backgroundColor: '#FFC42D', borderRadius: 30,}}
                    containerStyle={{ width: '60%' }}
                    titleStyle={{ fontWeight: 'bold' }}>
          </Button>
        </View>
      </View>      
       
    
       
      
      </>
    );
  }