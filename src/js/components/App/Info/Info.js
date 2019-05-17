import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../Image';
import Link from '../../Link';
import ScrollTop from '../../ScrollTop';
import i18n from '../../../services/i18n';
import { getUrl } from '../../../services/navigation';

const infos = [
    { id: 'title' },
    { id: 'album', link: 'audio:artistId:albumId' },
    { id: 'artist', link: 'audio:artistId' }
];

const Info = ({ activeTrack, closeLayers }) => {
    return !activeTrack ? null : (
        <ScrollTop target=".layer-content">
            <div className="layer-content">
                {activeTrack.lyrics ? (
                    <div
                        className="lyrics"
                        dangerouslySetInnerHTML={{ __html: activeTrack.lyrics }}
                    />
                ) : null}
                <ul className="table">
                    {infos.map((item) => !activeTrack.tag[item.id] ? null : (
                        <li
                            key={item.id}
                            className="table-row"
                        >
                            <span className="table-cell text-left bold">
                                {i18n(`layer_info_${item.id}`)}:
                            </span>
                            <span className="table-cell text-left">
                                {item.link ? (
                                    <Link
                                        to={getUrl(item.link, {
                                            artistId: activeTrack.artist.id,
                                            albumId: activeTrack.album.id
                                        })}
                                        onClick={closeLayers}
                                    >
                                        {activeTrack.tag[item.id]}
                                    </Link>
                                ) : activeTrack.tag[item.id]}
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="cover">
                    <Link
                        to={getUrl(infos.find((item) => item.id === 'album').link, {
                            artistId: activeTrack.artist.id,
                            albumId: activeTrack.album.id
                        })}
                        onClick={closeLayers}
                    >
                        <Image
                            src={activeTrack.imgPath}
                            alt={activeTrack.album.title}
                        />
                    </Link>
                </div>
                <audio
                    className="spacer"
                    controls
                />
            </div>
        </ScrollTop>
    );
};

Info.propTypes = {
    activeTrack: PropTypes.object,
    closeLayers: PropTypes.func.isRequired
};

export default Info;
