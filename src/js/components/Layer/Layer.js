import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';
import Link from '../Link';

import i18n from '../../services/i18n';


class Layer extends React.Component {
    render() {
        const { className, id, activeId, closeLayers, children } = this.props;
        return (
            <div
                className={classNames(
                    'layer',
                    `layer-${className || id}`,
                    { closed: activeId !== id }
                )}
            >
                <h2 className="headline">{i18n(`layer_${id}_headline`)}</h2>
                <Link
                    className="button header-button close-button"
                    onClick={closeLayers}
                >
                    <Icon id="close" />
                </Link>
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
    closeLayers: PropTypes.func.isRequired
};

export default Layer;
