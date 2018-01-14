import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from '../components/Header';

class CreateBill extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header title="Create Bill" left={{ onPress: () => navigation.goBack()}} />
  });
  
  render() {
    return (
      <View>
        <Text>CreateBill</Text>
      </View>
    );
  }
}

export default CreateBill;