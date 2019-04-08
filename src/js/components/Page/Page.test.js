import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Page from './Page';

it('renders correctly with all parameters', () => {
    const props = {
        id: 'test',
        className: 'test',
        hasDynamicTitle: true,
        useBaseClass: false
    };

    const component = shallow(<Page {...props} >test</Page>);
    expect(toJson(component)).toMatchSnapshot();
});

it('renders correctly with id only', () => {
    const props = {
        id: 'test'
    };

    const component = shallow(<Page {...props} >test</Page>);
    expect(toJson(component)).toMatchSnapshot();
});
