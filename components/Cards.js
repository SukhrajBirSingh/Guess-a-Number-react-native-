import React from 'react';
import { StyleSheet, View } from 'react-native';

const Cards = props => {
    return (
        <View style={{ ...styles.cards, ...props.style }} >

            {props.children}

        </View>
    );
};

const styles = StyleSheet.create({

    cards:
    {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 6,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        borderWidth:3

    }
});

export default Cards;
