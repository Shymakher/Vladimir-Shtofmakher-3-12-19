import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Spinner from './Spinner';
import {addToFavorites, removeFromFavorites} from "../actions/favorite";
import renderTemperature from '../utils/renderTemperature';
import {SelectedCityWrapper} from "../scss/styled-components/SelectedCity";

const CityWeather = ({currentWeather, fiveDaysOfDaily, favorites, addToFavorites, removeFromFavorites, settings}) => {
  if ((currentWeather.loading || fiveDaysOfDaily.loading) && (!currentWeather.error || !fiveDaysOfDaily.error)) {
    return <Spinner/>
  }

  if ((!currentWeather.loading || !fiveDaysOfDaily.loading) && (currentWeather.error || fiveDaysOfDaily.error)) {
    alert(currentWeather.error.Message);
    return <h1>{currentWeather.error.Message}</h1>
  }

  if (!currentWeather.currentWeather && fiveDaysOfDaily.fiveDaysOfDaily.length === 0) {
    return null;
  }

  const {LocalizedName, Temperature, WeatherText} = currentWeather.currentWeather;
  const selectedCity = currentWeather.currentWeather;
  const temperature = Temperature[settings.unitStatus];

  const isFavorite = favorites.favorites.find(item => item.Key === currentWeather.currentWeather.Key);

  const renderFiveDays = () => {
    return fiveDaysOfDaily.fiveDaysOfDaily.map((item, i) => {
      return (
        <li key={i} className="day">
          <span><Moment format='dddd'>{item.Date}</Moment></span>
          <span>min: {renderTemperature(item.Temperature.Minimum.Value, item.Temperature.Minimum.Unit, settings.unit)}</span>
          <span>max: {renderTemperature(item.Temperature.Maximum.Value, item.Temperature.Minimum.Unit, settings.unit)}</span>
        </li>
      )
    })
  };

  const handleOnClickFavotires = () => {
    if (!isFavorite) {
      addToFavorites(selectedCity)
    } else {
      removeFromFavorites(selectedCity.Key)
    }
  };

  const renderFavoriteButton = () => {
    const elem = [];
    let index = 0;
    if (isFavorite) {
      elem.push(
        <i className="fas fa-heart" key={++index}/>,
        <span key={++index}>Remove from Favorites</span>
      )
    } else {
      elem.push(
        <i className="far fa-heart" key={++index}/>,
        <span key={++index}>Add to Favorites</span>
      )
    }
    return elem;
  };

  return (
    <SelectedCityWrapper>
      <div className="general-info">
        <ul>
          <li><p className="city-name">{LocalizedName}</p></li>
          <li><p className="city-temperature">{temperature.Value} {temperature.Unit}</p></li>
        </ul>

        <div className="favorite">
          <span onClick={handleOnClickFavotires}>
            {renderFavoriteButton()}
          </span>
        </div>
      </div>

      <div className="weather-title">{WeatherText}</div>

      <ul className="five-days">
        {renderFiveDays()}
      </ul>
    </SelectedCityWrapper>
  );
};

CityWeather.propTypes = {
  currentWeather: PropTypes.object.isRequired
};

const mapStateToProps = ({currentWeather, fiveDaysOfDaily, favorites, settings}) => ({
  currentWeather, fiveDaysOfDaily, favorites, settings
});

export default connect(mapStateToProps, {addToFavorites, removeFromFavorites})(CityWeather);