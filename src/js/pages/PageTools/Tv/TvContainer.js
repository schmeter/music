import { connect } from 'react-redux';

import Tv from './Tv';
import { setCanPlayMusicAction } from '../../../state/actions/audio';

export const mapDispatchToProps = dispatch => ({
  setCanPlayMusic: hasPermission => dispatch(setCanPlayMusicAction(hasPermission)),
});

export default connect(null, mapDispatchToProps)(Tv);
