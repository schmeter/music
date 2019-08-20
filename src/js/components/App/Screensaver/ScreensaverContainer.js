import { connect } from 'react-redux';

import Screensaver from './Screensaver';
import { isPlaying } from '../../../state/selectors/audio';

export const mapStateToProps = state => ({
    isPlaying: isPlaying(state),
});

export default connect(mapStateToProps, null)(Screensaver);
