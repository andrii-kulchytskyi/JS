// // // // №1
// // // //
// // // // Дана некоторая строка. Найдите позицию первого нуля в строке.
// // // let str ='1234567890'
// // // for (let i = 0; i < str.length; i++) {
// // //     if (str[i] == 0) {
// // //         console.log(i)
// // //         break
// // //     }
// // // }
// // // //
// // // // №2
// // // //
// // // // Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
// // // //
// // // for (let i = 1; i < 1000; i++) {
// // //     if(+String(i)[0]+ +String(i)[1]===5){
// // //         console.log(i)
// // //     }
// // // }
// // //
// // // // №3
// // // //
// // // // Дан массив. Удалите из него элементы с заданным значением.
// // // //
// // // // №4
// // // //
// // // // Дан некоторый массив, например, вот такой:
// // // //
// // // //     [1, 2, 3, 4, 5, 6]
// // // // Найдите сумму первой половины элементов этого массива.
// //
// //
// // // №1⊗jsPmLpAF
// // //
// // // Используя цикл и метод push заполните массив числами от 1 до 10.
// //
// // // let arr = []
// // // for (let i = 1; i < 10; i++) {
// // //     [i, ...arr] = i
// // // }
// // // console.log(arr)
// // //
// // // №2⊗jsPmLpAF
// // //
// // // Используя цикл и метод push заполните массив 10-ю буквами 'x'.
// //
// // // let arr = []
// // // for (let i = 0; i < 10; i++) {
// // //     arr.push('x')
// // // }
// // // console.log(arr)
// // //
// // // №3⊗jsPmLpAF
// // //
// // // Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.
// //
// // // let arr = [1, 2, 3, -4, 5, -6]
// // // let arr1 = []
// // // for (let i = 0; i < arr.length; i++) {
// // //     if (arr[i] > 0) {
// // //         arr1.push(arr[i])
// // //     }
// // // }
// // // console.log(arr1)
// // //
// // // №1⊗jsPmLpACh
// // //
// // // Дан массив с числами. Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат.
// //
// // // let arr = [1, 2, 3, 4, 5, 6]
// // // for (let i = 0; i < arr.length; i++) {
// // //     arr[i] = arr[i] ** 2
// // //
// // // }
// // // console.log(arr)
// // // №2⊗jsPmLpACh
// // //
// // // Дан массив с числами. Переберите этот массив циклом и отнимите от каждого элемента единицу.
// // // let arr = [1, 2, 3, 4, 5, 6]
// // // for (let i = 0; i < arr.length; i++) {
// // //     arr[i] = arr[i] - 1
// // //
// // //
// // // }
// // // console.log(arr)
// // //
// // // №3⊗jsPmLpACh
// // //
// // // Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10.
// //
// // // let arr = [1, 2, 3, 4, 5, 6]
// // // for (let i = 0; i < arr.length; i++) {
// // //     arr[i] *= 10
// // //
// // // }
// // // console.log(arr)
// // //
// // // №1⊗jsPmLpOF
// // //
// // // Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
// // //
// //
// // // let obj = {}
// // // let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// // // let arr2 = [1, 2, 3, 4, 5, 6, 7];
// // //
// // // for (let i = 0; i < arr1.length; i++) {
// // //     obj[arr1[i]] = arr2[i]
// // // }
// // // console.log(obj)
// // // С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
// // //
// // // №2⊗jsPmLpOF
// // //
// // // Дан объект:
// // //
// // //     let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// // // Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.
// // //
// //
// // // let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// // // let newObj = {}
// // // for (let key in obj) {
// // //     if (obj[key] % 2 === 0) {
// // //         newObj[key] = obj[key]
// // //     }
// // // }
// // // console.log(newObj)
// // // №3⊗jsPmLpOF
// // //
// // // Дан объект:
// // //
// // //     let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// // // Переберите этот объект циклом и создайте новый объект так, чтобы его ключами стали элементы старого объекта,
// // // а значениями - ключи старого объекта.
// // //
// //
// // // let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5};
// // // let newObj = {}
// // //
// // // for (let key in obj1) {
// // //     newObj[obj1[key]] = key
// // // }
// // // console.log(newObj)
// //
// // // №1
// // //
// // // Дана некоторая строка. Найдите позицию первого нуля в строке.
// // // let str = '123120'
// // //
// // // console.log(str.indexOf('0'))
// // // №2
// // //
// // // Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
// // //     for(let i = 1; i < 1000; i++) {
// // //         let str = String(i)
// // //         if (+str[0] + +str[1] === 5) {
// // //             console.log(i)
// // //         }
// // //     }
// //
// // //
// // // №3
// // //
// // // Дан массив. Удалите из него элементы с заданным значением.
// // // let arr = [1, 2, 3, 4, 5, 6]
// // // for (let i = 0; i < arr.length; i++) {
// // //     if (arr[i] === 3) {
// // //         arr.splice(i, 1)
// // //     }
// // // }
// // // console.log(arr)
// // //
// // // №4
// // //
// // // Дан некоторый массив, например, вот такой:
// // //
// // //     [1, 2, 3, 4, 5, 6]
// // // Найдите сумму первой половины элементов этого массива.
// // // let arr = [1, 2, 3, 4, 5, 6]
// // // let sum = 0
// // // for (let i = 0; i < arr.length / 2; i++) {
// // //     sum += arr[i]
// // // }
// // // console.log(sum)
// //
// // // №1⊗jsPmLpOCh
// // //
// // // Дан объект:
// // //
// // //     let obj = {x: 1, y: 2, z: 3};
// // // // Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
// // //
// // // for (let key in obj) {
// // //     obj[key]*=2
// // // }
// // // console.log(obj)
// // //
// // // №2⊗jsPmLpOCh
// // //
// // // Дан объект:
// // //
// // let obj = {x: 1, y: 2, z: 3};
// // // Переберите этот объект циклом и увеличьте каждый элемент этого объекта на единицу.
// // for (let objKey in obj) {
// //     obj[objKey] += 1
// // }
// // console.log(obj)
// //
// //
// // // №2
// // //
// // // Дан массив с числами. Оставьте в нем только положительные числа.
// //
// // let arr = [1, 2, 3, 4, 5, 6, -1, -2, -3, -4]
// // let newArr = []
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] > 0) {
// //         newArr.push(arr[i])
// //     }
// // }
// // console.log(newArr)
//
// // let arr = ['a', 'b', 'c', 'd', 'e','c'];
// // // Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите '+++',
// // //     а если нет - выведите '---'.
// // let flag = false
// // for (const arrKey in arr) {
// //     if (arr[arrKey] === 'c') {
// //         flag = true
// //     }
// // }
// // console.log(flag ? '+++' : '---')
// // Напишите код, который будет проверять число на то, простое оно или нет. Простое число делится только на единицу
// // и на само себя, и не делится на другие числа.
//
//
// // let num = 7
// // let flag = true
// // for (let i = 2; i < num; i++) {
// //     if (num % i === 0) {
// //         flag = false
// //     }
// // }
// // console.log(flag ? 'Простое' : 'Не простое')
// // let arr = [10, 20, 30, 40, 21, 32, 51];
// // let total = 0
// //
// // // Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.
// // for (let i = 0; i < arr.length; i++) {
// //     let str = String(arr[i])
// //     if (str[0] === '1' || str[0] === '2') {
// //         total += arr[i]
// //     }
// // }
// // console.log(total)
// // Исправьте ошибки, допущенные в следующем коде:
//
// // let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// // let sum = 0;
// //
// // for (let key in obj) {
// //     if (key.startsWith('1') || key.startsWith('2')) {
// //         sum += obj[key];
// //     }
// // }
// //
// // console.log(sum);
//
//
// // №1⊗jsPmLpMst
// //
// // Код должен вывести числа от 0 до 10:
// //
// // for (let i = 0; i <= 10; i++) {
// //     console.log(i);
// // }
// // №2⊗jsPmLpMst
// //
// // Код должен вывести числа от 10 до 0:
// //
// // for (let i = 10; i >= 0; i--) {
// //     console.log(i);
// // }
// // №3⊗jsPmLpMst
// //
// // Код должен вывести числа от 10 до 0:
// //
// // for (let i = 10; i >=0; i--) {
// //     console.log(i);
// // }
// // №4⊗jsPmLpMst
// //
// // Код должен вывести числа от 0 до 10:
// //
// // let i = 0;
// //
// // while (i <= 10) {
// //     console.log(i);
// //     i++;
// // }
// // №5⊗jsPmLpMst
// //
// // Код должен найти сумму целых чисел от 1 до 10:
// //
// // let res = 0;
// //
// // for (let i = 1; i <= 10; i++) {
// //     res += i;
// // }
// //
// // console.log(res);
// // №6⊗jsPmLpMst
// //
// // Код должен найти произведение целых чисел от 1 до 10:
// //
// // let res = 1;
// //
// // for (let i = 1; i <= 10; i++) {
// //     res *= i;
// // }
// // //
// // console.log(res);
// // №7⊗jsPmLpMst
// //
// // Код должен найти сумму элементов массива:
// //
// //     let arr = ['1', '2', '3', '4', '5'];
// // let sum = 0;
// //
// // for (let elem of arr) {
// //     sum += +elem;
// // }
// //
// // console.log(sum); // должно вывести 15
// // №8⊗jsPmLpMst
// //
// // Код должен найти сумму элементов массива:
// //
// //     let arr = ['1', '2', '3', '4', '5'];
// // let sum = '';
// //
// // for (let elem of arr) {
// //     sum += +elem;
// // }
// //
// // console.log(sum); // должно вывести 15
// // №9⊗jsPmLpMst
// //
// // Код должен найти сумму элементов массива:
// //
//
// // let arr = ['1', '2', '3', '4', '5'];
// // let sum = 0;
// //
// // for (let elem of arr) {
// //     sum = +elem;
// // }
// // //
// // console.log(sum); // должно вывести 15
// // №10⊗jsPmLpMst
// //
// // Код должен найти сумму элементов массива, однако, всегда выводит NaN:
// //
// // let arr = ['1', '2', '3', '4', '5'];
// // let sum = 0;
// //
// // for (let i = 0; i < arr.length; i++) {
// //     sum += +arr[i];
// // }
// //
// // console.log(sum); // почему-то выводит NaN
// // №11⊗jsPmLpMst
// //
// // Код должен найти сумму элементов массива:
// //
// // let arr = ['1', '2', '3', '4', '5'];
// // let sum = 0;
// //
// // for (let i = 0; i <= arr.length - 1; i++) {
// //     sum += +arr[i];
// // }
// //
// // console.log(sum); // почему-то выводит не 15
// // №12⊗jsPmLpMst
// //
// // Код должен найти сумму элементов массива:
// //
// //     let arr = ['1', '2', '3', '4', '5'];
// // let sum = 0;
// //
// // for (let i = 0; i < arr.length; i++) {
// //     sum += +arr[i];
// // }
// // //
// // console.log(sum); // почему-то выводит не 15
// // №13⊗jsPmLpMst
// //
// // Код должен возвести в квадрат каждый элемент массива:
// //
// //     let arr = [1, 2, 3, 4, 5];
// //
// // for (let i = 0; i < arr.length; i++) {
// //     arr[i] = arr[i] * arr[i];
// // }
// //
// // console.log(arr);
// // №14⊗jsPmLpMst
// //
// // Код должен заполнить массив числами от 1 до 5:
// //
// // let arr=[];
// //
// // for (let i = 1; i <= 5; i++) {
// //     arr.push(i);
// // }
// //
// // console.log(arr);
// // №15⊗jsPmLpMst
// //
// // Код должен найти сумму элементов объекта:
//
// // let obj = {a: 1, b: 2, c: 3};
// // let sum = 0;
// //
// // for (let elem in obj) {
// //     sum += obj[elem];
// // }
// //
// // console.log(sum);
// // №16⊗jsPmLpMst
// //
// // Код должен найти сумму элементов объекта:
// //
// // let obj = {a: 1, b: 2, c: 3};
// // let sum = 0;
// //
// // for (let key in obj) {
// //     sum += obj[key];
// // }
// //
// // console.log(sum);
// // №17⊗jsPmLpMst
// //
// // Код должен проверить, есть ли в массиве число 3 или нет:
// //
// // let arr = [1, 2, 3, 4, 5];
// // let res = '';
// //
// // for (let elem of arr) {
// //     if (arr[elem] === 3) {
// //         res = '+++';
// //         break;
// //     } else {
// //         res = '---';
// //
// //     }
// // }
// // //
// // console.log(res);
// // №18⊗jsPmLpMst
// //
// // Код должен заполнить массив числами от 1 до 5:
// //
// // let arr = []
// // for (let i = 1; i <= 5; i++) {
// //     arr.push(i);
// // }
// //
// // console.log(arr);
// // №19⊗jsPmLpMst
// //
// // Код должен проверить, есть ли в массиве число 3 или нет:
// //
// // let arr = [1, 2, 3, 4, 5];
// // let res = false;
// //
// // for (let elem of arr) {
// //     if (elem === 3) {
// //          res = true;
// //         break;
// //     }
// // }
// // //
// // console.log(res);
// // №20⊗jsPmLpMst
// //
// // Код должен вывести только четные элементы из массива:
// //
// //     let arr = [1, 2, 3, 4, 5];
// //
// // for (let elem of arr) {
// //     if (elem % 2 === 0) {
// //         console.log(elem);
// //     }
// // }
// // №21⊗jsPmLpMst
// //
// // Код должен записать в новый массив только нечетные элементы старого массива:
// //
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // let res = []
// // for (let elem of arr) {
// //     if (elem % 2 !== 0) {
// //         res.push(elem);
// //     }
// // }
// // console.log(res);
//
// // let arr = [
// //     ['a', 'b', 'c'],
// //     ['d', 'e', 'f'],
// //     ['g', 'h', 'i'],
// //     ['j', 'k', 'l'],
// // ];
// // console.log(arr[3][2]+arr[1][1])
//
// // let arr = [[1, 2], [3, 4], [5, 6]];
// // let tot = 0
// // for (let i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr[0].length; j++) {
// //         tot += arr[i][j]
// //     }
// // }
// // console.log(tot)
// //
//
// // let arr = [
// //     [
// //         [1, 2],
// //         [3, 4],
// //     ],
// //     [
// //         [5, 6],
// //         [7, 8],
// //     ],
// // ];
// // let t = 0
// // for (let i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr[0].length; j++) {
// //         for (let k = 0; k < arr[1].length; k++) {
// //             t += arr[i][j][k]
// //         }
// //     }
// // }
// // console.log(t)
//
//
// // let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
// // console.log(arr[0][0]+arr[0][1]+arr[0][2]+arr[0][3][0]+arr[0][3][1]+arr[0][3][2][0]
// // +arr[0][3][2][1]+arr[1][0]+arr[1][1][0]+arr[1][1][1])
//
// // let arr = [[1, 2, 3], [4, 5], [6]];
// // let total = 0
// //
// // for (const arrElement of arr) {
// //     for (const number of arrElement) {
// //         total += number
// //
// //     }
// // }
// // console.log(total)
//
// // let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// // let total = 0
// // for (const arrElement of arr) {
// //     for (const arrElementElement of arrElement) {
// //         for (const number of arrElementElement) {
// //             total += number
// //         }
// //
// //     }
// //
// // }
// // console.log(total)
//
// // let arr = [[1, 2, 3], [4, 5], [6]];
// // for (let i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr[i].length; j++) {
// //         console.log(arr[i][j])
// //     }
// // }
// // let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// // let total = 0
// //
// // // for (let i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr[i].length; j++) {
// //         for (let k = 0; k < arr[j].length; k++) {
// //             console.log(arr[i][j][k])
// //
// //         }
// //
// //     }
// //
// // }
//
// // [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
//
// // let arr = []
// // for (let i = 0; i < 5; i++) {
// //     arr[i] = []
// //     for (let j = 1; j < 6; j++) {
// //         arr[i].push(j)
// //     }
// // }
// // console.log(arr)
// // [
// //     ['x', 'x', 'x', 'x'],
// //     ['x', 'x', 'x', 'x'],
// //     ['x', 'x', 'x', 'x']
// // ]
//
// // let arr = []
// // for (let i = 0; i < 3; i++) {
// //     arr[i] = []
// //     for (let j = 1; j < 5; j++) {
// //         arr[i].push('x')
// //     }
// // }
// // console.log(arr)
//
// // [[[1, 2, 3, 4, 5], [1, 2, 3, 4, 5],],
// //     [
// //         [1, 2, 3, 4, 5],
// //         [1, 2, 3, 4, 5],
// //     ],
// //     [
// //         [1, 2, 3, 4, 5],
// //         [1, 2, 3, 4, 5],
// //     ],
// // ]
// //
// // let arr = []
// // for (let i = 0; i < 3; i++) {
// //     arr[i] = []
// //     for (let j = 0; j < 2; j++) {
// //         arr[i][j] = []
// //         for (let k = 1; k <= 5; k++) {
// //             arr[i][j].push(k)
// //         }
// //     }
// // }
// // console.log(arr)
//
// // let arr = [];
// //
// // for (let i = 0; i < 3; i++) {
// //     arr[i] = []
// //     for (let j = 1; j <= 5; j++) {
// //         arr[i].push(j);
// //     }
// // }
// //
// // console.log(arr);
//
// // let arr = [];
// //
// // for (let i = 0; i < 3; i++) {
// //     arr[i] = [];
// //
// //     for (let j = 1; j <= 5; j++) {
// //         arr[i].push(j);
// //     }
// // }
// //
// // console.log(arr);
//
// // [[1, 2], [3, 4], [5, 6], [7, 8]]
//
// // [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]
//
// // [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
//
// // let arr = []
//
// // let k = 0
// // for (let i = 0; i < 4; i++) {
// //     arr[i] = []
// //     for (let j = 0; j < 2; j++) {
// //         arr[i].push(++k)
// //     }
// //
// // }
// // console.log(arr)
//
// // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//
// // let arr = [];
// // let k = 1;
// //
// // for (let i = 0; i < 3; i++) {
// //     arr[i] = [];
// //
// //     for (let j = 0; j < 3; j++) {
// //         arr[i][j] = k;
// //         k++;
// //     }
// // }
// //
// // console.log(arr);
//
//
// // Найдите сумму элементов приведенного объекта.
// // let obj = {
// //     key1: {
// //         key1: 1,
// //         key2: 2,
// //         key3: 3,
// //     },
// //     key2: {
// //         key1: 4,
// //         key2: 5,
// //         key3: 6,
// //     },
// //     key3: {
// //         key1: 7,
// //         key2: 8,
// //         key3: 9,
// //     },
// // }
// // let total = 0
// //
// // for (const objKey in obj) {
// //     for (const objKeyKey in obj[objKey]) {
// //         total+= obj[objKey][objKeyKey]
// //
// //     }
// //
// // }
// // console.log(total)
//
// // let obj = {
// //     1: {
// //         1: 'a1',
// //         2: 'a2',
// //         3: 'a3',
// //     },
// //     2: {
// //         1: 'b1',
// //         2: 'b2',
// //         3: 'b3',
// //     },
// //     3: {
// //         1: 'c1',
// //         2: 'c2',
// //         3: 'c3',
// //     },
// // }
// // console.log(obj["2"]["3"] )
//
// let obj = {
//     1: {
//         1: {
//             1: 111,
//             2: 112,
//             3: 113,
//         },
//         2: {
//             1: 121,
//             2: 122,
//             3: 123,
//         },
//     },
//     2: {
//         1: {
//             1: 211,
//             2: 212,
//             3: 213,
//         },
//         2: {
//             1: 221,
//             2: 222,
//             3: 223,
//         },
//     },
//     3: {
//         1: {
//             1: 311,
//             2: 312,
//             3: 313,
//         },
//         2: {
//             1: 321,
//             2: 322,
//             3: 323,
//         },
//     },
// }
// // let total = 0
// //
// // for (const objKey in obj) {
// //     for (const objKeyKey in obj[objKey]) {
// //         for (const objKeyKeyKey in obj[objKey]) {
// //             total+= obj[objKey][objKeyKey][objKeyKeyKey]
// //         }
// //
// //     }
// // }
// //
// // console.log(total)
// // let students = {
// //     'group1': ['name11', 'name12', 'name13'],
// //     'group2': ['name21', 'name22', 'name23'],
// //     'group3': ['name31', 'name32', 'name33'],
// // };
// //
// // console.log(students.group3[0])
//
// // let data = {
// //     1: [
// //         'data11',
// //         'data12',
// //         'data13',
// //     ],
// //     2: [
// //         'data21',
// //         'data22',
// //         'data23',
// //     ],
// //     3: [
// //         'data31',
// //         'data32',
// //         'data33',
// //     ],
// //     4: [
// //         'data41',
// //         'data42',
// //         'data43',
// //     ],
// // };
// //
// // for (const dataKey in data) {
// //     for (const dataKeyElement of data[dataKey]) {
// //         console.log(dataKeyElement)
// //     }
// // }
//
// // let data = [
// //     {
// //         1: 'data11',
// //         2: 'data12',
// //         3: 'data13',
// //     },
// //     {
// //         1: 'data21',
// //         2: 'data22',
// //         3: 'data33',
// //     },
// //     {
// //         1: 'data31',
// //         2: 'data32',
// //         3: 'data33',
// //     },
// // ];
// //
// // for (const dataKey in data) {
// //     for (const dataKeyKey in data[dataKey]) {
// //         console.log(data[dataKey][dataKeyKey])
// //     }
// // }
//
// // // Дана следующая структура с данными:
// //
// //     // let data = [
// //         {
// //             1: 'data11',
// //             2: 'data12',
// //             3: 'data13',
// //         },
// //         {
// //             1: 'data21',
// //             2: 'data22',
// //             3: 'data33',
// //         },
// //         {
// //             1: 'data31',
// //             2: 'data32',
// //             3: 'data33',
// //         },
// //     ];
// // С помощью вложенных циклов выведите на экран все строки с данными.
//
//
// let data = [
//     {
//         1: [
//             'data111',
//             'data112',
//             'data113',
//         ],
//         2: [
//             'data121',
//             'data122',
//             'data123',
//         ],
//     },
//     {
//         1: [
//             'data211',
//             'data212',
//             'data213',
//         ],
//         2: [
//             'data221',
//             'data222',
//             'data223',
//         ],
//     },
//     {
//         1: [
//             'data411',
//             'data412',
//             'data413',
//         ],
//         2: [
//             'data421',
//             'data422',
//             'data423',
//         ],
//     },
// ];
// // С помощью вложенных циклов выведите на экран все строки с данными.
// for (const dataKey in data) {
//     for (const dataKeyKey in data[dataKey]) {
//         for (const dataKeyKeyElement of data[dataKey][dataKeyKey]) {
//             console.log(dataKeyKeyElement)
//
//         }
//
//     }
//
// }

// let employees = [
//     {
//         name: 'name1',
//         salary: 300,
//     },
//     {
//         name: 'name2',
//         salary: 400,
//     },
//     {
//         name: 'name3',
//         salary: 500,
//     },
// ];
//
// for (const employee of employees) {
//     console.log(`${employee.name} ${employee.salary}`)
//
// }
//
// // let employees = [
// //     {
// //         name: 'name1',
// //         salary: 300,
// //         age: 28,
// //     },
// //     {
// //         name: 'name2',
// //         salary: 400,
// //         age: 29,
// //     },
// //     {
// //         name: 'name3',
// //         salary: 500,
// //         age: 30,
// //     },
// //     {
// //         name: 'name4',
// //         salary: 600,
// //         age: 31,
// //     },
// //     {
// //         name: 'name5',
// //         salary: 700,
// //         age: 32,
// //     },
// // ];
// //
// // for (const employee of employees) {
// //     console.log(employee.age > 30 ? `${employee.name}` : '')
// // }
// let months = {
//     'ru': [
//         'январь',
//         'февраль',
//         'март',
//         'апрель',
//         'май',
//         'июнь',
//         'июль',
//         'август',
//         'сентябрь',
//         'октябрь',
//         'ноябрь',
//         'декабрь',
//     ],
//     'en': [
//         'january',
//         'february',
//         'march',
//         'april',
//         'may',
//         'june',
//         'july',
//         'august',
//         'september',
//         'october',
//         'november',
//         'december',
//     ],
// };
// let lang = 'ru'; // может быть или 'ru' или 'en'
// let month = 5;   // число от 0 до 11
//
// console.log(months[lang][month])

// let affairs = {
//     '2018': {
//         11: {
//             29: ['дело111', 'дело112', 'дело113'],
//             30: ['дело121', 'дело122', 'дело123'],
//         },
//         12: {
//             30: ['дело211', 'дело212', 'дело213'],
//             31: ['дело221', 'дело222', 'дело223'],
//         },
//     },
//     '2019': {
//         12: {
//             29: ['дело311', 'дело312', 'дело313'],
//             30: ['дело321', 'дело322', 'дело323'],
//             31: ['дело331', 'дело332', 'дело333'],
//         }
//     },
// }
// for (const affairsKey in affairs) {
//     for (const affairsKeyKey in affairs[affairsKey]) {
//         for (const affairsKeyKeyKey in affairs[affairsKey][affairsKeyKey]) {
//             for (const affairsKeyKeyKeyElement of affairs[affairsKey][affairsKeyKey][affairsKeyKeyKey]) {
//                 console.log(affairsKeyKeyKeyElement)
//             }
//         }
//     }
// }
//
// let year = '2018'
// let month = 11
// let day = 29
// let aff = affairs[year][month][day]
// console.log(aff)

// let obj = {
//     key1: {
//         key2: '12',
//         key3: '13',
//     },
//     key2: {
//         key4: '24',
//         key5: '25',
//     },
// }
//
// let key1 = 'key2';
// console.log(obj[key1]['key4']);
// let employees = [
//     {
//         name: 'name1',
//         salary: 300,
//         age: 28,
//     },
//     {
//         name: 'name2',
//         salary: 400,
//         age: 29,
//     },
//     {
//         name: 'name3',
//         salary: 500,
//         age: 30,
//     },
// ];
// employees.push({        name: 'name3',
//     salary: 400,
//     age: 29,})
// console.log(employees)

// let students = {
//     'group1': ['student11', 'student12', 'student13'],
//     'group2': ['student21', 'student22', 'student23'],
//     'group3': ['student31', 'student32'],
// };

// let students = {
//     'group1': {
//         'subgroup11': ['student111', 'student112', 'student113'],
//         'subgroup12': ['student121', 'student122', 'student123'],
//     },
//     'group2': {
//         'subgroup21': ['student211', 'student212', 'student213'],
//         'subgroup22': ['student221', 'student222', 'student223'],
//     },
//     'group3': {
//         'subgroup31': ['student311', 'student312', 'student313'],
//         'subgroup32': ['student321', 'student322', 'student323'],
//     },
// };
//
// students.group1.subgroup11.push('st')
// students.group1.subgroup13 = ['dsadas']
// students.group4 ={'subgroup4':['sdsadasd']}
// console.log(students)

// console.log(Math.pow(2, 10))
// console.log(Math.sqrt(245))
//
// let arr = [4, 2, 5, 19, 13, 0, 10]
// let total = 0
// for (let i = 0; i < arr.length; i++) {
//     total += Math.sqrt(Math.pow(arr[i], 3))
// }
// console.log(total)

// Найдите квадратный корень из 587. Округлите результат в большую и меньшую
// стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
// console.log(Math.floor(Math.sqrt(587)))
// console.log(Math.ceil(Math.sqrt(587)))


// console.log(Math.random() * (100) + 1)
//
// let arr = []
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 100 + 1))
//
// }
// console.log(arr)

