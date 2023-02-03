import { Card,Button } from "@rneui/base";
//import React, { Component } from "react";
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
    },
    cardWeightStyle:{
      fontSize: 10,
      fontWeight: 'bold',
      color:'gray',
      paddingLeft:20,
      marginTop: 5
    },

  })



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
          <Text style={{zIndex: 1, color:'dark gray', fontSize: 15, paddingTop:10, fontWeight:'bold' }}>My Cart</Text>
        </View>      

        
        <Card borderRadius={25} width ={350} >
          <View style={[styles.container,{flexDirection: 'row'}]}> 
                  <View style={{flex: 1}}>
                    <Card.Image
                        style={{width:100, height:100, marginTop: 5, borderRadius: 12}}
                        source={{
                        uri:'https://i5.walmartimages.com/asr/606ac3a4-0207-4a84-99a0-f4eaa2e6b6dc_1.b77d2d33613f84645364e0d6d453f3a6.jpeg',
                        }}
                    /> 
                  </View>      
              <View style={{flex: 2, justifyContent: 'space-evenly'}}>
              <View style={{width:'70%'}}>
                <Text style={styles.cardLabelStyle}>Gold Medal All Purpose Flour</Text>
                <Text style={styles.cardWeightStyle}>size:5 lb</Text>
                <Text style={styles.priceStyle}>$3.83</Text>
              </View>
              </View>
          </View>
        </Card>
        <Card borderRadius={25} width ={350} >
          <View style={[styles.container,{flexDirection: 'row'}]}> 
                  <View style={{flex: 1}}>
                    <Card.Image
                        style={{width:100, height:100, marginTop: 5, borderRadius: 12}}
                        source={{
                        uri:'https://i5.walmartimages.com/asr/b2c2ed2f-a958-4ff6-901b-667c7e51d622.0dfa0cf3b53e9776991066037362e4d3.jpeg',
                        }}
                    /> 
                  </View>      
              <View style={{flex: 2, justifyContent: 'space-evenly'}}>
              <View style={{width:'70%'}}>
              <Text style={styles.cardLabelStyle}>Freshness Guaranteed Thin-Sliced Chicken Breasts</Text>
                <Text style={styles.cardWeightStyle}>size:1.7-3.0 lb</Text>
                <Text style={styles.priceStyle}>$11.31</Text>
              </View>
              </View>
          </View>
        </Card>
      
        <Card borderRadius={25} width ={350} >
          <View style={[styles.container,{flexDirection: 'row'}]}> 
                  <View style={{flex: 1}}>
                    <Card.Image
                        style={{width:100, height:100, marginTop: 5, borderRadius: 12}}
                        source={{
                        uri:'https://crowdedline.com/wp-content/uploads/2021/02/fc2b61a0-3755-4817-8555-3d42d4890178_1.46f5d46ba12d371cb5b5a240c40bbc14.jpeg',
                        }}
                    /> 
                  </View>      
              <View style={{flex: 2, justifyContent: 'space-evenly'}}>
              <View style={{width:'70%'}}>
                <Text style={styles.cardLabelStyle}>Large White Eggs</Text>
                <Text style={styles.cardWeightStyle}>size: 18 count</Text>
                <Text style={styles.priceStyle}>$3.51</Text>
              </View>
              </View>
          </View>
        </Card>

        <Card borderRadius={25} width ={350} >
          <View style={[styles.container,{flexDirection: 'row'}]}> 
                  <View style={{flex: 1}}>
                    <Card.Image
                        style={{width:100, height:100, marginTop: 5, borderRadius: 12}}
                        source={{
                        uri:'https://m.media-amazon.com/images/I/81yU+VIqSZL.jpg',
                        }}
                    /> 
                  </View>      
              <View style={{flex: 2, justifyContent: 'space-evenly'}}>
              <View style={{width:'70%'}}>
                <Text style={styles.cardLabelStyle}>4C Japanese Style Seasoned Panko Bread Crumbs</Text>
                <Text style={styles.cardWeightStyle}>size: 8 oz</Text>
                <Text style={styles.priceStyle}>$2.00</Text>
              </View>
              </View>
          </View>
        </Card>



        
  </View> 
</ScrollView>


        <View style={styles.containerWhite}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.totalStyle}>TOTAL</Text>
            <Text style={styles.priceStyle}>$20.65</Text>
          </View>
          <Button   style={{paddingTop: 35}}
                    title="PROCEED TO CHECKOUT"
                    buttonStyle={{backgroundColor: '#FFC42D', borderRadius: 30,}}
                    containerStyle={{ width: '60%' }}
                    titleStyle={{ fontWeight: 'bold' }}>
          </Button>
        </View>
      </View>      
       
    
       
      
      </>
    );
  }