
 //Definition for singly-linked list.
  
 

function addTwoNumbers(l1: any, l2: any): any {
    let sum = [];
    for (let i = 0; i< l1.length; i++){
        //console.log(l1[i])
        sum.push(l1[i] + l2[i])
    }
    return sum;
};

addTwoNumbers([2,3,4],[1,2,3])