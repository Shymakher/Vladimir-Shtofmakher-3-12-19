import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITE} from "./types";

export const addToFavorites = (data) => dispatch => {
  let favorite = Object.assign({}, {
    Key: data.Key,
    LocalizedName: data.LocalizedName,
    Temperature: data.Temperature,
    WeatherText: data.WeatherText
  });

  dispatch({
    type: ADD_TO_FAVORITES,
    payload: favorite
  });
};

export const removeFromFavorites = (key) => {
  return {
    type: REMOVE_FROM_FAVORITE,
    payload: key
  }
};