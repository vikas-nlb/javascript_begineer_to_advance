const arr = [1,2,3,4,5]

// for each
arr.forEach(num => console.log(num));
// Doesn't return anything
// break and continue won't work inside forEach

// map
const mapArr = arr.map(num => num+2);
// Returns a new array and the length of the new array will always be same as the input array

// filter
const filterArr = arr.filter(num => num%2 == 0);
// Returns a new array and the length of the new array will be same or less than the input array

// reduce
const reduce = arr.reduce((acc,n) => acc + n);
// Folds the array into a single element , for example in the above it will return the sum of all the elements

// find
const find = arr.find(num => num > 2);
// this will find the element and return the element , in this case it will return the first number that is more than 2

// findIndex
const findIndex = arr.findIndex(num => num > 2);
// this will return the index of the first element that matches the criteria or returns undefined if not found

// some
const some = arr.some(num => num > 1)
// returns true if atleast one element is greater than 1

// every
const every = arr.every(num => num > 2)
// returns if all elements is greater than 2
