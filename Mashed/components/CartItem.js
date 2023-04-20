import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default CartItem = (props) => {
    return(
    <View style={styles.container}>
            <View style={styles.cartcontainer}>       
                <Text style={styles.index}>{props.index}</Text>
                <Text style={styles.item}>{props.task}</Text>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                    <MaterialIcons style={styles.delete} name='delete' size={18} color='fff'/>
                </TouchableOpacity>           
            </View>
    </View>
    );
}

const styles=StyleSheet.create({

    container:{
        flexDirection:'row',
        marginHorizontal:40,
        marginTop: 10,
      },
      
      cartcontainer:{
        flexDirection: 'row',
        flex:1,
        borderColor:'black',
        borderWidth: 1,
        borderRadius:20,
        paddingVertical:10,
        paddingHorizontal: 30,
        
        alignitems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 50
      },

      index:{
        color: 'black',
        fontsize: 30,
        paddingRight:10,
      },
     
      item:{
        color: 'gray',
        fontsize:30,
        width:'90%',
        
      },
      delete:{
        marginLeft: 10,
      },
    })