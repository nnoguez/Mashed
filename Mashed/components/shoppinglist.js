import React, {useState, useEffect} from "react";
import {Keyboard, View, Image, Text, StyleSheet, ScrollView } from "react-native";
import CartInput from './CartInput';
import CartItem from './CartItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import Counter from './counter';
import { useRoute } from '@react-navigation/native';


export default function Shopping ({ navigation }) {  
  
  const [tasks, setTasks] = useState([]);
  const route = useRoute();
  const { recipeId } = route.params;
  useEffect(() => {
    fetch(`https://students.gaim.ucf.edu/~na404266/dig4104c/mashed-server/Explore.php?id=${recipeId}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));
  }, [recipeId]);
  
  const addTask = (task) =>{
    if (task==null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
  setTasks(tasks.filter((value, index)=> index != deleteIndex));
  }
   

  return (
        
  <View style={styles.backgroundWhite}>

      <View style={{flexDirection:'row', height:'15%', backgroundColor:'white', width:'100%', alignItems:'center', marginTop:0}}>              
              <View style={{marginLeft:20,}}>
                <Icon onPress={()=> navigation.navigate('Recipe')}  name="angle-left" size={35} color="#FFC42D"/>
              </View>
                 
                  <Image   
                        style={{
                          marginLeft: 100, 
                          marginTop: 15,
                          width:"35%", 
                          height:25}}
                        source={{uri:'https://i.postimg.cc/65XBkHNg/logo.png'}}>  
                  </Image>           
              
      </View>
      <View>
        <Text style={styles.header}>SHOPPING LIST</Text>
      </View>
       
      {/* Adding ingredients to the shopping cart*/} 
      <ScrollView style={styles.scrollView}>   
        {
          tasks.map((task, index) => {

            return(
              <View key={index} style={styles.taskContainer}>
                <CartItem index={index+1} task={task} deleteTask={()=> deleteTask(index)}/>
              </View>

          );
        })
        }     
                
      </ScrollView>
      <CartInput addTask={addTask}/>
</View>   
      
    );
  }

  const styles = StyleSheet.create({


    backgroundWhite: {
     flex:1,
     backgroundColor: 'white',
    },
    
   scrollView:{
    marginBottom:70,
   },
   taskContainer:{
    marginTop: 20,
   },
  header:{
    textAlign:'center',
    fontSize: 15,
    marginTop:10,
    color: 'black',
  },

  })

  {/*    <Card borderRadius={25} width ={350} >
          <View style={[styles.container,{flexDirection: 'row'}]}> 
                <View style={{flex: 1, marginLeft: -20, marginRight: -60}}> 
                  <CheckBox                     
                    onPress={() => setChecked1([!checked1[0], checked1[1]])}>
                    </CheckBox>                 
                </View>      
            <View style={{flex: 2}}>
            <View style={{width:'100%'}}>
                <Text style={styles.cardLabelStyle}>Chicken Breast{/* INser user Ingredient here}</Text>
                <Counter/>
            </View>
            </View>
          </View>
        </Card> 



<View style={{flexDirection:'row', height:'15%', backgroundColor:'white', width:'100%', alignItems:'center', marginTop:0}}>              
              <View style={{marginLeft:20,}}>
                <Icon onPress={()=> navigation.navigate('Recipe')}  name="angle-left" size={35} color="#FFC42D"/>
              </View>
                 
                  <Image   
                        style={{
                          marginLeft: 100, 
                          marginTop: 15,
                          width:"35%", 
                          height:25}}
                        source={{uri:'https://i.postimg.cc/65XBkHNg/logo.png'}}>  
                  </Image>           
              
      </View>



        totalStyle:{
      fontSize: 20,
      fontWeight: 'bold',
      paddingRight:60,
      color:'dark gray',
      marginTop: 10
    },
    priceStyle:{
      fontSize: 20,
      fontWeight: 'bold',
      color:"#9492ef",
      paddingLeft:20,
      paddingTop: 10,
    },
    headerStyle:{
      zIndex:2,
      position:'relative',    
      marginTop:-750,
      height:"20%",
      width: "100%",
      backgroundColor: '#fff',    
      alignItems: "center", 
      justifyContent: "center",
      shadowColor:'gray',
      shadowOffset: {width:0,height:-3},
      shadowOpacity: '30%', 
    },
    cardStyle:{
      
      color:'white',
      width: "80%",
      height:100,
      borderRadius:25,

    },
    cardLabelStyle:{
      fontSize: 15,
      fontWeight: 'bold',
      color:'dark gray',
      paddingLeft:20,
      marginLeft: -15,
    },
    cardWeightStyle:{
      fontSize: 10,
      fontWeight: 'bold',
      color:'gray',
      paddingLeft:20,
      marginTop: 5
    },
      
      */}