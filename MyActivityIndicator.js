import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const App = () => (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color ="#000ff" />
        <ActivityIndicator size="large" color="#00ff00" />
    </View>
);

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});

export default App;
