import {AUTOCOMPLETE_REQUEST, AUTOCOMPLETE_SUCCESS, AUTOCOMPLETE_FAILED} from "../actions/types";

const initialState = {
  loading: false,
  autocomplete: []
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case AUTOCOMPLETE_REQUEST:
      return {
        ...state,
        loading: true
      };

    case AUTOCOMPLETE_SUCCESS:
      return {
        ...state,
        loading: false,
        autocomplete: payload
      };

    case AUTOCOMPLETE_FAILED:
      return {
        ...state,
        loading: false
      };

    default:
      return state
  }
};