const fors = require('../src/fors');

describe('fors module testing', function () {
    test('print1To20', () => {
        const console = {
            arr: [],
            log: function (msg) {
                this.arr.push(msg);
            },
        }
        fors.print1To20(console);
        expect(console.arr)
            .toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
    });

    test('print20To1', () => {
        const console = {
            arr: [],
            log: function (msg) {
                this.arr.push(msg);
            },
        }
        fors.print20To1(console);
        expect(console.arr)
            .toEqual([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]);
    });

    test('print1To28Step3', () => {
        const console = {
            arr: [],
            log: function (msg) {
                this.arr.push(msg);
            },
        }
        fors.print1To28Step3(console);
        expect(console.arr)
            .toEqual([1,4,7,10,13,16,19,22,25,28]);
    });

    test('printFrom30To6Step4Descending', () => {
        const console = {
            arr: [],
            log: function (msg) {
                this.arr.push(msg);
            },
        }
        fors.printFrom30To6Step4Descending(console);
        expect(console.arr)
            .toEqual([30,26,22,18,14,10,6]);
    });
});
