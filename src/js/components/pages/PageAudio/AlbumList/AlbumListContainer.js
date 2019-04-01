import { connect } from 'react-redux';

import AlbumList from './AlbumList';


const mapStateToProps = (state) => ({
    activeTrack: state.audio.activeTrack
});

export default connect(mapStateToProps, null)(AlbumList);
