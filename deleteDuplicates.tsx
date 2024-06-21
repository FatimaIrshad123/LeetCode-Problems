function deleteDuplicates(head:any):any {
    let unique= [];
    for (let i = 0; i < head.length; i++) {
        if (unique.indexOf(head[i]) === -1) {
            unique.push(head[i]);
        }
    }
    return unique;
};

let r = deleteDuplicates([1,1,2])
console.log(r)
