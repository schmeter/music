import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import autobind from 'autobind-decorator';


const isExternal = (path) => /^https?:\/\/.+/.test(path);
const isEmpty = (path) => (!path || path === '#');
const isExternalOrEmpty = (path) => isExternal(path) || isEmpty(path);

class Link extends React.Component {
    @autobind
    handleClickLink(e) {
        const { to, onClick } = this.props;
        onClick && onClick(e);
        if (isExternalOrEmpty(to)) {
            !e.defaultPrevented && e.preventDefault();
            if (isExternal(to)) {
                // new window for full paths
                window.open(to);
            }
        }
    }

    render() {
        const { className, to, children } = this.props;
        return (
            <NavLink
                exact
                className={className}
                activeClassName={isExternalOrEmpty(to) ? '' : 'active'}
                to={to || ''}
                onClick={this.handleClickLink}
            >
                {children || to}
            </NavLink>
        );
    }
}

Link.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string
};

export default Link;
