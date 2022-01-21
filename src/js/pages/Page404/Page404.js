import React from 'react';
import PropTypes from 'prop-types';

import Page from '../Page';
import i18n from '../../helpers/i18n';

const Page404 = ({
  activeTrack,
}) => (
  <Page id="404">
    <h2 className="headline bold">
      {i18n('page_404_title')}
    </h2>
    <div
      className="album-cover"
      style={activeTrack?.album?.imgPath && {
        backgroundImage: `url("${activeTrack.album.imgPath}")`,
      }}
    />
  </Page>
);

Page404.propTypes = {
  activeTrack: PropTypes.shape({
    album: PropTypes.shape({ imgPath: PropTypes.string }),
  }),
};

export default Page404;
