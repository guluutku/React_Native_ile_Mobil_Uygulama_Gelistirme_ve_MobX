/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Card from './src/components/Card';

class App extends Component {

  render() {
    return (
      <View style={[styles.container]} >
        <Card text="Merhaba" />
        <Card text="React"/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEB3B',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },

});

export default App;
