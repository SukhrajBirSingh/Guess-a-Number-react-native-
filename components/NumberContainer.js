import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import colors from '../constants/colors';

const NumberContainer = props => {
return (
<View style = {styles.container}>
    <Text style = {styles.number}>{props.children}</Text>
</View>
);
};

const styles = StyleSheet.create({

container : {
    borderWidth: 4,
    borderColor : colors.secondary,
    alignItems:'center',
    padding:10,
    justifyContent : 'center',
    marginVertical:10,
    borderRadius:10
    

},

number : {

    color: colors.primary,
    fontSize : 22
}
   


});

export default NumberContainer;
