// login screen (shelby)


import React, { Component } from "react";
import { Button, View, Text } from "react-native";
//below is the library for the social media icons
import { SocialIcon, SocialIconProps } from '@rneui/themed'; 

//no clue what this does yet lol
/*type IconData ={
  type: SocialMediaType;
  iconType:string
};

//I think this is how I add the icon array (don't know how to input them into the login screen)
const dataList: Partial<IconData>[] = [
  {
    type:'instagram',
  },
  {
    type:'facebook',
  },
  {
    type:'google',
  }
  
];

type SocialIconsComponentProps = {};

const SocialIcons:
React.FunctionComponent<SocialIconsComponentProps*/

export default function Login() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>My Login</Text>
      <input placeholder="Email Address"/>
      <input placeholder="Password"/>
      <Button>LOG IN</Button>
      <Text>- Log In With -</Text>
      {/*insert icons for other login methods*/}
    </View>
  );
}