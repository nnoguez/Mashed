import React, { Component } from "react";
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

  UserInfo = () => {
    var PostName = this.state.PostName;
    var PostBio = this.state.PostBio;

    var InsertAPIURL = "https://students.gaim.ucf.edu/~na404266/dig4104c/mashed-server/adduserpost.php"; // Update with correct API endpoint

    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var Data = {
      PostName: PostName,
      PostBio: PostBio
    };

    // FETCH func ------------------------------------
    try {
      fetch(InsertAPIURL, {
        method: 'POST',
        headers,
        body: JSON.stringify(Data), //convert data to JSON
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.length && response[0].Message) {
            alert(response[0].Message);
            this.props.navigation.navigate('Home');
          } else {
            // handle the case where the response is not what we expected
            alert('Unexpected response from server');
          }
        })
        .catch((error) => {
          alert('Error occurred during fetch request: ' + error);
        });
    } catch (error) {
      alert('Error occurred during fetch request: ' + error);
    }
  };


  //       if (response.Message === "Post Successfully Added!") { // Check the response for success
  //         alert(response.Message); // If data is in JSON => Display success alert msg
  //         this.props.navigation.navigate("Home"); //Navigate to home if authentication is valid
  //       } else {
  //         alert(response.Message); // If data is in JSON => Display error alert msg
  //       }
  //     })
  //     .catch((error) => {
  //       alert("Error Occured: " + error.message); // Display error message in the alert
  //     });
  // }


  render() {
    const { navigation } = this.props;

    return (
      <>
        <View style={styles.viewStyle}>
          {/* LOGO */}
          <Image
            style={{ height: '5%', width: '50%', marginHorizontal: '26%', marginTop: '10%', resizeMode: 'contain' }}
            source={{ uri: 'https://i.postimg.cc/65XBkHNg/logo.png' }}>
          </Image>
        </View>
        <View style={[styles.container, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
            <Text style={styles.followForColor}> Post</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Post')}>
              <Text style={styles.followFor}> | Recipe</Text> 
            </TouchableOpacity>
        </View>



        <View style={[styles.viewOne]}>

        <View style={{ backgroundColor: 'white', borderRadius: 25, padding: '5%', marginTop: '3%', borderWidth: 2, borderColor: '#9492EF' }}>
          <View style={styles.action}>
            <TextInput
              placeholder="Tried recipe"
              placeholderTextColor="#969696"
              style={styles.textInput}
              onChangeText={PostName => this.setState({ PostName })}
            />
          </View>
        </View>
        <View style={{ backgroundColor: 'white', borderRadius: 25, padding: '5%', marginTop: '3%', marginBottom: '5%', borderWidth: 2, borderColor: '#9492EF' }}>
          <View style={styles.action}>
            <TextInput
              placeholder="Post Bio..."
              placeholderTextColor="#969696"
              style={[styles.textInput, { height: 100 }]}
              onChangeText={PostBio => this.setState({ PostBio })}
            />
          </View>
        </View>
        {/* Button */}
        <View style={styles.buttonsection}>
          <Pressable
            style={styles.button}
            onPress={()=>{this.UserInfo()}}>
          <Text style={styles.buttonText}>Upload Post</Text>
        </Pressable>
      </View>
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
    },
    followFor: {
      textAlign: "center",
      fontSize: '17'
  },
    followForColor: {
      color: "#FFC42D",
      fontWeight: 'bold',
      fontSize: '17'
  }
})
