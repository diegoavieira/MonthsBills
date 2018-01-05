import React, { Component } from 'react';
import { Text, Animated, Easing, TouchableOpacity } from 'react-native';

import * as styles from '../styles';

class Toast extends Component {
  state = {
    animatedValue: new Animated.Value(0)
  }

  componentDidMount() {
    console.log(styles)
    const { animatedValue } = this.state;
    this._getAnimated(1);
  }

  _getAnimated = (toValue) => {
    const { animatedValue } = this.state;
    const { onCloseButton } = this.props;
    Animated.timing(
      animatedValue,
      {
        toValue: toValue,
        duration: 300,
        easing: Easing.cubic
      }
    ).start(() => {
      if (onCloseButton) {
        () => {}
      } else {
        this._onClose();
      };
    });
  }
  
  _onClose = () => {
    const { animatedValue } = this.state;
    const { onCloseButton } = this.props;
    if (onCloseButton) {
      this._getAnimated(0);
    } else {
      setTimeout(() => {
        this._getAnimated(0);
      }, 4000);
    };
  }

  _renderOnCloseButton = () => {
    const { onCloseButton } = this.props;
    if (onCloseButton) {
      return (
        <TouchableOpacity
          style={styles.TOAST.button}
          onPress={this._onClose}
        >
          <Text style={[styles.TEXT.normalMedium]}>Okay</Text>
        </TouchableOpacity>
      );
    };
    return null;
  }

  render() {
    const { animatedValue } = this.state;
    const { onCloseButton } = this.props;
    const bottom = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-15, 15],
    });
    return (
      <Animated.View
        style={[
          styles.TOAST.content,
          { opacity: animatedValue },
          { bottom },
          { padding: onCloseButton ? null : 15 }
        ]}
      >
        <Text style={styles.TEXT.normalLight}>{this.props.message}</Text>
        {this._renderOnCloseButton()}
      </Animated.View>
    );
  }
}

export default Toast;