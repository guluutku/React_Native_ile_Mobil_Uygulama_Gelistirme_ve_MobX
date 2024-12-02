import React from 'react';
import Icon from '@react-native-vector-icons/ionicons';

// Navigation
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Home from './screens/Home';
import Contacts from './screens/Contacts';
import Settings from './screens/Settings';
import ContactDetail from './screens/ContactDetail';

const ContactStack = createNativeStackNavigator({
    screens: {
        Contacts: {
            screen: Contacts,
            options: {
                title: 'Contacts',
            },
        },
        ContactDetail: {
            screen: ContactDetail,
        },
    },
});

const TabNavigator = createBottomTabNavigator({
    screens: {
        Home: {
            screen: Home,
            options: {
                tabBarIcon: ({ tintColor }) => (<Icon name="home" size={22} color={tintColor} />),
            },
        },
        Contacts: {
            screen: ContactStack,
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
        headerShown: false,
    },
});

const Navigation = createStaticNavigation(TabNavigator);

export default Navigation;
