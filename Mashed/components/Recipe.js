import React, {useState} from "react";
import { View, ScrollView, Text, StyleSheet, SectionList, TouchableOpacity, Image } from 'react-native';
import { Avatar, Badge, Card, CheckBox, ListItem, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AirbnbRating } from "@rneui/base";

export default function Recipe({ navigation }) {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const [check6, setCheck6] = useState(false);
    const [expanded, setExpanded] = useState(false);
    return (
    <>
    {/* mashed logo */}
   {/* mashed logo */}
   <View style={styles.viewOne}>
    <View>
        <TouchableOpacity onPress={()=> navigation.navigate('Shopping')}>
            <Icon style={{ marginLeft: 355, marginTop: 20 }} name="shopping-basket" size={25} color="#FFC42D"/>
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
    <ScrollView>
    {/* image with heart icon */}
        <Image style={{width:"100%", height:300, marginTop: 5, marginTop: 5, borderBottomRightRadius: 25, borderBottomLeftRadius: 25}}
            source={{
            uri:'https://www.thespruceeats.com/thmb/a8cS7kg5bbsuFsJN-5zO3eOVvBE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-katsu-4778466-10-67e6122e936b418ab1a92f176709d299.jpg',
            }}>
        </Image>



        <View style={{ margin:20 }}>
        {/* Title and star rating */}
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                <View style={[{flexDirection: 'row', marginLeft: -6 }]}>
                    <Text style={styles.header}> Crispy Chicken Katsu</Text>
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
                    <Text style={styles.body}>
                        Chicken katsu is Japanese-style fried chicken. 
                        This recipe can also be used to make tonkatsu by using pork 
                        cutlets instead of chicken. 
                        Serve with white rice and tonkatsu sauce.
                    </Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row',justifyContent: 'space-evenly', marginTop: 10 }}>
                <Text style={styles.Subheader}> Total Time: 25 mins </Text>
                <Text style={styles.Subheader}> Prep: 15 mins </Text>
                <Text style={styles.Subheader}> Cook: 10 mins</Text>
            </View>
            <View style={{ flexDirection: 'row',justifyContent: 'space-evenly', marginTop: 10, fontWeight: 'bold' }}>
                <Text style={styles.Subheader}> Level: Easy </Text>
                <Text style={styles.Subheader}> Yield 4-6 Servings </Text>
            </View>

            <View style={{paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey', marginBottom: 10}}/>

        <Text style={styles.header}>Dietary Restrictions</Text>
        
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

          <Text style={styles.header}>Ingredients</Text>

          <ListItem.Accordion
                content={
                    <>
                    <ListItem.Content>
                        {/* <ListItem.Title>Ingredients</ListItem.Title> */}
                    </ListItem.Content>
                    </>
                }
                isExpanded={expanded}
                onPress={() => {
                    setExpanded(!expanded);
                }}
            >
                
                    <ListItem.Content>
                        <CheckBox
                            center
                            title="4 Skinless Boneless Chicken Breast"
                            checked={check1}
                            onPress={() => setCheck1(!check1)}
                            />
                    </ListItem.Content>
                        <CheckBox
                            center
                            title="1 Cup of Panko Bread Crumbs"
                            checked={check2}
                            onPress={() => setCheck2(!check2)}
                            />
            
              
                    <ListItem.Content>
                        <CheckBox
                            center
                            title="1 Egg, Beaten"
                            checked={check1}
                            onPress={() => setCheck3(!check3)}
                            />
                    </ListItem.Content>
                        <CheckBox
                            center
                            title="2 Tablespoons all-purpose flour"
                            checked={check2}
                            onPress={() => setCheck4(!check4)}
                            />
             
               
                    <ListItem.Content>
                        <CheckBox
                            center
                            title="Salt and Pepper"
                            checked={check1}
                            onPress={() => setCheck5(!check5)}
                            />
                    </ListItem.Content>
                        <CheckBox
                            center
                            title="1 Cup of vegetable oil"
                            checked={check2}
                            onPress={() => setCheck6(!check6)}
                            />
             
                <Button
                    title="Add to Cart"
                    buttonStyle={{
                    backgroundColor: '#FFC42D',
                    borderRadius: 30,
                    padding: 1,
                    }}
                    containerStyle={{
                        marginHorizontal: 25,
                        marginVertical: 5,
                    }}>
                </Button>
                </ListItem.Accordion>
            
            <Text style={styles.header}>Directions</Text>               
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title style={styles.body}>1.Season chicken breasts on both sides with salt and pepper.</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Content>
                        <ListItem.Title style={styles.body}>2.Place flour, beaten egg, and panko crumbs into separate shallow dishes.</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Content>
                        <ListItem.Title style={styles.body}>3.Coat chicken breasts in flour, shaking off any excess; dip into egg, and then press into panko crumbs until well coated on both sides.</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Content>
                        <ListItem.Title style={styles.body}>4.Heat oil in a large skillet over medium-high heat.</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Content>
                        <ListItem.Title style={styles.body}>5.Place chicken in the hot oil, and fry until golden brown, 3 or 4 minutes per side.</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Content>
                        <ListItem.Title style={styles.body}>6.Transfer to a paper towel-lined plate to drain.</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Content>
                        <ListItem.Title style={styles.body}>7.Enjoy!</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                {/* <View >
                <Image
                    style={{
                        width:"35%", 
                        height:25}}
                    source={{
                    uri:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQQgF1STU0UydNMATSPKJRhVk2wfqO3_cZQYzRnovQL2H9FoN5V',
                    }}
                 />
                 <Image
                    style={{
                        width:"35%", 
                        height:25}}
                    source={{
                    uri:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAy9m8-qjTNmf_rUUvxwZznaJv6mabXJb1hXdJ5mQH_1ekG9Hf',
                    }}
                 />
                  <Image
                    style={{
                        width:"35%", 
                        height:25}}
                    source={{
                    uri:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAy9m8-qjTNmf_rUUvxwZznaJv6mabXJb1hXdJ5mQH_1ekG9Hf',
                    }}
                 />
                  <Image
                    style={{
                        width:"35%", 
                        height:25}}
                    source={{
                    uri:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAy9m8-qjTNmf_rUUvxwZznaJv6mabXJb1hXdJ5mQH_1ekG9Hf',
                    }}
                 />
                 </View> */}
            </View>
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