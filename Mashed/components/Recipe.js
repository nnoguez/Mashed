import React from "react";
import { View, ScrollView, Text, StyleSheet, SectionList, TouchableOpacity, Image } from 'react-native';
import { Avatar, Image, Badge, Card, CheckBox, ListItem } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Recipe({ navigation }) {
    return (
    <>
    {/* mashed logo */}
    <View style={styles.viewOne}>
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Chat')}>
                <Icon style={{ marginLeft: 355, marginTop: 20 }} name="cart" size={25} color="#FFC42D"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Explore')}>
                <Icon style={{ marginLeft: 20, marginTop: 20 }} name="angle-left" size={25} color="#FFC42D"/>
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
        <Image style={{width:"100%", height:300, marginTop: 5, marginTop: 5, borderBottomRightRadius: 25, borderBottomLeftRadius: 25}}
            source={{
            uri:'https://www.thespruceeats.com/thmb/a8cS7kg5bbsuFsJN-5zO3eOVvBE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-katsu-4778466-10-67e6122e936b418ab1a92f176709d299.jpg',
            }}>
            
        </Image>
        <ListItem>
        <ListItem.Content>
            <CheckBox
                center
                title="Click Here"
                checked={check1}
                onPress={() => setCheck1(!check1)}
                />
            <ListItem.Title>ingredient</ListItem.Title>
        </ListItem.Content>
            <CheckBox
                center
                title="Click Here"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={check2}
                onPress={() => setCheck2(!check2)}
                />

            <CheckBox
                center
                title={`Click Here to ${check3 ? 'Remove' : 'Add'} This Item`}
                iconRight
                iconType="material"
                checkedIcon="clear"
                uncheckedIcon="add"
                checkedColor="red"
                checked={check3}
                onPress={() => setCheck3(!check3)}
                />

        
                
    
        
			</ListItem>
        </>
    )
}

const styles = StyleSheet.create({
    viewOne: {
        textAlign: "center",
        margin: 20,
        marginBottom: 10
    }
})