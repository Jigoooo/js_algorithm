const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let newLine = '';
let input = [];

readline.on('line', function(line) {
    newLine += line + '\n';
}).on('close', function(){
    input = newLine.split('\n');
    const num1 = parseInt(input[0], 10);
    const num2 = parseInt(input[1], 10);

    const oneNum = num2 % 10;
    const tenNum = Math.floor((num2 % 100)/10);
    const hundredNum = Math.floor(num2 /100);

    console.log(num1 * oneNum);
    console.log(num1 * tenNum);
    console.log(num1 * hundredNum);
    console.log(num1 * num2);
    process.exit();
});
