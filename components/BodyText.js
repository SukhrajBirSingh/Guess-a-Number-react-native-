import React from 'react';
import { StyleSheet, Text } from 'react-native';
//import * as Font from 'expo-font';
const BodyText = props => <Text style = {{...styles.body, ...props.style}}>{props.children}</Text>;



const styles = StyleSheet.create({

    body : {
       fontFamily : 'homewrok',
       fontSize : 25
    }

});

export default BodyText;
