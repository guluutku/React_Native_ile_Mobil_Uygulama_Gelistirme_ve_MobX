/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import FlatListExample from './src/components/FlatListExample';

class App extends Component {

  render() {
    return (
      <SafeAreaView style={[styles.container]} >
        <FlatListExample />
      </SafeAreaView >
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
