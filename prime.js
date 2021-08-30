const min = 2;
const max = 10000000;
const primes = [];

// 에라토스테네스의 체 

function generatePrimes(start, range) {
    let isPrime = true;
    const end = start + range;
    for (let i = start; i < end; i++) {
        for (let j = min; j < Math.sqrt(end); j++) {
            if (i !== j && i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i)
        }
        isPrime = true;
    }
}

console.time('prime')
generatePrimes(min, max);
console.timeEnd('prime')
console.log(primes.length)