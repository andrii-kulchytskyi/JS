function betterThanAverage(classPoints, yourPoints) {
    let totalAv = 0;
    for(let i = 0; classPoints.length>i;i++){
        totalAv+= classPoints[i]/classPoints.length;
    }
    return yourPoints > totalAv;
}
