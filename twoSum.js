/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {
  const hashMap = {}; 
  
  for (let i = 0; i < nums.length; i++) {
    const key = target - nums[i];
    
    if (hashMap[key] !== undefined) {
      return [hashMap[key], i];
    } else {
      hashMap[nums[i]] = i;
    }
  }
};
