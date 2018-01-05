import React from 'react';
import { StackNavigator } from 'react-navigation';

import * as styles from '../styles';
import Home from '../views/Home';
import CreateBill from '../views/CreateBill';

const RouterNav = StackNavigator({
  Home: {
    screen: Home
  },
  CreateBill: {
    screen: CreateBill
  }
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: styles.COLOR.primary
    },
    headerTintColor: styles.COLOR.light
  }
});

export default RouterNav;