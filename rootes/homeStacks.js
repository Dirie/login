import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';

import Welcome from '../screens/welcome';

import Login from '../screens/welcome';

// const screens = {
//   Home: {
//     screen: Welcome,
//   },
//   login: {
//     screens: Login,
//   },
// };

const RootStack = createStackNavigator(
  {
    Home: Welcome,
    Details: Login,
  },
  {
    initialRouteName: 'Home',
  },
);

// const HomeStack = createStackNavigator(RootStack);

export default createAppContainer(RootStack);
