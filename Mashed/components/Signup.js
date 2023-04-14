// Signup screen (shelby)


import React, { Component } from 'react';
import { View, Pressable, Text, Linking, Image, TextInput, Button, TouchableOpacity, StyleSheet, AsyncStorage, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SocialIcon, SocialIconProps, Input, Icon } from '@rneui/themed'; 
// import {AsyncStorage} from 'react-native';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email : '',
      username : '',
      password : '',
      confirmPw : '',
      check_textInputChange : false,
      secureTextEntry : true,
      confirmSecureTextEntry : true
    };
  }
  
  UserInfo=()=>{
    var Email = this.state.email;
      // email reg ex
        var checkEmail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);
    var Username = this.state.username;
    var Password = this.state.password;
    var ConfirmPw = this.state.confirmPw;
  
    if ((Email.length==0) || (Password.length==0) || (ConfirmPw.length==0)){
      alert("Please make sure to fill out all fields");
    }else if (!(checkEmail).test(Email)){
      alert("Enter a valid Email");
    }

    // Password validations
    else if (Password.length<8){
      alert("A minimum of 8 characters is required for your password.");
    } 
      else if (!((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(Password))){
      alert("At least 1 special character is required for your password.");
    }
      else if(Password !== ConfirmPw){
      alert("Passwords don't match");
    }
    
    
    else{
      var InsertAPIURL = "https://students.gaim.ucf.edu/~na404266/dig4104c/mashed-server/signup.php";   //API to render signup

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      
      var Data ={
        Email: Email,
        Username: Username,
        Password: Password
      };

    // FETCH func ------------------------------------
    fetch(InsertAPIURL,{
        method:'POST',
        headers:headers,
        credentials : 'include',
        body: JSON.stringify(Data) //convert data to JSON
    })
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    
    // testing
    // npm i @react-native-async-storage/async-storage
    // .then((response) => AsyncStorage.setItem(Username, response)) => {console.log(result)};

    // testing

    .then((response)=>{
      alert(response[0].Message);       // If data is in JSON => Display alert msg
      this.props.navigation.navigate("Login"); //Navigate to home if authentications are valid
    })
    .catch((error)=>{
        alert("Error Occured" + error);
    })
    }
  }
  
  updateSecureTextEntry(){
    this.setState({
        ...this.state,
        secureTextEntry: !this.state.secureTextEntry
    });
  }

  updateConfirmSecureTextEntry(){
    this.setState({
        ...this.state,
        confirmSecureTextEntry: !this.state.confirmSecureTextEntry
    });
}

  render() {
    return (
      <>
      <ScrollView>
      <View style={styles.viewStyle}>
        {/* LOGO */}
          <Image  
              style={{ height: '5%', width: '50%', marginHorizontal: '26%', marginTop: '10%', resizeMode:'contain'}}
              source={{uri:'https://i.postimg.cc/65XBkHNg/logo.png'}}>  
          </Image> 

            <Image  
              style={{ height: '20%', width: '100%' , resizeMode:'contain'}}
              source={{uri:'https://www.linkpicture.com/q/Food-for-thanksgiving.png'}}>  
            </Image> 


          <View style={{ backgroundColor: 'white', borderRadius: '25 0 0 25', padding: '5%'}}>
            <View style={styles.action}>
              <TextInput
                placeholder="Enter Email"
                placeholderTextColor="#969696"
                style={styles.textInput}
                onChangeText={email=>this.setState({email})}
                />
            </View>

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

            <View style={styles.action}>
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="#969696"
                style={styles.textInput}
                secureTextEntry={this.state.secureTextEntry ? true : false}
                onChangeText={confirmPw=>this.setState({confirmPw})}
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
                  <Text style={styles.text}>SIGN UP</Text>
                </Pressable>
              </View>

            <View style={{alignItems:'center',marginVertical: 20, width:'100%'}}>
              <Text>- or Log In With -</Text>
              <View style={[styles.userInfo, {flex:1, flexDirection: 'row'},]}>
                <TouchableOpacity>
                  <SocialIcon type="instagram" onPress={() => Linking.openURL('http://instagram.com')}></SocialIcon>
                </TouchableOpacity>
                <TouchableOpacity>
                  <SocialIcon type="facebook" onPress={() => Linking.openURL('http://facebook.com')}></SocialIcon>
                </TouchableOpacity>
                <TouchableOpacity>
                  <SocialIcon type="google" onPress={() => Linking.openURL('http://google.com')}></SocialIcon>
                </TouchableOpacity>
              </View>
              
            </View>

            {/* REDIRECT TO SIGNUP */}
              <View style={{ flexDirection: 'row', margin: '20%'}}>
                <Text> Already have an account? </Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}}>
                    <Text style={{ fontWeight: 'bold', color: '#9492EF'}}>Log In!</Text>
                </TouchableOpacity>
              </View>
        </View>
      </View>
      </ScrollView>
      </>
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
  action: {
    flexDirection: 'row',
    marginTop: 10,
 
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