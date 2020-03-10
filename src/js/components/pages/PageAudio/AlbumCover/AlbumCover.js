import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Link from '../../../Link';
import Image from '../../../Image';

const AlbumCover = ({
    album,
    link,
}) => {
    const [showRecord, setShowRecord] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);

    const getImgIndex = () => {
        let newImgIndex = imgIndex;

        newImgIndex++;
        if (!album.imgItems || (newImgIndex > album.imgItems.length - 1)) {
            return 0;
        }
        return newImgIndex;
    };

    const getImgPath = () => {
        return album.imgItems && album.imgFolder
            ? `${album.imgFolder}/${album.imgItems[imgIndex]}`
            : album.imgPath;
    };

    const handleClickCover = e => {
        e.preventDefault();

        setShowRecord(!showRecord);
        setImgIndex(!showRecord ? getImgIndex() : imgIndex);
    };

    return (
        <Link
            className="album-cover"
            to={link}
            onClick={link ? null : handleClickCover}
        >
            {!link && (
                <Image
                    className={classNames(
                        'record',
                        showRecord && 'show',
                    )}
                    src={getImgPath()}
                    alt={album.title}
                />
            )}
            <Image
                className="cover"
                src={album.imgPath}
                alt={album.title}
            />
        </Link>
    );
};

AlbumCover.propTypes = {
    link: PropTypes.string.isRequired,
    album: PropTypes.object.isRequired,
};

export default AlbumCover;
