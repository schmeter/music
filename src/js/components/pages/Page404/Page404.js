import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../Page';
import i18n from '../../../services/i18n';

const Page404 = ({ activeTrack }) => (
    <Page id="404">
        <h2 className="headline">{i18n('page_404_title')}</h2>
        <div
            className="album-cover"
            style={activeTrack && activeTrack.album.imgPath ? {
                backgroundImage: `url("${activeTrack.album.imgPath}")`,
            } : null}
        />
    </Page>
);

Page404.propTypes = {
    activeTrack: PropTypes.object,
};

export default Page404;
