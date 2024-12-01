import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ContactScreen({ route }) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Contact</Text>

            <Button
                title="Go Back"
                onPress={() => navigation.goBack(null)}
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

export default ContactScreen;
