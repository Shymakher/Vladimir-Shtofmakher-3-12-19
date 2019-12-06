import {
  GET_CURRENT_WEATHER_REQUEST,
  GET_CURRENT_WEATHER_FAILED,
  GET_CURRENT_WEATHER_SUCCESS,
  GET_GEOLOCATION_SEARCH_FAILED
} from "../actions/types";

const initialState = {
  currentWeather: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case GET_CURRENT_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case GET_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentWeather: payload
      };

    case GET_CURRENT_WEATHER_FAILED && GET_GEOLOCATION_SEARCH_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};