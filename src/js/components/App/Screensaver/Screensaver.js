import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import classNames from 'classnames';

import { isTouch } from '../../../util/screen';
import configApp from '../../../../config/app.json';

class Screensaver extends React.Component {
    state = {
        active: false,
    };

    timer = null;

    componentDidMount() {
        document.addEventListener('keydown', this.captureKeys);

        document.addEventListener('mouseleave', () => {
            this.startScreenSaver();
        });

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

        return !isTouch() && configApp.screensaver.active && isPlaying;
    }

    startScreenSaver() {
        if (this.screenSaverAllowed()) {
            this.setState({
                active: true,
            });
        }
    }

    resetScreenSaver(timer) {
        this.setState({
            active: false,
        });
        clearTimeout(timer);
        return setTimeout(() => {
            this.startScreenSaver();
        }, configApp.screensaver.timeout * 1000);
    }

    render() {
        const { children } = this.props;
        const { active } = this.state;

        return (
            <div
                className={classNames(
                    'screensaver',
                    active && 'active'
                )}
            >
                {children}
            </div>
        );
    }
}

Screensaver.propTypes = {
    children: PropTypes.node.isRequired,
    isPlaying: PropTypes.bool.isRequired,
};

export default Screensaver;
