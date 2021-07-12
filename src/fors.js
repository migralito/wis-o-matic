/**
 * must print to console from 1 to 20
 * (ie: console.log(1), console.log(2), console.log(3))
 */
exports.print1To20 = function(console) {
    // TODO: FYI you can also do i<=20
    //  (let i = 1; i <  21; i++) {
    for (let i = 1; i <= 20; i++) {
        console.log(i)
    }
};

/**
 * Print to console a descending sequence from 20 to 1.
 *
 * ### Expected behavior
 * ```
 * console.log(20);
 * console.log(19);
 * ...
 * console.log(1);
 * ```
 *
 * ### Resources to use
 * - only for statement
 *
 * ### Estimated amount of time needed to complete the task
 * 2 minutes
 */
exports.print20To1 = function(console) {
    // TODO: FYI: you can also do i>=1
    //  (let i = 20; i >  0; i--) {
    for (let i = 20; i >= 1; i--) {
        console.log(i)
    }
}

/**
 * Print to console a sequence starting from 1, increasing by 3, until 28.
 *
 * ### Expected behavior
 * ```
 * console.log(1);
 * console.log(4);
 * console.log(7);
 * ...
 * console.log(28);
 * ```
 *
 * ### Resources to use
 * - only for statement
 *
 * ### Estimated amount of time needed to complete the task
 * 5 minutes
 */
exports.print1To28Step3 = function(console) {
    // TODO: FYI, you can also do <=28
    //  (let i = 1; i < 29;i += 3) {
    for (let i = 1; i <=28;i += 3) {
        console.log(i)
    }
}

/**
 * Print to console a descending sequence sequence starting from 30, decreasing by 4, stopping at 6.
 *
 * ### Expected behavior
 * ```
 * console.log(30);
 * console.log(26);
 * console.log(22);
 * ...
 * console.log(6);
 * ```
 *
 * ### Resources to use
 * - only for statement
 *
 * ### Estimated amount of time needed to complete the task
 * 5 minutes
 */
exports.printFrom30To6Step4Descending = function(console) {
    for (let i = 30; i > 5;i -= 4) {
        console.log(i)
    }
}

/**
 * Print to console the multiplication table from 1 to 9.
 *
 * ### Expected behavior
 * ```
 * console.log(1);  // 1x1
 * console.log(2);  // 1x2
 * ...
 * console.log(9);  // 1x9
 * console.log(2);  // 2x1
 * console.log(4);  // 2x2
 * ...
 * console.log(18); // 2x9
 * console.log(3);  // 3x1
 * console.log(6);  // 3x2
 * ...
 * console.log(27); // 3x9
 * ...
 * console.log(72); // 9x8
 * console.log(81); // 9x9
 * ```
 *
 * ### Resources to use
 * - for statement
 *
 * ### Estimated amount of time needed to complete the task
 * 5 to 15 minutes
 */
exports.printMultiplicationTable = function(console) {
    for (let i=1; i<10; i++) {
        for (let j=1; j<10; j++) {
            console.log(i*j)
        }
    }
}

/**
 * Return the factorial of a number, but stopping when calculation reaches a given boundary.
 *
 * ### Expected behavior
 * ```
 * calculateFactorialUpToOneMillion(1, 1000000) = 1
 * calculateFactorialUpToOneMillion(2, 1000000) = 2
 * calculateFactorialUpToOneMillion(3, 1000000) = 6
 * calculateFactorialUpToOneMillion(4, 1000000) = 24
 * calculateFactorialUpToOneMillion(5, 1000000) = 120
 * calculateFactorialUpToOneMillion(6, 1000000) = 729
 * calculateFactorialUpToOneMillion(7, 1000000) = 5040
 * calculateFactorialUpToOneMillion(8, 1000000) = 40320
 * calculateFactorialUpToOneMillion(9, 1000000) = 362880
 * calculateFactorialUpToOneMillion(10, 1000000) = 1814400 // the real value is   3.628.800
 * calculateFactorialUpToOneMillion(11, 1000000) = 1663200 // the real value is  39.916.800
 * calculateFactorialUpToOneMillion(12, 1000000) = 3991680 // the real value is 479.001.600
 * ```
 *
 * ### Resources to use
 * - for or while statement
 *
 * ### Estimated amount of time needed to complete the task
 * 5 to 15 minutes
 */
