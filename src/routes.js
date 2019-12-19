import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
//import Home from './pages/Home';
import BrandList from '~/pages/BrandList';
import Brands from '~/components/Brands';
import ProductsList from './pages/ProductsList';
import Contact from './pages/Contact';
import ProvidersList from '~/pages/ProvidersList';
import Profile from './pages/Profile';

export default createAppContainer(
    createSwitchNavigator({
        Sign: createSwitchNavigator({
            SignIn,
            SignUp,
        }),
        App: createBottomTabNavigator(
            {
                Home,
                Dashboard,
                BrandList: {
                    screen: createStackNavigator(
                        {
                            BrandList,
                            Brands,
                            ProductsList,
                        },
                        {
                            defaultNavigationOptions: {
                                headerTransparent: false,
                                headerTintColor: '#a0a0a0',
                                headerLeftContainerStyle: {
                                    marginLeft: 20,
                                },
                            },
                        }
                    ),
                    navigationOptions: {
                        tabBarVisible: false,
                        tabBarLabel: 'Produtos',
                        tabBarIcon: (
                            <Icon name="loyalty" size={20} color="#A0A0A0" />
                        ),
                    },
                },
                ProvidersList: {
                    screen: createStackNavigator(
                        {
                            Contact,
                            ProvidersList,
                        },
                        {
                            defaultNavigationOptions: {
                                headerTransparent: false,
                                headerTintColor: '#a0a0a0',
                                headerLeftContainerStyle: {
                                    marginLeft: 20,
                                },
                            },
                        }
                    ),
                    navigationOptions: {
                        tabBarVisible: false,
                        tabBarLabel: 'Contato',
                        tabBarIcon: (
                            <Icon name="chat" size={20} color="#A0A0A0" />
                        ),
                    },
                },
                Profile,
            },
            {
                tabBarOptions: {
                    keyboardHidesTabBar: true,
                    activeTintColor: '#383838',
                    inactiveTintColor: '#A0A0A0',
                    style: {
                        backgroundColor: 'rgba(255,255,255,0.6)',
                        borderTopWidth: 1,
                    },
                },
            }
        ),
    })
);
