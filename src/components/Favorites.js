import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getCurrentWeather, getFiveDaysOfDaily} from "../actions/cityWeather";
import {FavoritesWrapper} from "../scss/styled-components/Favorites";

const Favorites = ({favorites: {favorites}, settings, getCurrentWeather, getFiveDaysOfDaily, history}) => {
  const getWeather = (key, item) => {
    getCurrentWeather(key, {LocalizedName: item.LocalizedName, Key: item.Key});
    getFiveDaysOfDaily(key);
    history.push('/Vladimir-Shtofmakher-3-12-19');
  };

  return (
    <FavoritesWrapper>
      {
        favorites.map((item) => {
          const temperature = item.Temperature[settings.unitStatus];
          return (
            <li onClick={() => getWeather(parseInt(item.Key), item)} key={item.Key}>
              <span>{item.LocalizedName}</span>
              <span>{temperature.Value} {temperature.Unit}</span>
              <span>{item.WeatherText}</span>
            </li>
          )
        })
      }
    </FavoritesWrapper>
  );
};

const mapStateToProps = ({favorites, settings}) => ({settings, favorites});

export default connect(mapStateToProps, {getCurrentWeather, getFiveDaysOfDaily})(withRouter(Favorites));