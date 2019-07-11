import { connect } from 'react-redux';

import PageAudio from './PageAudio';
import { getLibrary } from '../../../state/selectors/audio';

const mapStateToProps = (state) => ({
    library: getLibrary(state)
});

export default connect(mapStateToProps, null)(PageAudio);
