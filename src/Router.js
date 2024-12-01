/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Text,
    TouchableOpacity,
} from 'react-native';

import HomeScreen from './components/screens/HomeScreen';
import DetailScreen from './components/screens/DetailScreen';
// import AboutModal from './components/screens/AboutModal';


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
                    <TouchableOpacity
                        style={{ margin: 10 }}
                        onPress={() => { }}
                    >
                        <Text style={{ color: '#333' }}>About</Text>
                    </TouchableOpacity>
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

/*
const ModalStack = createNativeStackNavigator({
    screens: {
        Main: {
            screen: RootStack,
            options: {
                headerShown: false,
            },
        },

        Modal: {
            screen: AboutModal,
        },
    },

    mode: 'modal',
});*/
// const Navigation = createStaticNavigation(ModalStack);

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
