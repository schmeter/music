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
    setLoggedIn,
    requestMediaLibrary,
    requestUpdate,
    isLoggedIn,
}) => {
    useEffect(() => {
        requestMediaLibrary();
        requestUpdate();
        setLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        requestMediaLibrary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isLoggedIn,
    ]);

    return (
        <>
            <Screensaver>
                <Header />
                <Switch>
                    <Route exact path={getUrl('index')}>
                        {configApp.indexRoute === 'audio' ? <PageAudio /> : <PageFeatures />}
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
                    <Menu />
                </Layer>
                <Layer id="info">
                    <Info />
                </Layer>
                <Player />
            </Screensaver>
            <Curtains />
        </>
    );
};

App.propTypes = {
    requestUpdate: PropTypes.func.isRequired,
    requestMediaLibrary: PropTypes.func.isRequired,
    setLoggedIn: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
};

export default App;
