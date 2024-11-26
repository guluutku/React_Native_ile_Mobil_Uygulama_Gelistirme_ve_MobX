import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {

  return (
    <View style={styles.container}>
      <Text>New Home!!!!</Text>
    </View>
  );

}

function DetailScreen() {

  return (
    <View style={styles.container}>
      <Text>Detail SCREEN!!!!</Text>
    </View>
  );

}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
    Detail: DetailScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);


export default function App() {

  return <Navigation />;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