// Даны переменные a и b. Найдите модуль разности a и b.
//     Проверьте работу скрипта самостоятельно для различных a и b.

// Даны переменные a и b. Найдите модуль разности a и b.
//     Проверьте работу скрипта самостоятельно для различных a и b.
// let a = 5
// let b = 8
// console.log(Math.abs(b-a))
//
// let str = 'aaAa'
//
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// Write function parseF which takes an input and returns a number or null if conversion is not possible.
//     The input can be one of many different types so be aware.
// function parseF(s) {
//
//     return isNaN(parseFloat(s)) ? null : parseFloat(s);
// }

// Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript'
// тремя разными способами (через substr, substring, slice).

// let str = 'я учу javascript!'
// console.log(str.slice(2,6))
// console.log(str.substring(2,6))
// console.log(str.substr(2,3))

// №1⊗jsPmSMSS
//
// Дана строка. Проверьте, начинается ли эта строка на 'http://'.
//
// №2⊗jsPmSMSS
//
// Дана строка. Проверьте, заканчивается ли эта строка на '.html'.

// let str = 'http://';
// let str1 = 'ddasdas.html';
// console.log(str1.endsWith('.html'))

// №1⊗jsPmSMSRe
//
// Дана строка '1-2-3-4-5'. Поменяйте все дефисы на точки.

