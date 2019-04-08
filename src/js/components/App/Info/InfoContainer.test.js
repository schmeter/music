import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import InfoContainer, {
    mapStateToProps,
    mapDispatchToProps
} from './InfoContainer';

it('renders correctly', () => {
    const dispatch = jest.fn();
    const state = {
        audio: {}
    };

    let component = shallow(<InfoContainer />);
    expect(toJson(component)).toMatchSnapshot();

    const props = {
        ...mapDispatchToProps(dispatch),
        ...mapStateToProps(state)
    };

    expect(Object.keys(props)).toEqual([
        'closeLayers',
        'activeTrack'
    ]);

    props.closeLayers();

    expect(dispatch).toHaveBeenCalled();
});
