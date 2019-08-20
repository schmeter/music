import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../Page';
import i18n from '../../../services/i18n';

class Page404 extends React.Component {
    render() {
        const { activeTrack } = this.props;

        return (
            <Page id="404">
                <h2 className="headline">{i18n(`page_404_title`)}</h2>
                <div
                    className="album-cover"
                    style={activeTrack && activeTrack.imgPath ? {
                        backgroundImage: `url("${activeTrack.imgPath}")`,
                    } : null}
                />
            </Page>
        );
    }
}

Page404.propTypes = {
    activeTrack: PropTypes.object,
};

export default Page404;
