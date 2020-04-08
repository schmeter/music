import React from 'react';
import PropTypes from 'prop-types';

import Link from '../Link';

const File = ({
    path,
    children,
    onClickFile,
}) => {
    const handleClickLink = e => {
        e.preventDefault();
        onClickFile();
    };

    return (
        <Link
            className="file"
            to={path}
            onClick={handleClickLink}
        >
            {children}
        </Link>
    );
};

File.propTypes = {
    path: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClickFile: PropTypes.func.isRequired,
};

export default File;
