let values = [1.54, 1.23, 1.11, -1.22];

// Floor - Rounds down the value
console.log("Math.floor");
values.forEach((val) => {
  console.log(Math.floor(val));
});

// Ceil - Rounds up the value
console.log("Math.ceil");
values.forEach((val) => {
  console.log(Math.ceil(val));
});

// Round - Rounds according to the decimal digits
console.log("Math.round");
values.forEach((val) => {
  console.log(Math.round(val));
});

// Max - Returns the max of values
console.log("Math.max");
console.log(Math.max(values[0], values[1], values[2]));

// Min - Returns the min of values
console.log("Math.min");
console.log(Math.min(values[0], values[1], values[2]));

// Abs - Returns the positive value
console.log("Math.abs");
console.log(Math.abs(values[3]));
