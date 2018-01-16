import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, NetInfo, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

import { isConnected, createBill } from '../actions';
import Header from '../components/Header';
import BillsList from '../components/BillsList';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header title="Month's Bills" right={{ onPress: () => navigation.navigate('CreateBill')}} />
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

  render() {
    return (
      <View style={styles.container}>
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
  container: {
    flex: 1,
  }
});

export default connect(mapStateToProps, { isConnected, createBill })(Home);