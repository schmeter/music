import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { Page404 } from '../';
import Page from '../../components/Page';
import AlbumList from './AlbumList';
import { joinTitleParts, setTitle } from '../../services/meta';
import i18n from '../../services/i18n';

const PageAudio = ({
    isIndexPage,
    getArtist,
    getAlbum,
}) => {
    const { artistId, albumId } = useParams();
    const selectedArtist = getArtist(artistId);
    const selectedAlbum = getAlbum(artistId, albumId);
    const validParams = (artistId ? selectedArtist : true)
            && (albumId ? selectedAlbum : true);

    useEffect(() => {
        const titleParts = isIndexPage
            ? []
            : [i18n('page_audio_title')];

        if (selectedArtist) {
            titleParts.push(selectedArtist.title);
        }
        if (selectedAlbum) {
            titleParts.push(selectedAlbum.title);
        }

        setTitle(joinTitleParts(titleParts));
    }, [
        isIndexPage,
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
    isIndexPage: PropTypes.bool,
    getArtist: PropTypes.func.isRequired,
    getAlbum: PropTypes.func.isRequired,
};

export default PageAudio;
