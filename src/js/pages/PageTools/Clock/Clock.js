import React, { useState, useEffect, useCallback, useRef } from 'react';
import { format } from 'date-fns';

const SECOND = 1000;

const Clock = () => {
  const timer = useRef();
  const isMounted = useRef(false);
  const [dateTime, setDateTime] = useState(new Date());

  // https://stackoverflow.com/questions/6951727/setinterval-not-working-properly-on-chrome
  const setTimer = useCallback((callback = () => {}) => {
    clearTimeout(timer.current);
    if (isMounted.current) {
      timer.current = setTimeout(callback, SECOND - (dateTime.getTime() % SECOND));
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
    isMounted.current = true;
    setTimer(updateDateTime);

    return () => {
      isMounted.current = false;
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
