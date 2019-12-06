import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {cnahgeTemparatureUnit} from "../actions/settings";
import {Switch, FormGroup, FormControlLabel} from '@material-ui/core';
import {useTheme} from "../theme/ThemeContext";
import {NavbarWrapper} from '../scss/styled-components/Navbar';

const Navbar = ({cnahgeTemparatureUnit, settings: {unitName, isMetric}}) => {
  const toggleChecked = () => {
    cnahgeTemparatureUnit();
  };

  const renderSwitch = () => {
    return (
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={!isMetric} onChange={toggleChecked} color='default'/>}
          label={unitName}
        />
      </FormGroup>
    )
  };

  const themeState = useTheme();

  return (
    <NavbarWrapper>
      <Link to="/">Herolo Weather Task</Link>

      <ul>
        <li><span onClick={themeState.toggle}>{themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>
        </li>
        <li>{renderSwitch()}</li>
        <li><NavLink exact={true} to='/Vladimir-Shtofmakher-3-12-19' activeClassName="is-active">Main</NavLink></li>
        <li><NavLink to='/Vladimir-Shtofmakher-3-12-19/favorites' activeClassName="is-active">Favorites</NavLink></li>
      </ul>
    </NavbarWrapper>
  );
};

const mapStateToProps = ({settings}) => ({settings});

export default connect(mapStateToProps, {cnahgeTemparatureUnit})(Navbar);