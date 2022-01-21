import React from 'react';
import PropTypes from 'prop-types';

import Event from './Event';
import Page from '../Page';
import { getEventId } from '../../services/event';

const PageEvent = ({
  events,
}) => {
  const eventsSorted = events.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else if (a.date > b.date) {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <Page id="event">
      {eventsSorted.map(event => {
        return !event.hidden && (
          <Event
            key={getEventId(event)}
            event={event}
          />
        );
      })}
    </Page>
  );
};

PageEvent.propTypes = {
  events: PropTypes.array.isRequired,
};

export default PageEvent;
