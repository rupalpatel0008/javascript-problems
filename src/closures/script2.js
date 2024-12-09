/**
Problem 2: Function Multipliers
Create a function multiplyBy that takes a number n and returns another function. The returned function should multiply any number passed to it by n.

const multiplyBy2 = multiplyBy(2);
console.log(multiplyBy2(5)); // 10
console.log(multiplyBy2(10)); // 20

 */

const multiplyBy = function (n) {
  return function (m) {
    return n * m;
  };
};

const multiplyBy2 = multiplyBy(2);
console.log(multiplyBy2(5));
console.log(multiplyBy2(10));
const multiplyBy3 = multiplyBy(3);
console.log(multiplyBy3(5));
console.log(multiplyBy3(10));
