
import Icon from '@react-native-vector-icons/evil-icons';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class DrawerButton extends Component {
    render() {
        return (
            <TouchableOpacity>
                <Icon></Icon>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

});
