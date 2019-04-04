import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
    PageAudio,
    PageSettings,
    Page404
} from '../pages';
import Layer from '../Layer';
import Screensaver from './Screensaver';
import Header from './Header';
import Info from './Info';
import Player from './Player';
import Curtains from './Curtains';
import ScrollTop from '../ScrollTop';

import i18n from '../../services/i18n';
import { getUrl } from '../../services/navigation';

import { fetchJSON } from '../../util/fetch';


class App extends React.Component {
    componentDidMount() {
        fetchJSON(`/version.json?${new Date().getTime()}`, true)
            .then(data => {
                const searchTime = window.location.search.substr(1);
                if (searchTime !== String(data.time) && app.time < data.time) {
                    if (window.confirm(i18n(`app_update_available`))) {
                        window.location.href = `/?${data.time}`;
                    }
                }
            });
    }

    render() {
        return (
            <ScrollTop target="main">
                <Header />
                <main className="main">
                    <Switch>
                        <Route
                            exact
                            path={getUrl('index')}
                            component={PageAudio}
                        />
                        <Route
                            exact
                            path={getUrl('audio:artistId')}
                            component={PageAudio}
                        />
                        <Route
                            exact
                            path={getUrl('audio:artistId:albumId')}
                            component={PageAudio}
                        />
                        <Route
                            exact
                            path={getUrl('settings')}
                            component={PageSettings}
                        />
                        <Route
                            path={getUrl('404')}
                            component={Page404}
                        />
                    </Switch>
                    <audio
                        className="spacer"
                        controls
                    />
                </main>
                <Layer id="info">
                    <Info />
                    <audio
                        className="spacer"
                        controls
                    />
                </Layer>
                <Screensaver />
                <Player />
                <Curtains />
            </ScrollTop>
        );
    }
}

export default App;
