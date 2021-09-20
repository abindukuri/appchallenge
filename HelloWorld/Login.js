import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button, Text, View, TextInput, Pressable, } from 'react-native';
import React, { useState } from 'react';




export default function Login(props) {
  const [ email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  return (
    <View style={styles.container}>
    <View style={styles.image}><img src={require('./Pictures/logosmall.png')} /></View>

      <View style={styles.Signincontainer}><Text style={styles.Signintext}>Sign In</Text></View>
      <View style={styles.infocontainer}>
      <View style={styles.email}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Enter your email"
        onChangeText={text => setEmail(text)}
        defaultValue={email}
        textContentType='emailAddress' />
      </View>
      <View style={styles.password}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Enter your password"
        onChangeText={text => setPassword(text)}
        defaultValue={password}
        textContentType='password'
        secureTextEntry={true} />
        </View>
      </View>
      <View style={styles.button1}>
      <Pressable style={styles.buttontest} onPress={() => { props.changeView('Menu'); } }>
        <Text style={styles.Buttontext}>Login</Text>
      </Pressable>
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

    Signincontainer: {
      width:'70%',
      alignItems:'left',
    },

    Signintext: {
      fontSize: 30,
      color:'#fff',
      fontFamily: 'Georgia',

    },

    infocontainer: {
      marginTop:100,
    },

    email: {
      width: 210,
      borderBottomWidth:1,
    },

    password: {
      width:210,
      borderBottomWidth:1,
    },

    
    button1: {
      top: 190,
      width: '65%',
      borderRadius:5,
      paddingVertical: 5,
      paddingHorizontal : 10,
      fontSize: 54,      

    },

    buttontest: {
      width: '100%',
      backgroundColor:'#7C9A92',
      textAlign:'center',
    },

    Buttontext: {
      fontSize: 24,
      color:'#fff',
    },

    image1: {
      width:421,
      length:326,
      top:198,

    }

})
