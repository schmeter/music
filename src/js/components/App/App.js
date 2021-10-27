import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import {
  PageMenu,
  PageAudio,
  PageVideo,
  PageEvent,
  PageTools,
  PageSettings,
  Page404,
} from '../../pages';
import Layer from '../Layer';
import Screensaver from './Screensaver';
import Header from './Header';
import Info from './Info';
import Menu from '../Menu';
import Player from './Player';
import { getRoute } from '../../services/navigation';
import configApp from '../../../config/app.json';

const App = ({
  isLoggedIn,
  canPlayMusic,
  setLoggedIn,
  requestMediaLibrary,
  requestUpdate,
}) => {
  useEffect(() => {
    requestUpdate();
    setLoggedIn();
  }, [
    setLoggedIn,
    requestUpdate,
  ]);

  useEffect(() => {
    requestMediaLibrary();
  }, [
    isLoggedIn,
    requestMediaLibrary,
  ]);

  return (
    <Screensaver config={{
      ...configApp.screensaver,
      active: configApp.screensaver.active && configApp.player.useAnalyser,
    }} >
      <Header />
      <Switch>
        <Route exact path={getRoute('index')}>
          <PageMenu />
        </Route>
        <Route exact path={getRoute('audio')}>
          <PageAudio />
        </Route>
        <Route exact path={getRoute('video')}>
          <PageVideo />
        </Route>
        <Route exact path={getRoute('event')}>
          <PageEvent />
        </Route>
        <Route exact path={getRoute('tools', {})}>
          <PageTools />
        </Route>
        <Route exact path={getRoute('settings')}>
          <PageSettings />
        </Route>
        <Route path={getRoute('404')}>
          <Page404 />
        </Route>
      </Switch>
      <Layer id="menu" position="left">
        <Menu full />
      </Layer>
      <Layer id="info" position="right">
        <Info />
      </Layer>
      {canPlayMusic && (
        <Player config={configApp.player} />
      )}
    </Screensaver>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  canPlayMusic: PropTypes.bool.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
  requestMediaLibrary: PropTypes.func.isRequired,
  requestUpdate: PropTypes.func.isRequired,
};

export default App;
