import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../Link';
import Icon from '../../Icon';
import i18n from '../../../services/i18n';
import { getUrl } from '../../../services/navigation';

const Menu = ({
    indexRoute,
    closeLayers,
}) => {
    const routes = [
        'audio',
        'video',
        'event',
        'settings',
    ];

    return (
        <ul className="layer-content">
            {routes.map(route => (
                <li
                    key={route}
                    className="link"
                >
                    <Icon id="hand-o-right" />
                &nbsp;
                    <Link
                        to={getUrl(indexRoute === route ? 'index' : route)}
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
    indexRoute: PropTypes.string,
    closeLayers: PropTypes.func.isRequired,
};

export default Menu;
