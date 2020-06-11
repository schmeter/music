import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import File from '../File';

const Mp3File = ({
    file,
    tracks,
    activeIndex,
    setActiveIndex,
    togglePlay,
}) => {
    const handleClickFile = useCallback(() => {
        const index = tracks.indexOf(file);

        if (index === activeIndex) {
            togglePlay();
        } else {
            setActiveIndex(index);
        }
    }, [
        file,
        tracks,
        activeIndex,
        setActiveIndex,
        togglePlay,
    ]);

    return (
        <File
            path={file.path}
            onClickFile={handleClickFile}
        >
            {file.tag.title}
        </File>
    );
};

Mp3File.propTypes = {
    file: PropTypes.object.isRequired,
    tracks: PropTypes.array.isRequired,
    activeIndex: PropTypes.number.isRequired,
    setActiveIndex: PropTypes.func.isRequired,
    togglePlay: PropTypes.func.isRequired,
};

export default Mp3File;
