import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RefreshControl, FlatList, View } from 'react-native';

import { fetchBills, clearFetchBills } from '../actions';
import * as styles from '../styles';
import BillsListItem from './BillsListItem';
import Toast from './Toast';

class BillsList extends Component {
  
  componentDidMount() {
    this.props.fetchBills();
    this._renderToast();
  }

  _renderToast = () => {
    const { bills, connection } = this.props;
    if (bills.success === false && connection.online) {
      return <Toast message={bills.message} />
    };
    if (bills.success === false && connection.online === false) {
      return <Toast message={connection.message} onCloseButton />
    };
    return null;
  }

  _refreshBillsList = () => {
    this.props.clearFetchBills();
    this.props.fetchBills();
    this._renderToast();
  }

  _renderBillsList = () => {
    const { bills } = this.props;
    if (bills.data) {
      return (
        <FlatList
          data={bills.data}
          keyExtractor={(item, index) => item.id}
          renderItem={
            ({ item }) => <BillsListItem bill={item} />
          }
          refreshControl={
            <RefreshControl
              refreshing={bills.loading}
              onRefresh={this._refreshBillsList}
              progressBackgroundColor={styles.COLOR.light}
              colors={[styles.COLOR.primary]}
            />
          }
        />
      );
    } else {
      return null;
    };
  }

  render() {
    const { bills } = this.props;
    return (
      <View style={styles.BILLS_LIST.content}>
        {this._renderBillsList()}
        {this._renderToast()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { bills } = state.billsReducer;
  const { connection } = state.connectionReducer;
  return { bills, connection };
};

export default connect(mapStateToProps, { fetchBills, clearFetchBills })(BillsList);