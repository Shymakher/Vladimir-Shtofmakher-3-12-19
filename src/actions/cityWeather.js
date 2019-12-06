import {
  GET_CURRENT_WEATHER_REQUEST,
  GET_CURRENT_WEATHER_SUCCESS,
  GET_CURRENT_WEATHER_FAILED,
  GET_FIVE_DAYS_OF_DAILY_FAILED,
  GET_FIVE_DAYS_OF_DAILY_REQUEST,
  GET_FIVE_DAYS_OF_DAILY_SUCCESS,
  GET_GEOLOCATION_SEARCH_FAILED
} from "./types";
import axios from 'axios';
import {API_KEY} from "./constants";

const BASE_CURRENT = 'http://dataservice.accuweather.com/currentconditions/v1/';

export const getCurrentWeather = (cityKey, selectedCity) => async dispatch => {
  try {
    dispatch({type: GET_CURRENT_WEATHER_REQUEST});

    const URL = `${BASE_CURRENT}${cityKey}?apikey=${API_KEY}`;
    const res = await axios.get(URL);

    // Error handler
    if (!Array.isArray(res.data)) {
      return dispatch({
        type: GET_CURRENT_WEATHER_FAILED,
        payload: res.data
      });
    }

    let cityData = Object.assign({}, res.data[0], {...selectedCity});
    dispatch({
      type: GET_CURRENT_WEATHER_SUCCESS,
      payload: cityData
    });

  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_CURRENT_WEATHER_FAILED,
      payload: err.data
    });
  }
};

const BASE_FIVE_DAYS = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';

export const getFiveDaysOfDaily = (cityKey) => async dispatch => {
  try {
    dispatch({type: GET_FIVE_DAYS_OF_DAILY_REQUEST});

    const URL = `${BASE_FIVE_DAYS}${cityKey}?apikey=${API_KEY}`;
    const res = await axios.get(URL);

    // Error handler
    if (res.data && res.data.hasOwnProperty('code')) {
      return dispatch({
        type: GET_FIVE_DAYS_OF_DAILY_FAILED,
        payload: res.data
      });
    }

    dispatch({
      type: GET_FIVE_DAYS_OF_DAILY_SUCCESS,
      payload: res.data.DailyForecasts
    });

  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_FIVE_DAYS_OF_DAILY_FAILED,
      payload: err.data
    });
  }
};

const BASE_GEOLOCATION = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search';

export const getCityDetailsByGeoposition = (coordinates) => async dispatch => {
  try {
    const URL = `${BASE_GEOLOCATION}?apikey=${API_KEY}&q=${coordinates}`;
    const res = await axios.get(URL);

    // Error handler
    if (res.data && res.data.hasOwnProperty('code')) {
      return dispatch({
        type: GET_GEOLOCATION_SEARCH_FAILED,
        payload: res.data
      });
    }

    dispatch(getCurrentWeather(parseInt(res.data.Key), res.data));
    dispatch(getFiveDaysOfDaily(parseInt(res.data.Key)));

  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_GEOLOCATION_SEARCH_FAILED,
      payload: err.data
    });
  }
};