import { connect } from 'react-redux';

import Header from './Header';

import { openLayerAction } from '../../../state/actions/layer';


export const mapDispatchToProps = (dispatch) => ({
    openLayer: (id) => dispatch(openLayerAction(id))
});

export default connect(null, mapDispatchToProps)(Header);
