import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const isExternal = path => /^https?:\/\/.+/.test(path) || /^\/\/.+/.test(path);

const Link = ({
    className,
    to,
    onClick,
    children,
}) => {
    const content = children || to;
    const props = {
        className,
        onClick,
    };

    return isExternal(to) ? (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={to}
            {...props}
        >
            {content}
        </a>
    ) : (
        <NavLink
            exact
            activeClassName="active"
            to={to}
            {...props}
        >
            {content}
        </NavLink>
    );
};

Link.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default Link;
