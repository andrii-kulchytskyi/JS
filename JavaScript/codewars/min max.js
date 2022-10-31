function highAndLow(numbers){
    // ...


    numbers = numbers.split(" ")
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    return `${max} ${min}`;
}