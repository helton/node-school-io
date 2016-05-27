module.exports = function repeat (operation, num) {
  if (num) {
    operation();
    repeat(operation, num - 1)
  }
};