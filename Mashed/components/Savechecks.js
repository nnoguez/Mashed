import { CheckBox } from '@rneui/base';
import React, { useState } from 'react';
import {View, Text, StyleSheet, Pressable, Alert } from "react-native";



const Savechecks = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckbox =()=>{setIsChecked(!isChecked)};
return(
    <View style={{flexDirection: 'row', marginTop:10}}>
        <CheckBox value={isChecked} onValueChange={handleCheckbox}/>
        <Text>{isChecked ? 'checked' : 'Unchecked'}</Text>
    </View>
);
}
export default Counter;
const styles = StyleSheet.create({
    button:{
        backgroundColor:"#9492EF",
        color:'9492EF',
        width:20,
        textAlign:'center',
        padding:3,
        height:20,
        marginLeft:4,
        borderRadius:4,     
    },
    text:{
        fontSize:16,
        textAlign:'center',
        marginTop:-4,
        color: 'white',
        
    },
});