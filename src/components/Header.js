import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Header extends Component {

  _renderLeft = () => {
    const { left } = this.props;
    if (left) {
      return (
        <TouchableOpacity
          onPress={left.onPress}
        >
          <Icon name='arrow-back' style={styles.button} />
        </TouchableOpacity>
      );
    } else {
      return null;
    };
  }

  _renderRight = () => {
    const { right } = this.props;
    if (right) {
      return (
        <TouchableOpacity
          onPress={right.onPress}
        >
          <Icon name='add-circle' style={styles.button} />
        </TouchableOpacity>
      );
    } else {
      return null;
    };
  }
  
  render() {
    const { title } = this.props;
    return (
      <View>
        <StatusBar backgroundColor='#ea4c1c'/>
        <View style={styles.content}>
          {this._renderLeft()}
          <Text style={styles.title}>{title}</Text>
          {this._renderRight()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 4,
    backgroundColor: '#FF5722',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    elevation: 4
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    flexGrow: 1,
    marginLeft: 14
  },
  button: {
    fontSize: 24,
    padding: 12,
    color: '#fff',
    borderRadius: 2,
  }
});

export default Header;