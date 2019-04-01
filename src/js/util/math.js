export const getRandom = (minValue, maxValue) => {
    let min = minValue;
    let max = maxValue;
    if (min > max) {
        min = maxValue;
        max = minValue;
    }
    if (min === max) {
        return (min);
    }
    return (min + parseInt(Math.random() * (max - min + 1), 10));
};
