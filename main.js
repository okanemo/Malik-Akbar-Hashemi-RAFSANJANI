const test1 = require('./test/1');
const test2 = require('./test/2');
const test3 = require('./test/3');
const test4 = require('./test/4');

const answer1 = require('./src/1');
const answer2 = require('./src/2');
const answer3 = require('./src/3');
const answer4 = require('./src/4');
const answer5 = require('./src/5');

const testAnswer1 = () => {
  console.log('=====TEST ANSWER 1=====');
  for (let i=0;i<test1.length;i++) {
    console.log(test1[i] + ' - ' + answer1(test1[i]));
  }
}

const testAnswer2 = () => {
  console.log('\n=====TEST ANSWER 2=====');
  for (let i=0;i<test2.length;i++) {
    console.log('\nstring: "' + test2[i] + '"');
    console.log(answer2(test2[i]));
  }
}

const testAnswer3 = () => {
  console.log('\n=====TEST ANSWER 3=====');
  for (let i=0;i<test3.length;i++) {
    console.log('\nTest case: [' + test3[i] + ']');
    console.log(answer3(test3[i]));
  }
}

const testAnswer4 = () => {
  console.log('\n=====TEST ANSWER 4=====');
  // console.log(answer4(2,3));
  // console.log(answer4(2)(3));
  for (let i=0;i<test4.length;i++) {
    console.log('\nTest case: [' + test4[i] + ']');
    console.log(answer4(test4[i][0], test4[i][1]) + " - " + answer4(test4[i][0])(test4[i][1]));
  }
}

const testAnswer5 = () => {
  console.log('\n=====TEST ANSWER 5=====');
  answer5();
}

testAnswer1();
testAnswer2();
testAnswer3();
testAnswer4();
testAnswer5();
