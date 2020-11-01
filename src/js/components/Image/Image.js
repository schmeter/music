import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import configApp from '../../../config/app.json';

class Image extends React.Component {
    image = React.createRef();

    state = {
        loaded: false,
        error: false,
    };

    handleLoad = () => {
        const { onLoad } = this.props;

        this.setState({ loaded: true });
        onLoad && onLoad();
    }

    handleError = () => {
        const { error } = this.state;
        const image = this.image.current;

        this.setState({ error: true }, () => {
            if (!error) {
                image.src = configApp.fallbackImage;
            }
        });
    }

    render() {
        const { loaded } = this.state;
        const { className, src, alt } = this.props;

        return (
            <img
                className={classNames(
                    'image',
                    className,
                    { invisible: !loaded },
                )}
                src={src}
                alt={alt}
                ref={this.image}
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
    onLoad: PropTypes.func,
};

export default Image;
