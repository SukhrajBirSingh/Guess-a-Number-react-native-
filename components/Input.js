import React from 'react';
import { TextInput, StyleSheet} from 'react-native';

const Input = props => {

    return <TextInput {...props} style = {{...styles.input, ...props.style}}/> //for add own styles, overriding
      //add all props to input
};

const styles = StyleSheet.create({

    input: {

        height : 30,
        borderBottomColor : 'grey',
        borderBottomWidth : 1,
        //backgroundColor: 'pink'
    
    }

});

export default Input;
