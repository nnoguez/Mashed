

// explore screen (alan)

import { Card, SearchBar } from "@rneui/base";
import React, { Component, useState, useEffect} from "react";
import { Button, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Explore({ navigation }) {
  const [value, setValue] = React.useState("");
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch('https://students.gaim.ucf.edu/~na404266/dig4104c/mashed-server/Explore.php')
    .then(response => response.json())
    .then(data => setRecipes(data))
    .catch(error => console.error(error));
}, []);
  return (
    <>
    <ScrollView>
    <View style={styles.viewOne}>
      {/* mashed logo */}
          <View>
              <TouchableOpacity onPress={()=> navigation.navigate('Chat')}>
                  <Icon style={{ marginLeft: 355, marginTop: 20 }} name="commenting" size={25} color="#FFC42D"/>
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
      </View>
      <SearchBar
          platform="android"
          containerStyle={{}}
          inputContainerStyle={{}}
          inputStyle={{}}
          leftIconContainerStyle={{}}
          rightIconContainerStyle={{}}
          loadingProps={{}}
          onChangeText={newVal => setValue(newVal)}
          onClearText={() => console.log(onClearText())}
          placeholder="Enter a Recipe..."
          placeholderTextColor="grey"
          cancelButtonTitle="Cancel"
          cancelButtonProps={{}}
          value={value}
       />
    <View style={styles.viewOne}>
       
       <Text style={styles.Headers}>Featured</Text>
        <Card borderRadius={25} margin >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          </View>
          <Card.Image
              style={{width:"100%", height:200, borderRadius: 25}}
              source={{
              uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/thanksgivingmenus-1634134898.jpg',
              }}
          />
          <Text style={{ marginTop: 5 }}>
              Give thanks and celebrate Thanksgiving with some yummy recipes! <Icon name="arrow-right" color="#FFC42D"></Icon>
          </Text>
        </Card>

      {/* First Scroll of Recipes  */}
      <Text style={styles.Headers}>For You</Text>
      <Text style={styles.Subheaders}>Based on your recent likes and creations.</Text>    
      <ScrollView horizontal= {true} showsHorizontalScrollIndicator={true} pagingEnabled={true}> 
      {recipes.map((recipe, index) => (
        <TouchableOpacity key={index} onPress={() => navigation.navigate('Recipe', { recipeId: recipe.id })}>
          <Card borderRadius={25} width={160} margin>
            <Card.Image
              style={{ height: 100, borderRadius: 25 }}
              source={{
                uri: 'https://napakitchenandbar.com/wp-content/themes/NAPA/img/banner-placeholder.jpg',
              }}
            />
            <Text style={{ marginTop: 5, textAlign: 'center', fontWeight: 'bold' }}>{recipe}</Text>
          </Card>
        </TouchableOpacity>
      ))}
      </ScrollView>
      {/* Second Scroll of Recipes   */}
      <Text style={styles.Headers}>Latin</Text>
      <Text style={styles.Subheaders}>An aggregate of various national dishes with Native American, African, and European influence.</Text> 
      <ScrollView horizontal= {true} showsHorizontalScrollIndicator={true} pagingEnabled={true}> 
        <Card borderRadius={25} width={160} margin>
              <Card.Image
                  style={{ height:100, borderRadius: 25}}
                  source={{
                  uri:'https://www.swankyrecipes.com/wp-content/uploads/2022/08/Birria-Tacos-467x700.jpg',
                  }}
              />
            <Text style={{ marginTop: 5, textAlign: 'center', fontWeight: 'bold'}}> Crispy Birria Tacos </Text>
        </Card>
      {/* card posting 2*/}
      <Card borderRadius={25} width={160} marginLeft={-5} marginRight={-5}>
              <Card.Image
                  style={{ height:100, borderRadius: 25}}
                  source={{
                  uri:'https://kitchendelujo.com/wp-content/uploads/2018/08/Mofongo-con-Camarones-Mashed-Plantains-with-Shrimp-1648-682x1024.jpg',
                  }}
              />
            <Text style={{ marginTop: 5, textAlign: 'center', fontWeight: 'bold' }}> Mofongo con Camarones </Text>
      </Card>
      <Card borderRadius={25} width={160} marginRight={-5}>
              <Card.Image
                  style={{ height:100, borderRadius: 25}}
                  source={{
                  uri:'https://kathrynskitchenblog.com/wp-content/uploads/2022/04/Shrimp-Ceviche-13-768x1152.jpg',
                  }}
              />
            <Text style={{ marginTop: 5, textAlign: 'center', fontWeight: 'bold' }}> Shrimp Ceviche </Text>
        </Card>
      <Card borderRadius={25} width={160} marginRight={-5}>
              <Card.Image
                  style={{ height:100, borderRadius: 25}}
                  source={{
                  uri:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/arroz-al-horno-e63f8cb.jpg?quality=90&webp=true&resize=300,272',
                  }}
              />
            <Text style={{ marginTop: 5, textAlign: 'center', fontWeight: 'bold' }}> Arroz al horno  </Text>
      </Card>    
      </ScrollView>
      {/* Third Scroll of Recipes   */}
      <Text style={styles.Headers}>Date Night</Text>
      <Text style={styles.Subheaders}>Savory and sweet food that will make your heart beat. Get out the candles, turn down the lights, and spend time with the one you love.</Text> 
      <ScrollView horizontal= {true} showsHorizontalScrollIndicator={true} pagingEnabled={true}> 
        <Card borderRadius={25} width={160} margin>
              <Card.Image
                  style={{ height:100, borderRadius: 25}}
                  source={{
                  uri:'https://cafedelites.com/wp-content/uploads/2018/06/Garlic-Butter-Steak-Shrimp-Recipe-IMAGE-1.jpg',
                  }}
              />
            <Text style={{ marginTop: 5, textAlign: 'center', fontWeight: 'bold'}}>Garlic Butter Grilled Steak & Shrimp</Text>
        </Card>
      {/* card posting 2*/}
      <Card borderRadius={25} width={160} marginLeft={-5} marginRight={-5}>
              <Card.Image
                  style={{ height:100, borderRadius: 25}}
                  source={{
                  uri:'https://www.centralcoop.co.uk/assets/images/recipes/Fondue.jpg',
                  }}
              />
            <Text style={{ marginTop: 5, textAlign: 'center', fontWeight: 'bold' }}> Chocolate Lava Cake</Text>
      </Card>
      <Card borderRadius={25} width={160} marginRight={-5}>
              <Card.Image
                  style={{ height:100, borderRadius: 25}}
                  source={{
                  uri:'https://www.aberdeenskitchen.com/wp-content/uploads/2021/01/Pan-Seared-Lemon-Garlic-Butter-Scallops-2.jpg',
                  }}
              />
            <Text style={{ marginTop: 5, textAlign: 'center', fontWeight: 'bold' }}> Pan Seared Lemon Garlic Butter Scallops </Text>
        </Card>
      <Card borderRadius={25} width={160} marginRight={-5}>
              <Card.Image
                  style={{ height:100, borderRadius: 25}}
                  source={{
                  uri:'https://img.delicious.com.au/l-sP0yDc/del/2020/08/pecan-chocolate-bread-and-butter-pudding-137408-2.jpg',
                  }}
              />
            <Text style={{ marginTop: 5, textAlign: 'center', fontWeight: 'bold' }}> Pecan chocolate bread and butter pudding </Text>
      </Card>    
      </ScrollView>
      </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  viewOne: {
      textAlign: "center",
      margin: 20,
      marginBottom: 10
  },
  Headers: {
    fontSize: 15,
    fontWeight:'bold',
    marginTop: 10
  },
  Subheaders: {
    fontSize: 13,
    color: 'grey'
  }
})