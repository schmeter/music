import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ id }) => <i className={`fa-${id} fa`} />;

Icon.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Icon;
