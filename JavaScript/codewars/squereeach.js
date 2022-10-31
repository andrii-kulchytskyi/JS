function squareDigits(num){
    return +(num.toString().split('').map(elem=> elem*elem).join(""));
}