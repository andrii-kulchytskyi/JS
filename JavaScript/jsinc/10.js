// const server = {
//     getData() {
//         const promise = new Promise((res, rej) => {
//             setTimeout(() => {
//                 rej('no data')
//             }, 2000)
//         })
//         return promise
//     }
// }
// const pr = server.getData().then((result) => {
//
// }).catch((e) => {
//
// }).finally((e) => {
//
// })
//
// let obj = {x: 1, y: 2, z: 3};
// let squeredVal = Object.values(obj).map(i => i ** 2)
// console.log(squeredVal)
// console.log(Object.keys(obj).length)
//
// // delay(ms)
// function delay(ms) {
//     const prom = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(resolve())
//         }, ms)
//     })
//     return prom
// }

// let key = 'x';
//
// let obj = {
//     [key]: 1,
//     y: 2,
//     z: 3
// };
// console.log(obj)

// let obj = {x: 1, y: 2, z: 3};
// delete obj.x;
//
// console.log('x' in obj);

// let calculator = {
//     // ... ваш код ...
//     read() {
//         this.a = +prompt('a?', 0)
//         this.b = +prompt('b?', 0)
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul(){
//         return this.a * this.b
//     }
//
// };
//
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// console.log( typeof {x: 1, y: 2, z: 3} );

// let obj = {x: 1, y: 2, z: 3};
// console.log( typeof obj['x'] );

// let ladder = {
//     step: 0,
//     up() {
//         return this.step++;
//     },
//     down() {
//         return this.step--;
//     },
//     showStep: function () { // показывает текущую ступеньку
//         alert(this.step);
//     }
// };
// let obj = {}
// function A() {
//     return b
// }
//
// function B() {
//     return a
// }
//
// let a = new A();
// let b = new B();
//
// console.log(a===b)


// let arr1 = [1, 2, 3];
// let arr2 = arr1;
//
// arr1[0] = 'a';
// console.log(arr2);

//
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
//
// arr1[0] = 'a';
// arr2[0] = 'b';
//
// console.log(arr2);
//
// let obj = {x: 1, y: 2, z: 3};
//
// console.log(obj.toArray().length);

function Accumulator(value) {
    this.read = function () {
        this.newVal = 0
        return value += this.newVal
    }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений