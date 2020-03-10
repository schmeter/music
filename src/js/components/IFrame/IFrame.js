import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const IFrame = ({
    className,
    src,
    onLoad,
}) => {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = () => {
        setLoaded(true);
        onLoad && onLoad();
    };

    return (
        <div
            className={classNames(
                'iframe-wrapper',
                className,
            )}>
            <div className="ratio-setter"></div>
            <div className="spinner">
                <Icon id="cog" spin />
            </div>
            <iframe
                className={classNames(
                    'iframe',
                    !loaded && 'invisible',
                )}
                src={src}
                onLoad={handleLoad}
            ></iframe>
        </div>
    );
};

IFrame.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    onLoad: PropTypes.func,
};

export default IFrame;
