import React, { Component } from 'react';
import { View, Text } from 'react-native';

class BillsListItem extends Component {
  render() {
    const { bill } = this.props;
    return (
      <View style={{ paddingVertical: 15, borderBottomColor: 'lightgray', borderBottomWidth: 0.5, marginHorizontal: 15 }}>
        <Text style={{ fontSize: 16 }}>{bill.title}</Text>
      </View>
    );
  }
}

export default BillsListItem;