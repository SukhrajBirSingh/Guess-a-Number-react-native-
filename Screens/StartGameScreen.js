import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity } from 'react-native';
import Cards from '../components/Cards';
import colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import titles from '../constants/titles';
import { LinearGradient } from 'expo-linear-gradient';
import BodyText from '../components/BodyText';

   const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState();  // user input
    const [confirmed, setConfirmed] = useState();         // summary of  user input 
    const [selectedNumber, setSelectedNumber] = useState(); //
    const numberInputHandler = inputText => {

        setEnteredValue(inputText.replace(/[^0-9]/g, '')); //only take int 0-9 as input, no (,.)
    };

    const resetHandler = () => {

        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmHandler = () => {                   // string to int
        const chosenNumber = parseInt(enteredValue);// NaN (not a number)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid Input!", 'Number has be between 1-99',
                [{ text: 'Okay', style: 'destructive', onPress: resetHandler }]);
            return;
        }

        setConfirmed(true);
        setSelectedNumber(chosenNumber); //string to int
        setEnteredValue('');
        Keyboard.dismiss();

    };

    let confirmedOutput;

    if (confirmed) {
        (confirmedOutput =
            <Cards style={styles.confirmedContainer}>

                <Text>{titles.card2}</Text>
                <View style={styles.numbers}>
                <NumberContainer style={styles.numbers}>{selectedNumber}</NumberContainer>
                </View>
                <TouchableOpacity onPress={() => props.onStartGame(selectedNumber)} >
                    <LinearGradient colors={[colors.grdnt1, colors.grdnt2]}
                        
                        style={styles.buttonStart}
                    >
                        <Text style={styles.text}>{titles.button1}</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </Cards>
            
        );
    }

    return (   
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>

         <View style = {styles.screen}>

        
                    
                    <Text style={styles.title}>{titles.Main}</Text>
                    
                    <Cards style={styles.inputContainer}>
                        <Text>{titles.card1}</Text>
                        <View style={styles.inputBox}>
                            <Input style={styles.input}
                                blurOnSubmit
                                keyboardType="number-pad"
                                maxLength={2}
                                onChangeText={numberInputHandler}
                                value={enteredValue}
                            />
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={resetHandler}>
                                <LinearGradient colors={[colors.grdnt3, colors.grdnt4]}

                                    style={styles.buttonreset}
                                >
                                    <Text style={styles.text}>{titles.button2}</Text>


                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={confirmHandler}>
                                <LinearGradient colors={[colors.grdnt1, colors.grdnt2]}

                                    style={styles.buttonConfirm}>

                                    <Text style={styles.text}>{titles.button3}</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                        </View>
                    </Cards>

                    {confirmedOutput}

                
            
    
        </View>
        </TouchableWithoutFeedback>

    );
};

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
       // justifyContent: 'center',
        borderWidth:6
        //backgroundColor : '#000000'
    },

    title: {
        fontSize: 40,
        marginVertical: 10,
        fontFamily : 'homework',
        //color: 'white'
    },
    inputContainer: {
        // height : 400,
        width: 300,
       maxWidth: '80%',
        alignItems: 'center',
        //justifyContent : 'center',
        //borderWidth:8,
       // marginLeft:20,
       // backgroundColor : '#393e46'


    },
    buttonContainer: {

        flexDirection: 'row',
        width: '100%',
        //paddingTop: 100,
        justifyContent: 'space-between'

    },
    buttons: {
        marginTop: 60,
        width: 100
    },
    input: {
        fontSize: 30,
        width: 40,
        height: 40,
        textAlign: 'center'

    },

    inputBox: {

       // flex: 1,
       // paddingTop: 10,
       // alignItems:'center'

        //paddingBottom: 20

    },

    confirmedContainer: {
       // flex: 1,
        alignItems: 'center',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',

        //backgroundColor : '#393e46'


    },
    buttonConfirm: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        backgroundColor: colors.primary, //different color
        height: 45,
        width: 100
    },
    buttonreset: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        backgroundColor: colors.secondary, //diffrent color
        height: 45,
        width: 100
    },
    buttonStart: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: colors.secondary, //diffrent color
        height: 45,
        width: 100},

    text: {
        color: 'white'
    },
    numbers: {
        fontSize: 50,

    },




});

export default StartGameScreen;