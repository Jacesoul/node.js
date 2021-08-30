const fs = require('fs');

// 콜백형식을 가지고 있다. 보통 err와 data형식으로 가지고 있다. 
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data)
    console.log(data.toString())
})


// <Buffer ec a0 80 eb a5 bc 20 ec 9d bd ec 96 b4 ec a3 bc ec 84 b8 ec 9a 94 2e 20>
// 버퍼는 컴퓨터의 바이너리 형식(2진법)을 16진법으로 바꾼것