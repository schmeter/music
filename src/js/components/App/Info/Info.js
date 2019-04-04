import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../Image';
import Link from '../../Link';

import i18n from '../../../services/i18n';
import { getUrl } from '../../../services/navigation';

import { scrollTop } from '../../../util/screen';


const infos = [
    { id: 'title' },
    { id: 'artist', link: 'audio:artistId' },
    { id: 'album', link: 'audio:artistId:albumId' }
];

class Info extends React.Component {
    componentDidUpdate() {
        scrollTop('.layer-content-info');
    }

    render() {
        const { activeTrack, closeLayers } = this.props;
        return !activeTrack ? null : (
            <div className="layer-content layer-content-info">
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
        );
    }
}

Info.propTypes = {
    activeTrack: PropTypes.object,
    closeLayers: PropTypes.func.isRequired
};

export default Info;
