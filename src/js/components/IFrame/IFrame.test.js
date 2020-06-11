import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';

import IFrame from './IFrame';

describe('IFrame', () => {
    it('renders correctly', () => {
        const props = {
            src: 'test',
            className: 'test',
            onLoad: jest.fn(),
        };
        const component = mount(<IFrame {...props} />);

        act(() => {
            component.find('iframe').props().onLoad();

            expect(toJson(component)).toMatchSnapshot();
        });
    });
});
