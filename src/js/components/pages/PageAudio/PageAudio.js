import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { Page404 } from '../';
import Page from '../../Page';
import Link from '../../Link';
import AlbumList from './AlbumList';
import { getUrl } from '../../../services/navigation';
import { joinTitleParts, setTitle } from '../../../services/meta';

const PageAudio = ({ albums, getArtist, getAlbum }) => {
    const { artistId, albumId } = useParams();
    const selectedArtist = getArtist(artistId);
    const selectedAlbum = getAlbum(artistId, albumId);

    useEffect(() => {
        const titleParts = [];

        if (selectedArtist) {
            titleParts.push(selectedArtist.title);
        }
        if (selectedAlbum) {
            titleParts.push(selectedAlbum.title);
        }

        setTitle(joinTitleParts(titleParts));
    }, [selectedArtist, selectedAlbum]);

    const validParams = (artistId ? selectedArtist : true)
            && (albumId ? selectedAlbum : true);

    return !validParams ? <Page404 /> : (
        <Page
            id="audio"
            useBaseClass={false}
        >
            <AlbumList
                albumList={albums}
                selectedArtist={selectedArtist}
                selectedAlbum={selectedAlbum}
            />
            <div className="center secret">
                <Link to={getUrl('settings')}>.</Link>
            </div>
        </Page>
    );
};

PageAudio.propTypes = {
    albums: PropTypes.array.isRequired,
    getArtist: PropTypes.func.isRequired,
    getAlbum: PropTypes.func.isRequired,
};

export default PageAudio;
