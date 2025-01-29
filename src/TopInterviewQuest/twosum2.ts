function twoSum2(numbers: number[], target: number): any {
    let arr = []
  for (let i = 0; i < numbers.length; i++){
    let rem = target - numbers[i];
    for (let j = i+1; j<numbers.length; j++){
        if (numbers[j] == rem){
            return [i + 1, j + 1]
        }
    }
  }  
  return []
};

twoSum2([1,5,5,4,3],6)