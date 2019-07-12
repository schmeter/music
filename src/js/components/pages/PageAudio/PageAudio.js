import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../Link';
import Page from '../../Page';
import { Page404 } from '../';
import AlbumList from './AlbumList';
import { getUrl } from '../../../services/navigation';
import { joinTitleParts, getTitle } from '../../../services/meta';

class PageAudio extends React.Component {
    getTitle() {
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

        return getTitle(joinTitleParts(titleParts));
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
                title={this.getTitle()}
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
    getAlbum: PropTypes.func.isRequired
};

export default PageAudio;
