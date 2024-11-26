import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

function HomeScreen() {

    return (
        <View style={styles.container}>
            <Text>New Home!!!!</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
