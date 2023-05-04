const foo = () => {
    return () => {
        console.log("Hello")
    }
}
foo()()

function counter() {
    let count = 0
    const a = () => {
        console.log(count++)
    }
    console.log(count)
    return a
}

const count = counter()
count()
count()
count()


// function counter1() {
//
//     function a() {
//         let count = 0
//         console.log(count++)
//     }
//
//     // console.log(count)
//     return a
// }
//
// const count1 = counter1()
// count1()
// count1()
// count1()
