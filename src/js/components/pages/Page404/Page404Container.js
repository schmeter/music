import { connect } from 'react-redux';

import Page404 from './Page404';
import { getActiveTrack } from '../../../state/selectors/audio';

const mapStateToProps = state => ({
    activeTrack: getActiveTrack(state),
});

export default connect(mapStateToProps, null)(Page404);
