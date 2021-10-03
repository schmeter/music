import { connect } from 'react-redux';

import PageTools from './PageTools';
import { closeLayersAction } from '../../state/actions/layer';

export const mapDispatchToProps = dispatch => ({
  closeLayers: () => dispatch(closeLayersAction()),
});

export default connect(null, mapDispatchToProps)(PageTools);
