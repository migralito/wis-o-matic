const fors = require('../src/fors');

function Console() {
    return {
        arr: [],
        log: function (msg) {
            this.arr.push(msg);
        },
    };
}

function Plotter() {
    return {
        arr: [],
        plot: function (...coordinates) {
            this.arr.push(coordinates);
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

    test('calculateFactorialUpToBoundary', () => {
        expect(fors.calculateFactorialUpToBoundary(1,  1000000)).toEqual(1);
        expect(fors.calculateFactorialUpToBoundary(2,  1000000)).toEqual(2);
        expect(fors.calculateFactorialUpToBoundary(3,  1000000)).toEqual(6);
        expect(fors.calculateFactorialUpToBoundary(4,  1000000)).toEqual(24);
        expect(fors.calculateFactorialUpToBoundary(5,  1000000)).toEqual(120);
        expect(fors.calculateFactorialUpToBoundary(6,  1000000)).toEqual(720);
        expect(fors.calculateFactorialUpToBoundary(7,  1000000)).toEqual(5040);
        expect(fors.calculateFactorialUpToBoundary(8,  1000000)).toEqual(40320);
        expect(fors.calculateFactorialUpToBoundary(9,  1000000)).toEqual(362880);
        expect(fors.calculateFactorialUpToBoundary(10, 1000000)).toEqual(1814400);
        expect(fors.calculateFactorialUpToBoundary(11, 1000000)).toEqual(1663200);
        expect(fors.calculateFactorialUpToBoundary(12, 1000000)).toEqual(3991680);

        let boundary = Math.random() * 100000;
        function expectedWeirdFactorial(n, aux = 1) {
            if (n <= 1) {
                let prev = aux;
                for (let i=2; aux >= boundary; i++) {
                    prev = aux;
                    aux = aux / i;
                }
                return prev;
            } else {
                return expectedWeirdFactorial(n-1, aux*n);
            }
        }
        expect(fors.calculateFactorialUpToBoundary(1,  boundary)).toEqual(expectedWeirdFactorial(1));
        expect(fors.calculateFactorialUpToBoundary(2,  boundary)).toEqual(expectedWeirdFactorial(2));
        expect(fors.calculateFactorialUpToBoundary(3,  boundary)).toEqual(expectedWeirdFactorial(3));
        expect(fors.calculateFactorialUpToBoundary(4,  boundary)).toEqual(expectedWeirdFactorial(4));
        expect(fors.calculateFactorialUpToBoundary(5,  boundary)).toEqual(expectedWeirdFactorial(5));
        expect(fors.calculateFactorialUpToBoundary(6,  boundary)).toEqual(expectedWeirdFactorial(6));
        expect(fors.calculateFactorialUpToBoundary(7,  boundary)).toEqual(expectedWeirdFactorial(7));
        expect(fors.calculateFactorialUpToBoundary(8,  boundary)).toEqual(expectedWeirdFactorial(8));
        expect(fors.calculateFactorialUpToBoundary(9,  boundary)).toEqual(expectedWeirdFactorial(9));
        expect(fors.calculateFactorialUpToBoundary(10, boundary)).toEqual(expectedWeirdFactorial(10));
        expect(fors.calculateFactorialUpToBoundary(11, boundary)).toEqual(expectedWeirdFactorial(11));
        expect(fors.calculateFactorialUpToBoundary(12, boundary)).toEqual(expectedWeirdFactorial(12));
    });

    test('incrementalCountdown', () => {
        const console = new Console();
        fors.incrementalCountdown(78, 39, console);
        expect(console.arr)
            .toEqual([78, 77, 75, 72, 68, 63, 57, 50, 42]);
    });

    test('sawtooth', () => {
        const plotter = new Plotter();
        fors.sawtooth(30, 7, plotter);
        expect(plotter.arr)
            .toEqual([
                [0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6],
                [7, 0], [8, 1], [9, 2], [10,3], [11,4], [12,5], [13,6],
                [14,0], [15,1], [16,2], [17,3], [18,4], [19,5], [20,6],
                [21,0], [22,1], [23,2], [24,3], [25,4], [26,5], [27,6],
                [28,0], [29,1],
            ]);
    });

    test('vaccinateBuilding', () => {
        expect(fors.vaccinateBuilding({
            floors: 4,
            rooms: 3,
            vaccinesNeeded: () => 2,
        })).toEqual(24);
        expect(fors.vaccinateBuilding({
            floors: 4,
            rooms: 3,
            vaccinesNeeded: (f) => f,
        })).toEqual(18);
        expect(fors.vaccinateBuilding({
            floors: 4,
            rooms: 3,
            vaccinesNeeded: (_,r) => r,
        })).toEqual(12);
        expect(fors.vaccinateBuilding({
            floors: 4,
            rooms: 3,
            vaccinesNeeded: (f,r) => f*r,
        })).toEqual(18);
    });

    test('pairCombinations', () => {
        const console = new Console();
        fors.pairCombinations(8, console)
        expect(console.arr).toEqual([
            '12', '13', '14', '15', '16', '17', '18',
            '23', '24', '25', '26', '27', '28',
            '34', '35', '36', '37', '38',
            '45', '46', '47', '48',
            '56', '57', '58',
            '67', '68',
            '78'
        ]);
    });

    test('plotTriangle', () => {
        const plotter = new Plotter();
        fors.plotTriangle(13, plotter);
        expect(plotter.arr.sort()).toEqual([
            [0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7], [0,8], [0,9], [0,10], [0,11], [0,12],
            [1,0], [1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7], [1,8], [1,9], [1,10], [1,11],
            [2,0], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8], [2,9], [2,10],
            [3,0], [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7], [3,8], [3,9],
            [4,0], [4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7], [4,8],
            [5,0], [5,1], [5,2], [5,3], [5,4], [5,5], [5,6], [5,7],
            [6,0], [6,1], [6,2], [6,3], [6,4], [6,5], [6,6],
            [7,0], [7,1], [7,2], [7,3], [7,4], [7,5],
            [8,0], [8,1], [8,2], [8,3], [8,4],
            [9,0], [9,1], [9,2], [9,3],
            [10,0], [10,1], [10,2],
            [11,0], [11,1],
            [12,0],
        ].sort());
    });

    test('plotTetrahedron', () => {
        const plotter = new Plotter();
        fors.plotTetrahedron(5, plotter);
        expect(plotter.arr.sort()).toEqual([
            // triangle size 5 on z=0
            [0,0,0], [0,1,0], [0,2,0], [0,3,0], [0,4,0],
            [1,0,0], [1,1,0], [1,2,0], [1,3,0],
            [2,0,0], [2,1,0], [2,2,0],
            [3,0,0], [3,1,0],
            [4,0,0],
            // triangle size 4 on z=1
            [0,0,1], [0,1,1], [0,2,1], [0,3,1],
            [1,0,1], [1,1,1], [1,2,1],
            [2,0,1], [2,1,1],
            [3,0,1],
            // triangle size 3 on z=2
            [0,0,2], [0,1,2], [0,2,2],
            [1,0,2], [1,1,2],
            [2,0,2],
            // triangle size 2 on z=3
            [0,0,3], [0,1,3],
            [1,0,3],
            // triangle size 1 on z=4
            [0,0,4],
        ].sort());
    });

    test('fibonacci', () => {
        expect(fors.fibonacci(0)).toEqual(0);
        expect(fors.fibonacci(1)).toEqual(1);
        expect(fors.fibonacci(2)).toEqual(1);
        expect(fors.fibonacci(3)).toEqual(2);
        expect(fors.fibonacci(4)).toEqual(3);
        expect(fors.fibonacci(5)).toEqual(5);
        expect(fors.fibonacci(6)).toEqual(8);
        expect(fors.fibonacci(7)).toEqual(13);
        expect(fors.fibonacci(8)).toEqual(21);
        expect(fors.fibonacci(98)).toEqual(135301852344706760000);
        expect(fors.fibonacci(99)).toEqual(218922995834555200000);
        expect(fors.fibonacci(100)).toEqual(354224848179262000000);
    });
});
