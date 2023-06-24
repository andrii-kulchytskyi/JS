// №1
//
// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
//
let string = 'dasadas'
console.log(string.length > 1 ? string[string.length - 2] : null)
// №2
//
// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

let number1 = 123
let number2 = 12

console.log(number1 % number2 === 0)