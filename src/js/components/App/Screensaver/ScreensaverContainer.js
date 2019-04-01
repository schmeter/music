import { connect } from 'react-redux';

import Screensaver from './Screensaver';


export const mapStateToProps = (state) => ({
    isPlaying: state.audio.isPlaying
});

export default connect(mapStateToProps, null)(Screensaver);
