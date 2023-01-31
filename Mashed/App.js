// App.js
import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { BottomTabBar } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from "./components/Home";
import Explore from "./components/Explore";
import Post from './components/Post';
import Challenge from './components/Challenge';
import Profile from './components/Profile';
import Splash from './components/Splash';
import Chat from './components/Chat';
import Signup from './components/Signup';
import Login from './components/Login';
import Settings from './components/Settings';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [active, setActive] = useState(false);
  const handlePress = () => {
    setActive(!active);
  };

  return (
      <NavigationContainer initialRouteName="Splash">
        <Tab.Navigator 
          activeColor="#FFC42D"
          inactiveColor="grey"
          screenOptions={({ route }) => ({
            tabBarButton: [
              "Route1ToExclude",
              "Route2ToExclude"
            ].includes(route.name)
              ? () => {
                  return null;
                }
              : undefined,
          })}
        >
          <Tab.Screen 
            name="Splash" 
            component={Splash} 
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarVisible: false, 
              tabBarButton: (props) => null, 
            }}
          />
          <Tab.Screen 
            name="Signup" 
            component={Signup} 
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarVisible: false, 
              tabBarButton: (props) => null, 
            }}
          />
          <Tab.Screen 
            name="Login" 
            component={Login} 
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarVisible: false, 
              tabBarButton: (props) => null, 
            }}
          />
          <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ color,focused }) => (
                <Icon name="home" color={focused?'#FFC42D':'grey'} size={30} />
              )
            }}/>

          <Tab.Screen 
            name="Explore" 
            component={Explore} 
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ color,focused }) => (
                <Icon name="compass" color={focused?'#FFC42D':'grey'} size={30} />
              )
            }}/>
            <Tab.Screen 
              name="Post" 
              component={Post} 
              options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color,focused }) => (
                  <Icon name="plus" color="#9492EF" size={35} />
                  
                )
            }}/>
          <Tab.Screen 
            name="Challenge" 
            component={Challenge} 
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ color,focused }) => (
                <Icon name="bullseye" color={focused?'#FFC42D':'grey'} size={30} />
              )
            }}/>
          <Tab.Screen 
            name="Profile" 
            component={Profile} 
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ color,focused }) => (
                <Icon name="user" color={focused?'#FFC42D':'grey'} size={30} />
              )
            }}/>
          <Tab.Screen 
            name="Chat" 
            component={Chat} 
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarVisible: false, 
              tabBarButton: (props) => null, 
            }}
          />
          <Tab.Screen 
            name="Settings" 
            component={Settings} 
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarVisible: false, 
              tabBarButton: (props) => null, 
            }}
          />

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