exports.calculateFactorialUpToBoundary = function(number, boundary) {

    let factorial = 1;

    for (let i = number; i >=1; i--) {
        factorial = factorial * i
        if (factorial > boundary) {
            return factorial
        }
    }

    return factorial
}

/**
 * Print to console a countdown starting from {start} but with growing decreasing.
 *
 * ### Expected behavior
 * incrementalCountdown(78, 39, console)
 * ```
 * console.log(78);
 * console.log(77); // previous - 1
 * console.log(75); // previous - 2
 * console.log(72); // previous - 3
 * console.log(68); // previous - 4
 * console.log(63); // previous - 5
 * console.log(57); // previous - 6
 * console.log(50); // previous - 7
 * console.log(42); // previous - 8
 * // next iteration is 33, which is lower that 39, so we stop here
 * ```
 *
 * ### Resources to use
 * - for statement
 *
 * ### Estimated amount of time needed to complete the task
 * 5 minutes
 */
exports.incrementalCountdown = function(start, end, console) {
    for (let i =1; end < start; i++) {
        console.log(start)
        start = start - i
    }
}

/**
 * Print to the plotter points forming a sawtooth, using length and height as parameters.
 * Plotter exposes the method plot(x,y).
 *
 * ### Expected behavior
 * sawtooth(22, 4, plotter)
 * ```
 * plotter.plot(0, 0);
 * plotter.plot(1, 1);
 * plotter.plot(2, 2);
 * plotter.plot(3, 3);
 * plotter.plot(4, 0);
 * plotter.plot(5, 1);
 * plotter.plot(6, 2);
 * plotter.plot(7, 3);
 * plotter.plot(8, 0);
 * plotter.plot(9, 1);
 * plotter.plot(10, 2);
 * plotter.plot(11, 3);
 * plotter.plot(12, 0);
 * plotter.plot(13, 1);
 * plotter.plot(14, 2);
 * plotter.plot(15, 3);
 * plotter.plot(16, 0);
 * plotter.plot(17, 1);
 * plotter.plot(18, 2);
 * plotter.plot(19, 3);
 * plotter.plot(20, 0);
 * plotter.plot(21, 1);
 * ```
 *
 * ### Resources to use
 * - for statement
 *
 * ### Estimated amount of time needed to complete the task
 * 10 minutes
 */

/*
 function Plotter() {
    return {
        arr: [],
        plot: function (...coordinates) {
            this.arr.push(coordinates);
        },
    };
}*/


exports.sawtooth = function(length, height, plotter) {

    for (let i=0; i < length; i++) {

        plotter.plot(i,i % height)

        }
   



    // TODO Congratulations for solving it. There's room for the following optimization:
    //  There exists an operator call modulus, that allows to calculate the remainder of an integer division.
    //  ie:
    //      0 % 4 = 0
    //      1 % 4 = 1
    //      2 % 4 = 2
    //      3 % 4 = 3
    //      4 % 4 = 0
    //      5 % 4 = 1
    //      6 % 4 = 2
    //      7 % 4 = 3
    //      8 % 4 = 0
    //      9 % 4 = 1
    //     10 % 4 = 2
    //     11 % 4 = 3
    //     ...
    //  Can you think of a way of removing indexOneArray variable by using the modulus operator?
};

/*.toEqual([
    [0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6],
    [7, 0], [8, 1], [9, 2], [10,3], [11,4], [12,5], [13,6],
    [14,0], [15,1], [16,2], [17,3], [18,4], [19,5], [20,6],
    [21,0], [22,1], [23,2], [24,3], [25,4], [26,5], [27,6],
    [28,0], [29,1],
]);
function Plotter() {
    return {
        arr: [],
        plot: function (...coordinates) {
            this.arr.push(coordinates);
        },
    };
}*/


/**
 * Your mission is to calculate how many vaccines a building needs.
 * - building.floors: number of floors of the building
 * - building.rooms: number of rooms per floor
 * - building.vaccinesNeeded(f, r): number of people that need vaccines in the room r of floor f
 *
 * ### Expected behavior
 * In a basic example of a building with 4 floors, 5 rooms in each floor (with a total of 20 rooms),
 * and 2 people that need vaccination in every room of the building, then we need 40 vaccines.
 * ```
 * const building = {
 *     floors: 4,
 *     rooms: 5,
 *     vaccinesNeeded: (f, r) => 2,    // f between [0,3]  &  r between [0,4]
 * };
 * console.log(vaccinateBuilding(building));
 *   >> outputs: 40
 * ```
 *
 * ### Resources to use
 * - for statement
 *
 * ### Estimated amount of time needed to complete the task
 * 10 minutes
 */
