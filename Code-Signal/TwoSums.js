// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

function twoSum(nums, target) {
    // Implement your solution here
    // we need to get two digits = target 
    // 2 loops i anf 

    for(let i = 0; i < nums.length; i++){
        for(let j = i+1 ; j< nums.length; j++){
            if(nums[i] + nums[j] === target) {
                return [i,j]
            }
        } []
    }
    return []
}

console.log(twoSum([2, 7, 11, 15], 9)); 
console.log(twoSum([10, 100, 1000, 10000, 100000], 110000)); 
