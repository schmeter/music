import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const isExternal = (path) => /^https?:\/\/.+/.test(path);

class Link extends React.Component {
    render() {
        const { className, to, onClick, children } = this.props;
        const props = {
            className,
            onClick
        };
        const content = children || to;
        return isExternal(to) ? (
            <a
                target="_blank"
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
    }
}

Link.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string
};

export default Link;
