// post screen (laura)

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image, Avatar, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Post ( {navigation} ) {
  return (
    <>
    <View style={styles.viewOne}>
       <View style={{justifyContent: 'space-evenly', borderBottomWidth: 1, borderBottomColor: 'lightgrey', marginBottom: 30}}>
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

    {/* row */}
    <View style={[styles.container,{flexDirection: 'row'}]}>
            <View style={{flex: 1}}>
                <View style={styles.avatarSpacing}>
                    <Avatar
                        size={120}
                        rounded
                        source={{ uri: "https://communication.ucf.edu/wp-content/uploads/sites/2/2018/05/Daniel-V.-Novatnak-1.jpeg" }}
                    />
                </View>    
            </View>

            <View style={{flex: 2, justifyContent: 'space-evenly'}}>
              <View style={[{flexDirection: 'row'}]}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}> @dnovatnak007 </Text>
              </View>
                <Button buttonStyle={{
                  borderRadius: 25,
                  width: 90,
                  height: 30,
                  backgroundColor: '#9492EF', 
                }}
                titleStyle={{
                  fontSize: 10
                }}>
                  To Everyone v
                </Button>
                <Text margin> Currently in Europe with my girlfriend again and we visited this nice little cafe nea | </Text>
              </View>
            </View>

            <View style={styles.containerWhite}>
        <View style={[styles.userInfo, {flex:1, flexDirection: 'column'},]}>   

        </View>
      </View>



    </View>
    </>
  );
}

const styles = StyleSheet.create({
    viewOne: {
        textAlign: "center",
        margin: 20,
        marginBottom: 10
    },  
    // userInfo: {
    //   marginTop:50,
    //   zIndex:2,   
    //   top: 0,
    //   width: '75%',
    //   alignItems: 'center',
    //   padding: 10,
    // },  
    // containerWhite:{
    //   zIndex:1,
    //   position:'absolute',    
    //   bottom: 0,
    //   height:"60%",
    //   width: "100%",
    //   borderTopLeftRadius: 75,
    //   borderTopRightRadius: 75,
    //   backgroundColor: '#fff',    
    //   alignItems: "center", 
    //   justifyContent: "center",  
    // },
  })
