import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITE} from "../actions/types";

const initialState = {
  favorites: []
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, payload]
      };

    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(item => item.Key !== payload)
      };


    default:
      return state;
  }

};