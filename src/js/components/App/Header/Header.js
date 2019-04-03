import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import Link from '../../Link';
import Icon from '../../Icon';

import i18n from '../../../services/i18n';
import { getUrl } from '../../../services/navigation';


class Header extends React.Component {
    @autobind
    handleClickLink() {
        const { openLayer } = this.props;
        openLayer('info');
    }

    render() {
        return (
            <header className="header">
                <h1>
                    <Link to={getUrl('index')}>
                        {i18n(`app_title`)}
                    </Link>
                </h1>
                <Link
                    className="header-button home-button"
                    to={getUrl('index')}
                >
                    <Icon id="chevron-circle-left" />
                </Link>
                <button
                    className="header-button info-button"
                    onClick={this.handleClickLink}
                >
                    <Icon id="info-circle" />
                </button>
            </header>
        );
    }
}

Header.propTypes = {
    openLayer: PropTypes.func.isRequired
};

export default Header;
