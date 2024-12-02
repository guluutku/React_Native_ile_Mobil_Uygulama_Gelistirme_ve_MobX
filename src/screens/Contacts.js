import React from 'react';
import { View, StyleSheet } from 'react-native';

import ContactList from '../components/ContactsList';

export default function Contacts() {

    return (
        <View style={styles.container}>
            <ContactList />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
