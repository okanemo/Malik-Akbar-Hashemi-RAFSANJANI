module.exports = function sum(arg1,arg2) {
  // check whether the second argument is undefined
  if (arg2 === undefined) {
    // if undefined then return function that takes second argument
    return function(arg2) {
      return arg1 + arg2;
    };
  // if second argument is defined then return the sum of the two arguments
  } else {
    return arg1 + arg2;
  }
}

