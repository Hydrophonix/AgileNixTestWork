import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';
import { Update } from '@material-ui/icons';

const Header = (props) => {
  const { fetchBitcoinPricesAsync } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" style={{ flex: 1 }}>
          Bitcoin price converter
        </Typography>
        <Button color="secondary" onClick={() => fetchBitcoinPricesAsync()}>
          <Update />
          Update Data
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  fetchBitcoinPricesAsync: PropTypes.func.isRequired,
};

export default Header;
