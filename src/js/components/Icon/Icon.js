import React from 'react';
import PropTypes from 'prop-types';

class Icon extends React.Component {
    render() {
        const { id } = this.props;
        return <i className={`fa-${id} fa`} />;
    }
}

Icon.propTypes = {
    id: PropTypes.string.isRequired
};

export default Icon;
