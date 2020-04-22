import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PageAudio from './PageAudio';

let mockUrlParams;

jest.mock('react-router-dom', () => ({
    useParams: () => (mockUrlParams),
}));
jest.mock('../../components/Page', () => () => <div />);
jest.mock('./AlbumList', () => () => <div />);
jest.mock('../', () => ({
    // eslint-disable-next-line react/display-name
    Page404: () => <div />,
}));

describe('PageAudio', () => {
    it('renders correctly without url params', () => {
        mockUrlParams = {};
        const props = {
            getArtist: () => false,
            getAlbum: () => false,
        };
        const component = shallow(<PageAudio {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('renders correctly with 1 url param', () => {
        mockUrlParams = {
            artistId: 'test',
        };
        const props = {
            getArtist: () => true,
            getAlbum: () => false,
        };
        const component = shallow(<PageAudio {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('renders correctly with 2 url params', () => {
        mockUrlParams = {
            artistId: 'test',
            albumId: 'test',
        };
        const props = {
            getArtist: () => true,
            getAlbum: () => true,
        };
        const component = shallow(<PageAudio {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('renders correctly with 1 wrong url param', () => {
        mockUrlParams = {
            artistId: 'test',
        };
        const props = {
            getArtist: () => false,
            getAlbum: () => false,
        };
        const component = shallow(<PageAudio {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('renders correctly with 2 wrong url params', () => {
        mockUrlParams = {
            artistId: 'test',
            albumId: 'test',
        };
        const props = {
            getArtist: () => false,
            getAlbum: () => false,
        };
        const component = shallow(<PageAudio {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });
});
