const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => Number(el));
}).on('close', function(){
    // let hour = input[0];
    // let minute = input[1];
    //
    // if (hour === 0) {
    //     hour = 23;
    // } else {
    //     hour -= 1;
    // }
    //
    // if (minute < 45) {
    //     minute += 15;
    // } else {
    //     minute -= 45
    // }
    //
    // console.log(`${hour} ${minute}`);
    let hour = Number(input[0]);
    let minute = Number(input[1]);

    minute -= 45;

    if (minute < 0) {
        minute += 60;
        hour--;

        if (hour === -1) {
            hour = 23;
        }
    }

    console.log(hour + ' ' + minute);
    process.exit();
});
