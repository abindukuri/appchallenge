import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput, Pressable, Image} from 'react-native';
import React, { useState } from 'react';




export default function Login(props) {
  return (
    <View style={styles.container}>
    <Pressable style={styles.logo} onPress={() => { props.changeView('Menu'); } }>
    <View style={styles.image}><img src={require('./Pictures/logosmall.png')} /></View>
    </Pressable>
    <View style={styles.Wordsimage}><img src={require('./Pictures/Wordspic.png')} /></View>

    
    </View>

  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9EA4B2',
        alignItems: 'center',
        justifyContent:'flex-start',
    },


    logo: {
        top:'6%',
    },

    image: {
        backgroundColor:'#9EA4B2',
        width: 69,
        length: 59, 

    },

    Wordsimage: {
        width:'100%',
        height:'50%',
        top: '7%',
    }

})
