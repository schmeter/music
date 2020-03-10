import { connect } from 'react-redux';

import PageEvent from './PageEvent';
import { getEvents } from '../../../state/selectors/event';

const mapStateToProps = state => ({
    events: getEvents(state),
});

export default connect(mapStateToProps, null)(PageEvent);
