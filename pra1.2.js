// №1
//
// let number = 10
// let str = number.toString()
// console.log(str[0])
// Дано число. Выведите в консоль первую цифру этого числа.
//
// №2
//
// let number = 10
// let str = number.toString()
// console.log(str[str.length-1])
// // Дано число. Выведите в консоль последнюю цифру этого числа.
//
// №3
// let number = 10222
// let str = number.toString()
// console.log(+str[str.length-1] + +str[0])
//
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
//
// №4
//
// let number = 10222
// let str = number.toString()
// console.log(+str[str.length-1] + +str[0])
// Дано число. Выведите количество цифр в этом числе.
//
// №5
// let number = 10222
// let str = number.toString().split('')
// console.log(str.length)
//
// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

let number1 = 10222
let number2 = 10222
let str1 = number1.toString().split('')
let str2 = number2.toString().split('')
console.log(str1[0] === str2[0])