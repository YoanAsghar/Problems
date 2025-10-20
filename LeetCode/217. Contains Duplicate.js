//Given an integer array nums, return true if any value appears at least twice in 
//the array, and return false if every element is distinct.


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let numSet =  new Set();

    for(const num of nums){
        if(numSet.has(num)){
            return true;
        }
        else{
            numSet.add(num)
        }
    }
    return false;
    
};