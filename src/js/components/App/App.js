import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import {
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
import Menu from './Menu';
import Player from './Player';
import { getUrlRaw } from '../../services/navigation';
import configApp from '../../../config/app.json';

const App = ({
    isLoggedIn,
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
                <Route exact path={getUrlRaw('index')}>
                    <PageAudio />
                </Route>
                <Route exact path={getUrlRaw('audio')}>
                    <PageAudio />
                </Route>
                <Route exact path={getUrlRaw('video')}>
                    <PageVideo />
                </Route>
                <Route exact path={getUrlRaw('event')}>
                    <PageEvent />
                </Route>
                <Route exact path={getUrlRaw('tools', {})}>
                    <PageTools />
                </Route>
                <Route exact path={getUrlRaw('settings')}>
                    <PageSettings />
                </Route>
                <Route path={getUrlRaw('404')}>
                    <Page404 />
                </Route>
            </Switch>
            <Layer id="menu">
                <Menu />
            </Layer>
            <Layer id="info">
                <Info />
            </Layer>
            <Player config={configApp.player} />
        </Screensaver>
    );
};

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    setLoggedIn: PropTypes.func.isRequired,
    requestMediaLibrary: PropTypes.func.isRequired,
    requestUpdate: PropTypes.func.isRequired,
};

export default App;
