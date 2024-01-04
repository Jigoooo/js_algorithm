const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => Number(el));
}).on('close', function(){

    process.exit();
});


const myObj = {
    myMethod: function(params) {
        // 뭔가 하기...
    },

    // 이렇게도  동작해요
    myOtherMethod(params) {
        console.log(params);
    }
};

myObj.myOtherMethod('123')
