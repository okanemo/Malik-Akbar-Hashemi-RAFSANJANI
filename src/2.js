module.exports = stringToArray = (str) => {
  // Initialize result and words
  let res = [];
  let word = [];

  // Iterate over string
  for (let i=0;i<str.length;i++) {
    // If character is not space, add character to word
    if (str[i] !== ' ') {
      word.push(str[i]);
    
    // If character is space and word is not empty, add word to result and reset word
    } else if (str[i] === ' ' && word.length > 0) {
      res.push(word);
      word = [];
    }
  }
  // check whether word is empty, if not, add word to result
  (word.length > 0) && res.push(word);
  
  return res;
}
