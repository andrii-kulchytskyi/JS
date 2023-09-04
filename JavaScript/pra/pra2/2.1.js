// №1⊗jsPmFCCl
//
// Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик.

let schet = function () {
    let num = 1
    return function () {
        console.log(num)
        num++
        if (num > 5) {
            num = 1
        }
    }
}()
schet()
schet()
schet()
schet()
schet()
schet()
//
// №2⊗jsPmFCCl
//
// Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала.