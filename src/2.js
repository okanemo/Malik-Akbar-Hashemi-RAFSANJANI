module.exports = stringToArray = (str) => {
  let res = [];
  let word = [];
  for (let i=0;i<str.length;i++) {
    if (str[i] !== ' ') {
      word.push(str[i]);
    } else if (str[i] === ' ' && word.length > 0) {
      res.push(word);
      word = [];
    }
  }
  (word.length > 0) && res.push(word);
  return res;
}
