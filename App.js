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
        <TouchableOpacity style={{ marginBottom: 40 }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              My Button
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this._onPressButton}
        >
          <Image
            style={{ width: 100, height: 100 }}
            source={require('./src/assets/button.png')}
          />
        </TouchableOpacity>
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
  buttonTitle: {
    fontSize: 24,
  },
  buttonContainer: {
    padding: 15,
    backgroundColor: 'orange',
    borderRadius: 15,
  },
});

export default App;
