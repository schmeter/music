import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Initializer = ({
  isLoggedIn,
  setLoggedIn,
  requestMediaLibrary,
  requestUpdate,
}) => {
  useEffect(() => {
    requestUpdate();
    setLoggedIn();
  }, [
    setLoggedIn,
    requestUpdate,
  ]);

  useEffect(() => {
    requestMediaLibrary();
  }, [
    isLoggedIn,
    requestMediaLibrary,
  ]);

  return null;
};

Initializer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
  requestMediaLibrary: PropTypes.func.isRequired,
  requestUpdate: PropTypes.func.isRequired,
};

export default Initializer;
