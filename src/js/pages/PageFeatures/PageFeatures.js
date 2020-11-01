import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import Page from '../../components/Page';
import Iframe from '../../components/Iframe';
import Link from '../../components/Link';
import Image from '../../components/Image';
import i18n from '../../services/i18n';
import { getUrl } from '../../services/navigation';
import { getApiUrl } from '../../services/api';
import { getRandom } from '../../util/math';
import { setTitle, joinTitleParts } from '../../services/meta';

const Page404 = ({
    isIndexPage,
    albums,
    videos,
    events,
}) => {
    useEffect(() => {
        const titleParts = isIndexPage
            ? []
            : [i18n('page_features_title')];

        setTitle(joinTitleParts(titleParts));
    });

    const renderEvent = useCallback(() => {
        const visibleEvents = events.filter(event => !event.hidden);
        const event = visibleEvents[0];

        if (!event) {
            return null;
        }

        const date = new Date(event.date);
        const now = new Date();
        const description = i18n(`page_features_event_${date >= now ? 'future' : 'past'}`);
        const link = getApiUrl('googleRoute', {
            from: '',
            to: event.address || event.title,
        });

        return (
            <div className="feature featured-event center">
                <h3 className="headline">
                    {description}:
                </h3>
                {event.imgPath && (
                    <p>
                        <Link to={link}>
                            <Image
                                src={event.imgPath}
                                alt={event.title}
                            />
                        </Link>
                    </p>
                )}
                <p>
                    {event.artist.title} - {format(new Date(event.date), 'dd.MM.yyyy')}
                    &nbsp;
                    <Link to={link}>
                        {event.title}
                    </Link>
                </p>
                <p className="more">
                    <Link to={getUrl('event')}>
                        {i18n('page_features_event_more')}
                    </Link>
                </p>
            </div>
        );
    }, [
        events,
    ]);

    const renderVideo = useCallback(() => {
        const visibleVideos = videos.filter(video => !video.hidden);
        const video = visibleVideos[getRandom(0, visibleVideos.length - 1)];

        if (!video) {
            return null;
        }

        return (
            <div className="feature featured-video center">
                <h3 className="headline">
                    {i18n('page_features_video')}:
                </h3>
                <Iframe src={getApiUrl('youtubeIframe', {
                    videoId: video.id,
                })} />
                <p>
                    {video.artist.title}
                </p>
                <p className="more">
                    <Link to={getUrl('video')}>
                        {i18n('page_features_video_more')}
                    </Link>
                </p>
            </div>
        );
    }, [
        videos,
    ]);

    const renderAlbum = useCallback(() => {
        const visibleAlbums = albums.filter(album => !album.hidden);
        const album = visibleAlbums[getRandom(0, visibleAlbums.length - 1)];

        if (!album) {
            return null;
        }

        return (
            <div className="feature featured-album center">
                <h3 className="headline">
                    {i18n('page_features_audio')}:
                </h3>
                <p>
                    <Link
                        className="cover"
                        to={getUrl('audio:artistId:albumId', {
                            artistId: album.artist.id,
                            albumId: album.id,
                        })}
                    >
                        <Image
                            src={album.imgPath}
                            alt={album.title}
                        />
                    </Link>
                </p>
                <p>
                    {album.artist.title} - {album.title}
                </p>
                <p className="more">
                    <Link to={getUrl('audio')}>
                        {i18n('page_features_audio_more')}
                    </Link>
                </p>
            </div>
        );
    }, [
        albums,
    ]);

    useEffect(() => {
        setTitle();
    }, []);

    return (
        <Page id="features">
            {renderEvent()}
            {renderAlbum()}
            {renderVideo()}
        </Page>
    );
};

Page404.propTypes = {
    isIndexPage: PropTypes.bool,
    albums: PropTypes.array.isRequired,
    videos: PropTypes.array.isRequired,
    events: PropTypes.array.isRequired,
};

export default Page404;
