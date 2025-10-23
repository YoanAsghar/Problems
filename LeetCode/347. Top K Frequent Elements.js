//Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

const topKFrequent = function(nums, k) {
    let map = new Map();
    let topFrequent = []

    for(let num of nums){
        if(map.has(num)){
            map.set(num, map.get(num) + 1)
        }
        if(!map.has(num)){
            map.set(num, 1)
        }
    }

    let sortedEntries = [...map.entries()]
    sortedEntries.sort((a, b) => b[1] - a[1]);
    let topK = sortedEntries.slice(0, k)

    for(let i = 0; i < topK.length ; i++){
        topFrequent.push(topK[i][0])
    }
    return topFrequent.sort()
};

const nums = [1,1,1,2,2,7,7,7,7]

console.log(topKFrequent(nums, 1))