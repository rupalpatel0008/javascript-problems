/**
Problem 4: Delayed Greeter
Implement a function createGreeter that takes a name as input and returns a function. When the returned function is called, it should greet the person after a delay of 1 second.

const greeter = createGreeter("Alice");
greeter(); // Logs "Hello, Alice!" after 1 second
 */

const createGreeter = function (name) {
  return () => {
    setTimeout(() => {
      console.log(`Hello, ${name}`);
    }, 1000);
  };
};

const greeter = createGreeter("Alice");
greeter();
