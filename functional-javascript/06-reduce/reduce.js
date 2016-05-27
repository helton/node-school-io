module.exports = inputWords =>
  inputWords.reduce((map, word) => {
    map[word] = ++map[word] || 1;
    return map;
  }, {});