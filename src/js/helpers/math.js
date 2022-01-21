export const getRandom = (minValue, maxValue) => {
  const min = Math.min(minValue, maxValue);
  const max = Math.max(minValue, maxValue);

  if (min === max) {
    return (min);
  }
  return (min + parseInt(Math.random() * (max - min + 1), 10));
};
