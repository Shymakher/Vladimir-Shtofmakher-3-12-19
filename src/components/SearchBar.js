import React from 'react';
import _ from 'lodash';
import {Autocomplete} from '@material-ui/lab';
import {TextField} from '@material-ui/core';
import {connect} from 'react-redux'
import {getAutocompleteResults} from "../actions/autocomplete";
import {getCurrentWeather, getFiveDaysOfDaily} from "../actions/cityWeather";
import PropTypes from 'prop-types';

const SearchBar = ({autocomplete, getAutocompleteResults, getCurrentWeather, getFiveDaysOfDaily}) => {

  const getAutocomplete = _.debounce((e, value) => {
    if (value && /^[a-zA-Z]+$/.test(value)) {
      getAutocompleteResults(value);
    }
  }, 2000);

  const getWeatherInfo = (e, value) => {
    if (value) {
      const cityKey = parseInt(value.Key);
      getCurrentWeather(cityKey, value);
      getFiveDaysOfDaily(cityKey, value);
    }
  };

  return (
    <div className="search-bar">
      <Autocomplete
        id="combo-box-demo"
        options={autocomplete}
        getOptionLabel={option => option.LocalizedName}
        onInputChange={getAutocomplete}
        onChange={getWeatherInfo}
        style={{width: 300}}
        renderInput={params => (
          <TextField {...params} label="Enter City" variant="outlined" fullWidth/>
        )}
      />
    </div>
  );
};

SearchBar.propTypes = {
  getFiveDaysOfDaily: PropTypes.func.isRequired,
  getCurrentWeather: PropTypes.func.isRequired,
  getAutocompleteResults: PropTypes.func.isRequired
};

const mapStateToProps = ({autocomplete}) => ({
  autocomplete: autocomplete.autocomplete
});

export default connect(mapStateToProps, {getAutocompleteResults, getCurrentWeather, getFiveDaysOfDaily})(SearchBar);