import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Contacts extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Contacts </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
