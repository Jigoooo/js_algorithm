const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input += line + '\n';
}).on('close', function(){
    const [firstLine, secondLine] = input.split('\n');
    const firstValueSplit = firstLine.split(' ');
    let hour = Number(firstValueSplit[0]);
    let minute = Number(firstValueSplit[1]);
    const cookingTime = Number(secondLine);

    minute += cookingTime;
    if(minute >= 60) {
        hour += Math.floor(minute / 60);
        minute %= 60;
    }

    if (hour >= 24) hour -= 24;

    console.log(`${hour} ${minute}`);
    process.exit();
});
