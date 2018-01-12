import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Animated, Easing } from 'react-native';
import { Text, Button } from 'native-base';

class MyToast extends Component {
  state = {
    animatedValue: new Animated.Value(0),
  }

  componentWillReceiveProps(nextProps) {
    this._getAnimated(nextProps.myToast.show);
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
    const { myToast } = this.props;
    this._getAnimated(0);
    if (myToast.onPress) {
      myToast.onPress();
    };
  }

  render() {
    const { animatedValue } = this.state;
    const { myToast } = this.props;
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
        <Text style={styles.message}>{myToast.message}</Text>
        <Button
          onPress={this._onClose}
          transparent
          warning
        >
          <Text>{myToast.onPressLabel}</Text>
        </Button>
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
    paddingLeft: 16
  },
  message: {
    color: '#fff'
  }
});

const mapStateToProps = state => {
  const { myToast } = state.myToastReducer;
  return { myToast };
};

export default connect(mapStateToProps, { })(MyToast);