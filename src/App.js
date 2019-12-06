import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './store';
import {getCurrentWeather, getFiveDaysOfDaily, getCityDetailsByGeoposition} from "./actions/cityWeather";
import Modal from 'react-modal';

import {AppWrapper} from "./scss/styled-components/App";
import NavBar from './components/Navbar';
import Main from './components/Main';
import Favorites from './components/Favorites';

import './App.css';
import './scss/main.scss';

Modal.setAppElement('#root');

const telAvivData = {
  Key: "215854",
  LocalizedName: "Tel Aviv"
};

function App() {
  useEffect(() => {

    if (!navigator.geolocation) {
      // "Geolocation is not supported by this browser";
    } else {
      navigator.permissions &&
      navigator.permissions.query({name: 'geolocation'}).then(function (PermissionStatus) {
        if ('granted' === PermissionStatus.state || 'prompt' === PermissionStatus.state) {
          navigator.geolocation.getCurrentPosition(positions => {
            const coords = `${positions.coords.latitude},${positions.coords.longitude}`;
            store.dispatch(getCityDetailsByGeoposition(coords));
          })
        } else {
          // "Geolocation Permissions Denied";
          const cityKey = parseInt(telAvivData.Key);
          store.dispatch(getCurrentWeather(cityKey, telAvivData));
          store.dispatch(getFiveDaysOfDaily(cityKey));
        }
      })
    }

  }, []);

  return (
    <Provider store={store}>
      <Router>
        <AppWrapper>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/Vladimir-Shtofmakher-3-12-19" component={Main}/>
              <Route exact path="/Vladimir-Shtofmakher-3-12-19/favorites" component={Favorites}/>
            </Switch>
          </div>
        </AppWrapper>
      </Router>
    </Provider>
  );
}

export default App;