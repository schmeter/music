import { connect } from 'react-redux';

import PageSettings from './PageSettings';
import { loginAction, logoutAction } from '../../state/actions/auth';
import { isLoggedIn } from '../../state/selectors/auth';

const mapDispatchToProps = dispatch => ({
  login: (credentials, expiration) => dispatch(loginAction(credentials, expiration)),
  logout: () => dispatch(logoutAction()),
});

const mapStateToProps = state => ({
  isLoggedIn: isLoggedIn(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageSettings);
