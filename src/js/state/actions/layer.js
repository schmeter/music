export const openLayerAction = activeId => ({
    type: 'LAYER_OPEN',
    payload: activeId,
});

export const closeLayersAction = () => ({
    type: 'LAYERS_CLOSE',
});
