import React, { Component } from 'react';
import { ListItem, Text } from 'native-base';

class BillsListItem extends Component {
  
  render() {
    const { bill } = this.props;
    return (
      <ListItem style={{ flexDirection: 'column', backgroundColor: 'transparent'}} >
        <Text>{bill.name}</Text>
        <Text>{bill.value}</Text>
        <Text>{bill.status}</Text>
        <Text>{bill.maturity}</Text>
      </ListItem>
    );
  }
}

export default BillsListItem;