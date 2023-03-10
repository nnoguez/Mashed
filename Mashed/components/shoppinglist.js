import { Card,Button, CheckBox } from "@rneui/base";
import React, {useState} from "react";
import {View, Text, Image,Pressable, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Counter from './counter';


export default function Shopping ({ navigation }) {   
   
    return (
      <>   
      <View style={styles.backgroundWhite}>
       
      <View style={{flexDirection:'row', height:'15%', backgroundColor:'white', width:'100%', alignItems:'center', marginTop:0}}>              
              <View style={{marginLeft:20,}}>
                <Icon onPress={()=> navigation.navigate('Recipe')}  name="angle-left" size={35} color="#FFC42D"/>
              </View>
                 
                  <Image   
                        style={{
                          marginLeft: 100, 
                          marginTop: 15,
                          width:"35%", 
                          height:25}}
                        source={{uri:'https://i.postimg.cc/65XBkHNg/logo.png'}}>  
                  </Image>           
              
      </View>

<ScrollView >
  <View style={{alignItems:'center'}}> 
        <View>
          <Text style={{zIndex: 1, color:'dark gray', fontSize: 15, paddingTop:10, fontWeight:'bold' }}>Shopping List</Text>
        </View>      

     {/* IF there are items checked by user: the value names and quantity will fill the place*/}   

        <Card borderRadius={25} width ={350} >
          <View style={[styles.container,{flexDirection: 'row'}]}> 
                <View style={{flex: 1, marginLeft: -20, marginRight: -60}}> 
                  <CheckBox                     
                    onPress={() => setChecked1([!checked1[0], checked1[1]])}>
                    </CheckBox>                 
                </View>      
            <View style={{flex: 2}}>
            <View style={{width:'100%'}}>
                <Text style={styles.cardLabelStyle}>UserCheckedIngredient{/* INser user Ingredient here*/}</Text>
                <Counter/>
            </View>
            </View>
          </View>
        </Card>           
    </View> 
    </ScrollView>
    </View>   
      </>
    );
  }

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
      zIndex:2,
      //flex:1,
      //position:'absolute',    
      bottom: 0,
      height:"20%",
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
      marginTop: 10
    },
    priceStyle:{
      fontSize: 20,
      fontWeight: 'bold',
      color:"#9492ef",
      paddingLeft:20,
      paddingTop: 10,
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
    cardStyle:{
      
      color:'white',
      width: "80%",
      height:100,
      borderRadius:25,

    },
    cardLabelStyle:{
      fontSize: 15,
      fontWeight: 'bold',
      color:'dark gray',
      paddingLeft:20,
      marginLeft: -15,
    },
    cardWeightStyle:{
      fontSize: 10,
      fontWeight: 'bold',
      color:'gray',
      paddingLeft:20,
      marginTop: 5
    },

  })