import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import {
    PageAudio,
    PageSettings,
    Page404,
} from '../pages';
import Layer from '../Layer';
import Screensaver from './Screensaver';
import Header from './Header';
import Info from './Info';
import Player from './Player';
import Curtains from './Curtains';
import { getUrl } from '../../services/navigation';

class App extends React.Component {
    componentDidMount() {
        const { setLoggedIn, requestAudioLibrary, requestUpdate } = this.props;

        setLoggedIn();
        requestAudioLibrary();
        requestUpdate();
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
                <Screensaver>
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
                    <Player />
                </Screensaver>
                <Curtains />
            </>
        );
    }
}

App.propTypes = {
    requestUpdate: PropTypes.func.isRequired,
    setLoggedIn: PropTypes.func.isRequired,
    requestAudioLibrary: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
};

export default App;
