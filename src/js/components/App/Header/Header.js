import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../Link';
import Icon from '../../Icon';
import i18n from '../../../services/i18n';
import { getUrl } from '../../../services/navigation';

const Header = ({ openLayer }) => {
    const handleClickInfo = () => {
        openLayer('info');
    };

    const handleClickMenu = () => {
        openLayer('menu');
    };

    return (
        <header className="main-header">
            <h1 className="main-headline">
                <Link to={getUrl('audio')}>
                    {i18n('app_title')}
                </Link>
            </h1>
            <button
                className="button header-button menu-button"
                onClick={handleClickMenu}
            >
                <Icon id="bars" />
            </button>
            <button
                className="button header-button info-button"
                onClick={handleClickInfo}
            >
                <Icon id="info-circle" />
            </button>
        </header>
    );
};

Header.propTypes = {
    openLayer: PropTypes.func.isRequired,
};

export default Header;
