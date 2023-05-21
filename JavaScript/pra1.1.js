// №1
//
// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
let number = 3
console.log(number > 0)
//
// №2
//
// Дана строка. Выведите в консоль длину этой строки.
let string = 'sdadsa'
console.log(string.length)
//
// №3
//
// Дана строка. Выведите в консоль последний символ строки.
let string1 = 'sdadsa'
console.log(string1[string1.length - 1])
//
// №4
//
// Дано число. Проверьте, четное оно или нет.
let n = 2;
console.log(n % 2 === 0)
//
// №5
//
// Даны два слова. Проверьте, что первые буквы этих слов совпадают.
let s1 = 'sdfsdfsdfsd'
let s2 = 'sfdgdfgdf';
console.log(s1[0] === s2[0])
//
// №6
//
let slovo = 'fsd,'

console.log(slovo[slovo.length - 1] === 'ь' ? slovo[slovo.length - 2] :slovo[slovo.length-1])
// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.