import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Mp3File from './Mp3File';
import Link from '../Link';

const mockedEvent = {
    preventDefault: jest.fn()
};

it('renders correctly', () => {
    const file1 = {
        path: 'test1',
        tag: {
            title: 'test1'
        }
    };
    const file2 = {
        path: 'test2',
        tag: {
            title: 'test2'
        }
    };
    const tracks = [file1, file2];

    const activeIndex = tracks.indexOf(file1);

    let props = {
        tracks,
        file: file1,
        activeIndex,
        setActiveIndex: jest.fn(),
        togglePlay: jest.fn()
    };

    let component = mount(
        <BrowserRouter>
            <Mp3File {...props} />
        </BrowserRouter>
    );

    expect(toJson(component)).toMatchSnapshot();

    component.find(Link).simulate('click', mockedEvent);
    expect(props.togglePlay).toHaveBeenCalled();

    props = {
        tracks,
        file: file2,
        activeIndex,
        setActiveIndex: jest.fn(),
        togglePlay: jest.fn()
    };

    component = mount(
        <BrowserRouter>
            <Mp3File {...props} />
        </BrowserRouter>
    );
    expect(toJson(component)).toMatchSnapshot();

    component.find(Link).simulate('click', mockedEvent);
    expect(props.setActiveIndex).toHaveBeenCalled();
});
