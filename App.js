/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

/*
- contain
- cover
- center
- repeat
- stretch
*/

class App extends Component {

  _onPressButton = () => {
    // eslint-disable-next-line no-alert
    alert('Opacity');
  };

  render() {
    return (
      <View style={[styles.container]} >

      </View >
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEB3B',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default App;
