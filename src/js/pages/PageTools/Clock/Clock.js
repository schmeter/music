import React, { useState, useEffect, useCallback } from 'react';
import { format } from 'date-fns';

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
      <p className="center mono">
        {format(dateTime, 'HH:mm:ss')}
      </p>
    </div>
  );
};

export default Clock;
