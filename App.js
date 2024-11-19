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
} from 'react-native';

import Card from './src/components/Card';

class App extends Component {

  state = {
    number: 0,
  };

  onPressIncrease = () => {
    this.setState({ number: ++this.state.number });
  };


  onPressDecrease = () => {
    this.setState({ number: --this.state.number });
  };

  render() {
    return (
      <View style={[styles.container]} >
        <View>
          <Text style={styles.number}>{this.state.number}</Text>
        </View>
        <Button
          title="Decrease"
          color="#000"
          onPress={this.onPressDecrease}
        />
        <Button
          title="Increase"
          color="#000"
          onPress={this.onPressIncrease}
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
  number: {
    fontSize: 12,
  },
});

export default App;
