Array.prototype.groupBy = function(fn) {
    this.reduce((grouped,item) => {
        let key = fn(item);
        if (!grouped[key]){
            return grouped[key] == [];
        }
        grouped[key].push(item);
        return grouped;
    })
};


let arr = [{"id":"1"},{"id":"1"},{"id":"2"}];
var fn = function (item) {return item.id; }

