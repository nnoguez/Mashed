import React, {useState} from "react";
import { View, ScrollView, Text, StyleSheet, SectionList, TouchableOpacity, Image } from 'react-native';
import { Avatar, Badge, Card, CheckBox, ListItem, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AirbnbRating } from "@rneui/base";

export default function Recipe({ navigation }) {
    const [checked1, setChecked1] = React.useState([false, false]);
    const [checked2, setChecked2] = React.useState([false, false]);
    const [checked3, setChecked3] = React.useState([false, false]);
    const [checked4, setChecked4] = React.useState([false, false]);
    const [checked5, setChecked5] = React.useState([false, false]);
    const [checked6, setChecked6] = React.useState([false, false]);

    const [expanded, setExpanded] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
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
                    <ListItem.Title>4 Chicken Breasts</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        
        {/* ingredient 2 */}
        <ListItem containerStyle={{
                borderRadius: 20,
                backgroundColor: '#F2F2F2'
            }}>
                <ListItem.CheckBox
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    checked={checked2[0]}
                    onPress={() => setChecked2([!checked2[0], checked2[1]])}
                    containerStyle= {{
                        backgroundColor:'#F2F2F2'
                    }}
                    checkedColor='#FFC42D'
                /> 
                <ListItem.Content>
                    <ListItem.Title>1 egg, beaten</ListItem.Title>
                </ListItem.Content>
            </ListItem>

        {/* ingredient 3 */}
        <ListItem containerStyle={{
                borderRadius: 20,
                backgroundColor: '#F2F2F2'
            }}>
                <ListItem.CheckBox
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    checked={checked3[0]}
                    onPress={() => setChecked3([!checked3[0], checked3[1]])}
                    containerStyle= {{
                        backgroundColor:'#F2F2F2'
                    }}
                    checkedColor='#FFC42D'
                /> 
                <ListItem.Content>
                    <ListItem.Title>Salt and Pepper</ListItem.Title>
                </ListItem.Content>
            </ListItem>

        {/* ingredient 4 */}
        <ListItem containerStyle={{
                borderRadius: 20,
                backgroundColor: '#F2F2F2'
            }}>
                <ListItem.CheckBox
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    checked={checked4[0]}
                    onPress={() => setChecked4([!checked4[0], checked4[1]])}
                    containerStyle= {{
                        backgroundColor:'#F2F2F2'
                    }}
                    checkedColor='#FFC42D'
                /> 
                <ListItem.Content>
                    <ListItem.Title>1 cup Panko Bread Crumbs</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        
        {/* ingredient 5 */}
        <ListItem containerStyle={{
                borderRadius: 20,
                backgroundColor: '#F2F2F2'
            }}>
                <ListItem.CheckBox
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    checked={checked5[0]}
                    onPress={() => setChecked5([!checked5[0], checked5[1]])}
                    containerStyle= {{
                        backgroundColor:'#F2F2F2'
                    }}
                    checkedColor='#FFC42D'
                /> 
                <ListItem.Content>
                    <ListItem.Title>2 tbsps All Purpose Flour</ListItem.Title>
                </ListItem.Content>
            </ListItem>

        {/* ingredient 6 */}
        <ListItem containerStyle={{
                borderRadius: 20,
                backgroundColor: '#F2F2F2'
            }}>
                <ListItem.CheckBox
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    checked={checked6[0]}
                    onPress={() => setChecked6([!checked6[0], checked6[1]])}
                    containerStyle= {{
                        backgroundColor:'#F2F2F2'
                    }}
                    checkedColor='#FFC42D'
                /> 
                <ListItem.Content>
                    <ListItem.Title>1 cup Frying Oil</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <Button onPress={()=> navigation.navigate('Shopping')}
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
                    <ListItem.Title style={styles.Subheader}>1. Season chicken breasts on both sides with salt and pepper. </ListItem.Title>
                </ListItem.Content>
            </ListItem>
        
        {/* ingredient 2 */}
        <ListItem containerStyle={{
                borderRadius: 20,
                backgroundColor: '#F2F2F2'
            }}>
                <ListItem.Content>
                    <ListItem.Title style={styles.Subheader}>2. Place flour, beaten egg, and panko crumbs into separate shallow dishes. </ListItem.Title>
                </ListItem.Content>
            </ListItem>

        {/* ingredient 3 */}
        <ListItem containerStyle={{
                borderRadius: 20,
                backgroundColor: '#F2F2F2'
            }}>
                <ListItem.Content>
                    <ListItem.Title  style={styles.Subheader}> 3. Coat chicken breasts in flour, shaking off any excess; dip into egg, and then press into 
                panko crumbs until well coated on both sides.</ListItem.Title>
                </ListItem.Content>
            </ListItem>

        {/* ingredient 4 */}
        <ListItem containerStyle={{
                borderRadius: 20,
                backgroundColor: '#F2F2F2'
            }}>
                <ListItem.Content>
                    <ListItem.Title  style={styles.Subheader}>4. Heat oil in a large skillet over medium-high heat.</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        
        {/* ingredient 5 */}
        <ListItem containerStyle={{
                borderRadius: 20,
                backgroundColor: '#F2F2F2'
            }}>
                <ListItem.Content>
                    <ListItem.Title  style={styles.Subheader}>5. Place chicken in the hot oil, and fry until golden brown, 3 or 4 minutes per side.</ListItem.Title>
                </ListItem.Content>
            </ListItem>

        {/* ingredient 6 */}
        <ListItem containerStyle={{
                borderRadius: 20,
                backgroundColor: '#F2F2F2'
            }}>
                <ListItem.Content>
                    <ListItem.Title  style={styles.Subheader}>6. Transfer to a paper towel-lined plate to drain.</ListItem.Title>
                </ListItem.Content>
            </ListItem>

        <ListItem containerStyle={{
                borderRadius: 20,
                backgroundColor: '#F2F2F2'
            }}>
                <ListItem.Content>
                    <ListItem.Title  style={styles.Subheader}>7. Enjoy!</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </ListItem.Accordion>

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