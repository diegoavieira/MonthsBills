import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { StyleSheet, RefreshControl, FlatList, View, Text } from 'react-native';

import { fetchBills, clearFetchBills } from '../actions';
import * as globalStyles from '../common/styles';
import BtnIcon from './BtnIcon';
import BillsListItem from './BillsListItem';
import Toast from './Toast';

class BillsList extends Component {
  state = {
    month: moment()
  }

  componentDidMount() {
    this.props.fetchBills();
    this._renderToast();
  }

  _renderToast = () => {
    const { bills, connection } = this.props;
    if (bills.success && connection.online) {
      return <Toast message={bills.message} />
    };
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

  _billsPerMonth = () => {
    const { bills } = this.props;
    return bills.data.filter(bill => {
      return this._getMonthYear(bill.maturity) === this._getMonthYear(this.state.month);
    });
  }

  _renderBillsList = () => {
    const { bills } = this.props;
    if (bills.data) {
      return (
        <FlatList
          data={this._billsPerMonth()}
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

  _renderBillsListHeader = () => {
    return (
      <View style={styles.listHeader}>
        <BtnIcon
          onPress={() => this._toLastMonth()}
          icon='arrow-left'
          color={globalStyles.COLOR.primary}
          size={globalStyles.FONT_SIZE.high}
        />
        <Text style={globalStyles.TEXT.normalDarkStrong}>
        {this._getMonthYear(this.state.month)}
        </Text>
        <BtnIcon
          onPress={() => this._toNextMonth()}
          icon='arrow-right'
          color={globalStyles.COLOR.primary}
          size={globalStyles.FONT_SIZE.high}
        />
      </View>
    );
  }

  _getMonthYear = date => {
    return moment(date).format('MMM/YYYY');
  }

  _toLastMonth = () => {
    this.setState({
      month: this.state.month.subtract(1, 'M')
    });
  }

  _toNextMonth = () => {
    this.setState({
      month: this.state.month.add(1, 'M')
    });
  }

  render() {
    const { bills } = this.props;
    return (
      <View style={styles.content}>
        {this._renderBillsListHeader()}
        <View style={styles.list}>
          {this._renderBillsList()}
          {this._renderToast()}
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default connect(mapStateToProps, { fetchBills, clearFetchBills })(BillsList);