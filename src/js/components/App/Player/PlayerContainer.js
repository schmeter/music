import { connect } from 'react-redux';

import Player from './Player';
import {
    initAudioAction,
    setActiveIndexAction,
    saveActiveTrackAction,
    setIsPlayingAction
} from '../../../state/actions/audio';

export const mapDispatchToProps = (dispatch) => ({
    initAudio: () => dispatch(initAudioAction()),
    setIsPlaying: (isPlaying) => dispatch(setIsPlayingAction(isPlaying)),
    setActiveTrack: (activeTrack) => dispatch(saveActiveTrackAction(activeTrack)),
    setActiveIndex: (activeIndex) => dispatch(setActiveIndexAction(activeIndex))
});

export const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    tracks: state.audio.tracks,
    activeIndex: state.audio.activeIndex,
    playToggle: state.audio.playToggle,
    isPlaying: state.audio.isPlaying
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
