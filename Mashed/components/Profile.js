// profile screen


import React, { Component, useState } from "react";
import { Card } from "@rneui/base";
import { Avatar, Button } from '@rneui/themed';
import { View, Image, Text, TextInput, Pressable, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const image = {uri: 'https://i.pinimg.com/736x/27/1a/b9/271ab997e179c7dde6530e8d8ae632d4.jpg'};

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      Username : '',
      bio : '',
      // UserID : '',
      edit : true
    };
  }
  
// pulling values from table users
  componentDidMount() {
    this.LoadBio();
    this.LoadUsername();

}


// pulling bio
  LoadBio = () => {
    var Username = this.state.Username;
    var InsertAPIURL = "https://students.gaim.ucf.edu/~na404266/dig4104c/mashed-server/bioaccess.php"; // API to render signup
    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    var Data = {
        Username: Username
    };

    // FETCH func ------------------------------------
    fetch(InsertAPIURL, {
            method: 'POST',
            headers: headers,
            credentials: 'include',
            body: JSON.stringify(Data) //convert data to JSON
        })
        .then((response) => response.json())
        .then((response) => {
            // Set the value of bio in the component state
            this.setState({ bio: response[0].bio });
        })
        .catch((error) => {
            alert("oh no" + error);
        });
}



// pulling username
LoadUsername = () => {
  var Username = this.state.Username;
  var InsertAPIURL = "https://students.gaim.ucf.edu/~na404266/dig4104c/mashed-server/usernameaccess.php"; // API to render signup
  var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  };
  var Data = {
      Username: Username
  };

  // FETCH func ------------------------------------
  fetch(InsertAPIURL, {
          method: 'POST',
          headers: headers,
          credentials: 'include',
          body: JSON.stringify(Data) //convert data to JSON
      })
      .then((response) => response.json())
      .then((response) => {
          // Set the value of username in the component state
          this.setState({ Username: response[0].Username });
      })
      .catch((error) => {
          alert("oh no" + error);
      });
}


  UserInfo=()=>{
    var Username = this.state.Username;
    // var UserID = this.state.userID;
    var bio = this.state.bio;

    
    var InsertAPIURL = "https://students.gaim.ucf.edu/~na404266/dig4104c/mashed-server/profile.php";   //API to render signup

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      
      var Data ={
        Username : Username,
        // UserID: UserID,
        bio: bio
      };

    // FETCH func ------------------------------------
    fetch(InsertAPIURL,{
        method:'POST',
        headers:headers,
        credentials : 'include',
        body: JSON.stringify(Data) //convert data to JSON
    })
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response)=>{
      alert(response[0].Message);       // If data is in JSON => Display alert msg
     //Navigate to home if authentications are valid
    })
    .catch((error)=>{
        alert("Error Occured" + error);
    });
    }

  

    toggleEdit = () => {
      this.setState({ edit: !this.state.edit });
    };






  render() {
    const {Username, bio } = this.state;
    const { navigation } = this.props;
  return (
    <>
    {/* mashed logo */}
    <View style={styles.viewOne}>
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Settings')}>
                <Icon style={{ marginLeft: 355, marginTop: 20 }} name="gear" size={25} color="#FFC42D"/>
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
      <ImageBackground source={image} resizeMode="cover" borderBottomLeftRadius={25} borderBottomRightRadius={25}>
        <View style={{ 
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 75,
        }}
        >
          <Avatar
            avatarStyle={{ 
            borderWidth: 10, 
            borderColor: '#F5F5F5', 
            borderRadius: 100, 
            }}        
              size={150}
              rounded
              source={{ uri: "https://communication.ucf.edu/wp-content/uploads/sites/2/2018/05/Daniel-V.-Novatnak-1.jpeg" }}
          />
        </View>
      </ImageBackground>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
          <Text>Following</Text>
          <Text style={{ fontWeight:'bold' }}>@{this.state.Username}</Text>
          <Text>Followers</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: 10 }}>
          <Text style={{ fontWeight:'bold', fontSize: 17 }}>208</Text>
          <Button
            title="Edit Profile"
            buttonStyle={{
              backgroundColor: '#9492EF',
              borderRadius: 30,
              padding: 1,
            }}
            containerStyle={{
              marginHorizontal: 25,
            }}
            onPress={this.toggleEdit}
          />
          <Text style={{ fontWeight:'bold', fontSize: 17 }}>103</Text>
      </View>
  
      {/* show static text if edit profile button is not pressed,
          if pressed, show text input */}
      <View key={this.state.edit ? 'input' : 'text'}>
        {this.state.edit ? (
          <View>
            <Text style={{ textAlign: 'center', margin: 10 }}> {this.state.bio} </Text>
          </View>
        ) : (
        <View style={{ textAlign: 'center' }}>
          <TextInput
            placeholder="Enter Your Bio"
            placeholderTextColor="#969696"
            style={{ textAlign: 'center', marginBottom: 10 }}
            onChangeText={bio=>this.setState({bio})}
          />
        <View style={styles.buttonsection}> 
          <Pressable
            style={styles.button} 
            onPress={()=>{
              this.UserInfo();
              this.toggleEdit();
            }}>
            <Text style={styles.text}>Save</Text>
          </Pressable>
          </View>
        </View>
        )}
      </View>
            {/* Button */}
   

     

      <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgrey', marginBottom: 10 }}></View>

      <View style={{ margin: 15 }}>
        <Text style={{ textAlign: "center", fontSize: 17 }}> 
        <Text style={{color: "#FFC42D",fontWeight: 'bold'}}> My Posts | </Text>
            My Saved
        </Text>
      </View>
      <ScrollView>
      <View style={{ marginBottom: 480 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <Image
          style={{ width: 180, height: 180, borderRadius: 25 }}
          source={{
            uri: 'https://gastroplant.com/wp-content/uploads/2019/06/1404_Vegan-Pasta-Primavera_004.jpg',
          }}
        />
        <Image
          style={{ width: 180, height: 180, borderRadius: 25 }}
          source={{
            uri: 'https://i.pinimg.com/originals/ae/5f/e4/ae5fe4f0cf45873edff54880072f2256.png',
          }}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <Image
          style={{ width: 180, height: 180, borderRadius: 25 }}
          source={{
            uri: 'https://media.istockphoto.com/id/1171787426/photo/enjoying-lunch-with-friends.jpg?s=170667a&w=0&k=20&c=oZTwKx671f_40Mv1i1hIITBZUavqQWWPemYwNRm3Kqo=',
          }}
        />
        <Image
          style={{ width: 180, height: 180, borderRadius: 25 }}
          source={{
            uri: 'https://i.pinimg.com/736x/cb/76/ee/cb76ee697d878eb34e60e148a76de699.jpg',
          }}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <Image
          style={{ width: 180, height: 180, borderRadius: 25 }}
          source={{
            uri: 'https://i.pinimg.com/originals/f4/0a/ac/f40aacbe07d228a34d8f579dfa8b1675.jpg',
          }}
        />
        <Image
          style={{ width: 180, height: 180, borderRadius: 25 }}
          source={{
            uri: 'https://i.pinimg.com/originals/28/3c/14/283c148e460e9a93bcf57e5a3d2c97b3.jpg',
          }}
        />
      </View>
      </View>
    </ScrollView>
    </View>   
    </>
  );
}
}

const styles = StyleSheet.create({
  viewOne: {
    textAlign: "center",
    margin: 20,
    marginBottom: 10
},
buttonsection: {
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
},
button: {
  backgroundColor: '#FFC42D',
  color: 'white',
  height: 35,
  justifyContent: 'center', //up dwn
  alignItems: 'center',  //r & l
  width: '70%',
  borderRadius: 10
}
})