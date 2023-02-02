
// home screen (naomy)


import React from "react";
  import { View, ScrollView, Text, StyleSheet, SectionList, TouchableOpacity } from 'react-native';
  import { Avatar, Image, Badge, Card } from '@rneui/themed';
  import Icon from 'react-native-vector-icons/FontAwesome';

  export default function Chat({ navigation }) {
      return (
      <>
      {/* mashed logo */}
      <View style={styles.viewOne}>
          <View>
                  <View style={[styles.container,{flexDirection: 'row'}]}>
                      <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
                          <Icon style={{ marginRight: 345, marginTop: 20 }} name="angle-left" size={35} color="#FFC42D" />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=> navigation.navigate('Message')}>
                          <Icon style={{ marginRight: 355, marginTop: 20 }} name="pencil" size={25} color="#FFC42D" />
                      </TouchableOpacity>
                  </View>
              <Image
              style={{ 
                  marginLeft: 127, 
                  marginBottom: 30,
                  width:"35%", 
                  height:25}}
              source={{
              uri:'https://i.postimg.cc/65XBkHNg/logo.png',
              }}
              /> 

          <Text style={[styles.headers, {marginBottom: 10}]}> Settings</Text>

        </View>
      <ScrollView>
      
  {/* row 1 */}
  <View style={[styles.container,{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 30}]}>
      <View style={styles.avatarSpacing}>
          <Icon name="user" color="#9492EF" size={35}></Icon>
      </View>    
      <View style={{flex: 3, justifyContent: 'space-evenly', textAlign: 'center', marginTop: 10, marginLeft: 10}}>
        <Text style={{fontSize: 20, marginLeft: 40}}> Account Preferences </Text>
      </View>
  </View>
  <View style={[styles.container,{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 30}]}>
      <View style={styles.avatarSpacing}>
          <Icon name="lock" color="#9492EF" size={35}></Icon>
      </View>    
      <View style={{flex: 3, justifyContent: 'space-evenly', textAlign: 'center', marginTop: 5, marginLeft: 10}}>
        <Text style={{fontSize: 20, marginLeft: 40}}> Privacy and Safety </Text>
      </View>
  </View>
  <View style={[styles.container,{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 30}]}>
      <View style={styles.avatarSpacing}>
          <Icon name="book" color="#9492EF" size={35}></Icon>
      </View>    
      <View style={{flex: 3, justifyContent: 'space-evenly', textAlign: 'center', marginTop: 10}}>
        <Text style={{fontSize: 20, marginLeft: 40}}> My Recipes and Alterations </Text>
      </View>
  </View>
  <View style={[styles.container,{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 30}]}>
      <View style={styles.avatarSpacing}>
          <Icon name="bell" color="#9492EF" size={35}></Icon>
      </View>    
      <View style={{flex: 3, justifyContent: 'space-evenly', textAlign: 'center', marginTop: 10}}>
        <Text style={{fontSize: 20, marginLeft: 40}}> Notifications </Text>
      </View>
  </View>
  <View style={[styles.container,{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 30}]}>
      <View style={styles.avatarSpacing}>
          <Icon name="check" color="#9492EF" size={35}></Icon>
      </View>    
      <View style={{flex: 3, justifyContent: 'space-evenly', textAlign: 'center', marginTop: 10}}>
        <Text style={{fontSize: 20, marginLeft: 40}}> Security and Account Access </Text>
      </View>
  </View>
  <View style={[styles.container,{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 30}]}>
      <View style={styles.avatarSpacing}>
          <Icon name="bookmark" color="#9492EF" size={35}></Icon>
      </View>    
      <View style={{flex: 3, justifyContent: 'space-evenly', textAlign: 'center', marginTop: 10}}>
        <Text style={{fontSize: 20, marginLeft: 40}}> Advertising Data </Text>
      </View>
  </View>
  <View style={[styles.container,{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 30}]}>
      <View style={styles.avatarSpacing}>
          <Icon name="user" color="#9492EF" size={35}></Icon>
      </View>    
      <View style={{flex: 3, justifyContent: 'space-evenly', textAlign: 'center', marginTop: 10}}>
        <Text style={{fontSize: 20, marginLeft: 40}}> Accessibility</Text>
      </View>
  </View>
  <View style={[styles.container,{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 30}]}>
      <View style={styles.avatarSpacing}>
          <Icon name="info" color="#9492EF" size={35}></Icon>
      </View>    
      <View style={{flex: 3, justifyContent: 'space-evenly', textAlign: 'center', marginTop: 10}}>
        <Text style={{fontSize: 20, marginLeft: 40}}> About</Text>
      </View>
  </View>









      </ScrollView> 
  </View>
  </>
  );
  };

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
          marginTop: 15,
      },
      followFor: {
          textAlign: "center",
      },
      followForColor: {
          color: "#FFC42D",
          fontWeight: 'bold'
      },
      headers: {
        fontSize:20,
        textAlign: "center",
        fontWeight: 'bold',
      },
      settings:{
        fontSize:15,
        textAlign:'Center'
      }
  })


  // settings screen (laura)


  // import React from "react";
  // import { Button, View, Text } from "react-native";
  // export default function Explore() {
  //   return (
  //     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //       <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginTop: 10 }}>
  //       <Text> Account Preferences </Text>   
  //       <Text> Privacy and Safety </Text> 
  //       <Text> My Recipes and Alterations </Text> 
  //       <Text> Notifications </Text>  
  //       <Text> Security and Account Access </Text> 
  //       <Text> Advertising Data </Text>  
  //       <Text> Accessibility </Text>   
  //       <Text> Account </Text>        
  //     </View>
  //     </View>
  //   );
  // }
