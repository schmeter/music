import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route } from 'react-router-dom';

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

import { scrollTop } from '../../util/browser';
import { fetchJSON } from '../../util/fetch';


class App extends React.Component {
    componentDidMount() {
        fetchJSON(
            `/version.json?${new Date().getTime()}`,
            data => {
                const searchTime = window.location.search.substr(1);
                if (searchTime !== String(data.time) && app.time < data.time) {
                    if (window.confirm(i18n(`app_update_available`))) {
                        window.location.href = `/?${data.time}`;
                    }
                }
            }
        );
    }

    componentDidUpdate(lastProps) {
        const { location } = this.props;
        if (lastProps.location.pathname !== location.pathname) {
            scrollTop('main');
        }
    }

    render() {
        return (
            <div className="main-container">
                <main>
                    <Switch>
                        <Route
                            exact
                            path={getUrl('index')}
                            render={(props) => <PageAudio {...props} />}
                        />
                        <Route
                            exact
                            path={getUrl('audio:artistId')}
                            render={(props) => <PageAudio {...props} />}
                        />
                        <Route
                            exact
                            path={getUrl('audio:artistId:albumId')}
                            render={(props) => <PageAudio {...props} />}
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
                <Screensaver />
                <Header {...this.props} />
                <Layer id="info">
                    <Info {...this.props} />
                </Layer>
                <Player />
                <Curtains />
            </div>
        );
    }
}

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    })
};

export default withRouter(App);
