// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// solution :

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    let x = nums.length;
    let y = nums[x - 1];
    nums.pop();
    nums.unshift(y);
  }
};
