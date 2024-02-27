// Ques 1: Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates  such that each unique element appears only once and return the new array.

// Example:

// Input: nums = [1,1,2,3,3,5,6,6]
// Output: [1,2]
// Explanation: Array after removing duplicates are [1,2]

function removeDuplicates(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  return nums.splice(0, i + 1);
}

console.log(removeDuplicates([1, 1, 2, 3, 3, 5, 6, 6]));

// Ques 2: Move Zeros

// "Given an array A[] of size N containing non-negative integers. You have to move all 0's to the end of array while maintaining the relative order of the non-zero elements.

// Note: You must do this in-place without making a copy of the array.

// Minimize the total number of operations."

// Example:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeros(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
  return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12]));

// Ques 3: Reverse A Array

// Given an array nums of n elements . Complete the given function and return the reversed array .

// Example :

// Input: nums=[1,2,3,4]
// Output: nums=[4,3,2,1]

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4]));

// Ques 4: Largest element in the array
// Given an array nums of n integers . Find the maximum number from an array.
// Example :

// Input : nums=[1,20,-10,30]
// Output: 30
// The maximum element from an array is 30

// Approach 1:
function findLargestElement(nums) {
  let max = nums[0];
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}

// Approach 2:
function findLargestElement(nums) {
  let max = Math.max(...nums);

  return max;
}

findLargestElement([1, 20, -10, 30]);
