Array.prototype.myReduce=function(callback, initial_value){
    var acc = initial_value;
    for(let i=0;i<this.length;i++){
        acc = acc ? callback(acc, this[i], i, this) : this[i];
    }
    return acc;
}
