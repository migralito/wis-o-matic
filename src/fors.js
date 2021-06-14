/**
 * must print to console from 1 to 20
 * (ie: console.log(1), console.log(2), console.log(3))
 */
exports.print1To20 = function(console) {
    for (let i = 1; i < 21;i++) {
        console.log(i)
    }

    // return console.arr;  <== not necessary
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
 * - only for statment
 *
 * ### Estimated amount of time needed to complete the task
 * 2 minutes
 */
exports.print20To1 = function(console) {
    for (let i = 20; i > 0;i--) {
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
 * - only for statment
 *
 * ### Estimated amount of time needed to complete the task
 * 5 minutes
 */
exports.print1To28Step3 = function(console) {
    for (let i = 1; i < 29;i += 3) {
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
 * - only for statment
 *
 * ### Estimated amount of time needed to complete the task
 * 5 minutes
 */
exports.printFrom30To6Step3Descending = function(console) {
    for (let i = 30; i > 5;i -= 4) {
        console.log(i)
    }
}

