import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {

  return (
    <SafeAreaView>
      <Text>New Home!!!!</Text>
    </SafeAreaView>
  );

}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

const AppContainer = createAppContainer(AppNavigator);

function App() {

  return (
    <AppContainer />
  );

}

const styles = StyleSheet.create({
});

export default App;
