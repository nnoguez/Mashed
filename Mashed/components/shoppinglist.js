import React, {useState, useEffect} from "react";
import {Keyboard, View, Image, Text, StyleSheet, ScrollView } from "react-native";
import CartInput from './CartInput';
import CartItem from './CartItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import Counter from './counter';
import { useRoute } from '@react-navigation/native';


export default function Shopping ({ navigation }) {  
  const [tasks, setTasks] = useState([]);
  const [recipes, setRecipes] = useState([]);

  /*useEffect(() => {
    fetch('https://students.gaim.ucf.edu/~na404266/dig4104c/mashed-server/Explore.php')
    .then(response => response.json())
    .then(data => setRecipes(data))
    .catch(error => console.error(error));
  }, []);

  const route = useRoute(); // get the route object from the navigation stack
  const { recipeId } = route.params; // get the recipeId parameter from the route

  const recipe = recipes.find(r => r.id === recipeId); // find the recipe with the matching id
*/
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
                <Icon onPress={() => navigation.goBack()}  name="angle-left" size={35} color="#FFC42D"/>
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
});
