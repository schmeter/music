import { connect } from 'react-redux';

import Track from './Track';

const mapStateToProps = (state) => ({
    activeTrack: state.audio.activeTrack
});

export default connect(mapStateToProps, null)(Track);
