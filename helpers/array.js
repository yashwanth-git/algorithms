let array = [1, 32, 332, 123, 12];

// Fill - Fills the array with any value given
let arr = new Array(5).fill(0);
console.log(arr);

// Length - Returns the length of the array
console.log(arr.length);

// Shift - Removes first element from the array
arr.shift();
console.log(arr);

// Unshift - Adds new element to the start of the array
arr.unshift(1);
console.log(arr);

// At - Returns the element at specified position
console.log(arr.at(1));

// Sort - Sort elements in ascending order
array.sort((a, b) => a - b);
console.log(array);

// Sort in descending order
array.sort((a, b) => b - a);
console.log(array);
