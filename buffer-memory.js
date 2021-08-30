const fs = require('fs')
const rss = require('rss');


console.log('before:', process.memoryUsage().rss);

const data1 = fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt', data1)
console.log('buffer:', process.memoryUsage(), rss)