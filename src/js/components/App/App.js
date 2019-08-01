import React from 'react';
import PropTypes from 'prop-types';
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
import i18n from '../../services/i18n';
import { getUrl } from '../../services/navigation';
import { fetchJSON } from '../../util/fetch';

class App extends React.Component {
    componentDidMount() {
        const { setLoggedIn, requestAudioLibrary } = this.props;

        setLoggedIn();
        requestAudioLibrary();

        fetchJSON(`/version.json?${new Date().getTime()}`, true)
            .then(data => {
                if (process.env.NODE_ENV === 'production') {
                    const searchTime = window.location.search.substr(1);

                    if (searchTime !== String(data.time) && app.time < data.time) {
                        if (window.confirm(i18n(`app_update_available`))) {
                            window.location.href = `/?${data.time}`;
                        }
                    }
                }
            });
    }

    componentDidUpdate(lastProps) {
        const { requestAudioLibrary, isLoggedIn } = this.props;

        if (lastProps.isLoggedIn !== isLoggedIn) {
            requestAudioLibrary();
        }
    }

    render() {
        return (
            <>
                <Header />
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
                <Layer id="info">
                    <Info />
                </Layer>
                <Screensaver />
                <Player />
                <Curtains />
            </>
        );
    }
}

App.propTypes = {
    setLoggedIn: PropTypes.func.isRequired,
    requestAudioLibrary: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
};

export default App;
