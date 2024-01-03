const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input;

readline.on('line', function(line) {
    input = Number(line);
}).on('close', function(){
    const testScore = input;

    if (testScore >= 90 && testScore <= 100) {
        console.log('A');
    } else if (testScore >= 80 && testScore < 90) {
        console.log('B');
    } else if (testScore >= 70 && testScore < 80) {
        console.log('C');
    } else if (testScore >= 60 && testScore < 70) {
        console.log('D');
    } else {
        console.log('F');
    }

    process.exit();
});
