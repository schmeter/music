import { connect } from 'react-redux';

import IconPlay from './IconPlay';

const mapStateToProps = (state) => ({
    isPlaying: state.audio.isPlaying
});

export default connect(mapStateToProps, null)(IconPlay);
