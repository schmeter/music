import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ScreensaverContainer, {
    mapStateToProps
} from './ScreensaverContainer';

it('renders correctly', () => {
    const state = {
        audio: {}
    };

    let component = shallow(<ScreensaverContainer />);

    expect(toJson(component)).toMatchSnapshot();

    const props = {
        ...mapStateToProps(state)
    };

    expect(Object.keys(props)).toEqual([
        'isPlaying'
    ]);
});
