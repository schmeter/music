import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  PageMenu,
  PageAudio,
  PageVideo,
  PageEvent,
  PageTools,
  PageSettings,
  Page404,
} from './pages';
import Layer from './components/Layer';
import Screensaver from './components/Screensaver';
import Header from './components/Header';
import Info from './components/Info';
import Menu from './components/Menu';
import Player from './components/Player';
import Initializer from './components/Initializer';
import { getRoute } from './helpers/navigation';
import { config } from './helpers/aggregate';

const App = () => (
  <>
    <Initializer />
    <Screensaver config={{
      ...config.app.screensaver,
      active: config.app.screensaver.active && config.app.player.useAnalyser,
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
      <Player config={config.app.player} />
    </Screensaver>
  </>
);

export default App;
