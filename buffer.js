const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log(buffer);
console.log(buffer.length); // 32 -> 32 바이트 
console.log(buffer.toString())

// 버퍼 여러개를 쪼개서 array에 있는 상태 
// 이런식으로 1MB가 100개가 들어오면 Buffer.concat으로 합칠수 있다. 
const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
console.log(Buffer.concat(array).toString());

// 가끔씩 데이터는 없는데 빈 버퍼를 만들때가 있다. 
console.log(Buffer.alloc(5)) // <Buffer 00 00 00 00 00> 5바이트의 버퍼 