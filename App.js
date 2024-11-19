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

// import FlatListExample from './src/components/FlatListExample';
import PlatformExample from './src/components/PlatformExample';

class App extends Component {
  /*
    render() {
      return (
        <SafeAreaView style={[styles.container]} >
          <FlatListExample />
        </SafeAreaView >
      );
    }
  */

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <PlatformExample />
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
