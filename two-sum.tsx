function twoSum(nums: number[], target: number): any {
    for (let i = 0; i < nums.length - 1; i++){
        //console.log(nums[i])
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
};

let result = twoSum([3,0,2,1],3)
console.log(result)