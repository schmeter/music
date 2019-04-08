import { connect } from 'react-redux';

import Layer from './Layer';

import { closeLayersAction } from '../../state/actions/layer';

export const mapDispatchToProps = (dispatch) => ({
    closeLayers: () => dispatch(closeLayersAction())
});

export const mapStateToProps = (state) => ({
    activeId: state.layer.activeId
});

export default connect(mapStateToProps, mapDispatchToProps)(Layer);
