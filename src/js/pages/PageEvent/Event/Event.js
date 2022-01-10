import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

import Image from '../../../components/Image';
import Link from '../../../components/Link';
import Icon from '../../../components/Icon';
import { getApiUrl } from '../../../services/api';
import { getEventId } from '../../../services/event';
import i18n from '../../../services/i18n';

const Event = ({
  event,
}) => {
  const link = getApiUrl('googleRoute', {
    from: '',
    to: event.address || event.title,
  });
  const id = getEventId(event);
  const { eventId } = useParams();
  const eventContainer = useRef();

  useEffect(() => {
    if (eventId === id) {
      eventContainer?.current?.scrollIntoView?.();
    }
  }, [
    eventId,
    id,
  ]);

  return (
    <div
      ref={eventContainer}
      className="event"
    >
      <Link to={link}>
        {event.imgPath ? (
          <Image
            src={event.imgPath}
            alt={event.title}
          />
        ) : (
          <div className="no-image">
            <Icon id="calendar icon" />
          </div>
        )}
      </Link>
      <h2 className="date">
        <Link to={link}>
          {event.title}
        </Link>
      </h2>
      <h3 className="artist">
        {format(new Date(event.date), i18n('date_format'))}
        &nbsp;
        {event.artist.title}
      </h3>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.object.isRequired,
};

export default Event;
