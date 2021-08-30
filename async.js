const fs = require('fs');
// 비동기 함수들이기 때문에 콜백들을 백그라운드로 보낸다. 아래의 4개의 함수들이 동시에 실행이 된다. 누가 먼저 끝낼지는 운영체제에서만 알수 있다. 그래서 순서가 보장되지 않는다. 

fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
})

fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('2번', data.toString());
})

fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('3번', data.toString());
})

fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('4번', data.toString());
})