import React, {useState, useEffect} from "react";
import { View, ScrollView, Text, StyleSheet, SectionList, TouchableOpacity, Image } from 'react-native';
import { Avatar, Badge, Card, CheckBox, ListItem, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AirbnbRating } from "@rneui/base";
import { useRoute } from '@react-navigation/native';

export default function Recipe({ navigation }) {
    const [recipe, setRecipe] = useState([]);
    const route = useRoute();
    const { recipeId } = route.params;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://students.gaim.ucf.edu/~na404266/dig4104c/mashed-server/Recipe.php?RecipeId=${recipeId}`);
            const data = await response.json();
            if (data && data.length > 0) {
              setRecipe(data[0]);
            }
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, [recipeId]);
    
      return (
        <>
          {/* mashed logo */}
          <View style={styles.viewOne}>
            <View>
              <View style={[styles.container, { flexDirection: 'row' }]}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Icon style={{ marginRight: 355, marginTop: 20 }} name="angle-left" size={35} color="#FFC42D" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Shopping', { recipeId: recipeId })}>
                  <Icon style={{ marginLeft: -15, marginTop: 20 }} name="shopping-basket" size={25} color="#FFC42D" />
                </TouchableOpacity>
              </View>
              <Image
                style={{
                  marginLeft: 127,
                  marginBottom: 10,
                  width: "35%",
                  height: 25
                }}
                source={{
                  uri: 'https://i.postimg.cc/65XBkHNg/logo.png',
                }}
              />
            </View>
            {/* Recipe details */}
            <View style={styles.viewTwo}>
              <ScrollView>
                <View style={styles.recipeContainer}>
                  <Text style={styles.recipeName}>{recipe.RecipeName}</Text>
                  <Text style={styles.recipeDescription}>{recipe.RecipeDescription}</Text>
                  <Text style={styles.recipeHeading}>Ingredients:</Text>
                  <Text style={styles.recipeDetails}>{recipe.RecipeIngredients}</Text>
                  <Text style={styles.recipeHeading}>Steps:</Text>
                  <Text style={styles.recipeDetails}>{recipe.RecipeStep}</Text>
                  <Text style={styles.recipeHeading}>Prep Time:</Text>
                  <Text style={styles.recipeDetails}>{recipe.PrepTime} minutes</Text>
                  <Text style={styles.recipeHeading}>Cook Time:</Text>
                  <Text style={styles.recipeDetails}>{recipe.CookTime} minutes</Text>
                  <Text style={styles.recipeHeading}>Difficulty:</Text>
                  <Text style={styles.recipeDetails}>{recipe.Difficulty}</Text>
                  <Text style={styles.recipeHeading}>Serving Size:</Text>
                  <Text style={styles.recipeDetails}>{recipe.ServingSize}</Text>
                </View>
              </ScrollView>
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
    header:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    Subheader: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    body:{
        fontSize: 15,
        color: 'grey'
    }
})