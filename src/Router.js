/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from '@react-native-vector-icons/ionicons';

// Navigation
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import Home from './screens/Home';
import Contacts from './screens/Contacts';
import Settings from './screens/Settings';

const TabNavigator = createBottomTabNavigator({
    screens: {
        Home: {
            screen: Home,
            options: {
                tabBarIcon: ({ tintColor }) => (<Icon name="home" size={22} color={tintColor} />),
            },
        },
        Contacts: {
            screen: Contacts,
            options: {
                tabBarIcon: ({ tintColor }) => (<Icon name="contacts" size={22} color={tintColor} />),
            },
        },
        Settings: {
            screen: Settings,
            options: {
                tabBarIcon: ({ tintColor }) => (<Icon name="cog" size={22} color={tintColor} />),
            },
        },
    },

    screenOptions: {
        tabBarActiveTintColor: 'red',
    },
});

const Navigation = createStaticNavigation(TabNavigator);

export default Navigation;
