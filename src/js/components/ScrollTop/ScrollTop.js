import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { scrollTop } from '../../util/screen';

class ScrollTop extends React.Component {
    componentDidUpdate(lastProps) {
        const { location, target, onReRender } = this.props;
        const { location: lastLocation } = lastProps;
        const shouldScrollTop = (typeof onReRender === 'boolean' && onReRender)
            || lastLocation.pathname !== location.pathname;

        if (shouldScrollTop) {
            scrollTop(target);
        }
    }

    render() {
        const { children } = this.props;

        return React.Children.only(children);
    }
}

ScrollTop.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    children: PropTypes.node.isRequired,
    target: PropTypes.string.isRequired,
    onReRender: PropTypes.bool
};

export default withRouter(ScrollTop);
