//
// №1⊗jsPmLpPrm
//
// Выведите с помощью цикла столбец чисел от 1 до 100.
// for (let i = 1; i <= 100; i++) {
//     console.log(i)
// }
//
// №2⊗jsPmLpPrm
//
// Выведите с помощью цикла столбец чисел от 100 до 1.
// for (let i = 100; i > 0; i--) {
//     console.log(i)
// }
//
// №3⊗jsPmLpPrm
//
// Выведите с помощью цикла столбец четных чисел от 1 до 100.
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }
//
// №4⊗jsPmLpPrm
//
// Заполните массив 10-ю иксами с помощью цикла.
//
// let arr =[]
// for (let i = 0; i < 10; i++) {
//     arr.push('x')
// }
// console.log(arr)
// №5⊗jsPmLpPrm
//
// Заполните массив числами от 1 до 10 с помощью цикла.
//
// let arr =[]
// for (let i = 1; i <= 10; i++) {
//     arr.push(i)
// }
// console.log(arr)
// №6⊗jsPmLpPrm
//
// Дан массив с числами. С помощью цикла выведите только те
// элементы массива, которые больше нуля и меньше 10-ти.
//

// let arr = [-5, 2, 50]
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] < 10) {
//         console.log(arr[i])
//     }
// }
// №7⊗jsPmLpPrm
//
// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
//
// let arr = [11, 2, 3, 4, 55]
// let flag = false
// let v = arr.includes(5);
// console.log(v)
// №8⊗jsPmLpPrm
//
// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
//
// let arr = [1, 2, 3, 4]
// let total = 0
// for (let arrKey in arr) {
//     total += arr[arrKey]
// }
// console.log(total)
// №9⊗jsPmLpPrm
//
// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
//

// let arr = [1, 2, 3, 4, 5]
// let total = 0
// for (let i = 0; i < arr.length; i++) {
//     total += arr[i] ** 2
// }
// console.log(total)
// №10⊗jsPmLpPrm
//
// Дан массив с числами. Найдите среднее арифметическое его элементов.
//
// let arr = [1, 2, 3, 4, 5]
// let total = 0
// for (let i = 0; i < arr.length; i++) {
//     total += arr[i]
// }
// console.log(total / arr.length)
// №11⊗jsPmLpPrm
//
// Напишите скрипт, который будет находить факториал числа.
// Факториал - это произведение всех целых чисел от единицы до заданного числа.
//
// let x = 1
// let factorial = 1
// while (x <= 5) {
//     factorial *= x
//     x++
// }
// console.log(factorial)
// let som = 1
// for (let i = 5; i > 0; i--) {
//     som *= i
// }
// console.log(som)
// №12⊗jsPmLpPrm
//
// Заполните массив числами от 10 до 1 с помощью цикла.
// let arr = []
// for (let i = 10; i > 0; i--) {
//     arr.push(i)
// }
// console.log(arr)
//
// №13⊗jsPmLpPrm
//
// Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.
// let arr = [1, 2, -3, -5, 4]
// let totalOfPositive = 0
// for (let arrKey in arr) {
//     if (arr[arrKey] > 0) {
//         totalOfPositive += arr[arrKey]
//     }
// }
// console.log(totalOfPositive)
//
// №14⊗jsPmLpPrm
//
// Дан массив числами, например:
//
// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//     let num = String(arr[i])
//     if (num.startsWith('1') || num.startsWith('2') || num.startsWith('5')) {
//         console.log(arr[i])
//     }
// }
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
//
// №15⊗jsPmLpPrm
//
// Дан массив с числами. Выведите элементы этого массива в обратном порядке.

// let arr = [1,2,3,4,5]
// console.log(arr.reverse())
//
// №16⊗jsPmLpPrm
//
// Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.
//
// let arr = [0, 1, 4, 5, 6, 9]
// for (let i = 0; i < arr.length; i++) {
//     if (i === arr[i]) {
//         console.log(i)
//     }
// }
// №17⊗jsPmLpPrm
//
// Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br.
//
// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i] + '<br>')
// }

// №18⊗jsPmLpPrm
//
// Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива
// в отдельном абзаце.
//
// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i]+'<p>')
// }
// №19⊗jsPmLpPrm
//
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
//
// let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 'сб' || arr[i] === 'вс') {
//         document.write('<b>' + arr[i] + '</b>' + '<br>')
//     } else {
//         document.write(arr[i] + '<br>')
//     }
// }

// №20⊗jsPmLpPrm
//
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом.
// Номер текущего дня должен храниться в переменной day.
//
// let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// let day = 3
// for (let i = 0; i < arr.length; i++) {
//     if (i === 3) {
//         document.write('<i>' + arr[i] + '</i>' + '<br>')
//     } else {
//     document.write(arr[i]+'<br>')
//     }
// }

// №21⊗jsPmLpPrm
//
// Дан следующий объект с работниками и их зарплатами:
//
// let obj = {
//     employee1: 100,
//     employee2: 200,
//     employee3: 300,
//     employee4: 400,
//     employee5: 500,
//     employee6: 600,
//     employee7: 700,
// };
// for (let objKey in obj) {
//     if (obj[objKey] < 400) {
//         obj[objKey] += obj[objKey] * 0.1
//     }
// }
// console.log(obj)
// Увеличьте зарплату каждого работника на 10%.
//
// №22⊗jsPmLpPrm
//
// Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.
//
// №23⊗jsPmLpPrm
//
// Даны следующие массивы:
//
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let obj = {}
// for (let i = 0; i < arr1.length; i++) {
//     obj[arr1[i]] = arr2[i]
// }
// console.log(obj)
// С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.
//
// №24⊗jsPmLpPrm
//
// Дан следующий объект:
//
// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// // Найдите сумму ключей этого объекта и поделите ее на сумму значений.
//
// let sumKey = 0
// let sumValue = 0
// for (let objKey in obj) {
//     sumKey += +objKey
//     sumValue += obj[objKey]
// }
// console.log(sumKey / sumValue)

//
// №25⊗jsPmLpPrm
//
// Дан следующий объект:
//
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// // Запишите ключи этого объекта в один массив, а значения - в другой.
// let arr1 = []
// let arr2 = []
// for (let objKey in obj) {
//     arr1.push(objKey)
//     arr2.push(obj[objKey])
// }
// console.log(arr1)
// console.log(arr2)
// №26⊗jsPmLpPrm
//
// Дан следующий объект:
//
// let obj = {
//     1: 125,
//     2: 225,
//     3: 128,
//     4: 356,
//     5: 145,
//     6: 281,
//     7: 452,
// };

// let arr = []
// for (let objKey in obj) {
//     let num = String(obj[objKey])
//     if (num.startsWith('1') || num.startsWith('2')) {
//         arr.push(+num)
//     }
// }
// console.log(arr)
// Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. То есть у вас в результате получится вот такой массив:
//
//     [
//         125,
//         225,
//         128,
//         145,
//         281,
//     ];
// №27⊗jsPmLpPrm
//
// Дан следующий массив:
//
// let arr = ['a', 'b', 'c', 'd', 'e'];
// // Создайте из этого массива следующий объект:
//
// // {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};
// let obj = {}
// for (let i = 0; i < arr.length; i++) {
//     obj[i + 1] = arr[i]
//
// }
// console.log(obj)
// №28⊗jsPmLpPrm
//
// Дан следующий массив:
//
let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:
let obj = {}
// {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i+1
}
console.log(obj)
