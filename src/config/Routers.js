import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import Home from '../views/Home';
import CreateBill from '../views/CreateBill';

export const AppNavigator = StackNavigator({
  Home: {
    screen: Home
  },
  CreateBill: {
    screen: CreateBill
  }
});

class Routers extends Component {
  render() {
    return (
      <AppNavigator
      navigation={
        addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.routersReducer,
        })
      }
      />
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Routers);