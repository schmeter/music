import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from '../../Image';
import Link from '../../Link';
import i18n from '../../../services/i18n';
import { getUrl } from '../../../services/navigation';
import { scrollTop } from '../../../util/screen';

const scrollClass = 'layer-content-info';

const Info = ({
    activeTrack,
    closeLayers,
}) => {
    useEffect(() => {
        scrollTop(`.${scrollClass}`);
    }, [
        activeTrack,
    ]);

    if (!activeTrack) {
        return null;
    }

    const { artist, album, lyrics, tag } = activeTrack;
    const infos = ['title', 'album', 'artist'];
    const links = {
        album: getUrl('audio', {
            artistId: artist.id,
            albumId: album.id,
        }),
        artist: getUrl('audio', {
            artistId: artist.id,
        }),
    };

    return (
        <div
            className={classNames(
                'layer-content',
                scrollClass,
            )}
        >
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
            <audio
                className="spacer"
                controls
            />
        </div>
    );
};

Info.propTypes = {
    activeTrack: PropTypes.object,
    closeLayers: PropTypes.func.isRequired,
};

export default Info;
