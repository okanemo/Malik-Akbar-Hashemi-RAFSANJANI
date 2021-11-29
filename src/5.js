module.exports = selfNumberBelow200 = () => {
  // Initialize result and array for boolean values
  let res = [];
  const _THRESHOLD = 200;
  let arr = new Array(_THRESHOLD);

  for (let i = 0;i<2;i++) {
    for (let j = 0;j<10;j++) {
      for (let k=0;k<10;k++) {
        let num = i * 100 + j * 10 + k;
        let sum = num + i + j + k;
        // if the sum of n + n//100 + n//10 + n%10 is less than 200, then it is not a self-number
        if (sum < _THRESHOLD) {
          arr[sum] = true;
        }
      }
    }
  }
  // iterate over array and if it is a self-number push to result array
  for (let i = 0;i < arr.length;i++) {
    if (!arr[i]) {
      res.push(i);
    }
  }
  // sum all elements in result array
  let total = 0;
  for (let i = 0;i < res.length;i++) {
    total += res[i];
  }

  // Print the result
  console.log('Array of self number below 200: ');
  console.log(res);
  console.log('How many numbers on there:',res.length);
  console.log('Total sum of all numbers on there:',total);
}
