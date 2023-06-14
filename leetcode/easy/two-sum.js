/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 */
const twoSum = function (nums, target) {
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let remain = target - nums[i];

    if (hashMap[remain] && hashMap[remain] !== i) {
      return [i, hashMap[remain]];
    }
  }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
