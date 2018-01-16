import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

class InputText extends Component {
  render() {
    const { input, meta, label, ...inputProps } = this.props;
    const validationStyles = meta.touched && !meta.active ? meta.valid ? styles.valid : styles.invalid : null;
    return (
      <View style={[styles.inputContainer, validationStyles]}>
        <Text>{label}</Text>
        <TextInput
          {...inputProps}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
          style={styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 36,
  },
  inputContainer: {
    marginBottom: 16,
    backgroundColor: '#fff'
  },
  valid: {
    borderColor: '#53E69D'
  },
  invalid: {
    borderColor: '#F55E64'
  }
});

export default InputText;