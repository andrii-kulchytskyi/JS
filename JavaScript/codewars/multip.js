function grow(x) {
    let total = 1;
    for (let i = 0; x.length > i; i++) {
        total *= x[i];
    }
    return total;
}