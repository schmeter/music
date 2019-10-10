import React from 'react';
import PropTypes from 'prop-types';

import { Page404 } from '../';
import Page from '../../Page';
import Link from '../../Link';
import AlbumList from './AlbumList';
import { getUrl } from '../../../services/navigation';
import { joinTitleParts, setTitle } from '../../../services/meta';

class PageAudio extends React.Component {
    componentDidMount() {
        this.setTitle();
    }

    componentDidUpdate() {
        this.setTitle();
    }

    setTitle() {
        const titleParts = [];
        const { match, getArtist, getAlbum } = this.props;

        const { artistId, albumId } = match.params;
        const selectedArtist = getArtist(artistId);

        const selectedAlbum = getAlbum(artistId, albumId);

        if (selectedArtist) {
            titleParts.push(selectedArtist.title);
        }
        if (selectedAlbum) {
            titleParts.push(selectedAlbum.title);
        }

        return setTitle(joinTitleParts(titleParts));
    }

    render() {
        const { albums, match, getArtist, getAlbum } = this.props;

        const { artistId, albumId } = match.params;
        const selectedArtist = getArtist(artistId);
        const selectedAlbum = getAlbum(artistId, albumId);
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
    }
}

PageAudio.propTypes = {
    albums: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
    getArtist: PropTypes.func.isRequired,
    getAlbum: PropTypes.func.isRequired,
};

export default PageAudio;
