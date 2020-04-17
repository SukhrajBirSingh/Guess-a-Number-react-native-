import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Cards from '../components/Cards';
import colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import titles from '../constants/titles';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState();
    const[confirmed,setConfirmed] = useState();
    const[selectedNumber, setSelectedNumber] = useState();
    const numberInputHandler = inputText => {

        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    };

    const resetHandler = () => {

        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmHandler = () => {
        const chosenNumber = parseInt(enteredValue);// NaN not a number
        if(isNaN(chosenNumber)||chosenNumber <= 0 || chosenNumber >99) {
            Alert.alert("Invalid Input!", 'Number has be between 1-99',
            [{text: 'Okay', style:'destructive',onPress:resetHandler}]);
            return;
        }
        
        setConfirmed(true);
        setSelectedNumber(chosenNumber); //string to int
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
    (confirmedOutput = <Cards style = {styles.confirmedContainer}>
    
    <Text>{titles.card2}</Text>
    <NumberContainer>{selectedNumber}</NumberContainer>
    <Button title = 'Start Game' color = {colors.primary}/>
    </Cards>);
    }

    return ( 
    <TouchableWithoutFeedback onPress = { () => {Keyboard.dismiss();}}>
    <View style = {styles.screen} >
    <Text style = {styles.title}>{titles.Main}</Text> 
            
            <Cards style = {styles.inputContainer}> 
                 <Text>{titles.card1}</Text>
                  <View style = {styles.inputBox}>
                    <Input style = {styles.input} 
                           blurOnSubmit 
                           keyboardType ="number-pad" 
                           maxLength = {2}
                           onChangeText = {numberInputHandler}
                           value = {enteredValue}
                />
                </View>

                <View style = {styles.buttonContainer}>
                    <View style = {styles.buttons}>
                        <Button  title = "Reset" onPress = {resetHandler}
                                color= {colors.secondary}/>
                     </View>
                    <View style= {styles.buttons}>
                        <Button  title = "Confirm" onPress = {confirmHandler}
                                color = {colors.primary}/>
                    </View>
                </View>
               </Cards> 

               {confirmedOutput}

      </View>
      </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({

    screen : {
        flex : 1,
        padding: 10,
        alignItems : 'center'
    },

    title :  {
        fontSize : 20,
        marginVertical : 10

    },
    inputContainer : {
       // height : 400,
        width: 300,
        maxWidth : '80%',
        alignItems : 'center',
       
    },
    buttonContainer : {

        flexDirection : 'row',
        width : '100%',
        //paddingTop: 100,
        justifyContent : 'space-between'
        
    },
    buttons : {
        paddingTop:60,
        width: 100
    },
    input : {
        fontSize : 30,
        width: 40,
        height : 40,
        textAlign : 'center'

    },
     
    inputBox : {

        flex:1,
        paddingTop : 10,
        
        //paddingBottom: 20

    },

    confirmedContainer : {
        alignItems:'center',
        marginTop : 20,
        
        
    }


});

export default StartGameScreen;