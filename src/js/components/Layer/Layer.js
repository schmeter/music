import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';
import i18n from '../../services/i18n';

const Layer = ({
    id,
    children,
    className,
    activeId,
    closeLayers,
}) => (
    <div
        className={classNames(
            'layer',
            `layer-${className || id}`,
            activeId !== id && 'closed',
        )}
    >
        <header className="layer-header">
            <h2 className="layer-headline">
                {i18n(`layer_${id}_headline`)}
            </h2>
            <button
                className="header-button close-button"
                onClick={closeLayers}
                tabIndex="-1"
            >
                <Icon id="close" />
            </button>
        </header>
        {children}
    </div>
);

Layer.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    activeId: PropTypes.string.isRequired,
    closeLayers: PropTypes.func.isRequired,
};

export default Layer;
