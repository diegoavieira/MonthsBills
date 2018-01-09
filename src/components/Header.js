import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import * as globalStyles from '../common/styles';
import BtnIcon from './BtnIcon';

class Header extends Component {

  _renderLeft = () => {
    const { left } = this.props;
    if (left) {
      return (
        <BtnIcon
          onPress={left.onPress}
          icon={left.icon}
          color={globalStyles.COLOR.light}
          size={globalStyles.FONT_SIZE.high}
        />
      );
    } else {
      return null;
    };
  }
  
  _renderRightBtns = () => {
    const { right } = this.props;
    return right.map((item, index) => {
      return (
        <BtnIcon
          key={index}
          onPress={item.onPress}
          icon={item.icon}
          color={globalStyles.COLOR.light}
          size={globalStyles.FONT_SIZE.high}
        />
      );
    });
  }

  _renderRight = () => {
    const { right } = this.props;
    if (right) {
      return (
        <View style={{ flexDirection: 'row' }}>
          {this._renderRightBtns()}
        </View>
      );
    } else {
      return null;
    };
  }

  render() {
    const { title } = this.props;
    return (
      <View>
        <StatusBar backgroundColor='rgba(0, 0, 0, 0.1)' translucent />
        <View style={styles.content}>
          <View style={styles.contentTitle}>
            {this._renderLeft()}
            <Text style={[ styles.title, globalStyles.TEXT.highLightStrong ]}>{title}</Text>
          </View>
          {this._renderRight()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 0.66,
    shadowOffset: { height: 0.66 },
    elevation: 4,
    backgroundColor: globalStyles.COLOR.primary,
    paddingTop: StatusBar.currentHeight,
    height: 56 + StatusBar.currentHeight
  },
  contentTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    marginHorizontal: 16
  }
});

export default Header;