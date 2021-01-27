import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { Page404 } from '../';
import Page from '../../components/Page';
import AlbumList from './AlbumList';
import { joinTitleParts, setTitle } from '../../services/meta';

const PageAudio = ({
    getArtist,
    getAlbum,
}) => {
    const { artistId, albumId } = useParams();
    const selectedArtist = getArtist(artistId);
    const selectedAlbum = getAlbum(artistId, albumId);
    const validParams = (!artistId || selectedArtist) && (!albumId || selectedAlbum);

    useEffect(() => {
        const titleParts = [];

        if (selectedArtist) {
            titleParts.push(selectedArtist.title);
        }
        if (selectedAlbum) {
            titleParts.push(selectedAlbum.title);
        }

        setTitle(joinTitleParts(titleParts));
    }, [
        selectedArtist,
        selectedAlbum,
    ]);

    return !validParams ? <Page404 /> : (
        <Page
            id="audio"
            useBaseClass={false}
        >
            <AlbumList
                selectedArtist={selectedArtist}
                selectedAlbum={selectedAlbum}
            />
        </Page>
    );
};

PageAudio.propTypes = {
    getArtist: PropTypes.func.isRequired,
    getAlbum: PropTypes.func.isRequired,
};

export default PageAudio;
