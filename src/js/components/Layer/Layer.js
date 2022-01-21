import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';
import i18n from '../../helpers/i18n';

const Layer = ({
  id,
  children,
  className,
  position,
  activeId,
  closeLayers,
}) => (
  <div
    className={classNames(
      'layer',
      position,
      `layer-${className || id}`,
      activeId !== id && 'closed',
    )}
  >
    <header className="layer-header">
      <h2 className="layer-headline">
        {i18n(`layer_${id}_headline`)}
      </h2>
      <button
        className="header-button close-button right"
        onClick={closeLayers}
        tabIndex="-1"
      >
        <Icon id="close" />
      </button>
    </header>
    <div className="layer-content">
      {children}
    </div>
  </div>
);

Layer.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.string,
  activeId: PropTypes.string.isRequired,
  closeLayers: PropTypes.func.isRequired,
};

export default Layer;
