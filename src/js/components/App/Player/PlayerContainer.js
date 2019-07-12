import { connect } from 'react-redux';

import Player from './Player';
import {
    setActiveIndexAction,
    setIsPlayingAction,
    saveActiveTrackAction
} from '../../../state/actions/audio';

import {
    getTracks,
    getActiveIndex,
    getPlayToggle,
    isPlaying,
    getNextIndex
} from '../../../state/selectors/audio';

export const mapDispatchToProps = (dispatch) => ({
    setIsPlaying: (isPlaying) => dispatch(setIsPlayingAction(isPlaying)),
    setActiveIndex: (activeIndex) => dispatch(setActiveIndexAction(activeIndex)),
    saveActiveTrack: (track) => dispatch(saveActiveTrackAction(track))
});

export const mapStateToProps = (state) => ({
    tracks: getTracks(state),
    activeIndex: getActiveIndex(state),
    nextIndex: getNextIndex(state),
    playToggle: getPlayToggle(state),
    isPlaying: isPlaying(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