// let stringd = '1-2-3-4-5';
// while(stringd.includes('-')){
//     stringd = stringd.replace('-','.')
// }
// console.log(stringd)

// №1⊗jsPmSMSP
//
// Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.
//
// let str = '1-2-3-4-5'
// let arr = str.split('-')
// console.log(arr)
// №2⊗jsPmSMSP
//
// Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
//

// let stre = '12345'
// let arr = stre.split('')
//
// console.log(arr)
// №3⊗jsPmSMSP
//
// Дан следующий массив:
//
// let arr = [1, 2, 3, 4, 5];
// // С помощью метода join слейте его в строку '1-2-3-4-5'.
// let s = arr.join('-')
// console.log(s)

// №1⊗jsPmSMBE
//
// Дан следующий массив:
//
//   let arr =   [1, 2, 3]
// let firstElement = arr.shift()
// console.log( firstElement)
// Выведите на экран первый элемент этого массива.
//
// №2⊗jsPmSMBE
//
// Дан следующий массив:
//
//     [1, 2, 3]
// Выведите на экран последний элемент этого массива.
//
//   let arr =   [1, 2, 3]
// let firstElement = arr.pop()
// console.log( firstElement)
// №3⊗jsPmSMBE
//
// Дан следующий массив:
//
//     [1, 2, 3]
// Добавьте ему в конец элементы 4, 5, 6.
// let arr =   [1, 2, 3]
// let f = arr.push(4,5,6)
// console.log( arr)
//
// №4⊗jsPmSMBE
//
// Дан следующий массив:
//
//     [1, 2, 3]
// Добавьте ему в начало элементы 4, 5, 6.

