import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';

import { submitCreateBill } from '../actions';
import Header from '../components/Header';
import FormCreateBill from '../components/FormCreateBill';

class CreateBill extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header title="Create Bill" left={{ onPress: () => navigation.goBack()}} />
  });

  _submitBillForm = values => {
    const { navigation } = this.props;
    console.log(values)
  }
  
  render() {
    return (
      <FormCreateBill onSubmit={this._submitBillForm} />
    );
  }
}

const mapStateToProps = state => {
  const { connection } = state.connectionReducer;
  return { connection };
};

const styles = StyleSheet.create({

})

export default connect(mapStateToProps, { submitCreateBill })(CreateBill);