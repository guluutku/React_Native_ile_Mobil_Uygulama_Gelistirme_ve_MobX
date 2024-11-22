import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import LoginForm from './LoginForm';

function Login() {

    return (
        <View style={styles.container}>
            <View style={styles.headBackground} />

            <View>
                <Text style={styles.logo}>UDAC</Text>
                <Text style={styles.logoDescription}>Property & Survey</Text>
            </View>

            <ScrollView>
                <View style={styles.loginArea}>
                    <Text style={styles.loginAreaTitle}>Property Tax Server</Text>
                    <Text style={styles.loginAreaDescription}>Unique Door No Easily Fill Your Entire Property Tax Using App</Text>

                    <LoginForm />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingVertical: 80,
    },
    headBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 250,
        width: '100%',
        backgroundColor: '#1572DE',
    },
    logo: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#F2f2f2',
    },
    logoDescription: {
        textAlign: 'center',
        color: '#f2f2f2',
    },

    loginArea: {
        marginHorizontal: 40,
        marginVertical: 40,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,

        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 2,
        },

        elevation: 4,
    },
    loginAreaTitle: {
        fontSize: 20,
        textAlign: 'center',
    },
    loginAreaDescription: {
        fontSize: 12,
        color: '#7E868F',
        marginVertical: 10,
        textAlign: 'center',
    },
});

export default Login;
