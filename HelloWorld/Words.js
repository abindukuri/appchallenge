import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput, Pressable, Image} from 'react-native';
import React, { useState, useEffect } from 'react';


const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

export default function Words(props) {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);

  useEffect(() => {
    handleListen()
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }

  return (
    <View style={styles.container}>
    <Pressable style={styles.logo} onPress={() => { props.changeView('Menu'); } }>
    <View style={styles.image}><img src={require('./Pictures/logosmall.png')} /></View>
    </Pressable>
    <View style={styles.Wordsimage}><img src={require('./Pictures/Wordspic.png')} /></View>
    <Pressable style={styles.record} onPress={() => setIsListening(prevState => !prevState)}>
    <View style={styles.image}><img src={isListening ? require('./Pictures/Stop.png') : require('./Pictures/Play.png')} /></View>
    </Pressable>
    <View style={styles.textcontainer}><Text style={styles.textoutput}>{note}</Text></View>

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

    Wordsimage: {
        width:'100%',
        height:'50%',
        top: '15%',
    },

    textcontainer: {
      width:'100%',
      top:'10%',
      alignItems:'center',
    },

    record: {
      top:'30%',

    },

    textoutput: {
      color:'#fff',
    },

});

