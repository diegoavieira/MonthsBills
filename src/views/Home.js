import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, NetInfo } from 'react-native';
import { Container, View } from 'native-base';
import Swiper from 'react-native-swiper';

import { isConnected } from '../actions';
import MyHeader from '../components/MyHeader';
import BillsList from '../components/BillsList';

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

  render() {
    return (
      <Container>
        <MyHeader right={{ onPress: this._toCreateBill }} title="Month's Bills" />
        <View style={styles.content}>
          <BillsList />
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { connection } = state.connectionReducer;
  return { connection };
};

const styles = StyleSheet.create({
  content: {
    flex: 1
  }
})

export default connect(mapStateToProps, { isConnected })(Home);