/*****
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
*******

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*******

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

/* Bad Example wiht O(n2) time complexity but O(1) space complexity */
const productExceptSelf = function (nums) {
  const arraySize = nums.length;
  let result = new Array(arraySize).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      } else {
        result[i] = Math.abs(result[i] * nums[j]);
      }
    }
  }
  return result;
};

// console.log(productExceptSelf([1, 2, 3, 4]));
// console.log(productExceptSelf([-1, 1, 0, -3, 3]));

/* Good Approach */
const bestProductExceptSelf = function (nums) {
  const arraySize = nums.length;
  const left = new Array(arraySize).fill(0);
  const right = new Array(arraySize).fill(0);
  left[0]= 1;
  right[right.length - 1] = 1;
  for(let i = 1; i<nums.length -1; i++){
    left[i] = left[i-1] * nums[i-1];
  }
  for(let i=right.length -2; i>=0; i--){
    right[i] = right[i+1] * nums[i+1];
  }
  for(let i=0; i<nums.length; i++){
    nums[i] = Math.abs(left[i] * right[i]);
  }
  return nums;
}

console.log(bestProductExceptSelf([1, 2, 3, 4]));
console.log(bestProductExceptSelf([-1, 1, 0, -3, 3]));