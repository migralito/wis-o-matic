/**
 * Print to console the elements of an array
 *
 * ### Expected behavior
 * ```
 * console.log(arrary[0]);
 * console.log(arrary[1]);
 * ...
 * console.log(arrary[n-1]);
 * ```
 *
 * ### Resources to use
 * - for...of statement
 *
 * ### Estimated amount of time needed to complete the task
 * 2 minutes
 *
 * ### Help - External resources (documentation)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 */
exports.printArrayElementsUsingForOf = function (array, console) {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}

/**
 * Print to console the elements of an array
 *
 * ### Expected behavior
 * ```
 * console.log(arrary[0]);
 * console.log(arrary[1]);
 * ...
 * console.log(arrary[n-1]);
 * ```
 *
 * ### Resources to use
 * - traditional for statement (for(...;...;...))
 * - array access
 *
 * ### Estimated amount of time needed to complete the task
 * 2 minutes
 *
 * ### Help - External resources (documentation)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 */
exports.printArrayElementsUsingTraditionalFor = function (array, console) {
    for (let i =  0 ; i < array.length; i++) {
        console.log(array[i])
    }
}


/**
 * Print to console the elements of an array in reverse order
 *
 * ### Expected behavior
 * ```
 * console.log(arrary[n-1]);
 * console.log(arrary[n-2]);
 * ...
 * console.log(arrary[0]);
 * ```
 *
 * ### Resources to use
 * - for statement
 * - array access
 *
 * ### Estimated amount of time needed to complete the task
 * 2 minutes
 *
 * ### Help - External resources (documentation)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 */
exports.printArrayElementsReverseOrder = function (array, console) {
    // TODO: FYI, you can also do i>=0
    //  (let i = array.length - 1; i>-1; i--) {
    for (let i = array.length - 1; i>=0; i--) {
        console.log(array[i])
    }
}

/**
 * Return first n elements of an array
 *
 * ### Expected behavior
 * ```
 * returnFirstElementsOfArray([a,b,c,d], 2) => [a,b]
 * ```
 *
 * ### Resources to use
 * - for statement
 * - array access
 * - do NOT use Array.prototype.slice()
 *
 * ### Estimated amount of time needed to complete the task
 * 5 minutes
 *
 * ### Help - External resources (documentation)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 */
exports.returnFirstElementsOfArray = function(array, n) {

    let arrayRecortado = [];

    for (const arrayRecortadoElement of array) {
        arrayRecortado.push(arrayRecortadoElement)

        // TODO always better to do === instead of ==
        if(arrayRecortado.length == n) {
            return arrayRecortado;
        }
    }

}

/**
 * Return last n elements of an array
 *
 * ### Expected behavior
 * ```
 * returnLastElementsOfArray([a,b,c,d], 2) => [c,d]
 * ```
 *
 * ### Resources to use
 * - for statement
 * - array access
 * - do NOT use Array.prototype.slice()
 *
 * ### Estimated amount of time needed to complete the task
 * 5 minutes
 *
 * ### Help - External resources (documentation)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 */
exports.returnLastElementsOfArray = function(array, n) {

    let arrayRecortado = [];

    // TODO: This is very clever, but there's a better way to do this. With your solution, you managed to skip the first
    //  n iterations. Can you think of a way to start from the nth element instead of skipping the first ones?
    // for(let i=0; i<array.length; i++) {
    //     if(i >= n ) {
    //         arrayRecortado.push(array[i])
    //     }
    // }

    for(let i=n; i<array.length; i++) {
        arrayRecortado.push(array[i])
     }


    return arrayRecortado;

}




// TODO please remove this
/*let result = arrays.returnLastElementsOfArray(['a','b','c','d'], 2);
expect(result)
    .toEqual(['c','d']);*/

/**
 * Return n elements from an array starting from given position
 *
 * ### Expected behavior
 * ```
 * returnFollowingElementsFromArray([a,b,c,d,e,f,g], 3, 4) => [c,d,e,f]
 * ```
 *
 * ### Resources to use
 * - for statement
 * - array access
 * - do NOT use Array.prototype.slice()
 *
 * ### Estimated amount of time needed to complete the task
 * 10 minutes
 *
 * ### Help - External resources (documentation)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 */
exports.returnFollowingElementsFromArray = function(array, first, quantity) {

    let newArray = [];

    for(let i= first -1; i< array.length; i++) {
        if (newArray.length < quantity ) {
            newArray.push(array[i])
        }
    }

    return newArray

}
/**
 * Return the n previous elements from an array starting from given position
 *
 * ### Expected behavior
 * ```
 * returnPreviousElementsFromArray([a,b,c,d,e,f,g], 5, 2) => [d,e]
 * ```
 *
 * ### Resources to use
 * - for statement
 * - array access
 * - do NOT use Array.prototype.slice()
 *
 * ### Estimated amount of time needed to complete the task
 * 10 minutes
 *
 * ### Help - External resources (documentation)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 */
exports.returnPreviousElementsFromArray = function(array, first, quantity) {

    let newAray = [];

    for (let i = first -quantity; i < array.length; i++) {

        if(newAray.length < quantity) {
            newAray.push(array[i])
        }
    }

    return newAray;
}

/**
 * Return the n previous elements from an array starting from given position, in reverse order
 *
 * ### Expected behavior
 * ```
 * returnPreviousElementsFromArrayInReverseOrder([a,b,c,d,e,f,g], 5, 2) => [e,d]
 * ```
 *
 * ### Resources to use
 * - for statement
 * - array access
 * - do NOT use Array.prototype.slice()
 *
 * ### Estimated amount of time needed to complete the task
 * 15 minutes
 *
 * ### Help - External resources (documentation)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 */
exports.returnPreviousElementsFromArrayInReverseOrder = function(array, first, quantity) {
        let newArray = []

        for (let i = first-1 ; i > quantity ; i-- ) {
                     newArray.push(array[i])
        }

        return newArray;

}