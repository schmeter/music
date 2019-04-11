import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import Link from '../Link';

class File extends React.Component {
    @autobind
    handleClickLink(e) {
        const { onClickFile } = this.props;

        e.preventDefault();
        onClickFile();
    }

    render() {
        const { path, children } = this.props;

        return (
            <span className="file">
                <Link
                    to={path}
                    onClick={this.handleClickLink}
                >
                    {children}
                </Link>
            </span>
        );
    }
}

File.propTypes = {
    path: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClickFile: PropTypes.func.isRequired
};

export default File;
