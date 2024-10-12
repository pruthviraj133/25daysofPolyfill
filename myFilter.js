Array.prototype.myFilter= function(callback, context){
    let temp=[];
    for(let i=0;i<this.length;i++){
        if(callback.call(context, this[i], i, this)){
        temp.push(this[i]);
        }
    }
    return temp;
};