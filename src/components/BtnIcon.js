import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as globalStyles from '../common/styles';

class BtnIcon extends Component {
  render() {
    const { onPress, icon, color, size } = this.props;
    return (
      <TouchableOpacity
        onPress={() => onPress()}
        style={styles.content}
      >
        <Icon
          name={icon}
          size={size ? size : 16}
          color={color ? color : globalStyles.COLOR.primary}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 16
  }
});

export default BtnIcon;