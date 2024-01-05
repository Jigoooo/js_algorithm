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


var o;

// 프로토타입이 null인 객체 생성
o = Object.create(null);

o = {};
// 위는 아래와 같습니다:
o = Object.create(Object.prototype);

// 샘플 속성 두개를 갖는 객체를 만드는 예.
// (두 번째 매개변수는 키를 *속성 설명자*에 맵핑함을 주의하세요.)
o = Object.create(Object.prototype, {
    // foo는 정규 '값 속성'
    foo: { writable: true, configurable: true, value: "hello" },
    // bar는 접근자(accessor, getter-및-setter) 속성
    bar: {
        configurable: false,
        get: function () {
            return 10;
        },
        set: function (value) {
            console.log("Setting `o.bar` to", value);
        },
        /* ES5 접근자로 코드는 이렇게 할 수 있습니다
        get function() { return 10; },
        set function(value) { console.log('setting `o.bar` to', value); } */
    },
});


class Search1 {
    constructor(value) {
        this.value = value;
    }
    [Symbol.search](string) {
        return string.indexOf(this.value);
    }
}

console.log('foobar'.search(new Search1('bar')));
