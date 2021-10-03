import { connect } from 'react-redux';

import Watch from './Watch';
import { setCanPlayMusicAction } from '../../../state/actions/audio';

export const mapDispatchToProps = dispatch => ({
  setCanPlayMusic: hasPermission => dispatch(setCanPlayMusicAction(hasPermission)),
});

export default connect(null, mapDispatchToProps)(Watch);
