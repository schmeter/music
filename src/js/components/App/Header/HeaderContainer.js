import { connect } from 'react-redux';

import Header from './Header';
import { openLayerAction } from '../../../state/actions/layer';
import { canPlayMusic } from '../../../state/selectors/audio';

export const mapDispatchToProps = dispatch => ({
  openLayer: id => dispatch(openLayerAction(id)),
});

export const mapStateToProps = state => ({
  canPlayMusic: canPlayMusic(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
