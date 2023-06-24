// №1
//
// Выведите в консоль все целые числа от 1 до 100.
//
// let numbers = []
// for (let i = 1; i <= 100; i++) {
//
// }
// console.log(numbers)
// №2
//
let numbers = []
for (let i = -100; i <= 0; i++) {
    numbers.push(i)
}
console.log(numbers)
// Выведите в консоль все целые числа от -100 до 0.
//
// №3
//
let nums = []
for (let i = 100; i < 1; i--) {
    nums.push(i)
}
console.log(nums)
// Выведите в консоль все целые числа от 100 до 1.
//
// №4
//
// let n =[]
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         n.push(i)
//
//     }
//     console.log(n)
// Выведите в консоль все четные числа из промежутка от 1 до 100.
//
// №5
//
let n = []
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        n.push(i)
    }
}
console.log(n)
// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.


// Hey awesome programmer!
//
//     You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!
//
//     Therefore you need a method, which returns the smallest unused ID for your next new data item...
//
// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!
//
// Go on and code some pure awesomeness!

// function nextId(ids) {
//     const newID = new Set(ids)
//     let smallestID = 0
//     if (newID.has(smallestID)) {
//         smallestID++
//     }
//     return newId
// }
// let num = 3;
//
// if (num > 5 && num < 10 || num == 20) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// let num = 3;
//
// if (num == 9 || num > 10 && num < 20 || num > 20 && num < 30) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num)
            return i;
    }
    return num;
}

getIndexToIns([40, 60], 50);