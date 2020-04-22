import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AlbumList from './AlbumList';

jest.mock('../TrackList', () => () => <div />);

describe('AlbumList', () => {
    it('renders correctly with matching active track', () => {
        const props = {
            albums: [{
                id: 'test',
                artist: {
                    id: 'test',
                },
            }],
            selectedAlbum: {},
            selectedArtist: {},
            activeTrack: {
                album: {
                    id: 'test',
                },
            },
        };
        const component = shallow(<AlbumList {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('renders correctly with selected artist', () => {
        const props = {
            albums: [{
                hidden: true,
                id: 'test',
                artist: {
                    id: 'test',
                },
            }],
            selectedAlbum: {},
            selectedArtist: {
                id: 'test',
            },
        };
        const component = shallow(<AlbumList {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('renders correctly with selected album and artist', () => {
        const props = {
            albums: [{
                id: 'test',
                artist: {
                    id: 'test',
                },
            }],
            selectedAlbum: {
                id: 'test',
                artist: {
                    id: 'test',
                },
            },
            selectedArtist: {
                id: 'test',
            },
            activeTrack: {
                album: {
                    id: 'test',
                },
            },
        };
        const component = shallow(<AlbumList {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('renders correctly without matching active track', () => {
        const props = {
            albums: [{
                id: 'test',
                artist: {
                    id: 'test',
                },
            }],
            selectedAlbum: {},
            selectedArtist: {},
            activeTrack: {
                album: {
                    id: 'test2',
                },
            },
        };
        const component = shallow(<AlbumList {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });
});
