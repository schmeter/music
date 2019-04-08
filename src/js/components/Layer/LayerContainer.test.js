import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import LayerContainer, {
    mapDispatchToProps,
    mapStateToProps
} from './LayerContainer';

it('renders correctly', () => {
    const dispatch = jest.fn();
    const state = {
        layer: {}
    };

    let component = shallow(<LayerContainer />);
    expect(toJson(component)).toMatchSnapshot();

    const props = {
        ...mapDispatchToProps(dispatch),
        ...mapStateToProps(state)
    };

    expect(Object.keys(props)).toEqual([
        'closeLayers',
        'activeId'
    ]);

    props.closeLayers();
    expect(dispatch).toHaveBeenCalled();
});
