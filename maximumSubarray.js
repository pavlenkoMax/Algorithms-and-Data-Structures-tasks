/**
 * @param {number[]} nums
 * @return {number}
 */

 var maxSubArray = function(nums) {
  let maxNumber = 0;
  let maxSumm = nums[0];
  
  for(let number of nums) {
      maxNumber  = Math.max(maxNumber + number,  number);
      maxSumm = Math.max(maxSumm, maxNumber);
  }
  
  return maxSumm;
};