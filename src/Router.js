/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    Text,
    TouchableOpacity,
} from 'react-native';
// import Icon from '@react-native-vector-icons/Ionicons';

import DetailScreen from './screens/DetailScreen';
import ContactScreen from './screens/ContactScreen';
import HomeScreen from './screens/HomeScreen';

// import AboutModal from './screens/AboutModal';

const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',

    screenOptions: {
        headerBackTitle: 'Geri',
        headerTintColor: '#333',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerShown: false,
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

const ContactStack = createNativeStackNavigator({
    screenOptions: {
        headerBackTitle: 'Geri',
        headerTintColor: '#333',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerShown: false,
    },

    screens: {
        Contact: {
            screen: ContactScreen,
        },
    },
});

const Drawer = createDrawerNavigator({
    screens: {
        Main: {
            screen: RootStack,
            options: {
                drawerLabel: 'Anasayfaya Git',
            },
        },

        Contact: {
            screen: ContactStack,
            options: {
                drawerLockMode: 'locked-closed',
                drawerLabel: 'İletişim',
            },
        },
    },

    screenOptions: {
        drawerPosition: 'left',
        drawerWidth: 160,
        drawerActiveTintColor: 'blue',
        drawerInActiveTintColor: '#D03932',
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

const Navigation = createStaticNavigation(Drawer);

export default Navigation;
