module.exports = function sum(arg1,arg2) {
  if (arg2 === undefined) {
    return function(arg2) {
      return arg1 + arg2;
    };
  } else {
    return arg1 + arg2;
  }
}

