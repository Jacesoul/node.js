const http = require('http')

const server = http.createServer((req, res) => {
    // 사파라의 경우 아래 res.write이 html인지 몰라서 writeHead에서 명시를 해줘야한다.
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    res.write('<h1>hello world!</h1>') // 스트림 
    res.write('<p>hello server</p>')
    res.end('<p>hello Jace</p>')
}).listen(8080)

server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기중입니다. ')
})
server.on('error', (error) => {
    console.error(error);
})
// 노드가 서버를 프로세스로 올려줘야한다. 보통 프로세스로 올릴때는 포트가 하나 필요하다. 

const server1 = http.createServer((req, res) => {
    // 사파라의 경우 아래 res.write이 html인지 몰라서 writeHead에서 명시를 해줘야한다.
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    res.write('<h1>hello world!</h1>') // 스트림 
    res.write('<p>hello server</p>')
    res.end('<p>hello Jace</p>')
}).listen(8081)