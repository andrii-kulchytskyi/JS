// // // №1
// // //
// // // Заполните массив целыми числами от 1 до 10.
// // let arr = []
// // for (let i = 1; i < arr.length; i++) {
// //     arr.push(i)
// // }
// // //
// // // №2
// // //
// // // Заполните массив четными числами из промежутка от 1 до 100.
// // let arr1 = []
// // for (let i = 1; i < 100; i++) {
// //     if (arr1[i] % 2 === 0) {
// //         arr1.push(i)
// //     }
// // }
// // console.log(arr1)
// // //
// // // №3
// // //
// // // Дан массив с дробями:
// // //
// // //     [1.456, 2.125, 3.32, 4.1, 5.34]
// // // Округлите эти дроби до одного знака в дробной части.
// //
// // let array = [1.456, 2.125, 3.32, 4.1, 5.34]
// // for (let i = 0; i < array.length; i++) {
// //     array[i] = array[i].toFixed(4)
// // }
// //
// // // Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.
// // //
// //
// // function isDigit(s) {
// //     //your code
// //     return s == parseFloat(s);
// //
// // }
// //
// // let age = 19;
// // let res;
// //
// // if (age >= 18) {
// //     if (age <= 23) {
// //         res = 'от 18 до 23';
// //     } else {
// //         res = 'больше 23';
// //     }
// // } else {
// //     res = 'меньше 18';
// // }
// //
// // console.log(res);
//
// Дана переменная, содержащая некоторую строку. Проверьте, что эта строка начинается на символ 'a'.
//
let a = 'asdasdasd'
if (a[0] === 'a') {
    console.log('true')
} else {
    console.log('false')
}
// №2⊗jsPmCdExSCH
//
// Дана переменная, содержащая некоторую строку. Проверьте, что эта строка заканчивается на символ 'x'.
//
let a = 'asdasdasdx'
if (a[a.length - 1] === 'x') {
    console.log('true')

} else {
    console.log('false')

}
// №3⊗jsPmCdExSCH
//
// Дана переменная, содержащая некоторую строку. Проверьте, что эта строка начинается на символ 'a' или символ 'b'.

let a = 'asdasdasdx'
if(a[0]==='a' || a[0] === 'b'){
    console.log('true')
}