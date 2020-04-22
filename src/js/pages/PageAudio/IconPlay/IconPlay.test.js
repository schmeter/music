import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import IconPlay from './IconPlay';

jest.mock('../../../components/Icon', () => () => <div />);

describe('IconPlay', () => {
    it('renders correctly with isPlaying', () => {
        const props = {
            isPlaying: true,
        };
        const component = shallow(<IconPlay {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('renders correctly without isPlaying', () => {
        const props = {
            isPlaying: false,
        };
        const component = shallow(<IconPlay {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });
});
