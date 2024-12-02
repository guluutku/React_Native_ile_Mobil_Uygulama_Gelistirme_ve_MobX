/* eslint-disable react-native/no-inline-styles */
import React from 'react';

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
        },
        Contacts: {
            screen: Contacts,
        },
        Settings: {
            screen: Settings,
        },
    },
});

const Navigation = createStaticNavigation(TabNavigator);

export default Navigation;
