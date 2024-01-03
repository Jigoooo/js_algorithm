const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    const num1 = input[0];
    const num2 = input[1];
    const num3 = input[2];

    console.log(num1 + num2 + num3);
    process.exit();
});
