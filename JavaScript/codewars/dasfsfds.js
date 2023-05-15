// function sumStr(a,b) {
//     return (BigInt(a)+BigInt(b)).toString();
// }
// let arr = ['a', 'b', 'c', 'd', 'e'];
// delete arr[0]
// delete arr[3]
// console.log(arr.length)


// Создайте пустой объект user.


//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.
// let user = {}
// user.name = 'John'
// user.surname = 'Smith'
// user.name = 'Pete'
// // delete user.name
// console.log(user)

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false
//     }
//     return true
// }
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// function dsad() {
//     let salaries = {
//         John: 100,
//         Ann: 160,
//         Pete: 130
//     }
//     for(let key in salaries){
//         return false
//     }
//     let sum = 0
//     for (const salariesKey in salaries) {
//         sum+=salaries[salariesKey]
//     }
//     return console.log(sum)
// }
// dsad()
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//
// Если объект salaries пуст, то результат должен быть 0.

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {

        if (typeof obj[key] == 'number') {
            obj[key] *= 2
        }
    }
}