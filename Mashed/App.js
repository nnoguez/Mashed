// App.js
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Challenge from './components/Challenge';
import Profile from './components/Profile';
import Splash from './components/Splash';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer initialRouteName="Home">
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Tab.Screen name="Explore" component={Explore} options={{headerShown: false}}/>
          <Tab.Screen name="Challenge" component={Challenge} options={{headerShown: false}}/>
          <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}


// function Shown() {
//   return (
//     <NavigationContainer>
//     <Stack.Navigator initialRouteName="Splash">
//         <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
//     </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

