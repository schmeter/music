import { connect } from 'react-redux';

import AlbumList from './AlbumList';
import { getActiveTrack, getAlbums } from '../../../state/selectors/audio';

const mapStateToProps = state => ({
  albums: getAlbums(state),
  activeTrack: getActiveTrack(state),
});

export default connect(mapStateToProps, null)(AlbumList);
