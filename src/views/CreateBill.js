import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import * as globalStyles from '../common/styles';
import Header from '../components/Header';

class CreateBill extends Component {
  
  _headerLeft = () => {
    const { goBack } = this.props.navigation;
    return {
      icon: 'arrow-left',
      onPress: goBack
    };
  };

  render() {
    return (
      <View style={styles.content}>
        <Header title="Create Bill" left={this._headerLeft()} />
        <Text>CreateBill</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: globalStyles.COLOR.light
  }
});

export default CreateBill;