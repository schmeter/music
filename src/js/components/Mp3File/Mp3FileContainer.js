import { connect } from 'react-redux';

import Mp3File from './Mp3File';
import { setActiveIndexAction, togglePlayAction } from '../../state/actions/audio';
import { getTracks, getActiveIndex } from '../../state/selectors/audio';

export const mapDispatchToProps = (dispatch) => ({
    setActiveIndex: (activeIndex) => dispatch(setActiveIndexAction(activeIndex)),
    togglePlay: () => dispatch(togglePlayAction())
});

export const mapStateToProps = (state) => ({
    tracks: getTracks(state),
    activeIndex: getActiveIndex(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Mp3File);
