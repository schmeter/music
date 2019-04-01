import { connect } from 'react-redux';

import PageAudio from './PageAudio';


const mapStateToProps = (state) => ({
    library: state.audio.library
});

export default connect(mapStateToProps, null)(PageAudio);
