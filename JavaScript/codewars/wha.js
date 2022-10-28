function invert(array) {
    if(array == []){
        return [];
    } else{
        for(let i = 0; array.length>i; i++){
            array[i] *= -1;
        }
        return array;
    }
}