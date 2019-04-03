import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../Link';
import Page from '../../Page';
import { Page404 } from '../';
import AlbumList from './AlbumList';

import { getUrl } from '../../../services/navigation';
import { joinTitleParts, getTitle } from '../../../services/meta';
import { getAlbum, getArtist } from '../../../services/audio';


class PageAudio extends React.Component {
    getTitle() {
        const titleParts = [];
        const { library, match } = this.props;
        if (library) {
            const { artistId, albumId } = match.params;
            const selectedArtist = getArtist(library, artistId);
            const selectedAlbum = getAlbum(library, artistId, albumId);
            if (selectedArtist) {
                titleParts.push(selectedArtist.title);
            }
            if (selectedAlbum) {
                titleParts.push(selectedAlbum.title);
            }
        }
        return getTitle(joinTitleParts(titleParts));
    }

    render() {
        const { library, match } = this.props;
        if (!library) {
            return null;
        }
        const { artistId, albumId } = match.params;
        const selectedArtist = getArtist(library, artistId);
        const selectedAlbum = getAlbum(library, artistId, albumId);
        const validParams = (artistId ? selectedArtist : true)
            && (albumId ? selectedAlbum : true);
        return !validParams ? <Page404 /> : (
            <Page
                id="audio"
                title={this.getTitle()}
                useBaseClass={false}
            >
                <AlbumList
                    albumList={library.albums}
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
    library: PropTypes.object,
    match: PropTypes.object.isRequired
};

export default PageAudio;