// let arr = [1,2,3]
// arr.unshift(4,5,6)
// console.log(arr)

// №1⊗jsPmSMAP
//
// Дан следующий массив:
//
//   let arr =   [1, 2, 3, 4, 5]
//
// console.log(arr.slice(0,3))
// console.log(arr.slice(3))
// Сделайте из этого массива следующий:
//
//     [1, 2, 3]
// №2⊗jsPmSMAP
//
// Дан следующий массив:
//
//     [1, 2, 3, 4, 5]
// Используя этот массив, запишите в новую переменную следующий массив:
//
//     [4, 5]

// №1
//
// Дана некоторая строка, например, вот такая:
//


// Получите массив позиций всех нулей в этой в строке.
// let str ='023m0df0dfg0'
// let arr = []
// for (let i = 0; i < str.length; i++) {
//     if(str[i]==='0'){
//         arr.push(i)
//     }
// }
// console.log(arr)

// №2
//
// Дана некоторая строка:

// №1⊗jsPmSMAC
//
// Дан следующий массив:
//
//    let arr = [1, 2, 3, 4, 5]
// // С помощью метода splice преобразуйте массив в следующий:
// //
// arr.splice(1,2)
// console.log(arr)
//     [1, 4, 5]
// №2⊗jsPmSMAC
//
// Дан следующий массив:
//
// let arr = [1, 2, 3, 4, 5]
// // С помощью метода splice сделайте из него массив:
// arr.splice(3, 0, 'a', 'b', 'c')
// console.log(arr)
// //
// //     [1, 2, 3, 'a', 'b', 'c', 4, 5]
// // №3⊗jsPmSMAC
// //
// // Дан следующий массив:
// //
// let arr1 = [1, 2, 3, 4, 5]
// // С помощью метода splice сделайте из него массив:
// //
// // arr1.splice(1, 4, 'a', 'b', 2, 3, 4, 'c', 5, 'e')
// // console.log(arr1)
// arr1.splice(1,0,'a','b')
// arr1.splice(6,0,'c')
// arr1.splice(8,0,'e')
//
// console.log(arr1)
// //     [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

