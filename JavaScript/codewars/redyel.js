function updateLight(current) {

    //your code here!
    switch(current){
        case "green":
            return "yellow";
        case "red":
            return "green";
        case "yellow":
            return "red";
    }
    return current
}