import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';

import Iframe from './Iframe';

describe('Iframe', () => {
    it('renders correctly', () => {
        const props = {
            src: 'test',
            className: 'test',
            onLoad: jest.fn(),
        };
        const component = mount(<Iframe {...props} />);

        act(() => {
            component.find('iframe').props().onLoad();

            expect(toJson(component)).toMatchSnapshot();
        });
    });
});
