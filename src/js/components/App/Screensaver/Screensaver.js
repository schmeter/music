import React from 'react';
import PropTypes from 'prop-types';

import { isTouch } from '../../../util/browser';

import configApp from '../../../../data/app.json';
import autobind from 'autobind-decorator';


class Screensaver extends React.Component {
    timer = null;

    componentDidMount() {
        document.addEventListener('keydown', this.captureKeys);

        document.addEventListener('mousemove', () => {
            this.timer = this.resetScreenSaver(this.timer);
        });
    }

    @autobind
    captureKeys(e) {
        switch (e.keyCode) {
            case 37:
                break;
            case 39:
                break;
            default:
                this.timer = this.resetScreenSaver(this.timer);
        }
    }

    screenSaverAllowed() {
        const { isPlaying } = this.props;
        return !isTouch() && configApp.useScreensaver && isPlaying;
    }

    startScreenSaver() {
        if (this.screenSaverAllowed()) {
            document.body.classList.add('screensaver');
        }
    }

    resetScreenSaver(timer) {
        document.body.classList.remove('screensaver');
        clearTimeout(timer);
        return setTimeout(() => {
            this.startScreenSaver();
        }, 3 * 10000);
    }

    render() {
        const { isPlaying } = this.props;
        return <div className={isPlaying ? 'pause' : 'play'} />;
    }
}

Screensaver.propTypes = {
    isPlaying: PropTypes.bool.isRequired
};

export default Screensaver;
