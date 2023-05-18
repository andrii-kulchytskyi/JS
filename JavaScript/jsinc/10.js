const server = {
    getData() {
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                rej('no data')
            }, 2000)
        })
        return promise
    }
}
const pr = server.getData().then((result) => {

}).catch((e) => {

}).finally((e) => {

})

let obj = {x: 1, y: 2, z: 3};
let squeredVal = Object.values(obj).map(i => i ** 2)
console.log(squeredVal)
console.log(Object.keys(obj).length)

// delay(ms)
function delay(ms) {
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(resolve())
        }, ms)
    })
    return prom
}
