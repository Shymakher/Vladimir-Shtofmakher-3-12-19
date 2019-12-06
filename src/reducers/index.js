import {combineReducers} from 'redux';
import autocomplete from './autocomplete';
import currentWeather from './currentWeather';
import fiveDaysOfDaily from './fiveDaysOfDaily';
import favorites from './favorites';
import settings from './settings';

export default combineReducers({
  autocomplete,
  currentWeather,
  fiveDaysOfDaily,
  favorites,
  settings
});