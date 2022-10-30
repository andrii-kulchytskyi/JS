function removeSmallest(numbers) {

    let min = Math.min(...numbers);
    let ind = numbers.indexOf(min);
    numbers = numbers.filter((_,i)=>i!==ind);
    return numbers;
}