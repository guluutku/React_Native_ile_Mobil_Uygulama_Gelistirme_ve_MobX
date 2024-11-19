import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Platform,
} from 'react-native';

class PlatformExample extends Component {
    render() {
        const headerStyle = Platform.select({
            ios: styles.IOSHeader,
            android: styles.AndroidHeader,
        });
        return (
            <View style={headerStyle}>
                <Text> Header </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    IOSHeader: {
        backgroundColor: '#f2f2f2',
        padding: 20,
    },
    AndroidHeader: {
        backgroundColor: 'red',
        padding: 10,
    },
});

export default PlatformExample;
