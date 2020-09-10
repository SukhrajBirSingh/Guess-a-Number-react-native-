import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

const fetchFonts = () =>{

   return Font.loadAsync({
   'homework' : require('./assets/fonts/Homework.ttf')

  });

}


export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return (
    <AppLoading 
    startAsync = {fetchFonts} 
    onFinish = {()=>setDataLoaded(true)}
     />
    );
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }
  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  const startGameHandler = selectedNumber => {

    setUserNumber(selectedNumber);
  };
  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {                               //if its truish
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;  // userchoice pro from gamescreen
  }
  else if (guessRounds > 0) {
    content = (<GameOverScreen roundsNumber={guessRounds} userNumber={userNumber}
      onRestart={configureNewGameHandler} />
    );
  }

  return (
    <View style={styles.container}>

      < Header title="Guess the Number" />
      {content}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1}
});
