import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Contacts() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text> Contacts </Text>
            <Button
                title="go to detail"
                onPress={() => { navigation.navigate('ContactDetail'); }}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
