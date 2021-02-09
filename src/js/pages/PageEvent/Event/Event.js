import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

import Image from '../../../components/Image';
import Link from '../../../components/Link';
import { getApiUrl } from '../../../services/api';
import { getEventId } from '../../../services/event';

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
    }, [eventId, id]);

    return (
        <div
            ref={eventContainer}
            className="event"
        >
            <h2 className="date">
                {format(new Date(event.date), 'dd.MM.yyyy')}
                &nbsp;
                <Link to={link}>
                    {event.title}
                </Link>
            </h2>
            <h3>
                {event.artist.title}
            </h3>
            {event.imgPath && (
                <Link to={link}>
                    <Image
                        src={event.imgPath}
                        alt={event.title}
                    />
                </Link>
            )}
        </div>
    );
};

Event.propTypes = {
    event: PropTypes.object.isRequired,
};

export default Event;
