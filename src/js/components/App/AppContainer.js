import { connect } from 'react-redux';

import App from './App';
import { requestMediaLibraryAction } from '../../state/actions/media';
import { isLoggedIn } from '../../state/selectors/auth';
import { canPlayMusic } from '../../state/selectors/audio';
import { setLoggedInAction } from '../../state/actions/auth';
import { requestUpdateAction } from '../../state/actions/app';

export const mapDispatchToProps = dispatch => ({
  requestUpdate: () => dispatch(requestUpdateAction()),
  requestMediaLibrary: () => dispatch(requestMediaLibraryAction()),
  setLoggedIn: () => dispatch(setLoggedInAction()),
});

export const mapStateToProps = state => ({
  isLoggedIn: isLoggedIn(state),
  canPlayMusic: canPlayMusic(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
