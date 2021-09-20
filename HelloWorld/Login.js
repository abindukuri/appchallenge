import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button,TouchableOpacity, Text, View, TextInput, } from 'react-native';
import React, { useState } from 'react';




export default function Login(props) {
  const [ email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  return (
    <View style={styles.container}>
    <View style={styles.image}><img src={require('./Pictures/logosmall.png')} /></View>

      <Text style={styles.Signintext}>Sign In</Text>
      <View style={styles.email}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Enter your email"
        onChangeText={text => setEmail(text)}
        defaultValue={email}
        textContentType='emailAddress' />
      </View>
      <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: 210,
        top: 100,
     }}
    />
      <View style={styles.password}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Enter your password"
        onChangeText={text => setPassword(text)}
        defaultValue={password}
        textContentType='password'
        secureTextEntry={true} />
        </View>
        <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: 210,
        top: 100,
     }}
    />
      <View style={styles.button1}>
        <Button
        title="Login"
        color='#7C9A92'
        onPress={() => { props.changeView('Welcome'); } } />
      </View>
      <View style={styles.image1}><img src={require('./Pictures/leaf.png')} /></View>


    </View>

  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9EA4B2',
      alignItems: 'center',
      justifyContent: 'center',
    },

    image: {
      backgroundColor:'#9EA4B2',
      width: 69,
      length: 59,
      top: -50,
      left: -130,
    },

    Signintext: {
      color:'#fff',
      fontSize: 30,
    },

    email: {
      top:100,
      width: 200,
    },

    password: {
      width:200,
      top:100,
    },

    
    button1: {
      top: 190,
      width: 175,
      borderRadius:5,
      paddingVertical: 5,
      paddingHorizontal : 10,

    },

    image1: {
      width:421,
      length:326,
      top:198,

    }

})
