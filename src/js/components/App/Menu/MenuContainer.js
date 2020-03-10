import { connect } from 'react-redux';

import Menu from './Menu';
import { closeLayersAction } from '../../../state/actions/layer';

export const mapDispatchToProps = dispatch => ({
    closeLayers: () => dispatch(closeLayersAction()),
});

export default connect(null, mapDispatchToProps)(Menu);
