import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from '../../Image';
import Link from '../../Link';
import i18n from '../../../services/i18n';
import { getUrl } from '../../../services/navigation';
import { scrollTop } from '../../../util/screen';

const infos = [
    { id: 'title' },
    { id: 'album', link: 'audio:artistId:albumId' },
    { id: 'artist', link: 'audio:artistId' },
];
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

    return !activeTrack ? null : (
        <div
            className={classNames(
                'layer-content',
                scrollClass,
            )}
        >
            {activeTrack.lyrics && (
                <div
                    className="lyrics"
                    dangerouslySetInnerHTML={{ __html: activeTrack.lyrics }}
                />
            )}
            <ul className="table">
                {infos.map(info => activeTrack.tag[info.id] && (
                    <li
                        key={info.id}
                        className="table-row"
                    >
                        <span className="table-cell text-left bold">
                            {i18n(`layer_info_${info.id}`)}:
                        </span>
                        <span className="table-cell text-left">
                            {info.link ? (
                                <Link
                                    to={getUrl(info.link, {
                                        artistId: activeTrack.artist.id,
                                        albumId: activeTrack.album.id,
                                    })}
                                    onClick={closeLayers}
                                >
                                    {activeTrack.tag[info.id]}
                                </Link>
                            ) : activeTrack.tag[info.id]}
                        </span>
                    </li>
                ))}
            </ul>
            <Link
                className="cover"
                to={getUrl(infos.find(info => info.id === 'album').link, {
                    artistId: activeTrack.artist.id,
                    albumId: activeTrack.album.id,
                })}
                onClick={closeLayers}
            >
                <Image
                    src={activeTrack.album.imgPath}
                    alt={activeTrack.album.title}
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
