import React, { Component } from 'react';
import { View, Pressable, Text, TextInput, Image, TouchableOpacity, Button, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password : '',
      check_textInputChange : false,
      secureTextEntry : true,
    };
  }

  // componentDidMount () {
  //   AsyncStorage.getItem('username').then((username) => {
  //     if (username != null) {
  //       this.props.navigation.navigate('Home');
  //     }
  //   });
  // }

  UserInfo = () => {
    var Username = this.state.username;
    var Password = this.state.password;

    if ((Username.length==0) || (Password.length==0)) {
      alert("Please fill out all fields");
    } else {
      var APIURL = "https://students.gaim.ucf.edu/~na404266/dig4104c/mashed-server/login.php";
      
      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };
            
      var Data ={
        Username: Username,
        Password: Password,
      };

      fetch(APIURL, {
        method: 'POST',
        headers: headers,
        credentials : 'include',
        body: JSON.stringify(Data),
      })
      .then((response) => response.json())
      .then((response) => {
        alert(response[0].Message);
        if (response[0].Message == "Successfully Logged In!") {
          AsyncStorage.setItem('Username', Username);
          AsyncStorage.setItem('Password', Password);
          console.log("Logged in user:", Data);
          this.props.navigation.navigate('Home');
        }
      })
      .catch((error) => {
        console.error("ERROR FOUND" + error);
      });
    }
  };
  

  updateSecureTextEntry() {
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry
    });
  };

  render() {
    return (
      <View style={styles.viewStyle}>
      {/* LOGO */}
        <Image  
            style={{ height: '5%', width: '50%', marginHorizontal: '26%', marginTop: '10%', resizeMode:'contain'}}
            source={{uri:'https://i.postimg.cc/65XBkHNg/logo.png'}}>  
        </Image> 

          <Image  
            style={{ height: '30%', width: '100%' , resizeMode:'contain'}}
            source={{uri:'https://www.linkpicture.com/q/Autumn-still-life-with-pumpkins-beetroot-and-apple.png'}}>  
          </Image> 


        <View style={{ backgroundColor: 'white', borderRadius: '25 0 0 25', padding: '5%'}}>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter Username"
              placeholderTextColor="#969696"
              style={styles.textInput}
              onChangeText={username=>this.setState({username})}
              />
          </View>

          <View style={styles.action}>
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor="#969696"
              style={styles.textInput}
              secureTextEntry={this.state.secureTextEntry ? true : false}
              onChangeText={password=>this.setState({password})}
              />
                <TouchableOpacity
                  onPress={this.updateSecureTextEntry.bind(this)}>
                  {this.state.secureTextEntry ?
                  <Feather
                  name="eye-off"
                  color="grey"
                  size={20}
                  />
                :  
                  <Feather
                  name="eye"
                  color="#9492EF"
                  size={20}
                  />
                }
                </TouchableOpacity>  
          </View>


          {/* Button */}
            <View style={styles.buttonsection}>    
              <Pressable
                style={styles.button} 
                onPress={()=>{this.UserInfo()}}>
                <Text style={styles.text}>LOGIN</Text>
              </Pressable>
            </View>

          {/* REDIRECT TO SIGNUP */}
            <View style={{ flexDirection: 'row', margin: '20%'}}>
              <Text> Don't have an account? </Text>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Signup')}}>
                <Text style={{ fontWeight: 'bold', color: '#9492EF'}}>Sign Up!</Text>
              </TouchableOpacity>
            </View>
      </View>
      </View>
    );
  }
}

  const styles = StyleSheet.create({
    viewStyle:{
      flex: 1,
      padding: 20,
      backgroundColor: '#9492EF'
    },
    textInput:{
        borderBottomColor: '#9492EF',
        borderBottomWidth: 1,
        marginBottom: 50,
        height: 40,
        fontSize: 20,
        flex: 1,
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 150,
        borderRadius: 10,
        backgroundColor: 'black',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      paddingBottom: 5,
      width: '100%'
  },
  text: {
      fontSize: 18,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      textTransform: 'uppercase'
    },
    buttonsection: {
      width: '100%',
      // height: '30%',
      marginTop: 30,
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
     borderRadius: 10,
   }
})
