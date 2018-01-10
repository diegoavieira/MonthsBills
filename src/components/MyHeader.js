import React, { Component } from 'react';
import { Header, Left, Right, Body, Title, Button, Icon } from 'native-base';

import * as globalStyles from '../common/styles';

class MyHeader extends Component {

  _renderLeft = () => {
    const { left } = this.props;
    if (left) {
      return (
        <Left>
          <Button 
            transparent
            onPress={() => left.onPress()}  
          >
            <Icon name='arrow-back' />
          </Button>
        </Left>
      );
    } else {
      return <Left />;
    };
  }

  _renderRight = () => {
    const { right } = this.props;
    if (right) {
      return (
        <Right>
          <Button
            transparent
            onPress={() => right.onPress()}
          >
            <Icon name='add-circle' />
          </Button>
        </Right>
      );
    } else {
      return <Right />;
    };
  }
  
  render() {
    const { title } = this.props;
    return (
      <Header>
        {this._renderLeft()}
        <Body>
          <Title>{title}</Title>
        </Body>
        {this._renderRight()}
      </Header>
    );
  }
}

export default MyHeader;