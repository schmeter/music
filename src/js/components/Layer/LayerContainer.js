import { connect } from 'react-redux';

import Layer from './Layer';
import { closeLayersAction } from '../../state/actions/layer';
import { getActiveId } from '../../state/selectors/layer';

export const mapDispatchToProps = dispatch => ({
    closeLayers: () => dispatch(closeLayersAction()),
});

export const mapStateToProps = state => ({
    activeId: getActiveId(state),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layer);
