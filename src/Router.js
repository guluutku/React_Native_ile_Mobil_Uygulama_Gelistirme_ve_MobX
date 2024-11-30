import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Button,
} from 'react-native';

import HomeScreen from './components/screens/HomeScreen';
import DetailScreen from './components/screens/DetailScreen';

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
            options: {
                headerRight: () => (
                    <Button
                        // eslint-disable-next-line no-alert
                        onPress={() => alert('This is a button!')}
                        title="Right"
                    />
                ),
            },
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

export default Navigation;
