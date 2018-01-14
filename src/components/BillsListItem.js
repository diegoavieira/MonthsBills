import React, { Component } from 'react';
import moment from 'moment';
import { View, Text } from 'react-native';

class BillsListItem extends Component {
  
  render() {
    const { bill } = this.props;
    return (
      <View style={{ flexDirection: 'column', backgroundColor: 'transparent'}} >
        <Text>{bill.id}</Text>
        <Text>{bill.name}</Text>
        <Text>{bill.value.toFixed(2)}</Text>
        <Text>{bill.status}</Text>
        <Text>{moment(bill.maturity).format('MM/DD/YYYY')}</Text>
      </View>
    );
  }
}

export default BillsListItem;