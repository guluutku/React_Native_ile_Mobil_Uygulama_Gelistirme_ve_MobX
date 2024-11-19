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
  TextInput,
  Text,
} from 'react-native';

/*
- contain
- cover
- center
- repeat
- stretch
*/

class App extends Component {

  state = {
    name: '',
  };

  _onChangeText = text => {
    this.setState({
      name: text,
    });
  };

  render() {
    const { name } = this.state;
    return (
      <View style={[styles.container]} >
        <Text>{name}</Text>
        <TextInput
          value={name}
          keyboardAppearance="dark"
          keyboardType="email-address"
          placeholder="Write a name"
          onChangeText={this._onChangeText}
          style={styles.myInput}
        />
      </View >
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEB3B',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  myInput: {
    width: '100%',
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
  },
});

export default App;
