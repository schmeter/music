import React, { useState, useEffect, useCallback } from 'react';
import { format } from 'date-fns';

import i18n from '../../../services/i18n';

const SECOND = 1000;

let componentIsMounted = false;

let timer = null;

const Clock = () => {
    const [dateTime, setDateTime] = useState(new Date());

    // https://stackoverflow.com/questions/6951727/setinterval-not-working-properly-on-chrome
    const setTimer = useCallback((callback = () => {}) => {
        clearTimeout(timer);
        if (componentIsMounted) {
            timer = setTimeout(callback, SECOND - (dateTime.getTime() % SECOND));
        }
    }, [
        dateTime,
    ]);

    const updateDateTime = useCallback(() => {
        setDateTime(new Date());
        setTimer(updateDateTime);
    }, [
        setTimer,
    ]);

    useEffect(() => {
        componentIsMounted = true;
        setTimer(updateDateTime);

        return () => {
            componentIsMounted = false;
            setTimer();
        };
    }, [
        dateTime,
        setTimer,
        updateDateTime,
    ]);

    return (
        <div className="clock">
            <h2 className="headline">
                {i18n('page_tools_clock_title')}
            </h2>
            <br />
            <p className="center mono">
                {format(dateTime, 'HH:mm:ss')}
            </p>
            <br />
        </div>
    );
};

export default Clock;
