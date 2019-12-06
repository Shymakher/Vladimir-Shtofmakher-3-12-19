import {
  GET_FIVE_DAYS_OF_DAILY_SUCCESS,
  GET_FIVE_DAYS_OF_DAILY_REQUEST,
  GET_FIVE_DAYS_OF_DAILY_FAILED
} from "../actions/types";

const initialState = {
  fiveDaysOfDaily: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case GET_FIVE_DAYS_OF_DAILY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case GET_FIVE_DAYS_OF_DAILY_SUCCESS:
      return {
        ...state,
        loading: false,
        fiveDaysOfDaily: payload
      };

    case GET_FIVE_DAYS_OF_DAILY_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};