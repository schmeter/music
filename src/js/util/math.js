export const getRandom = (minValue, maxValue) => {
    let min = Math.min(minValue, maxValue);
    let max = Math.max(minValue, maxValue);
    if (min === max) {
        return (min);
    }
    return (min + parseInt(Math.random() * (max - min + 1), 10));
};
