import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={{ ...styles.number, ...props.style }}>{props.children}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        marginTop: 40,
        borderWidth: 7,
        borderColor: colors.primary,
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 30,



    },

    number: {

        color: colors.secondary,
        //fontSize : 140,
        fontWeight: 'bold'
    }



});

export default NumberContainer;
