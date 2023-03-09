// post screen (laura)

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image, Avatar, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      RecipeName : '',
      RecipeStep : '',
      RecipeIngredients : '',
    };
  }
  
  UserInfo=()=>{
    var RecipeName = this.state.recipename;
    var RecipeStep = this.state.recipestep;
    var RecipeIngredients = this.state.recipeingredients;
    var InsertAPIURL = "https://students.gaim.ucf.edu/~na404266/dig4104c/mashed-server/Addpost.php";   //API to render signup

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      
      var Data ={
        RecipeName: RecipeName,
        RecipeStep: RecipeStep,
        RecipeIngredients: RecipeIngredients
      };

    // FETCH func ------------------------------------
    fetch(InsertAPIURL,{
        method:'POST',
        headers:headers,
        body: JSON.stringify(Data) //convert data to JSON
    })
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response)=>{
      alert(response[0].Message);       // If data is in JSON => Display alert msg
      this.props.navigation.navigate("Home"); //Navigate to home if authentications are valid
    })
    .catch((error)=>{
        alert("Error Occured" + error);
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
      <View style={{ backgroundColor: 'white', borderRadius: '25 0 0 25', padding: '5%'}}>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter Recipe Name"
              placeholderTextColor="#969696"
              style={styles.textInput}
              onChangeText={RecipeName=>this.setState({RecipeName})}
              />
          </View>
      </View>
      <View style={{ backgroundColor: 'white', borderRadius: '25 0 0 25', padding: '5%'}}>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter Recipe Steps"
              placeholderTextColor="#969696"
              style={styles.textInput}
              onChangeText={RecipeStep=>this.setState({RecipeStep})}
              />
          </View>
      </View>
      <View style={{ backgroundColor: 'white', borderRadius: '25 0 0 25', padding: '5%'}}>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter Recipe Ingredients"
              placeholderTextColor="#969696"
              style={styles.textInput}
              onChangeText={RecipeIngredients=>this.setState({RecipeIngredients})}
              />
          </View>
      </View>





      </>
    )
  }

// export default function Post ( {navigation} ) {
//   return (
//     <>
//   <View style={styles.viewOne}>

//        <View style={{justifyContent: 'space-evenly', borderBottomWidth: 1, borderBottomColor: 'lightgrey', marginBottom: 30}}>
//           <TouchableOpacity onPress={()=> navigation.navigate('Main')}>
//             <Icon style={{ marginLeft: 350, marginTop: 20 }} name="send" size={25} color="#FFC42D"/>
//           </TouchableOpacity>
//           <Image
//             style={{ 
//                 marginLeft: 127, 
//                 marginBottom: 10,
//                 width:"35%", 
//                 height:25}}
//             source={{
//             uri:'https://i.postimg.cc/65XBkHNg/logo.png',
//             }}
//           /> 
//         </View>

//     {/* row */}
//     <View style={[styles.container,{flexDirection: 'row'}]}>
//             <View style={{flex: 1}}>
//                 <View style={styles.avatarSpacing}>
//                     <Avatar
//                         size={120}
//                         rounded
//                         source={{ uri: "https://communication.ucf.edu/wp-content/uploads/sites/2/2018/05/Daniel-V.-Novatnak-1.jpeg" }}
//                     />
//                 </View>    
//             </View>

//             <View style={{flex: 2, justifyContent: 'space-evenly'}}>
//                 <View >
//                   <Text style={{fontWeight: 'bold', fontSize: 20}}> @dnovatnak007 </Text>
//                 </View>
//                 <Button 
//                     buttonStyle={{
//                       borderRadius: 25,
//                       width: 90,
//                       height: 30,
//                       backgroundColor: '#9492EF', 
//                     }}
//                     titleStyle={{
//                       fontSize: 10
//                     }}>
//                   To Everyone v
//                 </Button>
//                 <Text margin> Currently in Europe with my girlfriend again and we visited this nice little cafe nea | </Text>
//               </View>
//     </View>        
//   </View>
      
//       <View style={styles.containerWhite}>
//           <View style={{flexDirection: 'row'}}>
//             <Image style={{ height:75,width:75, borderRadius: 5, margin: 5}}
//                   source={{
//                   uri:'https://www.linkpicture.com/q/Screen-Shot-2023-02-03-at-12.54.29-AM.png',
//                   }}
//               />
//             <Image style={{ height:75,width:75, borderRadius: 5, margin:5}}
//                   source={{
//                   uri:'https://www.linkpicture.com/q/Screen-Shot-2023-02-03-at-12.54.20-AM_1.png',
//                   }}
//               />
//               <Image style={{ height:75,width:75, borderRadius: 5, margin: 5}}
//                   source={{
//                   uri:'https://kathrynskitchenblog.com/wp-content/uploads/2022/04/Shrimp-Ceviche-13-768x1152.jpg',
//                   }}
//               />
//               <Image style={{ height:75,width:75, borderRadius: 5, margin: 5}}
//                   source={{
//                   uri:'https://www.linkpicture.com/q/The_Rose_Venice_Exterior.jpg',
//                   }}
//               />
//           </View>
//         <View>
//           <Image style={{ zIndex:8,height: 390,width:420, borderRadius: 5, marginBottom: 20}}
//                   source={{
//                   uri:'https://www.linkpicture.com/q/52BF962F-A2E1-4DDA-A7D0-F384AAE4F5D3.jpeg',
//                   }}/>
//         </View>
         
//       </View>



   
//     </>
//   );
// }
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
        
    }
  })
