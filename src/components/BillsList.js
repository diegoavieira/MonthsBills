import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { StyleSheet } from 'react-native';
import { List, Text, View, Button, Spinner } from 'native-base';
import Swiper from 'react-native-swiper';

import { fetchBills, clearFetchBills, setMyToast } from '../actions';
import BillsListItem from './BillsListItem';

class BillsList extends Component {

  componentDidMount() {
    this.props.fetchBills(this._refreshBillsList);
  }
  
  _refreshBillsList = () => {
    this.props.clearFetchBills();
    this.props.fetchBills(this._refreshBillsList);
  }
  
  _renderLoading = () => {
    const { bills } = this.props;
    if (bills.loading) {
      return <Spinner />
    };
    return null;
  }

  _billsPerMonth = month => {
    const { bills } = this.props;
    return bills.data.filter(bill => {
      return this._getMonthYear(bill.maturity) === month;
    });
  }

  _renderBillsList = month => {
    const { bills } = this.props;
    return (
      <List
        dataArray={this._billsPerMonth(month)}
        renderRow={item => <BillsListItem bill={item} />}
      >
      </List>
    );
  }

  _renderBillsListHeader = month => {
    return (
      <View style={styles.listHeader}>
        <Text>{month}</Text>
      </View>
    );
  }

  _billsPages = () => {
    const { bills } = this.props;
    return bills.data.map(el => {
      return this._getMonthYear(el.maturity)
    })
    .filter((el, index, arr) => {
      return index === arr.indexOf(el);
    })
    .map((month, index) => {
      return (
        <View key={index} style={styles.list}>
          {this._renderBillsListHeader(month)}
          {this._renderBillsList(month)}
        </View>
      );
    });
  }

  _getMonthYear = date => {
    return moment(date).format('MMMM YYYY');
  }

  _setInitialPage = (month = moment()) => {
    return this._billsPages().indexOf(this._getMonthYear(month))
  }

  render() {
    const { bills } = this.props;
    return (
      <View style={styles.content}>
        {this._renderLoading()}
        <Swiper
          style={styles.content}
          showsPagination={false}
          index={this._setInitialPage()}
          loop={false}
          >
          {this._billsPages()} 
        </Swiper>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { bills } = state.billsReducer;
  const { connection } = state.connectionReducer;
  return { bills, connection };
};

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  listHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  }
});

export default connect(mapStateToProps, { fetchBills, clearFetchBills, setMyToast })(BillsList);