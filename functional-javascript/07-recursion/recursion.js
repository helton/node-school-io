module.exports = (arr, fn, initial) => {
  return (function reduce(index, value) {
    if (index >= arr.length) return value
    return reduce(index + 1, fn(value, arr[index], index, arr));
  })(0, initial);
};