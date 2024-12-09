/**
Problem 5: Once
Write a function once that takes another function fn as input and returns a new function.
The new function allows fn to be called only once. Subsequent calls should return the result of the first invocation.

const addOnce = once((a, b) => a + b);
console.log(addOnce(3, 4)); // 7
console.log(addOnce(5, 6)); // No effect, still 7
 */

const once = (fn) => {
  let hasBeenCalled = false;
  let result;

  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn(...args);
    }
    return result;
  };
};

const addOnce = once((a, b) => a + b);
console.log(addOnce(3, 4)); // 7
console.log(addOnce(5, 6)); // No effect, still 7

// const deductOnce = once((a, b) => a - b);
// console.log(deductOnce(10, 4)); // 6
// console.log(deductOnce(5, 6)); // No effect, still 6
