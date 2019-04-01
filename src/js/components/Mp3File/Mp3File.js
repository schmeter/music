import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import File from '../File';


class Mp3File extends React.Component {
    @autobind
    handleClickFile() {
        const { file, setActiveIndex, activeIndex, tracks, togglePlay } = this.props;
        const index = tracks.indexOf(file);
        if (index === activeIndex) {
            togglePlay();
        } else {
            setActiveIndex(index);
        }
    }

    render() {
        const { file } = this.props;
        return (
            <File
                path={file.path}
                onClickFile={this.handleClickFile}
            >
                {file.tag.title}
            </File>
        );
    }
}

Mp3File.propTypes = {
    file: PropTypes.object.isRequired,
    tracks: PropTypes.array.isRequired,
    activeIndex: PropTypes.number.isRequired,
    setActiveIndex: PropTypes.func.isRequired,
    togglePlay: PropTypes.func.isRequired
};

export default Mp3File;
