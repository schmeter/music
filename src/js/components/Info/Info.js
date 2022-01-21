import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';
import Link from '../Link';
import i18n from '../../helpers/i18n';
import { getRouteWithParams } from '../../helpers/navigation';
import { scrollTop } from '../../helpers/screen';

const Info = ({
  activeTrack,
  closeLayers,
}) => {
  useEffect(() => {
    scrollTop('.layer-info .layer-content');
  }, [
    activeTrack,
  ]);

  if (!activeTrack) {
    return null;
  }

  const { artist, album, lyrics, tag } = activeTrack;
  const infos = ['title', 'album', 'artist'];
  const links = {
    album: getRouteWithParams('audio', {
      artistId: artist.id,
      albumId: album.id,
    }),
  };

  return (
    <>
      {lyrics && (
        <div
          className="lyrics"
          dangerouslySetInnerHTML={{ __html: lyrics }}
        />
      )}
      <ul className="table">
        {infos.map(info => tag[info] && (
          <li
            key={info}
            className="table-row"
          >
            <span className="table-cell text-left bold">
              {i18n(`layer_info_${info}`)}:
            </span>
            <span className="table-cell text-left">
              {links[info] ? (
                <Link
                  to={links[info]}
                  onClick={closeLayers}
                >
                  {tag[info]}
                </Link>
              ) : tag[info]}
            </span>
          </li>
        ))}
      </ul>
      <Link
        className="cover"
        to={links.album}
        onClick={closeLayers}
      >
        <Image
          src={album.imgPath}
          alt={album.title}
        />
      </Link>
    </>
  );
};

Info.propTypes = {
  activeTrack: PropTypes.object,
  closeLayers: PropTypes.func.isRequired,
};

export default Info;
