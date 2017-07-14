// Do not change any of the function names

const multiplyArguments = (...args) => {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  if (args.length === 0) return 0;
  let product = 1;
  for (let i = 0; i < args.length; i++) {
    product *= args[i];
  }
  return product;
};

const invokeCallback = (cb) => {
  // invoke cb
  cb();
};

const sumArray = (numbers, cb) => {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  cb(sum);
};

const forEach = (arr, cb) => {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
};

const map = (arr, cb) => {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]));
  }
  return newArr;
};

const getUserConstructor = () => {
  // create a constructor called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the constructor
  const User = function (options) {
    this.username = options.username;
    this.name = options.name;
    this.email = options.email;
    this.password = options.password;
    this.sayHi = function () {
      return `Hello, my name is ${this.name}`;
    };
  };
  return User;
};

const addPrototypeMethod = (Constructor) => {
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
  Constructor.prototype.sayHi = () => 'Hello World!';
};

const addReverseString = () => {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
};

const nFactorial = (n) => {
  // return the factorial for n
  // solve this recursively
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
};

const cacheFunction = function (cb) {
  const cache = {};
  return function (arg) {
    if (cache[arg]) return cache[arg];
    cache[arg] = cb(arg);
    return cache[arg];
  };
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments,
  invokeCallback,
  sumArray,
  forEach,
  map,
  getUserConstructor,
  addPrototypeMethod,
  addReverseString,
  nFactorial,
  cacheFunction
};
