import React from 'react';
import {Text, StyleSheet} from 'react-native';

const BoldAndBeautiful = () => {
    return (
        <Text style={StyleSheet.basetext}>
            I am bold
            <Text style={StyleSheet.innerText}> and red</Text>
        </Text>
    );
};

const styles = StyleSheet.create({
    baseText: {
        fontweight: 'bold',
    },
    innerText: {
        color: 'red',
    },
});

export default BoldAndBeautiful;