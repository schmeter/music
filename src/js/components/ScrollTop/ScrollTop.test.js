import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ScrollTop from './ScrollTop';

import { scrollTop } from '../../util/screen';

jest.mock('../../util/screen.js', () => ({ scrollTop: jest.fn() }));

describe('ScrollTop', () => {
    afterEach(() => {
        scrollTop.mockReset();
    });

    it('renders the children', () => {
        const target = '.foo';
        const component = shallow(
            <ScrollTop target={target}>
                test
            </ScrollTop>
        );
        expect(toJson(component)).toMatchSnapshot();
    });

    it('scrolls to top on re-render', () => {
        const target = '.ipsum';
        const component = shallow(
            <ScrollTop target={target}>
                test
            </ScrollTop>
        );

        component.setProps({
            children: 'foo'
        });

        expect(scrollTop).toHaveBeenCalledWith(target);
    });
});
