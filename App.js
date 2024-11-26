import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/components/screens/HomeScreen';
import DetailScreen from './src/components/screens/DetailScreen';

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
