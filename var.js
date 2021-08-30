const {
    checkOddOrEven
} = require('./func');

const odd = '홀수입니다.';
const even = '짝수입니다.';



exports.odd = odd;
exports.even = even;

module.exports = {
    odd, // odd : odd 최신문법에서 키와 값이 같은 경우에 생략가능 
    even, // even :even 
}

module.exports === exports === {
    odd,
    even
}

// But, module.exports에 함수를 넣는다면 이야기가 달라진다. 
module.exports = checkOddOrEven;

module.exports !== exports === {}

// 한가지의 함수만 모듈로 배고 싶다면 module.exports에서 하나만 넣는게 좋고 만약에 여러개를 넣고 싶으면 module.exports에 객체형태로 넣거나 exports.odd==odd 형식으로 넣으면 된다. exports를 썼다면 module.exports를 사용하면 안된다. (같이 사용할수는 없다)