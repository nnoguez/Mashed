// post screen (laura)

import React, {Component} from "react";
import { View, Pressable, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Image, Avatar, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Post extends Component {
  recipeNameRegex = /^.+$/;
  recipeDescriptionRegex = /^.+$/;
  recipeStepsRegex = /^.+$/;
 
  prepTimeRegex = /^.+$/;
  cookTimeRegex = /^.+$/;
  difficultyRegex = /^.+$/;
  constructor(props) {
    super(props);
    this.state = { 
      RecipeName : '',
      RecipeStep : '',
      RecipeIngredients : '',
      PrepTime: '',
      CookTime: '',
      Difficulty: '',
      ServingSize: '',
      RecipeDescription: ''
    };
  }
  
  UserInfo = () => {
  const {
    RecipeName,
    RecipeStep,
    RecipeIngredients,
    PrepTime,
    CookTime,
    Difficulty,
    ServingSize,
    RecipeDescription,
  } = this.state;

  if (!this.recipeNameRegex.test(RecipeName)) {
    alert('Please enter a recipe name');
    return;
  }

  if (!this.recipeDescriptionRegex.test(RecipeDescription)) {
    alert('Please enter a recipe description');
    return;
  }

  if (!this.recipeStepsRegex.test(RecipeStep)) {
    alert('Please enter recipe steps');
    return;
  }

  if (!this.prepTimeRegex.test(PrepTime)) {
    alert('Please enter prep time');
    return;
  }

  if (!this.cookTimeRegex.test(CookTime)) {
    alert('Please enter cook time');
    return;
  }

  if (!this.difficultyRegex.test(Difficulty)) {
    alert('Please enter level of expertise');
    return;
  }

  const insertAPIURL =
    'https://students.gaim.ucf.edu/~na404266/dig4104c/mashed-server/Addpost.php';

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const data = {
    RecipeName,
    RecipeStep,
    RecipeIngredients,
    PrepTime,
    CookTime,
    Difficulty,
    ServingSize,
    RecipeDescription,
  };

  // Use try-catch to catch any errors that occur during the fetch request
  try {
    fetch(insertAPIURL, {
      method: 'POST',
      headers,
      body: JSON.stringify(data), //convert data to JSON
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.length && response[0].Message) {
          alert(response[0].Message);
          this.props.navigation.navigate('Explore');
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
  render() {
    const { navigation } = this.props;

    return (
      <>
      <View style={styles.viewStyle}>
        {/* LOGO */}
          <Image  
              style={{ height: '5%', width: '50%', marginHorizontal: '26%', marginTop: '10%', resizeMode:'contain'}}
              source={{uri:'https://i.postimg.cc/65XBkHNg/logo.png'}}>  
          </Image> 
      </View>
        <View style={[styles.container, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
          <TouchableOpacity onPress={()=> navigation.navigate('UserPost')}>
            <Text style={styles.followFor}> Post | </Text>
          </TouchableOpacity>
          <Text style={styles.followForColor}>Recipe</Text> 
        </View>

        
      <View style={[styles.viewOne]}>

      <View style={{ backgroundColor: 'white', borderRadius: '25 0 0 25', padding: '5%', marginTop: '3%', borderWidth: 2, borderColor: '#9492EF'}}>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter Recipe Name"
              placeholderTextColor="#969696"
              style={styles.textInput}
              onChangeText={RecipeName=>this.setState({RecipeName})}
              />
          </View>
      </View>
      <View style={{ backgroundColor: 'white', borderRadius: '25 0 0 25', padding: '5%', marginTop: '3%', borderWidth: 2, borderColor: '#9492EF'}}>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter Recipe Steps"
              placeholderTextColor="#969696"
              style={styles.textInput}
              onChangeText={RecipeStep=>this.setState({RecipeStep})}
              />
          </View>
      </View>
      <View style={{ backgroundColor: 'white', borderRadius: '25 0 0 25', padding: '5%', marginTop: '3%', borderWidth: 2, borderColor: '#9492EF'}}>
          <View style={styles.action}>
          <TextInput
            placeholder="Enter Recipe Ingredients"
            placeholderTextColor="#969696"
            style={styles.textInput}
            multiline={true}
            onChangeText={RecipeIngredients => {
              // replace all commas with new lines
              RecipeIngredients = RecipeIngredients.replace(/,/g, '\n');
              // remove any multiple new lines
              RecipeIngredients = RecipeIngredients.replace(/\n{2,}/g, '\n');
              // ensure the last character is a new line
              RecipeIngredients = RecipeIngredients.replace(/\n*$/, '\n');
              // set the state with the updated value
              this.setState({ RecipeIngredients });
            }}
          />
          </View>
      </View>
      <View style={{ backgroundColor: 'white', borderRadius: '25 0 0 25', padding: '5%', marginTop: '3%', borderWidth: 2, borderColor: '#9492EF'}}>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter Prep Time"
              placeholderTextColor="#969696"
              style={styles.textInput}
              onChangeText={PrepTime=>this.setState({PrepTime})}
              />
          </View>
      </View>
      <View style={{ backgroundColor: 'white', borderRadius: '25 0 0 25', padding: '5%', marginTop: '3%', borderWidth: 2, borderColor: '#9492EF'}}>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter Cook Time"
              placeholderTextColor="#969696"
              style={styles.textInput}
              onChangeText={CookTime=>this.setState({CookTime})}
              />
          </View>
      </View>
      <View style={{ backgroundColor: 'white', borderRadius: '25 0 0 25', padding: '5%', marginTop: '3%', borderWidth: 2, borderColor: '#9492EF'}}>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter Serving Size"
              placeholderTextColor="#969696"
              style={styles.textInput}
              onChangeText={ServingSize=>this.setState({ServingSize})}
              />
          </View>
      </View>
      <View style={{ backgroundColor: 'white', borderRadius: '25 0 0 25', padding: '5%', marginTop: '3%', borderWidth: 2, borderColor: '#9492EF'}}>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter Level of Expertise"
              placeholderTextColor="#969696"
              style={styles.textInput}
              onChangeText={Difficulty=>this.setState({Difficulty})}
              />
          </View>
      </View>
      <View style={{ backgroundColor: 'white', borderRadius: '25 0 0 25', padding: '5%', marginTop: '3%', marginBottom: '5%', borderWidth: 2, borderColor: '#9492EF'}}>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter Recipe Description"
              placeholderTextColor="#969696"
              style={[styles.textInput, { height: 100 }]}
              onChangeText={RecipeDescription=>this.setState({RecipeDescription})}
              />
          </View>
      </View>

            {/* Button */}
            <View style={styles.buttonsection}>    
                <Pressable
                  style={styles.button} 
                  onPress={()=>{this.UserInfo()}}>
                  <Text style={styles.text}>Share Recipe</Text>
                </Pressable>
              </View>

              </View>

      </>
    )
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
