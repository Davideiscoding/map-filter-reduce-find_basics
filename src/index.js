var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

const newMap = numbers.map(function(num) {
  return num * 2;
});

console.log(newMap);

//Filter - Create a new array by keeping the items that return true.

const newFilter = numbers.filter(function(num) {
  return num > 10;
});

console.log(newFilter);

//Reduce - Accumulate a value by doing something to each item in an array.

const reducedNum = numbers.reduce(function(accumulator, currentNumber) {
  console.log("Accumulator= " + accumulator);
  console.log("currentNumber= " + currentNumber);

  return accumulator + currentNumber;
});
console.log("The reduced number is: " + reducedNum);

//Find - find the first item that matches from an array.

const findNumber = numbers.find(function(num) {
  return num > 10;
});

console.log(findNumber);

//FindIndex - find the index of the first item that matches.

const findIndexNumber = numbers.findIndex(function(num) {
  return num > 10;
});

console.log(findIndexNumber);
