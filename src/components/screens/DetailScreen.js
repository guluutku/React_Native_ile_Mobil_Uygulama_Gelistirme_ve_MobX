import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function DetailScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Detail Screen!!!!</Text>

            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
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

export default DetailScreen;
