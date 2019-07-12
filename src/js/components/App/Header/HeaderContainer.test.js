import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import HeaderContainer, {
    mapDispatchToProps
} from './HeaderContainer';

it('renders correctly', () => {
    const dispatch = jest.fn();

    const component = shallow(<HeaderContainer />);

    expect(toJson(component)).toMatchSnapshot();

    const props = {
        ...mapDispatchToProps(dispatch)
    };

    expect(Object.keys(props)).toEqual([
        'openLayer'
    ]);

    props.openLayer('test');

    expect(dispatch).toHaveBeenCalled();
});
