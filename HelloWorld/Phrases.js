import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button, Text, View, TextInput, Pressable, } from 'react-native';
import React, { useState } from 'react';

export default function Phrases(props) {
    return (
      <View style={styles.container}>
        <Pressable style={styles.logo} onPress={() => { props.changeView('Menu'); } }>
      <View style={styles.image}><img src={require('./Pictures/logosmall.png')} /></View>
      </Pressable>
      <View style={styles.phraseimg}> <img src={require('./Pictures/Phrases.png')} /></View>
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
    position:'absolute',
  },

  image: {
    backgroundColor:'#9EA4B2',
    width: 69,
    length: 59, 
  },

  phraseimg: {
    height: '90%',
    width: '100%',
    top:'15%',

  },

})
