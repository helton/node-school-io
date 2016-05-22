var sum = process.argv.slice(2).map(Number).reduce((prev, curr) => prev + curr);
console.log(sum);