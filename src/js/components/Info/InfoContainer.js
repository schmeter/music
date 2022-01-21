import { connect } from 'react-redux';

import Info from './Info';
import { closeLayersAction } from '../../state/actions/layer';
import { getActiveTrack } from '../../state/selectors/audio';

export const mapDispatchToProps = dispatch => ({
  closeLayers: () => dispatch(closeLayersAction()),
});

export const mapStateToProps = state => ({
  activeTrack: getActiveTrack(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Info);
