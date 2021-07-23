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
        if(arrayRecortado.length === n) {
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

    // TODO remove comment
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

    // TODO
    //  Remove this comment (including code))
    //
    //  Once you get to the expected quantity, you managed to skip the following iterations. It's clever, but
    //  suboptimal. Can you think of a way to make the `for` iterate the exact number of times?
    // for(let i= first -1; i< array.length; i++) {
    //     if (newArray.length < quantity ) {
    //         newArray.push(array[i])
    //     }
    // }

    for(let i= 0; i< quantity; i++) {
        newArray.push(array[(first-1)+i])
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
    let newArray = [];

    // TODO
    //  remove comment (including code)
    //
    //  Once you get to the expected quantity, you managed to skip the following iterations. It's clever, but
    //  suboptimal. Can you think of a way to make the `for` iterate the exact number of times?
    // for (let i = first -quantity; i < array.length; i++) {
    //     if(newArray.length < quantity) {
    //         newArray.push(array[i])
    //     }
    // }

    for (let i= 0; i < quantity; i++) {
        newArray.push(array[(first -quantity)+i])
    }

    return newArray;
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

/**
 * A palindrome is text that can be read from left to right or right to left with the same result. An example is the
 * word "madam". Note that white space, punctuation,and differences in case are not considered when determining if
 * a word is a palindrome. Given a string, determine if the string is a palindrome or not.
 *
 * ### Expected behavior
 * ```
 * isPalindrome("Eva, Can I Stab Bats In A Cave?") => true
 * isPalindrome("A Santa Lived As a Devil At NASA.") => true
 * isPalindrome("race car") => true
 * isPalindrome("raced car") => false
 * ```
 *
 * ### Resources to use
 * - for statement
 * - array access
 * - regexes
 *
 * ### Estimated amount of time needed to complete the task
 * 15 minutes
 */
exports.isPalindrome = function(string) {
    const array = string
        .replace(/[^a-zA-Z]/g, '') // this will transform "Race, CaR" into "RaceCaR"
        .toLowerCase() // this will transform "RaceCaR" into "racecar"
        .split(""); // this will transform "racecar" into ["r","a","c","e","c","a","r"]
    

        let newArray = [];

        for (let i = array.length - 1; i >=0; i--) {
            newArray.push(array[i])
        }

        let arrayEnString = array.join("");
        let newArrayEnString = newArray.join("")

        const isTrue = arrayEnString === newArrayEnString && true;

        return isTrue;

};