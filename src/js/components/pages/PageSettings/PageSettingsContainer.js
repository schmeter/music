import { connect } from 'react-redux';

import PageSettings from './PageSettings';

import { loginAction, logoutAction } from '../../../state/actions/auth';


const mapDispatchToProps = (dispatch) => ({
    login: (credentials, expiration) => dispatch(loginAction(credentials, expiration)),
    logout: () => dispatch(logoutAction())
});

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps, mapDispatchToProps)(PageSettings);
