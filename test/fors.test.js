const fors = require('../src/fors');

function Console() {
    return {
        arr: [],
        log: function (msg) {
            this.arr.push(msg);
        },
    };
}

describe('fors module testing', function () {
    test('print1To20', () => {
        const console = new Console();
        fors.print1To20(console);
        expect(console.arr)
            .toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
    });

    test('print20To1', () => {
        const console = new Console();
        fors.print20To1(console);
        expect(console.arr)
            .toEqual([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]);
    });

    test('print1To28Step3', () => {
        const console = new Console();
        fors.print1To28Step3(console);
        expect(console.arr)
            .toEqual([1,4,7,10,13,16,19,22,25,28]);
    });

    test('printFrom30To6Step4Descending', () => {
        const console = new Console();
        fors.printFrom30To6Step4Descending(console);
        expect(console.arr)
            .toEqual([30,26,22,18,14,10,6]);
    });

    test('printMultiplicationTable', () => {
        const console = new Console();
        fors.printMultiplicationTable(console);
        expect(console.arr)
            .toEqual([
                1,2,3,4,5,6,7,8,9,
                2,4,6,8,10,12,14,16,18,
                3,6,9,12,15,18,21,24,27,
                4,8,12,16,20,24,28,32,36,
                5,10,15,20,25,30,35,40,45,
                6,12,18,24,30,36,42,48,54,
                7,14,21,28,35,42,49,56,63,
                8,16,24,32,40,48,56,64,72,
                9,18,27,36,45,54,63,72,81,
            ]);
    });

    test('calculateFactorialUpToOneMillion', () => {
        expect(fors.calculateFactorialUpToOneMillion(1)).toEqual(1);
        expect(fors.calculateFactorialUpToOneMillion(2)).toEqual(2);
        expect(fors.calculateFactorialUpToOneMillion(3)).toEqual(6);
        expect(fors.calculateFactorialUpToOneMillion(4)).toEqual(24);
        expect(fors.calculateFactorialUpToOneMillion(5)).toEqual(120);
        expect(fors.calculateFactorialUpToOneMillion(6)).toEqual(720);
        expect(fors.calculateFactorialUpToOneMillion(7)).toEqual(5040);
        expect(fors.calculateFactorialUpToOneMillion(8)).toEqual(40320);
        expect(fors.calculateFactorialUpToOneMillion(9)).toEqual(362880);
        expect(fors.calculateFactorialUpToOneMillion(10)).toEqual(1814400);
        expect(fors.calculateFactorialUpToOneMillion(11)).toEqual(1663200);
        expect(fors.calculateFactorialUpToOneMillion(12)).toEqual(3991680);
    });
});
