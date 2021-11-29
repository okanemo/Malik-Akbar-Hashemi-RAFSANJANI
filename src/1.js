module.exports = sama = (str) => {
  // Iterate over first half of string
  for (let i=0;i<(str.length / 2);i++) {
    // if character at first half does not match character at second then half return false
    if (str[i] !== str[str.length-1-i]) {
      return false;
    }
  }
  // if all characters match then return true
  return true;
}
