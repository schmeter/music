import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../Link';
import Icon from '../../Icon';
import i18n from '../../../services/i18n';
import { getUrl } from '../../../services/navigation';

const links = [
    'audio',
    'video',
    'event',
    'settings',
];

const Menu = ({ closeLayers }) => (
    <div className="layer-content">
        <ul>
            {links.map(link => (
                <li key={link} >
                    <div className="link">
                        <Icon id="hand-o-right" />
                                &nbsp;
                        <Link
                            to={getUrl(link)}
                            onClick={closeLayers}
                        >
                            {i18n(`page_${link}_title`)}
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

Menu.propTypes = {
    closeLayers: PropTypes.func.isRequired,
};

export default Menu;
