import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { StyleSheet, RefreshControl } from 'react-native';
import { List, Text, View, Button, Spinner } from 'native-base';
import Swiper from 'react-native-swiper';

import { fetchBills, fetchBillsRestore, setMyToast } from '../actions';
import BillsListItem from './BillsListItem';

class BillsList extends Component {

  componentDidMount() {
    this.props.fetchBills();
  }

  componentWillReceiveProps(nextProps) {
    const { bills } = nextProps;
    this.props.setMyToast({
      show: bills.success === false ? 1 : 0,
      message: 'Offline server. Try again to sync.',
      onPressLabel: 'Try again',
      onPress: () => this._refreshBillsList()
    });
  }

  _refreshBillsList = () => {
    this.props.fetchBillsRestore();
    this.props.fetchBills();
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
        refreshControl={
          <RefreshControl 
            refreshing={bills.loading}
            onRefresh={this._refreshBillsList}
          />
        }
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
    if (bills.data) {
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
    };
  }

  _getMonthYear = date => {
    return moment(date).format('MMMM YYYY');
  }

  _setInitialPage = (month = moment()) => {
    if (Array.isArray(this._billsPages)) {
      return this._billsPages().indexOf(this._getMonthYear(month))
    };
  }

  _renderSwiper = () => {
    const { bills } = this.props;
    console.log(bills)
    if (bills.data) {
      return (
        <Swiper
          showsPagination={false}
          index={this._setInitialPage()}
          loop={false}
        >
          {this._billsPages()} 
        </Swiper>
      );
    } else {
      return (
        <View style={styles.list}>
          {this._renderBillsListHeader(this._getMonthYear(moment()))}
          <Text>Create a bill.</Text>
        </View>
      );
    }
  }

  render() {
    const { bills } = this.props;
    return (
      <View style={styles.content}>
        {this._renderSwiper()}
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
  list: {
    flex: 1
  },
  listHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  }
});

export default connect(mapStateToProps, { fetchBills, fetchBillsRestore, setMyToast })(BillsList);