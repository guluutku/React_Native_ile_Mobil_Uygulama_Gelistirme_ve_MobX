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
} from 'react-native';

import Card from './src/components/Card';

class App extends Component {

  onPressDetail = () => {
    // eslint-disable-next-line no-alert
    alert('Detail Alert');
  };

  render() {
    return (
      <View style={[styles.container]} >
        <Card text="Merhaba" backgroundColor="blue" />
        <Card text="React Native" backgroundColor="red" />
        <Button
          title="Details"
          color="#000"
          onPress={this.onPressDetail}
        />
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
