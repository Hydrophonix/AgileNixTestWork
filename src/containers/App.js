import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import CssBaseline from '@material-ui/core/CssBaseline';

import { asyncActions } from '../actions';

import Header from '../components/Header';
import Converter from '../components/Converter';

import '../assets/base.css';

@hot(module)
@connect(
  ({ fetchingStatus, bitcoinPrices }) => ({ fetchingStatus, bitcoinPrices }),
  { fetchBitcoinPricesAsync: asyncActions.fetchBitcoinPricesAsync },
)
export default class BitcoinConverter extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchBitcoinPricesAsync();
  }

  render() {
    const { fetchingStatus, bitcoinPrices, fetchBitcoinPricesAsync } = this.props;

    return (
      <CssBaseline>
        <Header fetchBitcoinPricesAsync={fetchBitcoinPricesAsync} />
        <Converter
          fetchingStatus={fetchingStatus}
          bitcoinPrices={bitcoinPrices}
        />
      </CssBaseline>
    );
  }
}
