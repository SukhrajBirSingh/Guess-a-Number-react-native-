import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import titles from '../constants/titles';
import colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';
import Cards from '../components/Cards';
import { Ionicons } from '@expo/vector-icons'


const generateRamdomBetween = (min, max, exclude) => {

    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNumber = Math.floor(Math.random() * (max - min)) + min;

    if (rndNumber == exclude) {
        return generateRamdomBetween(min, max, exclude);
    }
    else {
        return rndNumber;
    }

}

const renderList = (value) => (
<View key = {value}><Text>{value}</Text></View>);

const GameScreen = props => {

    const initialGuess =  generateRamdomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuess, setPastGuess] = useState([initialGuess]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;         //destructure props, pulling names out of props and make objects             
    useEffect(() => {
        if (currentGuess === userChoice) {   //before props.userChoice, props.onGameOver
            onGameOver(pastGuess.length); //total number of rounds
        }

    }, [currentGuess, userChoice, onGameOver]
    );

    const nextGuessHandler = direction => {

        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Don\'t lie!', 'please be fair', [{ text: 'Sorry!', style: 'cancel' }]);

            return;
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        }
        else {
            currentLow.current = currentGuess + 1;
        }

        const nextNumber = generateRamdomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
       // setRounds(curRounds => curRounds + 1); // incrementing
        setPastGuess(curPastGuess => [nextNumber ,...curPastGuess]);
    };


    return (
        <View style={styles.screen}>
            <Text>{titles.Main2}</Text>
            <NumberContainer style={styles.number}>{currentGuess}</NumberContainer>
            <Cards style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}
                    onPress={nextGuessHandler.bind(this, direction = 'lower')} >
                    <Ionicons name="md-remove" size={24} color="white" />

                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={nextGuessHandler.bind(this, direction = 'greater')}>
                    <Ionicons name="md-add" size={24} color="white" />
                </TouchableOpacity>


            </Cards>
            <ScrollView>
    { pastGuess.map(guess => renderList(guess))}
            </ScrollView>
        </View>


    )

};

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'

    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //alignItems : 'stretch',
        alignContent: 'center',
        alignItems: 'center',
        width: 300,
        maxWidth: '80%',
        //borderColor : 'black',
        // borderWidth : 3,
        marginTop: 50,
        height: 150,



        //borderWidth:2


    },
    button: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',


        backgroundColor: colors.primary,
        height: 45,
        width: 100

    },
    text: {
        color: 'white'
    },
    number: {
        fontSize: 145
    }

});

export default GameScreen;