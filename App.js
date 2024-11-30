import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/components/screens/HomeScreen';
import DetailScreen from './src/components/screens/DetailScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',

  screenOptions: {
    headerBackTitle: 'Geri',
    headerTintColor: '#333',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },

  screens: {
    Home: {
      screen: HomeScreen,
      options: {},
    },

    Detail: {
      screen: DetailScreen,
      initialParams: { title: 'Default Title' },
      options: ({ route }) => ({
        title: route.params.title,
        headerStyle: {
          backgroundColor: 'yellow',
        },
      }),
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {

  return <Navigation />;

}
