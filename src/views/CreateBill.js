import React, { Component } from 'react';
import { Text } from 'react-native';

import Screen from '../components/Screen';

class CreateBill extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Create Bill'
  });

  render() {
    return (
      <Screen>
        <Text>CreateBill</Text>
      </Screen>
    );
  }
}

export default CreateBill;