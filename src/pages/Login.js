import React from 'react';
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import LoginForm from './LoginForm';

function Login() {

    return (
        <View style={styles.container}>
            <View style={styles.headBackground} />

            <KeyboardAvoidingView behavior={'position'}>
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

                <View style={styles.signUpArea}>
                    <Text style={styles.signUpDescription}>
                        Don't have an account?
                    </Text>

                    <TouchableOpacity onPress={() => { }} >
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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

    // Login Area
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

    // Sign Up Area
    signUpArea: {
        alignItems: 'center',
    },
    signUpAreaDescription: {
        color: '#999',
    },
    signUpText: {
        color: '#666',
    },
});

export default Login;
