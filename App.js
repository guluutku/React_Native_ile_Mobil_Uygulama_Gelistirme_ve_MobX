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
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

class App extends Component {

  render() {
    return (
      <View style={[styles.container]} >
        <ScrollView horizontal={true}>
          <Text style={styles.title}>1</Text>
          <Text style={styles.title}>2</Text>
          <Text style={styles.title}>3</Text>
          <Text style={styles.title}>4</Text>
          <Text style={styles.title}>5</Text>
          <Text style={styles.title}>6</Text>
          <Text style={styles.title}>7</Text>
          <Text style={styles.title}>8</Text>
          <Text style={styles.title}>9</Text>
          <Text style={styles.title}>10</Text>
        </ScrollView>
      </View >
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEB3B',
    flex: 1,
  },
  title: {
    backgroundColor: 'orange',
    marginVertical: 30,
    textAlign: 'center',
    paddingVertical: 60,
    width,
  },
});

export default App;
