import { connect } from 'react-redux';

import PageFeatures from './PageFeatures';
import { getAlbums } from '../../state/selectors/audio';
import { getVideos } from '../../state/selectors/video';
import { getEvents } from '../../state/selectors/event';

const mapStateToProps = state => ({
    albums: getAlbums(state),
    videos: getVideos(state),
    events: getEvents(state),
});

export default connect(mapStateToProps, null)(PageFeatures);
