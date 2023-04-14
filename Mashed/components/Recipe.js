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
        fetch(`https://students.gaim.ucf.edu/~na404266/dig4104c/mashed-server/Recipe.php`)
          .then((response) => response.json())
          .then((data) => setRecipe(data))
          .catch((error) => console.error(error));
      }, [recipeId]);
    return (
    <>
    {/* mashed logo */}
   {/* mashed logo */}
   <View style={styles.viewOne}>
        <View>
            <View style={[styles.container,{flexDirection: 'row'}]}>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                <Icon style={{ marginRight: 355, marginTop: 20 }} name="angle-left" size={35} color="#FFC42D" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Shopping', { recipeId: recipe.id })}>
                <Icon style={{ marginLeft: -15, marginTop: 20 }} name="shopping-basket" size={25} color="#FFC42D"/>
            </TouchableOpacity>
        </View>
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
</View>
    <ScrollView>

    {/* image with heart icon */}
        <Image style={{width:"100%", height:300, marginTop: 5, marginTop: 5, borderBottomRightRadius: 25, borderBottomLeftRadius: 25}}
            source={{
            uri:'https://www.thespruceeats.com/thmb/a8cS7kg5bbsuFsJN-5zO3eOVvBE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-katsu-4778466-10-67e6122e936b418ab1a92f176709d299.jpg',
            }}>
        </Image>
        {recipe.map((Recipes)=> (
        <View style={{ margin:20 }}>
        {/* Title and star rating */}
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                <View style={[{flexDirection: 'row', marginLeft: -6 }]}>
                    <Text style={styles.header}> {Recipes.RecipeName}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{justifyContent:'space-evenly', marginLeft: 62}}>
                        <AirbnbRating size={20} showRating={false} isDisabled={true} defaultRating={4}/>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={styles.Subheader}>By: sakuraiiko</Text>
                <Text style={styles.Subheader}>618 Reviews</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey'}}>
                <View style={[{flexDirection: 'row', marginTop: 10 }]}>
                    <Text style={styles.body}>{Recipes.description}</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row',justifyContent: 'space-evenly', marginTop: 10 }}>
                <Text style={styles.Subheader}> {Recipes.prep_time} mins </Text>
                <Text style={styles.Subheader}> {Recipes.cook_time} mins </Text>
            </View>
            <View style={{ flexDirection: 'row',justifyContent: 'space-evenly', marginTop: 10, fontWeight: 'bold' }}>
                <Text style={styles.Subheader}> {Recipes.difficulty} </Text>
                <Text style={styles.Subheader}> {Recipes.serving_size} people </Text>
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

        <ListItem.Accordion containerStyle={{
            borderRadius: 20,
            backgroundColor: '#F2F2F2',
        }}
            content={
            <ListItem.Content>
                <ListItem.Subtitle style={styles.header}> 
                    Ingredients
                </ListItem.Subtitle>
            </ListItem.Content>
            }
            isExpanded={expanded}
            onPress={() => {
            setExpanded(!expanded);
            }}>
            
        {/* ingredient 1 */}
            <ListItem containerStyle={{
                borderRadius: 20,
                backgroundColor: '#F2F2F2'
            }}>
                <ListItem.CheckBox
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    checked={checked1[0]}
                    onPress={() => setChecked1([!checked1[0], checked1[1]])}
                    containerStyle= {{
                        backgroundColor:'#F2F2F2'
                    }}
                    checkedColor='#FFC42D'
                /> 
                <ListItem.Content>
                    <ListItem.Title>{Recipes.RecipeIngredients}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </ListItem.Accordion>

        <View style={{paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey', marginBottom: 10, marginTop: 10}}/>

        <ListItem.Accordion containerStyle={{
            borderRadius: 20,
            backgroundColor: '#F2F2F2',
        }}
            content={
            <ListItem.Content>
                <ListItem.Subtitle style={styles.header}> 
                    Directions
                </ListItem.Subtitle>
            </ListItem.Content>
            }
            isExpanded={expanded2}
            onPress={() => {
            setExpanded2(!expanded2);
            }}>
            
            {/* ingredient 1 */}
            <ListItem containerStyle={{
                borderRadius: 20,
                backgroundColor: '#F2F2F2'
            }}>
                <ListItem.Content>
                    <ListItem.Title>{Recipes.RecipeSteps} </ListItem.Title>
                </ListItem.Content>
            </ListItem>
        
        </ListItem.Accordion>
      
            </View>
              ))}
    </ScrollView>
        </>
    )
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