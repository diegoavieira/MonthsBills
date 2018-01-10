import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { StyleSheet } from 'react-native';
import { List, Text, View, Button, Spinner } from 'native-base';
import Swiper from 'react-native-swiper';

import { fetchBills, clearFetchBills } from '../actions';
import * as globalStyles from '../common/styles';
import MyToast from './MyToast';
import BillsListItem from './BillsListItem';

class BillsList extends Component {

  componentDidMount() {
    this.props.fetchBills();
  }

  _refreshBillsList = () => {
    this.props.clearFetchBills();
    this.props.fetchBills();
  }

  _renderError = () => {
    const { bills, connection } = this.props;
    if (bills.success === false && connection.online) {
      return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.7)',  paddingLeft: 15, paddingVertical: 10 }}>
          <Text style={{ color: '#fff' }}>{bills.message}</Text>
          <Button onPress={this._refreshBillsList} transparent warning small>
            <Text>Refresh</Text>
          </Button>
        </View>
      );
    };
    if (bills.success === false && connection.online === false) {
      return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.7)',  paddingLeft: 15, paddingVertical: 10 }}>
          <Text style={{ color: '#fff' }}>{connection.message}</Text>
          <Button onPress={this._refreshBillsList} transparent warning small>
            <Text>Refresh</Text>
          </Button>
        </View>
      );
    };
    return null;
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
        {this._renderError()}
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

export default connect(mapStateToProps, { fetchBills, clearFetchBills })(BillsList);