import React from 'react';
import { Router, MemoryRouter } from 'react-router';
import { shallow, mount } from 'enzyme';
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
        const location = { pathname: 'bar' };
        const component = shallow(
            <ScrollTop target={target} location={location}>test</ScrollTop>
        );
        expect(toJson(component)).toMatchSnapshot();
    });

    it('scrolls to top on route-change', () => {
        const target = '.foobar';
        const component = mount(
            <MemoryRouter initialEntries={['/']}>
                <ScrollTop target={target}>
                    test
                </ScrollTop>
            </MemoryRouter>
        );
        const router = component.find(Router);
        const { history } = router.props('history');

        history.push('/lorem');

        expect(scrollTop).toHaveBeenCalledWith(target);
    });

    it('scrolls to top on re-render', () => {
        const target = '.ipsum';
        const location = { pathname: 'bar' };
        const component = mount(
            <MemoryRouter>
                <ScrollTop target={target} location={location} onReRender>
                    test
                </ScrollTop>
            </MemoryRouter>
        );

        component.setProps({
            location: 'foo'
        });

        expect(scrollTop).toHaveBeenCalledWith(target);
    });
});
