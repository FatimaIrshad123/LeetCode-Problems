/*function longestCommonPrefix(strs: string[]): any {
    let prefix = strs[0]
    //console.log(prefix)
    for (let i= 0; i< strs.length; i++){
        //console.log(strs[i])
        //console.log(strs[i].length)
        if (strs[i].startsWith(prefix)){
            //console.log(prefix.slice(0,-1))
            return prefix.slice(0,-1)
        }if (prefix === ''){ 
           return prefix;
        }
        
    }
};*/

function longestCommonPrefix(strs: string[]): any {
    let prefix = strs[0];
    //console.log(prefix)
    for (let i = 1; i < strs.length; i++) {
      while (!strs[i].startsWith(prefix)) {
        prefix = prefix.slice(0, -1);
        console.log(prefix)
      }
  
      if (prefix === '') {
        return prefix;
      }
    }
    
    return prefix;
  };

longestCommonPrefix(["flo","flow","floght"]);
//(longestCommonPrefix(["dog","racecar","car"]))