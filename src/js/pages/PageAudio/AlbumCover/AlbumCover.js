import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Link from '../../../components/Link';
import Image from '../../../components/Image';

const AlbumCover = ({
  album,
  link,
}) => {
  const [showRecord, setShowRecord] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const getImgIndex = useCallback(() => {
    let newImgIndex = imgIndex;

    newImgIndex++;
    if (!album.imgItems || (newImgIndex > album.imgItems.length - 1)) {
      return 0;
    }
    return newImgIndex;
  }, [
    album.imgItems,
    imgIndex,
  ]);

  const getImgPath = useCallback(() => {
    return album.imgItems && album.imgFolder
      ? `${album.imgFolder}/${album.imgItems[imgIndex]}`
      : album.imgPath;
  }, [
    album,
    imgIndex,
  ]);

  const handleClickCover = useCallback(e => {
    e.preventDefault();

    setShowRecord(!showRecord);
    setImgIndex(!showRecord ? getImgIndex() : imgIndex);
  }, [
    getImgIndex,
    imgIndex,
    showRecord,
  ]);

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
  album: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
};

export default AlbumCover;
