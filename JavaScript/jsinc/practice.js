// let arr = [2, 5, 9, 3, 1, 4];
// let sum = 1;
// for (let arrKey in arr) {
//     sum*=arr[arrKey]
// }
// console.log(sum)

// '-1-2-3-4-5-6-7-8-9-'
// let str = ''
// for (let i = 1; i < 10; i++) {
//     str += '-' + i
// }
// console.log(str+'-')

// Переберите циклом числа от 10 до 1000 и выведите в консоль первую цифру каждого числа.

// for (let i = 10; i <= 1000; i++) {
//     console.log(+String(i)[0]+ +String(i)[1])
// }

for (let i = 10; i < 1000; i++) {
    console.log(+String(i)[0]+ +String(i)[1]===5? i : '')
}