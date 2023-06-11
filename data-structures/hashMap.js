const numbers = [1, 2, 3, 4, 5, 6, 3, 4, 5, 2];
let hashMap = {};

/*
Creates a HashMap taking in the values
- adds values up if there are same values
- makes it 1 if its first value
 */
function createHashMap(numbers, hashMap) {
  for (let number of numbers) {
    if (hashMap[number]) {
      hashMap[number]++;
    } else {
      hashMap[number] = 1;
    }
  }
}
createHashMap(numbers, hashMap);

console.log(hashMap);

/* How it can be iterated */

//Return both key and value
Object.entries(hashMap).forEach(([key, value]) => {
  console.log(`${key} -> ${value}`);
});

//Returns only the key
Object.keys(hashMap).forEach((key) => {
  console.log(`${key}`);
});

//Return onlye the value
Object.values(hashMap).forEach((value) => {
  console.log(`${value}`);
});
