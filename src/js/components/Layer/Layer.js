import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';
import i18n from '../../services/i18n';

class Layer extends React.Component {
    render() {
        const { className, id, activeId, closeLayers, children } = this.props;

        return (
            <div
                className={classNames('layer', `layer-${className || id}`, {
                    closed: activeId !== id,
                })}
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
    }
}

Layer.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    activeId: PropTypes.string.isRequired,
    closeLayers: PropTypes.func.isRequired,
};

export default Layer;
