import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './Screens/StartGameScreen';



export default function App() {
  
  return (
    <View style={styles.container}>
      
     < Header title = "Guess the Number "/> 
     <StartGameScreen/>  
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
   
  }
});
