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
  Button,
  Text,
  Image,
} from 'react-native';

// import Card from './src/components/Card';

class App extends Component {

  render() {
    return (
      <View style={[styles.container]} >
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ width: '100%', height: 220 }}
          source={{ uri: 'https://play-lh.googleusercontent.com/FCcziMA1_M9nGlJo6EnguMKlJ53Yor3tNmSqDUza9w9_wXrFLiAW2cOz-kD8S-N1Vvg' }} />
      </View >
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
