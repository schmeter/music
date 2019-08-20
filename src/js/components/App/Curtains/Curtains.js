import React from 'react';
import classNames from 'classnames';
import autobind from 'autobind-decorator';

class Curtains extends React.Component {
    state = {
        curtainsOpen: true,
    };

    @autobind
    handleClickCurtains(e) {
        const { curtainsOpen } = this.state;

        e.preventDefault();
        this.setState({ curtainsOpen: !curtainsOpen });
    }

    render() {
        const { curtainsOpen } = this.state;

        return (
            <>
                {['left', 'right'].map(direction => (
                    <div
                        key={direction}
                        className={classNames(
                            'curtains',
                            direction,
                            { open: curtainsOpen }
                        )}
                        onClick={this.handleClickCurtains}
                    />
                ))}
            </>
        );
    }
}

export default Curtains;
