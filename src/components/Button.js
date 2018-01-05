import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import * as styles from '../styles';

class Button extends Component {
  
  render() {
    const { onPressBtn, textBtn } = this.props;
    return (
      <TouchableOpacity
        onPress={onPressBtn}
      >
        <Text>{textBtn}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;