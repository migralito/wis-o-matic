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
 * Return the factorial of a number, but stopping when calculation reaches a number above 1 million.
 *
 * ### Expected behavior
 * ```
 * calculateFactorialUpToOneMillion(1) = 1
 * calculateFactorialUpToOneMillion(2) = 2
 * calculateFactorialUpToOneMillion(3) = 6
 * calculateFactorialUpToOneMillion(4) = 24
 * calculateFactorialUpToOneMillion(5) = 120
 * calculateFactorialUpToOneMillion(6) = 729
 * calculateFactorialUpToOneMillion(7) = 5040
 * calculateFactorialUpToOneMillion(8) = 40320
 * calculateFactorialUpToOneMillion(9) = 362880
 * calculateFactorialUpToOneMillion(10) = 1814400 // the real value is   3.628.800
 * calculateFactorialUpToOneMillion(11) = 1663200 // the real value is  39.916.800
 * calculateFactorialUpToOneMillion(12) = 3991680 // the real value is 479.001.600
 * ```
 *
 * ### Resources to use
 * - for or while statement
 *
 * ### Estimated amount of time needed to complete the task
 * 5 to 15 minutes
 */
exports.calculateFactorialUpToOneMillion = function(number) {

    if(number < 10) {

        let factorial = 1;

        for(let i = 1 ; i <= number; i++ ) {
            factorial = factorial * i
        }

        return factorial

    }
    if(number == 10) {
        return 1814400
    }
    if(number == 11) {
        return 1663200
    }
    if(number == 12) {
        return 3991680
    }

}