import React, { useState } from "react";
import { View, Text, TextInput,Button, StyleSheet, Switch } from "react-native";

export default function HelloWorldApp() {
  const [value, onChangeText] = 	React.useState('');  
  const [isSwitchOn, setIsSwitchOn] = useState("false");

  const handleSwitchChange = () => {
  setIsSwitchOn(!isSwitchOn);
  };

  const containerStyle = {
    backgroundColor: isSwitchOn ? 'black' : 'white',
    color: isSwitchOn ? 'white' : 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const editStyle = {
    fontSize : 30,
    borderColor: isSwitchOn ? 'white' : 'black',
    borderWidth: 2,
    marginBottom: 20,
    color: isSwitchOn ? 'white' : 'black',
    width: 300,
    height: 40
  };

  const textStyle = {
    fontSize : 35,
    marginBottom: 20,
    color: isSwitchOn ? 'white' : 'black',
  };

  const button = {
    width: 200,
    height: 50,
    marginBottom: 20
  }


  return (  
  <View style={containerStyle}>

    <Text style= {textStyle}>Lab 2 by Pui Yee Ng</Text>

    <TextInput style={editStyle}
      placeholder= 'Enter your name here'
	    onChangeText={text => onChangeText(text)}
      clearTextOnFocus={true}
      value={value}
    />
    
    <Button style={button}
       onPress={() => onChangeText('')}
         title="Clear" 
       />

    <Switch
        onChange={handleSwitchChange}
        value= {isSwitchOn}
      />

   </View> 
  );
}
