import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class TransitionItem extends React.Component {
    render() {
        const { children } = this.props;
        const timeout = 300;
        const items = React.Children.toArray(children).map((item, index) => (
            <CSSTransition
                key={index}
                // in
                appear
                classNames="fade"
                timeout={timeout}
            >
                <div className="transition-wrapper">
                    {item}
                </div>
            </CSSTransition>
        ));

        return <TransitionGroup>{items}</TransitionGroup>;
    }
}

TransitionItem.propTypes = {
    children: PropTypes.node.isRequired
};

export default TransitionItem;
