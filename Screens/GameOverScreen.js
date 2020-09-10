import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import colors from '../constants/colors';
import titles from '../constants/titles';


const GameOverScreen = props => {

    return (
        <View style={styles.screen}>

            <Image
                style={{ width: 200, height: 300 }}
                resizeMode='contain'
                source={{ uri: 'data:image/png;base64,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' }}
            />
            <Text>{titles.card3}{props.roundsNumber}</Text>
            <Text>{titles.card4}{props.userNumber}</Text>
            <TouchableOpacity onPress={props.onRestart} style={styles.button} >

                <Text style={styles.text}>{titles.button6}</Text>


            </TouchableOpacity>


        </View>
    );
};

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: colors.primary,
        height: 45,
        width: 100

    },
    text: {
        color: 'white'
    },

    gameover: {
        fontSize: 30,
    }

});

export default GameOverScreen;
