import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Mp3FileContainer, {
    mapDispatchToProps,
    mapStateToProps
} from './Mp3FileContainer';


it('renders correctly', () => {
    const dispatch = jest.fn();
    const state = {
        audio: {}
    };

    let component = shallow(<Mp3FileContainer />);
    expect(toJson(component)).toMatchSnapshot();

    const props = {
        ...mapDispatchToProps(dispatch),
        ...mapStateToProps(state)
    };

    expect(Object.keys(props)).toEqual([
        'setActiveIndex',
        'togglePlay',
        'tracks',
        'activeIndex'
    ]);

    props.setActiveIndex(0);
    props.togglePlay();

    expect(dispatch).toHaveBeenCalledTimes(2);
});
