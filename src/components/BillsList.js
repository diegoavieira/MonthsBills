import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Swiper from 'react-native-swiper';
import { StyleSheet, RefreshControl, FlatList, View, Text } from 'react-native';

import { fetchBills, clearFetchBills } from '../actions';
import * as globalStyles from '../common/styles';
import BtnIcon from './BtnIcon';
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

  _billsPerMonth = month => {
    const { bills } = this.props;
    return bills.data.filter(bill => {
      return this._getMonthYear(bill.maturity) === month;
    });
  }

  _renderBillsList = month => {
    const { bills } = this.props;
    if (bills.data) {
      return (
        <FlatList
          data={this._billsPerMonth(month)}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => <BillsListItem bill={item} />}
          refreshControl={
            <RefreshControl
              refreshing={bills.loading}
              onRefresh={this._refreshBillsList}
              progressBackgroundColor={globalStyles.COLOR.light}
              colors={[globalStyles.COLOR.primary]}
            />
          }
        />
      );
    } else {
      return <Text>oi</Text>;
    };
  }

  _renderBillsListHeader = month => {
    return (
      <View style={styles.listHeader}>
        <Text style={globalStyles.TEXT.normalPrimaryStrong}>
          {month}
        </Text>
      </View>
    );
  }

  _billsPages = () => {
    const { bills } = this.props;
    if (bills.data) {
      return bills.data.map((el) => {
        return this._getMonthYear(el.maturity)
      }).filter((el, index, arr) => {
        return index === arr.indexOf(el);
      });
    }
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
        <Swiper
          style={styles.content}
          showsPagination={false}
          index={this._setInitialPage()}
          loop={false}
        >
          {this._billsPages().map((month, index) => {
            return (
              <View key={index} style={styles.list}>
                {this._renderBillsListHeader(month)}
                {this._renderBillsList(month)}
              </View>
            );
          })} 
        </Swiper>
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
    backgroundColor: globalStyles.COLOR.medium
  }
});

export default connect(mapStateToProps, { fetchBills, clearFetchBills })(BillsList);