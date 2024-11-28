import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>New Home!!!!</Text>
            <Button
                title="Go To Detail Page"
                onPress={() => navigation.navigate('Detail')}
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

export default HomeScreen;
