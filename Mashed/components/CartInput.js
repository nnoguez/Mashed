import React, {useState} from "react";
import{ KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, Platform,} from 'react-native';
import{MaterialIcons}from '@expo/vector-icons';


export default CartInput = (props) => {
    const [task, setTask] = useState();

    const handleAddTask = (value) =>{
        props.addTask(value);
        setTask(null);
    }


return(
    <KeyboardAvoidingView behavior={Platform.OS==="ios" ? "padding":"height"} 
    style={styles.container}>
        
        <TextInput 
        style={styles.inputfield} 
        value={task} 
        onChangeText={text => setTask(text)} 
        placeholder={"Add Item..."} 
        placeholderTextColor={'gray'}>
        </TextInput>
        <TouchableOpacity onPress={()=>handleAddTask(task)}>
            <View style={styles.button}>
                <MaterialIcons name='keyboard-arrow-right' size={40} color='gray'/>
            </View>
        </TouchableOpacity>

    </KeyboardAvoidingView>
);
}

const styles=StyleSheet.create({

    container:{  
    shadowColor:'black',
    textShadowOffset:10,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 20
},
inputfield:{
    paddingLeft:15,
    fontSize: 20,
    borderColor: 'black',
    borderWidth:1,
    borderRadius:15,
    height:50,
    flex:1,
},
button:{
    height: 50,
    width: 30,
    borderRadius: 5, 
    alignItems: 'center',
    justifyContent: 'center'
},


})