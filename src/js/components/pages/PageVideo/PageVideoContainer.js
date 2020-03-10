import { connect } from 'react-redux';

import PageVideo from './PageVideo';
import { getVideos } from '../../../state/selectors/video';

const mapStateToProps = state => ({
    videos: getVideos(state),
});

export default connect(mapStateToProps, null)(PageVideo);
