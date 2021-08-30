// 구조분해 할당할때에는 속성명과 변수명이 같아야한다. 
const {
    odd,
    even
} = require('./var');
console.time('jace')
// 변수 이름은 자유롭게 할수 있다. 
const {
    checkOddOrEven
} = require('./func');

function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd;
    } else {
        return even;
    }
}
console.timeEnd('jace')
console.log(checkOddOrEven(10));
console.log(checkStringOddOrEven('hello'))