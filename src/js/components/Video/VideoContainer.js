import { connect } from 'react-redux';

import Video from './Video';
import { isPlaying } from '../../state/selectors/audio';
import { togglePlayAction } from '../../state/actions/audio';

export const mapDispatchToProps = dispatch => ({
    togglePlay: () => dispatch(togglePlayAction()),
});

const mapStateToProps = state => ({
    isPlaying: isPlaying(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Video);
