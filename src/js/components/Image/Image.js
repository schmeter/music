import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import autobind from 'autobind-decorator';

import configApp from '../../../data/app.json';


class Image extends React.Component {
    state = {
        loaded: false,
        error: false
    };

    @autobind
    handleLoad() {
        const { handleLoad } = this.props;
        this.setState({ loaded: true });
        handleLoad && handleLoad();
    }

    @autobind
    handleError() {
        const { error } = this.state;
        this.setState({ error: true }, () => {
            if (!error) {
                this.image.src = configApp.fallbackImage;
            }
        });
    }

    render() {
        const { loaded } = this.state;
        const { className, src, alt } = this.props;
        return (
            <img
                className={classNames(
                    className,
                    { invisible: !loaded }
                )}
                src={src}
                alt={alt}
                ref={(ref) => {
                    this.image = ref;
                }}
                onLoad={this.handleLoad}
                onError={this.handleError}
            />
        );
    }
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    handleLoad: PropTypes.func
};

export default Image;
