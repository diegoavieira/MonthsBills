import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NetInfo, Text , TouchableOpacity} from 'react-native';

import { isConnected } from '../actions';
import BillsList from '../components/BillsList';
import Screen from '../components/Screen';
import Button from '../components/Button';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Month\'s Bills',
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

  _renderHeaderRight = () => {
    return (
      <View>
        <Button onPress={this._toCreateBill} text='+' />
      </View>
    );
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
        <TouchableOpacity onPress={this._toCreateBill} style={{ padding: 15, backgroundColor: '#63707c'}}>
          <Text style={{ color: 'snow', textAlign: 'center', fontSize: 16 }}>Create Bill</Text>
        </TouchableOpacity>
      </Screen>
    );
  }
}

const mapStateToProps = state => {
  const { connection } = state.connectionReducer;
  return { connection };
};

export default connect(mapStateToProps, { isConnected })(Home);