exports.vaccinateBuilding = function(building) {
    
    let vaccinesNeeded = 0;

    for(let f=0; f < building.floors; f++) {
        for(let r = 0; r < building.rooms; r++) {
          vaccinesNeeded = building.vaccinesNeeded(f,r) + vaccinesNeeded;
        }
    }                                             

    return vaccinesNeeded;

}

/**
 * Print pairing combinations available for n elements.
 *
 * ### Expected behavior
 * pairCombinations(3):
 * ```
 * console.log('12');
 * console.log('13');
 * console.log('23');
 * ```
 * pairCombinations(4):
 * ```
 * console.log('12');
 * console.log('13');
 * console.log('14');
 * console.log('23');
 * console.log('24');
 * console.log('34');
 * ```
 * pairCombinations(5):
 * ```
 * console.log('12');
 * console.log('13');
 * console.log('14');
 * console.log('15');
 * console.log('23');
 * console.log('24');
 * console.log('25');
 * console.log('34');
 * console.log('35');
 * console.log('45');
 * ```
 *
 * ### Resources to use
 * - for statement
 *
 * ### Estimated amount of time needed to complete the task
 * 10 minutes
 */
exports.pairCombinations = function(elements, console) {
     for (let i=1; i<elements; i++) {
       for (let j=i+1; j<=elements; j++) {
               console.log(`${i}${j}`)
      }
     }
}

/**
 * Print to plotter a right triangle, where:
 * - its right angle lies in coordinates (0;0)
 * - its legs lies onto the x and y axes
 * - its legs are the size specified as first argument of the function call
 *
 * ### Expected behavior
 * plotTriangle(3, plotter)
 * ```
 * plotter.plot(0, 0);
 * plotter.plot(0, 1);
 * plotter.plot(0, 2);
 * plotter.plot(1, 0);
 * plotter.plot(1, 1);
 * plotter.plot(2, 0);
 * ```
 * The calls to .plot(x,y) can be done in any order. The important thing is to plot all corresponding points.
 *
 * ### Resources to use
 * - for statement
 *
 * ### Estimated amount of time needed to complete the task
 * 5 minutes
 */
exports.plotTriangle = function(size, plotter) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size-i; j++) {
                plotter.plot(i, j);
        }
    }
}

/**
 * Print to plotter a trirectangular tetrahedron, where:
 * - its right angle lies in coordinates (0;0;0)
 * - its legs lies onto the x, y, and z axes
 * - its legs are the size specified as first argument of the function call
 *
 * ### Expected behavior
 * plotTetrahedron(3, plotter)
 * ```
 * plotter.plot(0, 0, 0);
 * plotter.plot(0, 1, 0);
 * plotter.plot(0, 2, 0);
 * plotter.plot(1, 0, 0);
 * plotter.plot(1, 1, 0);
 * plotter.plot(2, 0, 0);
 *
 * plotter.plot(0, 0, 1);
 * plotter.plot(0, 1, 1);
 * plotter.plot(1, 0, 1);
 *
 * plotter.plot(0, 0, 2);
 * ```
 * The calls to .plot(x,y,z) can be done in any order. The important thing is to plot all corresponding points.
 *
 * ### Resources to use
 * - for statement
 *
 * ### Estimated amount of time needed to complete the task
 * 5 minutes
 */
exports.plotTetrahedron = function(size, plotter) {
    // TODO
};

/**
 * A Fibonacci sequence is a sequence of numbers where a number is the sum of the two previous numbers in the sequence.
 * It starts with 0, 1, 1, 2, 3, 5, 8, 13 and so on. Write a function called fibonacci(n), where n is the zero based
 * index of the sequence, that calculates the nth term in the sequence.
 *
 * ### Expected behavior
 * fibonacci(0) = 0
 * fibonacci(1) = 1
 * fibonacci(2) = 1
 * fibonacci(3) = 2
 * fibonacci(4) = 3
 * fibonacci(5) = 5
 * fibonacci(6) = 8
 * ...
 * fibonacci(100) = 354224848179262000000
 *
 * ### Resources to use
 * - for statement
 *
 * ### Estimated amount of time needed to complete the task
 * 5 minutes
 */
exports.fibonacci = function(n) {
    // TODO
};
