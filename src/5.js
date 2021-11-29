module.exports = selfNumberBelow200 = () => {
  let res = [];
  const _THRESHOLD = 200;
  let arr = new Array(_THRESHOLD);

  for (let i = 0;i<2;i++) {
    for (let j = 0;j<10;j++) {
      for (let k=0;k<10;k++) {
        let num = i * 100 + j * 10 + k;
        let sum = num + i + j + k;
        if (sum < _THRESHOLD) {
          arr[sum] = true;
        }
      }
    }
  }
  for (let i = 0;i < arr.length;i++) {
    if (!arr[i]) {
      res.push(i);
    }
  }
  let total = 0;
  for (let i = 0;i < res.length;i++) {
    total += res[i];
  }
  console.log('Array of self number below 200: ');
  console.log(res);
  console.log('How many numbers on there:',res.length);
  console.log('Total sum of all numbers on there:',total);
}
