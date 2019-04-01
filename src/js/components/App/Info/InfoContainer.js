import { connect } from 'react-redux';

import Info from './Info';

import { closeLayersAction } from '../../../actions/layer';


export const mapDispatchToProps = (dispatch) => ({
    closeLayers: () => dispatch(closeLayersAction())
});

export const mapStateToProps = (state) => ({
    activeTrack: state.audio.activeTrack
});

export default connect(mapStateToProps, mapDispatchToProps)(Info);
