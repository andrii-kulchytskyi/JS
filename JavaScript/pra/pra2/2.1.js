// // // №1
// // //
// // // Дана некоторая строка. Найдите позицию первого нуля в строке.
// // let str ='1234567890'
// // for (let i = 0; i < str.length; i++) {
// //     if (str[i] == 0) {
// //         console.log(i)
// //         break
// //     }
// // }
// // //
// // // №2
// // //
// // // Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
// // //
// // for (let i = 1; i < 1000; i++) {
// //     if(+String(i)[0]+ +String(i)[1]===5){
// //         console.log(i)
// //     }
// // }
// //
// // // №3
// // //
// // // Дан массив. Удалите из него элементы с заданным значением.
// // //
// // // №4
// // //
// // // Дан некоторый массив, например, вот такой:
// // //
// // //     [1, 2, 3, 4, 5, 6]
// // // Найдите сумму первой половины элементов этого массива.
//
//
// // №1⊗jsPmLpAF
// //
// // Используя цикл и метод push заполните массив числами от 1 до 10.
//
// // let arr = []
// // for (let i = 1; i < 10; i++) {
// //     [i, ...arr] = i
// // }
// // console.log(arr)
// //
// // №2⊗jsPmLpAF
// //
// // Используя цикл и метод push заполните массив 10-ю буквами 'x'.
//
// // let arr = []
// // for (let i = 0; i < 10; i++) {
// //     arr.push('x')
// // }
// // console.log(arr)
// //
// // №3⊗jsPmLpAF
// //
// // Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.
//
// // let arr = [1, 2, 3, -4, 5, -6]
// // let arr1 = []
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] > 0) {
// //         arr1.push(arr[i])
// //     }
// // }
// // console.log(arr1)
// //
// // №1⊗jsPmLpACh
// //
// // Дан массив с числами. Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат.
//
// // let arr = [1, 2, 3, 4, 5, 6]
// // for (let i = 0; i < arr.length; i++) {
// //     arr[i] = arr[i] ** 2
// //
// // }
// // console.log(arr)
// // №2⊗jsPmLpACh
// //
// // Дан массив с числами. Переберите этот массив циклом и отнимите от каждого элемента единицу.
// // let arr = [1, 2, 3, 4, 5, 6]
// // for (let i = 0; i < arr.length; i++) {
// //     arr[i] = arr[i] - 1
// //
// //
// // }
// // console.log(arr)
// //
// // №3⊗jsPmLpACh
// //
// // Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10.
//
// // let arr = [1, 2, 3, 4, 5, 6]
// // for (let i = 0; i < arr.length; i++) {
// //     arr[i] *= 10
// //
// // }
// // console.log(arr)
// //
// // №1⊗jsPmLpOF
// //
// // Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
// //
//
// // let obj = {}
// // let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// // let arr2 = [1, 2, 3, 4, 5, 6, 7];
// //
// // for (let i = 0; i < arr1.length; i++) {
// //     obj[arr1[i]] = arr2[i]
// // }
// // console.log(obj)
// // С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
// //
// // №2⊗jsPmLpOF
// //
// // Дан объект:
// //
// //     let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// // Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.
// //
//
// // let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// // let newObj = {}
// // for (let key in obj) {
// //     if (obj[key] % 2 === 0) {
// //         newObj[key] = obj[key]
// //     }
// // }
// // console.log(newObj)
// // №3⊗jsPmLpOF
// //
// // Дан объект:
// //
// //     let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// // Переберите этот объект циклом и создайте новый объект так, чтобы его ключами стали элементы старого объекта,
// // а значениями - ключи старого объекта.
// //
//
// // let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5};
// // let newObj = {}
// //
// // for (let key in obj1) {
// //     newObj[obj1[key]] = key
// // }
// // console.log(newObj)
//
// // №1
// //
// // Дана некоторая строка. Найдите позицию первого нуля в строке.
// // let str = '123120'
// //
// // console.log(str.indexOf('0'))
// // №2
// //
// // Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
// //     for(let i = 1; i < 1000; i++) {
// //         let str = String(i)
// //         if (+str[0] + +str[1] === 5) {
// //             console.log(i)
// //         }
// //     }
//
// //
// // №3
// //
// // Дан массив. Удалите из него элементы с заданным значением.
// // let arr = [1, 2, 3, 4, 5, 6]
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] === 3) {
// //         arr.splice(i, 1)
// //     }
// // }
// // console.log(arr)
// //
// // №4
// //
// // Дан некоторый массив, например, вот такой:
// //
// //     [1, 2, 3, 4, 5, 6]
// // Найдите сумму первой половины элементов этого массива.
// // let arr = [1, 2, 3, 4, 5, 6]
// // let sum = 0
// // for (let i = 0; i < arr.length / 2; i++) {
// //     sum += arr[i]
// // }
// // console.log(sum)
//
// // №1⊗jsPmLpOCh
// //
// // Дан объект:
// //
// //     let obj = {x: 1, y: 2, z: 3};
// // // Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
// //
// // for (let key in obj) {
// //     obj[key]*=2
// // }
// // console.log(obj)
// //
// // №2⊗jsPmLpOCh
// //
// // Дан объект:
// //
// let obj = {x: 1, y: 2, z: 3};
// // Переберите этот объект циклом и увеличьте каждый элемент этого объекта на единицу.
// for (let objKey in obj) {
//     obj[objKey] += 1
// }
// console.log(obj)
//
//
// // №2
// //
// // Дан массив с числами. Оставьте в нем только положительные числа.
//
// let arr = [1, 2, 3, 4, 5, 6, -1, -2, -3, -4]
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)