// ан следующий массив:
//
//    let arr = [1, 2, 3, 4, 5]
// // Проверьте, есть ли в этом массиве число 3.
//
// console.log(arr.includes(3));
// console.log(arr.lastIndexOf(3));

// let obj = {a: 1, b: 2, c: 3};
// console.log(Object.keys(obj))
//
// №1⊗jsPmSMMst
//
// Код должен найти сумму цифр числа:
//
// let num = 12345;
// let arr = String(num)
// //
// let sum = 0;
// for (let digit of arr) {
//     sum += +digit;
// }
//
// console.log(sum);
// №2⊗jsPmSMMst
//
// Код должен найти сумму цифр числа:
//
//     let num = 12345;
// let arr = String(num).split('');
// //
// let sum = 0;
// for (let digit of arr) {
//     sum += +digit;
// }
//
// console.log(sum);
// №3⊗jsPmSMMst
//
// Код должен найти сумму цифр числа:
//
//     let num = 12345;
// let arr = String(num).split('');
//
// let sum = 0;
// for (let digit of arr) {
//     sum += Number(digit);
// }
//
// console.log(sum); // почему-то выводит 5, а не 15
// №4⊗jsPmSMMst
//
// Код должен найти сумму цифр числа:
//
// let num = 12345;
// let arr = String(num).split('');
//
// let sum = 0;
// for (let digit of arr) {
//     sum += Number(digit);
// }
// console.log(sum);
// №5⊗jsPmSMMst
//
// Код должен найти произведение цифр числа:
//
//     let num = 12345;
// let arr = String(num).split('');
//
// let prod = 1;
// for (let digit of arr) {
//     prod *= +digit;
// }
//
// console.log(prod);

