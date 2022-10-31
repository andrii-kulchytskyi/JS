function XO(str) {
    let arr = str.toLowerCase().split("");
    return arr.filter(elem => elem === "x").length === arr.filter(elem => elem === 'o').length;
}