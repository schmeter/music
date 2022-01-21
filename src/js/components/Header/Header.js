import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Link from '../Link';
import Icon from '../Icon';
import i18n from '../../helpers/i18n';
import { getRouteWithParams } from '../../helpers/navigation';

const Header = ({ openLayer }) => {
  const handleClickInfo = useCallback(() => {
    openLayer('info');
  }, [
    openLayer,
  ]);

  const handleClickMenu = useCallback(() => {
    openLayer('menu');
  }, [
    openLayer,
  ]);

  return (
    <header className="main-header">
      <h1 className="main-headline">
        <Link to={getRouteWithParams('index')}>
          {i18n('app_title')}
        </Link>
      </h1>
      <button
        className="button header-button menu-button left"
        onClick={handleClickMenu}
      >
        <Icon id="bars" />
      </button>
      <button
        className="button header-button info-button right"
        onClick={handleClickInfo}
      >
        <Icon id="heartbeat" />
      </button>
    </header>
  );
};

Header.propTypes = {
  openLayer: PropTypes.func.isRequired,
};

export default Header;
