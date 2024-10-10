import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    return (
        <View style={StyleSheet.container}>
            <view style={StyleSheet.countContainer}>
                <Text>Count: {count}</Text>
            </view>
            <TouchableOpacity style ={StyleSheet.button} onPress={onPress}>
                <Text>Press Here</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        alignitems: 'center',
        backgroudColor: '#DDDDDD',
        padding: 10,
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
    },
});

export default App;