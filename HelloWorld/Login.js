import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button,TouchableOpacity, Text, View, TextInput} from 'react-native';
import React, { useState } from 'react';




export default function Login(props) {
  const [ email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  return (
    <View  style={styles.container}>
      <Button
      title = "Go Back"
      backgroundColor = "7C9A92"
      onPress = {() => {props.changeView('Welcome')}}
      
      />
    <TextInput
        style={{height: 40}}
        placeholder="Enter your email"
        onChangeText={text => setEmail(text)}
        defaultValue={email}
        textContentType = 'emailAddress'


      />
    <TextInput
        style={{height: 40}}
        placeholder="Enter your password"
        onChangeText={text => setPassword(text)}
        defaultValue={password}
        textContentType = 'password'
        secureTextEntry = {true}


      />
    </View>

  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9EA4B2',
      alignItems: 'center',
      justifyContent: 'center',
    }
})
