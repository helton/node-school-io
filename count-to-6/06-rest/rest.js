module.exports = (...args) => {
  var sum = args.reduce((acc, value) => acc + value, 0);
  return sum / args.length;
};