// №1⊗jsPmFBInr
//
// Сделайте функцию, выводящую в консоль ваше имя.

// function func() {
//     console.log('Æ')
// }
//
// func()
// //
// // №2⊗jsPmFBInr
// //
// // Сделайте функцию, выводящую в консоль сумму чисел от 1 до 100.
//
// function f() {
//     let sum = 0
//     for (let i = 0; i < 100; i++) {
//         sum += i
//     }
//     console.log(sum)
// }
// f()

// №1⊗jsPmFBPr
//
// Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.


//
// №2⊗jsPmFBPr
//
// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное.
//     В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.


// №1⊗jsPmFBRt
//
// Сделайте функцию, которая параметром принимает число, а возвращает куб этого
// числа. С помощью этой функции найдите куб числа
// 3 и запишите его в переменную res.

// let res = function f(n) {
//     console.log(n**3)
// }
// res(3)
// №2⊗jsPmFBRt
//
// Сделайте функцию, которая параметром принимает число
//     , а возвращает квадратный корень из этого числа. С помощью этой функции
// найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.

// №1⊗jsPmFBSC
//
// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:
//
//     function sqrt(num) {
//         return Math.sqrt(num);
//     }
// //
// function round(num) {
//     return num.toFixed(3);
// }
// let res = round(sqrt(2))
// console.log(res)
// С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.
//
// №2⊗jsPmFBSC
//
// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:
//
// function func(num) {
//     if (num <= 0) {
//         return Math.abs(num);
//     }
//
//     return num ** 2;
// }
//
// console.log( func(10) );
// console.log( func(-5) );

