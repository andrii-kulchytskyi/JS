function positiveSum(arr) {
    let total = 0;
    for(let i = 0; arr.length>i; i++){
        if(arr[i]>0){
            total+=arr[i];
        }
    }
    return total;
}