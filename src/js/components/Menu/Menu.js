import React from 'react';
import PropTypes from 'prop-types';

import Link from '../Link';
import Icon from '../Icon';
import i18n from '../../services/i18n';
import { getRouteWithParams } from '../../services/navigation';

const Menu = ({
  full,
  closeLayers,
}) => {
  const routes = [
    'audio',
    'video',
    'event',
    full && 'tools',
    full && 'settings',
  ].filter(route => !!route);

  return (
    <ul className="menu">
      {routes.map((route, index) => (
        <li
          key={route}
          className="link"
        >
          <Icon id="hand-o-right" />
          &nbsp;
          <Link
            to={getRouteWithParams(route)}
            onClick={closeLayers}
          >
            {i18n(`page_${route}_title`)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

Menu.propTypes = {
  full: PropTypes.bool,
  closeLayers: PropTypes.func.isRequired,
};

export default Menu;
