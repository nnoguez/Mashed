import React, {Component} from "react";
import { View, Pressable, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Image, Avatar, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class UserPost extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        PostName: '',
        PostBio: ''
    };
  }
  
  UserInfo=()=>{
    var PostName = this.state.PostName;
    var PostBio = this.state.PostBio;

    var InsertAPIURL = "https://students.gaim.ucf.edu/~na404266/dig4104c/mashed-server/AddUserPost.php";   // Update with correct API endpoint

    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    
    var Data ={
      PostName: PostName,
      PostBio: PostBio
    };

    // FETCH func ------------------------------------
    fetch(InsertAPIURL,{
        method:'POST',
        headers:headers,
        credentials: 'include',
        body: JSON.stringify(Data) //convert data to JSON
    })
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response)=>{
      alert(response.Message);       // If data is in JSON => Display alert msg
      this.props.navigation.navigate("Home"); //Navigate to home if authentications are valid
    })
    .catch((error)=>{
        alert("Error Occurred: " + error);
    });
  }
  
  render() {
    return (
      <>
        <View style={styles.viewStyle}>
          {/* LOGO */}
          <Image  
              style={{ height: '5%', width: '50%', marginHorizontal: '26%', marginTop: '10%', resizeMode:'contain'}}
              source={{uri:'https://i.postimg.cc/65XBkHNg/logo.png'}}>  
          </Image> 
        </View>
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
        </View>
        <View style={{ backgroundColor: 'white', borderRadius: 25, padding: '5%'}}>
          <View style={styles.action}>
            <TextInput
              placeholder="Tried recipe"
              placeholderTextColor="#969696"
              style={styles.textInput}
              onChangeText={PostName=>this.setState({PostName})}
            />
          </View>
        </View>
        <View style={{ backgroundColor: 'white', borderRadius: 25, padding: '5%'}}>
          <View style={styles.action}>
            <TextInput
              placeholder="Post Bio..."
              placeholderTextColor="#969696"
              style={styles.textInput}
              onChangeText={PostBio=>this.setState({PostBio})}
            />
          </View>
        </View>
        {/* Button */}
        <View style={styles.buttonsection}>    
          <Pressable
            style={styles.button} 
            onPress={()=>{this.UserInfo()}}>
            <Text style={styles.text}>Share Post</Text>
          </Pressable>
        </View>
      </>
    )
  }
}


const styles = StyleSheet.create({
   
  viewOne: {
        textAlign: "center",
        margin: 20,
        marginBottom: 175,
       
    }, 
    containerWhite:{
      zIndex:2,
      height:"60%",
      width: "100%",
      borderTopLeftRadius: 45,
      borderTopRightRadius:45,
      shadowColor: 'gray',
      shadowOpacity: '20%',  
      shadowOffset:{width: 0, height: -3},
      backgroundColor: '#fff',    
      alignItems: "center",
      paddingTop:20, 
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
