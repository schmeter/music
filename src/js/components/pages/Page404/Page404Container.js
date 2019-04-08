import { connect } from 'react-redux';

import Page404 from './Page404';

const mapStateToProps = (state) => ({
    activeTrack: state.audio.activeTrack
});

export default connect(mapStateToProps, null)(Page404);
