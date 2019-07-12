import { connect } from 'react-redux';

import App from './App';
import {
    requestAudioLibraryAction
} from '../../state/actions/audio';
import { isLoggedIn } from '../../state/selectors/auth';

export const mapDispatchToProps = (dispatch) => ({
    requestAudioLibrary: () => dispatch(requestAudioLibraryAction())
});

export const mapStateToProps = (state) => ({
    isLoggedIn: isLoggedIn(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
