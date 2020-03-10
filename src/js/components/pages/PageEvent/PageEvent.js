import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import Page from '../../Page';
import Image from '../../Image';

const PageEvent = ({ events }) => {
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
            {eventsSorted.map(event => !event.hidden && (
                <div
                    key={`${event.date}${event.title}`}
                    className="event"
                >
                    <h2 className="date">
                        {format(new Date(event.date), 'dd.MM.yyyy')}
                        &nbsp;
                        {event.title}
                    </h2>
                    <h3>{event.artist.title}</h3>
                    {event.imgPath && (
                        <p>
                            <Image
                                src={event.imgPath}
                                alt={event.title}
                            />
                        </p>
                    )}
                </div>
            ))}
        </Page>
    );
};

PageEvent.propTypes = {
    events: PropTypes.array.isRequired,
};

export default PageEvent;
