function loopOverTen(action) {
    for (var i = 0; i < 10; i++) {
        action(i);
    }
}

// loopOverTen(function(number) {
//     console.log(number);
// });

loopOverTen(number => console.log(number));

loopOverTen(number => {
    console.log(number);
    console.log(number * 10);
});

var noParamFuc = () => console.log('no params');
noParamFuc();

multiParamFinc = (left, right) => left + right;
console.log(multiParamFinc(10, 20));

var obj = {
    name: "Lukasz",

    showName() {
        var that = this;

        setTimeout(function () {
            console.log(`My name is ${that.name}`);
        }, 500);

        setTimeout(() => {
            console.log(`My name is still ${this.name}`);
        }, 1000);
    }
}

obj.showName();