// let arr = ['a', 'b', 'c', 'd', 'e','c'];
// // Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите '+++',
// //     а если нет - выведите '---'.
// let flag = false
// for (const arrKey in arr) {
//     if (arr[arrKey] === 'c') {
//         flag = true
//     }
// }
// console.log(flag ? '+++' : '---')
// Напишите код, который будет проверять число на то, простое оно или нет. Простое число делится только на единицу
// и на само себя, и не делится на другие числа.


// let num = 7
// let flag = true
// for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//         flag = false
//     }
// }
// console.log(flag ? 'Простое' : 'Не простое')
// let arr = [10, 20, 30, 40, 21, 32, 51];
// let total = 0
//
// // Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.
// for (let i = 0; i < arr.length; i++) {
//     let str = String(arr[i])
//     if (str[0] === '1' || str[0] === '2') {
//         total += arr[i]
//     }
// }
// console.log(total)
// Исправьте ошибки, допущенные в следующем коде:

// let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// let sum = 0;
//
// for (let key in obj) {
//     if (key.startsWith('1') || key.startsWith('2')) {
//         sum += obj[key];
//     }
// }
//
// console.log(sum);


// №1⊗jsPmLpMst
//
// Код должен вывести числа от 0 до 10:
//
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// №2⊗jsPmLpMst
//
// Код должен вывести числа от 10 до 0:
//
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }
// №3⊗jsPmLpMst
//
// Код должен вывести числа от 10 до 0:
//
// for (let i = 10; i >=0; i--) {
//     console.log(i);
// }
// №4⊗jsPmLpMst
//
// Код должен вывести числа от 0 до 10:
//
// let i = 0;
//
// while (i <= 10) {
//     console.log(i);
//     i++;
// }
// №5⊗jsPmLpMst
//
// Код должен найти сумму целых чисел от 1 до 10:
//
// let res = 0;
//
// for (let i = 1; i <= 10; i++) {
//     res += i;
// }
//
// console.log(res);
// №6⊗jsPmLpMst
//
// Код должен найти произведение целых чисел от 1 до 10:
//
// let res = 1;
//
// for (let i = 1; i <= 10; i++) {
//     res *= i;
// }
// //
// console.log(res);
// №7⊗jsPmLpMst
//
// Код должен найти сумму элементов массива:
//
//     let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
//
// for (let elem of arr) {
//     sum += +elem;
// }
//
// console.log(sum); // должно вывести 15
// №8⊗jsPmLpMst
//
// Код должен найти сумму элементов массива:
//
//     let arr = ['1', '2', '3', '4', '5'];
// let sum = '';
//
// for (let elem of arr) {
//     sum += +elem;
// }
//
// console.log(sum); // должно вывести 15
// №9⊗jsPmLpMst
//
// Код должен найти сумму элементов массива:
//

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
//
// for (let elem of arr) {
//     sum = +elem;
// }
// //
// console.log(sum); // должно вывести 15
// №10⊗jsPmLpMst
//
// Код должен найти сумму элементов массива, однако, всегда выводит NaN:
//
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     sum += +arr[i];
// }
//
// console.log(sum); // почему-то выводит NaN
// №11⊗jsPmLpMst
//
// Код должен найти сумму элементов массива:
//
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
//
// for (let i = 0; i <= arr.length - 1; i++) {
//     sum += +arr[i];
// }
//
// console.log(sum); // почему-то выводит не 15
// №12⊗jsPmLpMst
//
// Код должен найти сумму элементов массива:
//
//     let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     sum += +arr[i];
// }
// //
// console.log(sum); // почему-то выводит не 15
// №13⊗jsPmLpMst
//
// Код должен возвести в квадрат каждый элемент массива:
//
//     let arr = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i];
// }
//
// console.log(arr);
// №14⊗jsPmLpMst
//
// Код должен заполнить массив числами от 1 до 5:
//
// let arr=[];
//
// for (let i = 1; i <= 5; i++) {
//     arr.push(i);
// }
//
// console.log(arr);
// №15⊗jsPmLpMst
//
// Код должен найти сумму элементов объекта:

// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
//
// for (let elem in obj) {
//     sum += obj[elem];
// }
//
// console.log(sum);
// №16⊗jsPmLpMst
//
// Код должен найти сумму элементов объекта:
//
// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
//
// for (let key in obj) {
//     sum += obj[key];
// }
//
// console.log(sum);
// №17⊗jsPmLpMst
//
// Код должен проверить, есть ли в массиве число 3 или нет:
//
// let arr = [1, 2, 3, 4, 5];
// let res = '';
//
// for (let elem of arr) {
//     if (arr[elem] === 3) {
//         res = '+++';
//         break;
//     } else {
//         res = '---';
//
//     }
// }
// //
// console.log(res);
// №18⊗jsPmLpMst
//
// Код должен заполнить массив числами от 1 до 5:
//
// let arr = []
// for (let i = 1; i <= 5; i++) {
//     arr.push(i);
// }
//
// console.log(arr);
// №19⊗jsPmLpMst
//
// Код должен проверить, есть ли в массиве число 3 или нет:
//
// let arr = [1, 2, 3, 4, 5];
// let res = false;
//
// for (let elem of arr) {
//     if (elem === 3) {
//          res = true;
//         break;
//     }
// }
// //
// console.log(res);
// №20⊗jsPmLpMst
//
// Код должен вывести только четные элементы из массива:
//
//     let arr = [1, 2, 3, 4, 5];
//
// for (let elem of arr) {
//     if (elem % 2 === 0) {
//         console.log(elem);
//     }
// }
// №21⊗jsPmLpMst
//
// Код должен записать в новый массив только нечетные элементы старого массива:
//
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = []
// for (let elem of arr) {
//     if (elem % 2 !== 0) {
//         res.push(elem);
//     }
// }
// console.log(res);

// let arr = [
//     ['a', 'b', 'c'],
//     ['d', 'e', 'f'],
//     ['g', 'h', 'i'],
//     ['j', 'k', 'l'],
// ];
// console.log(arr[3][2]+arr[1][1])

// let arr = [[1, 2], [3, 4], [5, 6]];
// let tot = 0
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[0].length; j++) {
//         tot += arr[i][j]
//     }
// }
// console.log(tot)
//

// let arr = [
//     [
//         [1, 2],
//         [3, 4],
//     ],
//     [
//         [5, 6],
//         [7, 8],
//     ],
// ];
// let t = 0
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[0].length; j++) {
//         for (let k = 0; k < arr[1].length; k++) {
//             t += arr[i][j][k]
//         }
//     }
// }
// console.log(t)


// let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
// console.log(arr[0][0]+arr[0][1]+arr[0][2]+arr[0][3][0]+arr[0][3][1]+arr[0][3][2][0]
// +arr[0][3][2][1]+arr[1][0]+arr[1][1][0]+arr[1][1][1])

// let arr = [[1, 2, 3], [4, 5], [6]];
// let total = 0
//
// for (const arrElement of arr) {
//     for (const number of arrElement) {
//         total += number
//
//     }
// }
// console.log(total)

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let total = 0
// for (const arrElement of arr) {
//     for (const arrElementElement of arrElement) {
//         for (const number of arrElementElement) {
//             total += number
//         }
//
//     }
//
// }
// console.log(total)

// let arr = [[1, 2, 3], [4, 5], [6]];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j])
//     }
// }
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let total = 0
//
// // for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         for (let k = 0; k < arr[j].length; k++) {
//             console.log(arr[i][j][k])
//
//         }
//
//     }
//
// }

// [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

// let arr = []
// for (let i = 0; i < 5; i++) {
//     arr[i] = []
//     for (let j = 1; j < 6; j++) {
//         arr[i].push(j)
//     }
// }
// console.log(arr)
// [
//     ['x', 'x', 'x', 'x'],
//     ['x', 'x', 'x', 'x'],
//     ['x', 'x', 'x', 'x']
// ]

// let arr = []
// for (let i = 0; i < 3; i++) {
//     arr[i] = []
//     for (let j = 1; j < 5; j++) {
//         arr[i].push('x')
//     }
// }
// console.log(arr)

// [[[1, 2, 3, 4, 5], [1, 2, 3, 4, 5],],
//     [
//         [1, 2, 3, 4, 5],
//         [1, 2, 3, 4, 5],
//     ],
//     [
//         [1, 2, 3, 4, 5],
//         [1, 2, 3, 4, 5],
//     ],
// ]
//
// let arr = []
// for (let i = 0; i < 3; i++) {
//     arr[i] = []
//     for (let j = 0; j < 2; j++) {
//         arr[i][j] = []
//         for (let k = 1; k <= 5; k++) {
//             arr[i][j].push(k)
//         }
//     }
// }
// console.log(arr)

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = []
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);

// [[1, 2], [3, 4], [5, 6], [7, 8]]

// [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]

// [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

// let arr = []

// let k = 0
// for (let i = 0; i < 4; i++) {
//     arr[i] = []
//     for (let j = 0; j < 2; j++) {
//         arr[i].push(++k)
//     }
//
// }
// console.log(arr)

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k;
//         k++;
//     }
// }
//
// console.log(arr);


// Найдите сумму элементов приведенного объекта.
let obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
let total = 0

for (const objKey in obj) {
    for (const objKeyKey in obj[objKey]) {
        total+= obj[objKey][objKeyKey]

    }

}
console.log(total)