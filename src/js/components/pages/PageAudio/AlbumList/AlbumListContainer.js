import { connect } from 'react-redux';

import AlbumList from './AlbumList';
import { getActiveTrack } from '../../../../state/selectors/audio';

const mapStateToProps = state => ({
    activeTrack: getActiveTrack(state),
});

export default connect(mapStateToProps, null)(AlbumList);
