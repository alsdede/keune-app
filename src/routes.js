import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
//import Home from './pages/Home';
import Profile from './pages/Profile';

export default createAppContainer(
    createSwitchNavigator({
        Sign: createSwitchNavigator({
            SignIn,
            SignUp,
        }),
        App: createBottomTabNavigator(
            {
                Dashboard,
                Profile,
            },
            {
                tabBarOptions: {
                    keyboardHidesTabBar: true,
                    activeTintColor: '#FFF',
                    inactiveTintColor: 'rgba(255,255,255,0.6)',
                    style: {
                        backgroundColor: '#000',
                    },
                },
            }
        ),
    })
);
