import React from "react";
import { View, ScrollView, Text, StyleSheet, SectionList, TouchableOpacity } from 'react-native';
import { Avatar, Image, Badge, Card, CheckBox, ListItem } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Recipe({ navigation }) {
    return (
    <>
    {/* mashed logo */}
    <View style={styles.viewOne}>
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