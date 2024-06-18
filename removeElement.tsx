function removeElement(nums: number[], val: number): any {
    let x = []
    for (let i = 0; i<nums.length; i++){
        if (nums[i] !== val){
            x.push(nums[i])
        }
    }
    return x.length;
};
/*function removeElement(nums: number[], val: number): number {
    let j = 0;
    for( let n of nums ){
        if( n !== val ) 
            nums[j++] = n
    }
    console.log(j);
    return j
};*/

let k = removeElement([0,1,2,2,3,0,4,2],2)
console.log(k)