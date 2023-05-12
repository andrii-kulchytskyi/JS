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