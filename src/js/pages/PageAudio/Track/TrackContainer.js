import { connect } from 'react-redux';

import Track from './Track';
import { getActiveTrack } from '../../../state/selectors/audio';

const mapStateToProps = state => ({
    activeTrack: getActiveTrack(state),
});

export default connect(mapStateToProps, null)(Track);
