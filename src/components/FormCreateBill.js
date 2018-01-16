import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import moment from 'moment';
import { StyleSheet, View, TextInput, ScrollView, Text, TouchableOpacity } from 'react-native';

import InputText from './InputText';

class FormCreateBill extends Component {
  
  render() {
    return (
      <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
        
        <Field
          ref={ref => this.description = ref}
          name='description'
          component={InputText}
          label='Description'
          returnKeyType='next'
          blurOnSubmit={false}
          onSubmitEditing={() => this.price.refs.priceInner.focus()}
        />
        <Field
          ref={ref => this.price = ref}
          refInner='priceInner'
          name='price'
          component={InputText}
          label='Price'
          returnKeyType='send'
          blurOnSubmit={false}
          onSubmitEditing={this.props.handleSubmit}
        />
        
        <TouchableOpacity onPress={this.props.handleSubmit}>
          <Text style={styles.formSubmit}>Submit!</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  formSubmit: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 25,
    padding: 5
  }
});

export default reduxForm({ form: 'createBill' })(FormCreateBill);