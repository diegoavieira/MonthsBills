import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import * as styles from '../styles';

class Screen extends Component {
  
  render() {
    const { children } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={styles.COLOR.primaryDark} />
        {children}
      </View>
    );
  }
}

export default Screen;