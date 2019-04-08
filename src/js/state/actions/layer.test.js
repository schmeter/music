import {
    openLayerAction,
    closeLayersAction
} from './layer';

test('expects openLayerAction to return object', () => {
    expect(openLayerAction('layer')).toEqual({
        type: 'LAYER_OPEN',
        payload: 'layer'
    });
});

test('expects closeLayersAction to return object', () => {
    expect(closeLayersAction()).toEqual({
        type: 'LAYERS_CLOSE'
    });
});
