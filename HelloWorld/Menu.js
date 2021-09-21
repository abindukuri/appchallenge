import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button, Text, View, TextInput, Pressable, } from 'react-native';
import React, { useState } from 'react';




export default function Login(props) {
  return (
    <View style={styles.container}>
    <View style={styles.image}><img src={require('./Pictures/logosmall.png')} /></View>
    <Pressable style={styles.buttonprofile} onPress={() => { props.changeView('Welcome'); } }>
       <View style={styles.profileimg}> <img src={require('./Pictures/Profilepic.jpg')} /></View>
    </Pressable>
    <View style={styles.Welcomecontainer}><Text style={styles.Welcometext}>Welcome Back!</Text></View>
    <View style={styles.Words}>
    <Pressable style={styles.Wordcontainter} onPress={() => { props.changeView('Welcome'); } }>
       <View style={styles.Wordimg}> <img src={require('./Pictures/Wordsicon.png')} /></View>
    </Pressable>
    <Text style={styles.wordtext}>Words</Text>
    </View>
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
        top:-250

    },
   
    buttonprofile: {
        width:35,
        height: 35,
    },

    profileimg: {
        width:35,
        height:35,
        top: -300,
        left:130,
    },

    Welcomecontainer: {
        width:'70%',
        alignItems:'left',
        top:-230,
      },
  
    Welcometext: {
        fontSize: 30,
        color:'#fff',
        fontFamily: 'Georgia',
  
      },

      Words: {
          width:62,
          height:84,
          color:'#000',
          top:-200,
          left:-110

      },

      Wordcontainter: {
          width:62,
          height:64,
          borderRadius:10,
          backgroundColor:'#fff',
          alignItems:'center',

      },

      Wordimg: {
          width:35,
          height:35,
          top:15,
      },

      wordtext: {
        fontSize: 16,
        color:'#fff',
        fontFamily: 'Georgia',
        textAlign:'center',
        paddingTopWidth:5,
    }
})
