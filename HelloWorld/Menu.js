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
    <View style={styles.Welcomecontainer}><Text style={styles.Welcometext}>Welcome Back, John</Text></View> 
    <View style = {styles.subtitlecontainer}> <Text style = {styles.subtitle}> Speech Practice for Today! </Text>  </View>
    {/*WORDS*/}
    <View style={styles.Words}>
    <Pressable style={styles.Wordcontainter} onPress={() => { props.changeView('Welcome'); } }>
       <View style={styles.Wordimg}> <img src={require('./Pictures/Wordsicon.png')} /></View>
    </Pressable>
    <Text style={styles.wordtext}>Words</Text>
    </View>
    {/*PHRASES*/}

    <View style={styles.phrases}>
    <Pressable style={styles.phrasescontainer} onPress={() => { props.changeView('Welcome'); } }>
       <View style={styles.phrasesimg}> <img src={require('./Pictures/phrasesicon.png')} /></View>
    </Pressable>
    <Text style={styles.phrasestext}>Phrases</Text>
    </View>
    {/*Sentences*/}
    <View style={styles.sentences}>
    <Pressable style={styles.sentencescontainer} onPress={() => { props.changeView('Welcome'); } }>
       <View style={styles.sentencesimg}> <img src={require('./Pictures/sentencesicon.png')} /></View>
    </Pressable>
    <Text style={styles.sentencestext}>Sentences</Text>
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
        width:'90%',
        alignItems:'left',
        top:-230,
      },

  
    Welcometext: {
        fontSize: 30,
        color:'#fff',
        fontFamily: 'Georgia',
        left  : 25,

  
      },
      phrasestext: {
        fontSize: 30,
        color:'#fff',
        fontFamily: 'Georgia',
        left  : 25,

  
      },

      Words: {
          width:62,
          height:84,
          color:'#000',
          top:-180,
          left:-130

      },
      phrases: {
        width:62,
        height:84,
        color:'#000',
        top:-264,
        left:-40

    },
    sentences: {
        width:62,
        height:84,
        color:'#000',
        top:0,
        left:-40

    },

      Wordcontainter: {
          width:62,
          height:64,
          borderRadius:10,
          backgroundColor:'#fff',
          alignItems:'center',

      },
      phrasescontainer: {
        width:62,
        height:64,
        borderRadius:10,
        backgroundColor:'#fff',
        alignItems:'center',

    },
    sentencescontainer: {
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

      phrasesimg: {
        width:35,
        height:35,
        top:15,
    },
    sentencesimg: {
        width:35,
        height:35,
        top:15,
    },

      wordtext: {
        fontSize: 12,
        color:'#fff',
        fontFamily: 'Georgia',
        textAlign:'center',
        paddingTopWidth:15,
    },
    phrasestext: {
        fontSize: 12,
        color:'#fff',
        fontFamily: 'Georgia',
        textAlign:'center',
        paddingTopWidth:15,
    },
    sentencestext: {
        fontSize: 12,
        color:'#fff',
        fontFamily: 'Georgia',
        textAlign:'center',
        paddingTopWidth:15,
    },
    subtitle: {
        fontSize: 15,
        top : -300,
        color:'#fff',
        fontFamily: 'Georgia',
        left  : 25,

    },
    subtitlecontainer: {
        width:'90%',
        alignItems:'left',
        top:-217,
    }
})
