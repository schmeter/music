import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import Page from '../../components/Page';
import Image from '../../components/Image';
import Link from '../../components/Link';
import { getApiUrl } from '../../services/api';

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
                const link = getApiUrl('googleRoute', {
                    from: '',
                    to: event.address || event.title,
                });

                return !event.hidden && (
                    <div
                        key={`${event.date}${event.title}`}
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
            })}
        </Page>
    );
};

PageEvent.propTypes = {
    events: PropTypes.array.isRequired,
};

export default PageEvent;
