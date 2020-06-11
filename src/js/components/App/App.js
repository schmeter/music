import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import {
    PageFeatures,
    PageAudio,
    PageVideo,
    PageEvent,
    PageSettings,
    Page404,
} from '../../pages';
import Layer from '../Layer';
import Screensaver from './Screensaver';
import Header from './Header';
import Info from './Info';
import Menu from './Menu';
import Player from './Player';
import Curtains from './Curtains';
import { getUrl } from '../../services/navigation';
import configApp from '../../../config/app.json';

const App = ({
    isLoggedIn,
    setLoggedIn,
    requestMediaLibrary,
    requestUpdate,
}) => {
    useEffect(() => {
        setLoggedIn();
        requestMediaLibrary();
        requestUpdate();
    }, [
        setLoggedIn,
        requestMediaLibrary,
        requestUpdate,
    ]);

    useEffect(() => {
        requestMediaLibrary();
    }, [
        isLoggedIn,
        requestMediaLibrary,
    ]);

    return (
        <>
            <Screensaver config={configApp.screensaver} >
                <Header />
                <Switch>
                    <Route exact path={getUrl('index')}>
                        {configApp.indexRoute === 'audio' ? <PageAudio isIndexPage /> : <PageFeatures isIndexPage />}
                    </Route>
                    <Route exact path={getUrl('audio')}>
                        <PageAudio />
                    </Route>
                    <Route exact path={getUrl('audio:artistId')}>
                        <PageAudio />
                    </Route>
                    <Route exact path={getUrl('audio:artistId:albumId')}>
                        <PageAudio />
                    </Route>
                    <Route exact path={getUrl('video')}>
                        <PageVideo />
                    </Route>
                    <Route exact path={getUrl('event')}>
                        <PageEvent />
                    </Route>
                    <Route exact path={getUrl('settings')}>
                        <PageSettings />
                    </Route>
                    <Route path={getUrl('404')}>
                        <Page404 />
                    </Route>
                </Switch>
                <Layer id="menu">
                    <Menu indexRoute={configApp.indexRoute} />
                </Layer>
                <Layer id="info">
                    <Info />
                </Layer>
                <Player config={configApp.player} />
            </Screensaver>
            <Curtains />
        </>
    );
};

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    setLoggedIn: PropTypes.func.isRequired,
    requestMediaLibrary: PropTypes.func.isRequired,
    requestUpdate: PropTypes.func.isRequired,
};

export default App;
