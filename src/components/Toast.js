import React, { Component } from 'react';
import { StyleSheet, Animated, Easing, Text, Button } from 'react-native';

class Toast extends Component {
  state = {
    animatedValue: new Animated.Value(0),
  }

  componentWillReceiveProps(nextProps) {
    this._getAnimated(nextProps.params.show);
  }

  _getAnimated = toValue => {
    const { animatedValue } = this.state;
    Animated.timing(
      animatedValue,
      {
        toValue: toValue,
        duration: 300,
        easing: Easing.cubic
      }
    ).start();
  }
  
  _onClose = () => {
    const { params } = this.props;
    this._getAnimated(0);
    if (params.onPress) {
      params.onPress();
    };
  }

  render() {
    const { animatedValue } = this.state;
    const { params } = this.props;
    const bottom = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-16, 0]
    });
    return (
      <Animated.View
        style={[
          styles.content,
          { opacity: animatedValue },
          { bottom }
        ]}
      >
        <Text style={styles.message} >{params.message}</Text>
        <Button
          onPress={this._onClose}
          title={params.onPressLabel}
        />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 16,
    paddingVertical: 5
  },
  message: {
    color: '#fff',
    width: '70%'
  }
});

export default Toast;