import { connect } from 'react-redux';

import Player from './Player';
import {
    requestAudioDataAction,
    setActiveIndexAction,
    saveActiveTrackAction,
    setIsPlayingAction
} from '../../../state/actions/audio';
import { isLoggedIn } from '../../../state/selectors/auth';
import { getTracks, getActiveIndex, getPlayToggle, isPlaying } from '../../../state/selectors/audio';

export const mapDispatchToProps = (dispatch) => ({
    requestAudioData: () => dispatch(requestAudioDataAction()),
    setIsPlaying: (isPlaying) => dispatch(setIsPlayingAction(isPlaying)),
    setActiveTrack: (activeTrack) => dispatch(saveActiveTrackAction(activeTrack)),
    setActiveIndex: (activeIndex) => dispatch(setActiveIndexAction(activeIndex))
});

export const mapStateToProps = (state) => ({
    isLoggedIn: isLoggedIn(state),
    tracks: getTracks(state),
    activeIndex: getActiveIndex(state),
    playToggle: getPlayToggle(state),
    isPlaying: isPlaying(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
