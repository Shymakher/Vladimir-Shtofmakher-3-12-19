import {AUTOCOMPLETE_REQUEST, AUTOCOMPLETE_SUCCESS, AUTOCOMPLETE_FAILED} from "./types";
import {API_KEY} from "./constants";
import axios from 'axios';

const BASE_URL = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?';

export const getAutocompleteResults = (query) => async dispatch => {
  try {
    dispatch({
      type: AUTOCOMPLETE_REQUEST
    });

    const URL = `${BASE_URL}apikey=${API_KEY}&q=${query}&language=en-us`;
    const res = await axios.get(URL);

    dispatch({
      type: AUTOCOMPLETE_SUCCESS,
      payload: res.data
    });

  } catch (err) {
    console.log("Error", err);
    dispatch({
      type: AUTOCOMPLETE_FAILED,
      payload: err
    });
  }
};