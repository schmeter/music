import { saveActiveTrackPath } from '../services/audio';


export default (state = {}, action) => {
    switch (action.type) {
        case 'AUDIO_SET_LIBRARY':
            return {
                ...state,
                library: action.payload
            };
        case 'AUDIO_SET_TRACKS':
            return {
                ...state,
                tracks: action.payload
            };
        case 'AUDIO_SET_ACTIVE_INDEX':
            return {
                ...state,
                activeIndex: action.payload
            };
        case 'AUDIO_SET_ACTIVE_TRACK':
            saveActiveTrackPath(action.payload.path);
            return {
                ...state,
                activeTrack: action.payload
            };
        case 'AUDIO_SET_IS_PLAYING':
            return {
                ...state,
                isPlaying: action.payload
            };
        case 'AUDIO_TOGGLE_PLAY':
            return {
                ...state,
                playToggle: !state.playToggle
            };
        default:
            return state;
    }
};
