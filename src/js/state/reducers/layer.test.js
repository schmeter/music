import reduceLayer from './layer';

test('expects reduceLayer to return default state', () => {
    expect(reduceLayer(undefined, {})).toEqual({});
});

test('expects reduceLayer to return object', () => {
    expect(reduceLayer({}, {})).toEqual({});
});

test('expects reduceLayer to return object', () => {
    const action = {
        type: 'LAYER_OPEN',
        payload: 'layer1'
    };
    expect(reduceLayer({}, action)).toEqual({
        activeId: 'layer1'
    });
});

test('expects reduceLayer to return object', () => {
    const action = {
        type: 'LAYERS_CLOSE'
    };
    expect(reduceLayer({}, action)).toEqual({
        activeId: ''
    });
});
