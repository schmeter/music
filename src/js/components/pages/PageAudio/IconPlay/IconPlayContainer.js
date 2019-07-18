import { connect } from 'react-redux';

import IconPlay from './IconPlay';
import { isPlaying } from '../../../../state/selectors/audio';

const mapStateToProps = (state) => ({
    isPlaying: isPlaying(state)
});

export default connect(mapStateToProps, null)(IconPlay);
