export const isPropTrueAtIndex = (prop, index, array) =>
    array && array[index] && (array[index][prop] === true);
