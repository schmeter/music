import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Menu from './Menu';
import Link from '../../Link';

describe('Menu', () => {
    const mockedEvent = {
        preventDefault: jest.fn(),
    };

    it('renders correctly', () => {
        const props = {
            indexRoute: 'audio',
            closeLayers: jest.fn(),
        };
        const component = shallow(<Menu {...props} />);

        expect(toJson(component)).toMatchSnapshot();

        component.find(Link).first().simulate('click', mockedEvent);

        expect(props.closeLayers).toHaveBeenCalled();
    });
});
