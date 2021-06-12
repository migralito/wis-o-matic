const printToConsole1to20 = require('./fors');

test('printToConsole1to20', () => {
    const console = {
        arr: [],
        log: function (msg) {
            this.arr.push(msg);
        },
    }
    printToConsole1to20(console);
    expect(console.arr).toEqual([
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
    ]);
});


