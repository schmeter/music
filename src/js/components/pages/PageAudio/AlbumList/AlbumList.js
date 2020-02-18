import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Link from '../../../Link';
import TrackList from '../TrackList';
import AlbumCover from '../AlbumCover';
import { getUrl } from '../../../../services/navigation';

const AlbumList = ({
    albumList,
    selectedAlbum,
    selectedArtist,
    activeTrack,
}) => {
    const selectedArtistId = selectedArtist && selectedArtist.id;
    const selectedAlbumId = selectedAlbum && selectedAlbum.id;
    const albums = albumList.filter(album =>
        (!selectedAlbumId || selectedAlbumId === album.id)
            &&
            (!selectedArtistId || selectedArtistId === album.artist.id),
    );

    return (
        <div
            className={classNames(
                'albums',
                { 'album-selected': !!selectedAlbumId },
                { 'artist-selected': !!selectedArtistId },
            )}
        >
            {albums.map(album => {
                const playing = activeTrack
                    ? album.id === activeTrack.album.id
                    : false;
                const visible = playing
                        || !album.hidden
                        || album.id === selectedAlbumId;
                const albumLink = getUrl('audio:artistId:albumId', {
                    artistId: album.artist.id,
                    albumId: album.id,
                });
                const artistLink = getUrl('audio:artistId', {
                    artistId: album.artist.id,
                });

                return !visible ? null : (
                    <div
                        key={album.artist.id + album.id}
                        className={classNames(
                            'album',
                            { 'album-playing': playing },
                        )}
                    >
                        <AlbumCover
                            link={selectedAlbumId ? '' : albumLink}
                            album={album}
                        />
                        <div className="album-content">
                            <h3 className="album-title">
                                <Link to={albumLink}>
                                    {album.title}
                                </Link>
                            </h3>
                            <h3 className="artist-title">
                                <Link to={artistLink}>
                                    {album.artist.title}
                                </Link>
                            </h3>
                            {!selectedAlbumId ? null : (
                                <TrackList trackList={album.tracks} />
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
    selectedAlbum: PropTypes.object,
    selectedArtist: PropTypes.object,
    activeTrack: PropTypes.object,
};

export default AlbumList;
