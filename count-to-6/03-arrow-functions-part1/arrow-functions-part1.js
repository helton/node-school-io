var inputs = process.argv.slice(2);
var result = inputs.map(s => s[0])
                   .reduce((acc, s) => acc + s);
console.log(`[${inputs}] becomes "${result}"`);