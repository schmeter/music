import React from 'react';
import PropTypes from 'prop-types';

import { scrollTop } from '../../util/screen';

class ScrollTop extends React.Component {
    componentDidUpdate() {
        const { target } = this.props;

        scrollTop(target);
    }

    render() {
        const { children } = this.props;

        return children;
    }
}

ScrollTop.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    target: PropTypes.string.isRequired
};

export default ScrollTop;
