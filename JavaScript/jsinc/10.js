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

let calculator = {
    // ... ваш код ...
    sum:()=>{
        let a;
        let b;
        alert(a)
        alert(b)
    },

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );