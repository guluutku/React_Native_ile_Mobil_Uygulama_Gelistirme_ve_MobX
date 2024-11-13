/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
 StyleSheet,
  View,
} from 'react-native';

function App() {

  return (
    <View style={styles.container}>
      <View style={styles.slideOne} />
      <View style={styles.slideTwo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEB3B',
    flex: 1,
  },
  slideOne: {
    backgroundColor: '#607D8B',
    flex: 1, // 3:6
  },
  slideTwo: {
    backgroundColor: '#FF5722',
    flex: 1,// 3:6
  },
});

export default App;
