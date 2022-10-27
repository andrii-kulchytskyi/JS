function fakeBin(x){
    x = x.split("");
    for(let i = 0; i < x.length; i++){
        if(x[i]<5){
            x[i] = 0;
        } else if(x[i]>=5){
            x[i] = 1;
        }
    }
    x = x.join("");
    return x;
}