// Wilson primes satisfy the following condition. Let P represent a prime number.
//
//     Then,
//
//     ((P-1)! + 1) / (P * P)
// should give a whole number.
//
//     Your task is to create a function that returns true if the given number is a Wilson prime.

// function amIWilson(p) {
//     let a = 1
//     for (let i = 1; i < p; i++) {
//         a *= i
//     }
//     return (a+1)/(p*p)%1===0
// }

// function func(num) {
//     let sum = 0;
//
//     for (let i = 1; i <= num; i++) {
//         sum += i;
//         return sum;
//     }
// }
//
// console.log( func(5) );

// Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз,
//     пока результат не станет меньше 10.
// Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.

// function func(n) {
//     let result = 0
//     for (let i = 0; i < n; i++) {
//         result = result /n
//         if (result < 10) {
//             return result
//         }
//     }
// }
//
//
// console.log(func(500))

// Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше
// 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.

// function func(n) {
//     let result = 0
//     for (let i = 0; i < n; i++) {
//         result = result /n
//         if (result < 10) {
//             return result
//         }
//     }
//
// }
//
// function func(num1, num2) {
//
//     if (num1 > 0 && num2 > 0) {
//         return num1 * num2;
//     } else {
//         return num1 - num2;
//     }
//
// }
//
// console.log(func(3, 4));
//
// function func(num1, num2) {
//     let res;
//
//     if (num1 > 0 && num2 > 0) {
//         res = num1 * num2;
//     } else {
//         res = num1 - num2;
//     }
//
//     return res;
// }
//
// console.log(func(3, 4));

// №1⊗jsPmFBFl
//
// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве
// являются четными числами.

// function func(arr) {
//     for (let arrElement of arr) {
//        return arr[arrElement] % 2 === 0
//     }
// }


//
// №2⊗jsPmFBFl
//
// Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.

// function allDigitsOdd(number) {
//     const digits = number.toString();
//     for (let i = 0; i < digits.length; i++) {
//         const digit = Number(digits[i]);
//         if (digit % 2 === 0) {
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(allDigitsOdd(11))
//
// №3⊗jsPmFBFl
//
// Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых
// элемента подряд.

