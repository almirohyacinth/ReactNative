import React, {useSate} from 'react';
import {Text, StyleSheet} from 'react-native';

const TextInANest = () => {
    const [titleText, setTitleText] = useState("Bird's Nest");
    const bodyText = 'This is not really a bird nest.';

    constonPressTitle = () => {
        setTitleText("Bird's Nest [pressed");
    };

    return (
        <Text style={StyleSheet.baseText}>
            <text style={StyleSheet.titleText} onPress={onPressTitle}>
                {titleText}
                {'/n'}
                {'/n'}
            </text>
            <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
    );
};

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default TextInANest;