import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import classNames from 'classnames';

import { isTouch } from '../../../util/screen';

class Screensaver extends React.Component {
    state = {
        active: false,
    };

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
        const { config, isPlaying } = this.props;

        return !isTouch() && config.active && isPlaying;
    }

    startScreenSaver() {
        if (this.screenSaverAllowed()) {
            this.setState({
                active: true,
            });
        }
    }

    resetScreenSaver(timer) {
        const { config } = this.props;

        this.setState({
            active: false,
        });
        clearTimeout(timer);
        return setTimeout(() => {
            this.startScreenSaver();
        }, config.timeout * 1000);
    }

    render() {
        const { children } = this.props;
        const { active } = this.state;

        return (
            <div
                className={classNames(
                    'screensaver',
                    active && 'active',
                )}
            >
                {children}
            </div>
        );
    }
}

Screensaver.propTypes = {
    config: PropTypes.shape({
        timeout: PropTypes.number.isRequired,
        active: PropTypes.bool.isRequired,
    }).isRequired,
    children: PropTypes.node.isRequired,
    isPlaying: PropTypes.bool.isRequired,
};

export default Screensaver;
