import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PlayerContainer, {
    mapStateToProps,
    mapDispatchToProps
} from './PlayerContainer';

it('renders correctly', () => {
    const dispatch = jest.fn();
    const state = {
        audio: {},
        auth: {}
    };

    let component = shallow(<PlayerContainer />);

    expect(toJson(component)).toMatchSnapshot();

    const props = {
        ...mapDispatchToProps(dispatch),
        ...mapStateToProps(state)
    };

    expect(Object.keys(props)).toEqual([
        'initAudio',
        'setIsPlaying',
        'setActiveTrack',
        'setActiveIndex',
        'isLoggedIn',
        'tracks',
        'activeIndex',
        'playToggle',
        'isPlaying'
    ]);

    props.initAudio();
    props.setIsPlaying();
    props.setActiveTrack();
    props.setActiveIndex();

    expect(dispatch).toHaveBeenCalledTimes(4);
});
