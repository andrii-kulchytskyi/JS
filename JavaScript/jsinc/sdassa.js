// №1⊗jsPmLpWl
//
// Выведите в консоль числа от 1 до 100.
// let num = 11
// while (num <= 33) {
//     console.log(num)
//     num++
// }
// №2⊗jsPmLpWl
//
// Выведите в консоль числа от 11 до 33.
//
// №3⊗jsPmLpWl
//
// Дано число num с неким начальным значением. Умножайте его на
// 3 столько раз, пока результат умножения не станет больше 1000.
// Какое число получится? Посчитайте количество итераций, необходимых для этого.

// let num = 2;
// let count = 0
// while (num <= 1000) {
//     console.log(num)
//     num *= 3
//     count++
// }
// console.log(count)
//
// for (let i = 11; i <=33 ; i++) {
//     console.log(i)
// }

let arr = [2, 5, 9, 15, 1, 4];
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

for (let element in arr) {
    if (element > 3 && element < 10) {
        console.log(element)
    }
}
let totalMultiple = 1;
for (let i = 1; i < 3; i++) {
    totalMultiple *= i;
}
console.log(totalMultiple)