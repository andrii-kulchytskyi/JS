function pickIt(arr){
    var odd=[],even=[];
    //coding here

    for(let i = 0; arr.length>i; i++){
        if(arr[i]%2===0){
            even.push(arr[i]);
        } else{
            odd.push(arr[i]);
        }
    }
    return [odd,even];
}