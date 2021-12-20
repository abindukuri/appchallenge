import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput, Pressable, Image} from 'react-native';
import React, { useState, useEffect } from 'react';
import wordlist from './wordlist.json';


const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()
const words  = Object.keys(wordlist.words);

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

export default function Words(props) {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState('\n');
  const [result, setResult] = useState('\n');
  const [correctCount, setCorrectCount] = useState(0);
  const [currentWord , setCurrentWord] = useState(words[Math.floor(Math.random()*words.length)]);

  function reset(previous){
    setCorrectCount(0);
    setIsListening(false);
    setNote('\n');
    setResult('\n');
    setCurrentWord(words[Math.floor(Math.random()*words.length)]);
  }  

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
     let transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
        .split(' ').pop().toLowerCase()
      console.log(transcript)
      setNote(transcript)
      if (transcript.includes(currentWord.toLowerCase())){
        setResult('Correct')
        setCorrectCount(correctCount + 1)
        setIsListening(false)
      }
      else{
        setResult('Try Again')
      }
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
    <View> <Text> {currentWord} </Text></View>
    <View style={styles.textcontainer}><Text style={styles.textoutput}>{note}</Text></View>
    <View style={styles.resultscontainer}><Text style={result == 'Correct' ? styles.resultscorrect : styles.resultsoutput}>{result}</Text></View>
    <Pressable style={styles.record} onPress={(correctCount > 8) ? ()=> reset(null): () => setIsListening(prevState => !prevState)}>
    <View style={styles.image}><img src={isListening ? require('./Pictures/Stop.png') : require('./Pictures/Polygon 1.png')} /></View>
    </Pressable>
    <View style={styles.correctimage}>
      {correctCount > 8 &&
      <img src={require('./Pictures/correct.png')} />}
    </View>
    </View>

  );
}


function reset(previous){
  setCorrectCount(0);
  setIsListening(false);
  setNote('\n');
  setResult('\n');
  setCurrentWord(words[Math.floor(Math.random()*words.length)]);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9EA4B2',
        alignItems: 'center',
        justifyContent:'flex-start',
    },


    logo: {
      marginTop:'6%',

    },

    image: {
        backgroundColor:'#9EA4B2',
        width: 59,
        length: 49, 

    },

    Wordsimage: {
        width:'100%',
        height:'50%',
        marginBottom:50,

    },

    textcontainer: {
      width:'100%',

      alignItems:'center',
    },

    resultscontainer:{
      width:'100%',
      marginTop:20,
      alignItems:'center',
    },

    correctimage:{
      width:'20%',
      length:'20%',
      marginTop:30,      
    },


    record: {
      marginTop:40,
    },

    textoutput: {
      color:'#fff',
      fontSize:20,
      fontWeight:'bold',
    },

    resultsoutput: {
      color:'#fff',
      fontSize:20,


    },

    resultscorrect: {
      color:'#1f4d1c',
      fontSize:20,

    },

});

