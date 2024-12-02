import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function DrawerMenu({ route }) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Main')}
                    style={styles.menuItem}
                >
                    <Text style={styles.itemText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Contact')}
                    style={styles.menuItem}
                >
                    <Text style={styles.itemText}>Contact</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuItem}
                >
                    <Text style={styles.itemText}>Other</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.footer}>
                <Text style={styles.footerText}> Drawer Menu </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'f1f1f1',
        paddingVertical: 40,
    },
    footer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        paddingVertical: 10,
    },
    footerText: {
        textAlign: 'center',
        color: '#999',
        fontSize: 11,
    },

    menuItem: {
        backgroundColor: '#e1e1e1',
        padding: 10,
    },
    itemText: {
        fontSize: 13,
        color: '#333',
    },
});
