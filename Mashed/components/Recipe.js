import React, {useState, useEffect} from "react";
import { View, ScrollView, Text, StyleSheet, SectionList, TouchableOpacity, Image } from 'react-native';
import { Avatar, Badge, Card, CheckBox, ListItem, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AirbnbRating } from "@rneui/base";
import { useRoute } from '@react-navigation/native';



export default function Recipe({ navigation }) {
    const [checked1, setChecked1] = React.useState([false, false]);
    const [expanded, setExpanded] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [recipe, setRecipe] = useState([]);
    const route = useRoute();
    const { recipeId } = route.params;
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://students.gaim.ucf.edu/~na404266/dig4104c/mashed-server/recipe.php?recipeId=${recipeId}`);
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

        <ScrollView style={{marginBottom: 100}}>
            <Image style={{width:"100%", height:300, marginTop: 5, marginTop: 5, borderBottomRightRadius: 25, borderBottomLeftRadius: 25}}
                source={{
                uri:'https://www.thespruceeats.com/thmb/a8cS7kg5bbsuFsJN-5zO3eOVvBE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-katsu-4778466-10-67e6122e936b418ab1a92f176709d299.jpg',
                }}>
            </Image>
            <View style={{ margin:20 }}>
            {/* Title and star rating */}
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <View style={[{flexDirection: 'row', marginLeft: -6 }]}>
                        <Text style={styles.header}> {recipe.RecipeName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{justifyContent:'space-evenly', marginLeft: 62}}>
                            <AirbnbRating size={20} showRating={false} isDisabled={true} defaultRating={4}/>
                        </View>
                    </View>
                </View>
            {/* reviews and user */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={styles.Subheader}>By: sakuraiiko</Text>
                    <Text style={styles.Subheader}>618 Reviews</Text>
                </View>

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey'}}>
                <View style={[{flexDirection: 'row', marginTop: 10 }]}>
                    <Text style={styles.body}>{recipe.RecipeDescription}</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row',justifyContent: 'space-evenly', marginTop: 10 }}>
                <Text style={styles.Subheader}> {recipe.PrepTime} mins </Text>
                <Text style={styles.Subheader}> {recipe.CookTime} mins </Text>
            </View>
            <View style={{ flexDirection: 'row',justifyContent: 'space-evenly', marginTop: 10, fontWeight: 'bold' }}>
                <Text style={styles.Subheader}> {recipe.Difficulty} </Text>
                <Text style={styles.Subheader}> {recipe.ServingSize} people </Text>
            </View>
            <View style={{paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey', marginBottom: 10}}/>

            <Text style={{ fontSize: 19, color: '#242523', fontWeight: 'bold', marginLeft: 15 }}>Dietary Restrictions</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginLeft: 3, marginRight: 50 }}>
                <Text style={styles.Subheader}>
                Halal, Kosher
                </Text>
                <Text style={styles.Subheader}>
                Contains Egg, Dairy
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginLeft: 3, marginRight: 50 }}> 
                <Text style={styles.Subheader}>
                Nut-free
                </Text>
                <Text style={styles.Subheader}>
                Lactose-Free
                </Text>
            </View>
            <View style={{paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey', marginBottom: 10, marginTop: 10}}/>


            <List.AccordionGroup>
                <View>
                {recipe.RecipeIngredients &&
                    recipe.RecipeIngredients.split(",").map((item, key) => (
                    <View key={key} style={{ flexDirection: "row", marginBottom: 5 }}>
                        <CheckBox
                        checked={checked1[key]}
                        onPress={() => {
                            let newChecked = [...checked1];
                            newChecked[key] = !checked1[key];
                            setChecked1(newChecked);
                        }}
                        />
                        <Text>{item.trim()}</Text>
                    </View>
                    ))}
                </View>
          </List.AccordionGroup>

        <View style={{paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey', marginBottom: 10, marginTop: 10}}/>

        <ListItem.Accordion> 
            <View>
            {recipe.RecipeStep &&
                recipe.RecipeStep.split("\n").map((item, key) => (
                <View key={key} style={{ marginBottom: 5 }}>
                    <TouchableOpacity onPress={() => setExpanded(!expanded)}>
                    <Text>{item.trim()}</Text>
                    </TouchableOpacity>
                    {expanded && (
                    <View>
                        <Text style={{ marginTop: 5 }}>Additional details</Text>
                    </View>
                    )}
                </View>
                ))}
            </View>
        </ListItem.Accordion>
            </View>
            </ScrollView>
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