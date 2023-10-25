const x = (...nums) => {
    let sum = 0
    for (const num of nums) {
        sum += num
    }
    return sum / nums.length
}
console.log(x(1,2,3,4,5,6))