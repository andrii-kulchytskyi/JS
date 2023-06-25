// №1
//
// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

let arr = ['http://', 'https://', 'ftp://', 'ftps://', 'http://www.', 'https://www.', 'ftp://www.', 'ftps://www.'];

let result = arr.filter(function (elem) {
        return elem.indexOf('http://') === 0;
    }
);
console.log(result);
//
//     №2
//
// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
//

let arr1 = ['http://', 'https://', 'ftp://', 'ftps://.html', 'http://www.', 'https://www.', 'ftp://www.', 'ftps://www.'];
let res = arr1.filter(function (elem) {
        return elem.endsWith('.html')
    }
);
console.log(res);
// №3
//
// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.


let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res1 = arrayNum.map(function (elem) {
        return elem * 1.1;
    }
);
console.log(res1);

