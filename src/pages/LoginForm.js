import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Input from '../components/Input';

export default class LoginForm extends Component {

    render() {
        return (
            <View>
                <Text style={styles.sinInText}> Sign-in </Text>

                <Input
                    returnKeyType={'next'}
                    autoCapitalize="none"
                    placeHolder="Username"
                    onSubmitEditing={() => this.passwordInput.focus()}
                />

                <Input
                    returnKeyType={'go'}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeHolder="Password"
                    // eslint-disable-next-line no-return-assign
                    inputRef={input => this.passwordInput = input}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    sinInText: {
        marginVertical: 10,
        fontSize: 14,
        color: '#333',
    },
});
