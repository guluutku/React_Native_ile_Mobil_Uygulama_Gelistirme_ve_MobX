import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class Input extends Component {

    state = {
        text: '',
    };

    render() {
        return (
            <View>
                <TextInput
                    {...this.props}
                    placeholderTextColor="#ddd"
                    style={styles.input}
                    value={this.state.text}
                    ref={this.props.inputRef}
                    onChangeText={text => this.setState({ text })}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    input: {
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#F1F1F1',
        marginBottom: 8,
        fontSize: 14,
        fontWeight: '600',
    },
});
