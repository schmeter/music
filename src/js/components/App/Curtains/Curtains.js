import React from 'react';
import classNames from 'classnames';
import autobind from 'autobind-decorator';

class Curtains extends React.Component {
    state = {
        curtainsOpen: true
    };

    @autobind
    handleClickCurtains(e) {
        e.preventDefault();
        this.setState({ curtainsOpen: !this.state.curtainsOpen });
    }

    render() {
        return (
            <>
                {['left', 'right'].map(direction => (
                    <div
                        key={direction}
                        className={classNames(
                            'curtains',
                            direction,
                            { open: this.state.curtainsOpen }
                        )}
                        onClick={this.handleClickCurtains}
                    />
                ))}
            </>
        );
    }
}

export default Curtains;
