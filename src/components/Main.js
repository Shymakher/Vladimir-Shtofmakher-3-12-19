import React from 'react';

import SearchBar from '../components/SearchBar';
import CityWeather from './SelectedCity';

const Main = () => {
    return (
      <div className="content">
        <SearchBar/>
        <CityWeather/>
      </div>
    );
};

export default Main;