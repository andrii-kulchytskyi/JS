// аполните массив случайными числами из промежутка от 1 до 100.

// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 100) + 1)
// }
// console.log(arr.sort((a, b) => a - b))
//

// 12345
// Выведите в консоль все его символы с конца.
// let str = '12345';
// for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i])
// }
// Дан массив с числами. Запустите цикл, который будет по очереди выводить
// элементы этого массива в консоль до тех пор,
//     пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//         break
//     }
//     console.log(arr[i])
// }

// let arr = [1, 2, -1, 4, 5, 6, 7, 8, 9, 0];
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         break
//     }
//     sum += arr[i]
// }
// console.log(sum)
// let total = 0
// let count = 0
// for (let i = 0; i < 100; i++) {
//     total += i
//     count++
//     if (total > 100) {
//         break
//     }
// }
// console.log(count)
// str = ''
// 111222333444555666777888999
// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 4; j++) {
//         console.log()
//     }
//
// }
// №1⊗jsPmLpNsd
//
// С помощью двух вложенных циклов выведите на экран следующую строку:
//
//     111222333444555666777888999

// let str = ''
// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 4; j++) {
//         str += i
//     }
// }
// console.log(str)

// let str = ''
// for (let i = 1; i < 4; i++) {
//     for (let j = 1; j < 4; j++) {
//         str += i +j +' '
//     }
// }
// console.log(str)

// С помощью двух вложенных циклов выведите на экран следующую строку:
//
//     11 12 13 21 22 23 31 32 33
// let str = ''
// for (let i = 1; i < 4; i++) {
//     for (let j = 1; j < 4; j++) {
//         str += `${i}${j} `
//     }
// }
// console.log(str)
// Дан некоторый массив, например, вот такой:
//
//     [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
//
//     [1, 2]
//         [3, 4]
//         [5, 6]

// let arr = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < arr.length; i += 2) {
//     console.log(arr.slice(i, i + 2))
// }
// let arr1 = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < arr.length; i = i + 2) {
//     console.log(arr1.slice(i, i + 2))
// }
//
// arr.concat(arr1)
let arr2 = [1, 2, 3, 4, 5, 6]
let arr3 = [1, 2, 3, 4, 5, 6]
console.log(arr2.concat(arr3))