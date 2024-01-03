const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = '';

readline.on('line', function(line) {
    input += line + '\n';
}).on('close', function(){
    const coordinates = input.split('\n');
    const x = Number(coordinates[0]);
    const y = Number(coordinates[1]);

    if (x > 0 && y > 0) {
        console.log('1');
    } else if (x < 0 && y > 0) {
        console.log('2');
    } else if (x < 0 && y < 0) {
        console.log('3');
    } else if (x > 0 && y < 0) {
        console.log('4');
    }

    process.exit();
});
