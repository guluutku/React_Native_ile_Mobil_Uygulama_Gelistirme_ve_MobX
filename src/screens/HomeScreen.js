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
                title="Detail 1"
                onPress={() => navigation.navigate('Detail')}
            />

            <Button
                title="Detail 2"
                onPress={() => navigation.navigate('Detail', {
                    title: 'Detail 2',
                })}
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
