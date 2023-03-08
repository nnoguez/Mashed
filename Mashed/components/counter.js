import React, { useState } from 'react';
import {View, Text, StyleSheet, Pressable, Alert } from "react-native";


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


const Counter = () => {
    const [count, setCount] = useState(1)

   

   
return(
    <View style={{flexDirection: 'row', marginTop:10}}>
        <Pressable style={styles.button}
        onPress={() => {setCount(count+1)}}>
        <Text style={styles.text}>+</Text>
        </Pressable>
        <Text style={{fontSize:20, paddingLeft:7, paddingRight:5,marginTop:-4}}>{count}</Text>
        <Pressable style={styles.button}
        onPress={() => {
            if(count <= 1){
                Alert.alert('Invalid Quantity')        
            }
            else{setCount(count-1)}               
            }}>
        <Text style={styles.text}>-</Text>
        </Pressable>
    </View>
);
}
export default Counter;
