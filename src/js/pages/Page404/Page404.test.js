import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Page404 from './Page404';

jest.mock('../../components/Page', () => () => <div />);

describe('Page404', () => {
    it('renders correctly', () => {
        const props = {
            activeTrack: {
                album: {
                    imgPath: 'test',
                },
            },
        };
        const component = shallow(<Page404 {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });
});
