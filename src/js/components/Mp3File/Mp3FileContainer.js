import { connect } from 'react-redux';

import Mp3File from './Mp3File';
import { setActiveIndexAction, togglePlayAction } from '../../state/actions/audio';

export const mapDispatchToProps = (dispatch) => ({
    setActiveIndex: (activeIndex) => dispatch(setActiveIndexAction(activeIndex)),
    togglePlay: () => dispatch(togglePlayAction())
});

export const mapStateToProps = (state) => ({
    tracks: state.audio.tracks,
    activeIndex: state.audio.activeIndex
});

export default connect(mapStateToProps, mapDispatchToProps)(Mp3File);
