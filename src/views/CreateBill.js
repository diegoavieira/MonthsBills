import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';

import MyHeader from '../components/MyHeader';

class CreateBill extends Component {

  _toGoBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }
  
  render() {
    return (
      <Container>
        <MyHeader left={{ onPress: this._toGoBack }} title='Create Bill' />
        <Content padder>
          <Text>CreateBill</Text>
        </Content>
      </Container>
    );
  }
}

export default CreateBill;