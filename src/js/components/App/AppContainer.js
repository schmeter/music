import { connect } from 'react-redux';

import App from './App';
import {
    requestAudioLibraryAction,
} from '../../state/actions/audio';
import { isLoggedIn } from '../../state/selectors/auth';
import { setLoggedInAction } from '../../state/actions/auth';
import { requestUpdateAction } from '../../state/actions/app';

export const mapDispatchToProps = dispatch => ({
    requestUpdate: () => dispatch(requestUpdateAction()),
    requestAudioLibrary: () => dispatch(requestAudioLibraryAction()),
    setLoggedIn: () => dispatch(setLoggedInAction()),
});

export const mapStateToProps = state => ({
    isLoggedIn: isLoggedIn(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
