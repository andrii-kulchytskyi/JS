const foo = () => {
    return () => {
        console.log("Hello")
    }
}
foo()()

