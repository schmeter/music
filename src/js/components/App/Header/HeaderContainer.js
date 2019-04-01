import { connect } from 'react-redux';

import Header from './Header';

import { openLayerAction } from '../../../actions/layer';


export const mapDispatchToProps = (dispatch) => ({
    openLayer: (id) => dispatch(openLayerAction(id))
});

export default connect(null, mapDispatchToProps)(Header);
