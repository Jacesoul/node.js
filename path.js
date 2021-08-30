const path = require('path');

path.join(__dirname, 'var.js')
// Development/node_textbook/var.js
// Mac과 Linux를 합쳐서 POSIX라고 부른다. 

console.log(path.join(__dirname, '..', '/var.js'))
// Development/var.js

console.log(path.resolve(__dirname, '..', '/var.js')) // '/var.js'는 절대경로 )

// path는 절대경로를 무시한다. resolve는 절대경로를 존중한다.