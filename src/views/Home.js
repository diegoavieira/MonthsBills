import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NetInfo, Text, TouchableOpacity } from 'react-native';

import { isConnected } from '../actions';
import BillsList from '../components/BillsList';
import Screen from '../components/Screen';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Month\'s Bills'
  });

  componentDidMount() {
    NetInfo.addEventListener('connectionChange', this._onConnectivityChange);
    NetInfo.getConnectionInfo().then(connectionInfo => {
      this.props.isConnected(connectionInfo);
    });
  }
  
  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this._onConnectivityChange);
  }
  
  _onConnectivityChange = connectionInfo => {
    this.props.isConnected(connectionInfo);
  }

  _toCreateBill = () => {
    const { navigation } = this.props;
    navigation.navigate('CreateBill');
  }

  render() {
    return (
      <Screen>
        <BillsList />
      </Screen>
    );
  }
}

const mapStateToProps = state => {
  const { connection } = state.connectionReducer;
  return { connection };
};

export default connect(mapStateToProps, { isConnected })(Home);