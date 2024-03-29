import { connect } from 'react-redux';

import PageAudio from './PageAudio';
import { getArtist, getAlbum } from '../../state/selectors/audio';

const mapStateToProps = state => ({
  getArtist: artistId => getArtist(state, artistId),
  getAlbum: (artistId, albumId) => getAlbum(state, artistId, albumId),
});

export default connect(mapStateToProps, null)(PageAudio);
