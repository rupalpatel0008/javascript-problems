/**

Problem 1: Counter
Write a function createCounter that returns an object with two methods: increment and decrement. Each call to increment should increase the counter by 1, and each call to decrement should decrease it by 1. The counter's initial value should be 0.

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1

*/
const createCounter = function () {
  let counter = 0;
  return {
    increment: () => {
      ++counter;
      console.log(counter);
    },
    decrement: () => {
      --counter;
      console.log(counter);
    },
  };
};

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
