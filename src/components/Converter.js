import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  LinearProgress,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  paper: {
    padding: 50,
    height: 300,
  },
  inputsWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 50,
  },
  messages: {
    textAlign: 'center',
  },
};

@withStyles(styles)
export default class Converter extends Component {
  static propTypes = {
    fetchingStatus: PropTypes.object.isRequired,
    bitcoinPrices: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
  }

  state = {
    cryptocurrency: [],
    bitcoinsAmount: '',
  }

  handleChangeBitcoinsAmount = (e) => {
    if (Number(e.target.value) || e.target.value === '') {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { fetchingStatus, bitcoinPrices, classes } = this.props;
    const { cryptocurrency, bitcoinsAmount } = this.state;

    return fetchingStatus.get('isDataFetching')
      ? (<LinearProgress color="secondary" />)
      : (
        <Paper className={classes.paper}>
          <div className={classes.inputsWrapper}>
            <TextField
              name="bitcoinsAmount"
              label="Enter amount"
              id="simple-start-adornment"
              value={bitcoinsAmount}
              onChange={this.handleChangeBitcoinsAmount}
              // eslint-disable-next-line
              InputProps={{endAdornment: <InputAdornment position="end">BTC</InputAdornment>}}
            />
            <form autoComplete="off">
              <FormControl>
                <InputLabel htmlFor="age-simple">
                  Cryptocurrency
                </InputLabel>
                <Select
                  value={cryptocurrency}
                  onChange={this.handleChange}
                  name="cryptocurrency"
                  renderValue={value => value[0]}
                >
                  <MenuItem value="">
                    <em>
                      None
                    </em>
                  </MenuItem>
                  {bitcoinPrices.map(item => (
                    <MenuItem
                      key={item.first()}
                      value={[item.first(), item.last()]}
                    >
                      {item.first()}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  Select cryptocurrency for conversion
                </FormHelperText>
              </FormControl>
            </form>
          </div>
          <div className={classes.messages}>
            {!bitcoinsAmount && (
            <Typography variant="caption">
              Please enter amount of bitcoins
            </Typography>
            )}
            {cryptocurrency.length === 0 && (
            <Typography variant="caption">
              Please select cryptocurrency
            </Typography>
            )}
            {bitcoinsAmount && cryptocurrency.length === 2 && (
              <Typography variant="display1">
                {`${bitcoinsAmount} BTC = ${Math.round(bitcoinsAmount * cryptocurrency[1])} ${cryptocurrency[0]}`}
              </Typography>
            )}
          </div>
        </Paper>
      );
  }
}
