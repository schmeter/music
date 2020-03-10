import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({
    id,
    spin,
}) => (
    <i
        className={classNames(
            `fa-${id}`,
            'fa',
            spin && 'fa-spin',
        )}
    />
);

Icon.propTypes = {
    id: PropTypes.string.isRequired,
    spin: PropTypes.bool,
};

export default Icon;
