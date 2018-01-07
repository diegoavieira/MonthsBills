import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, NetInfo, View, ViewPagerAndroid, Text } from 'react-native';

import { isConnected } from '../actions';
import * as globalStyles from '../common/styles';
import Header from '../components/Header';
import BillsList from '../components/BillsList';
import BtnIcon from '../components/BtnIcon';

class Home extends Component {
  
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

  _headerRight = () => ([
    {
      icon: 'plus',
      onPress: this._toCreateBill
    }
  ]);

  render() {
    return (
      <View style={styles.content}>
        <Header title="Month's Bills" right={this._headerRight()} />
        <BillsList />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { connection } = state.connectionReducer;
  return { connection };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: globalStyles.COLOR.light
  }
})

export default connect(mapStateToProps, { isConnected })(Home);