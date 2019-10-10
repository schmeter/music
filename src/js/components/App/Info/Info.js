import React from 'react';
import PropTypes from 'prop-types';

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

const scrollClass = 'layer-content';

class Info extends React.Component {
    componentDidUpdate() {
        scrollTop(`.${scrollClass}`);
    }

    render() {
        const { activeTrack, closeLayers } = this.props;

        return !activeTrack ? null : (
            <div className={scrollClass}>
                {activeTrack.lyrics ? (
                    <div
                        className="lyrics"
                        dangerouslySetInnerHTML={{ __html: activeTrack.lyrics }}
                    />
                ) : null}
                <ul className="table">
                    {infos.map(info => !activeTrack.tag[info.id] ? null : (
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
                <div className="cover">
                    <Link
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
                </div>
                <audio
                    className="spacer"
                    controls
                />
            </div>
        );
    }
}

Info.propTypes = {
    activeTrack: PropTypes.object,
    closeLayers: PropTypes.func.isRequired,
};

export default Info;
