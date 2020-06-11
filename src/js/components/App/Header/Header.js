import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Link from '../../Link';
import Icon from '../../Icon';
import i18n from '../../../services/i18n';
import { getUrl } from '../../../services/navigation';

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
                <Link to={getUrl('index')}>
                    {i18n('app_title')}
                </Link>
            </h1>
            <button
                className="button header-button menu-button"
                onClick={handleClickMenu}
            >
                <Icon id="magic" />
            </button>
            <button
                className="button header-button info-button"
                onClick={handleClickInfo}
            >
                <Icon id="microphone" />
            </button>
        </header>
    );
};

Header.propTypes = {
    openLayer: PropTypes.func.isRequired,
};

export default Header;
