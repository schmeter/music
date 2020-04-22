import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Link from '../../../components/Link';
import TrackList from '../TrackList';
import AlbumCover from '../AlbumCover';
import { getUrl } from '../../../services/navigation';

const AlbumList = ({
    albums,
    selectedAlbum,
    selectedArtist,
    activeTrack,
}) => {
    const selectedArtistId = selectedArtist && selectedArtist.id;
    const selectedAlbumId = selectedAlbum && selectedAlbum.id;
    const albumsFiltered = albums.filter(album =>
        (!selectedAlbumId || selectedAlbumId === album.id)
            &&
            (!selectedArtistId || selectedArtistId === album.artist.id),
    );

    return (
        <div
            className={classNames(
                'albums',
                !!selectedAlbumId && 'album-selected',
                !!selectedArtistId && 'artist-selected',
            )}
        >
            {albumsFiltered.map(album => {
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

                return visible && (
                    <div
                        key={album.artist.id + album.id}
                        className={classNames(
                            'album',
                            playing && 'album-playing',
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
                            {selectedAlbumId && (
                                <TrackList tracks={album.tracks} />
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

AlbumList.propTypes = {
    albums: PropTypes.array.isRequired,
    selectedAlbum: PropTypes.object,
    selectedArtist: PropTypes.object,
    activeTrack: PropTypes.object,
};

export default AlbumList;
