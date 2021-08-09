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

    // TODO these two lines can be merged into a single one. Also, why the '&& true'?
    const isTrue = arrayEnString === newArrayEnString && true;
    return isTrue;

};

/**
 * Given an array containing all but one of the numbers 1..n, find the missing number.
 *
 * ### Expected behavior
 * ```
 * findMissing([1,2,4,5,6]) => 3
 * findMissing([10,9,1,6,2,8,4,3,5]) => 7
 * ```
 *
 * ### Resources to use
 * - for statement
 * - array access
 *
 * ### Estimated amount of time needed to complete the task
 * 10 minutes
 */
exports.findMissing = function(array) {
  
    

    for (let i = 1; i < array.length + 1; i++) {

        let seEncontro = false;

        for (let j = 0; j < array.length; j++) {
           
            if (i === array[j]) {
                seEncontro = true
            }
            
        }


        if (!seEncontro) { // TODO there iss a more elegant way of writing this (without === false)
            return i 
        }

     }

    };

/**
 * Given an array of numbers, find the number that repeats 3 times consecutively.
 *
 * ### Expected behavior
 * ```
 * triplette([3453, 877, 4, 234, 23, 23, 23, 765, 560, 90]) => 23
 * ```
 *
 * ### Resources to use
 * - for statement
 * - array access
 *
 * ### Estimated amount of time needed to complete the task
 * 10 minutes
 */
exports.triplette = function(array) {

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] === array[i+1] && array[i+1] === array[i+2]) {
            return array[i]
        }
        
    }
 

};

/**
 * Given an array of numbers, find the set of three consecutive numbers that add up to the highest sum.
 *
 * ### Expected behavior
 * ```
 * highestConsecutive([ 491, 846, 835, 202, 863, 336, 372, 992, 39, 211, 561, 282, 900, 270, 428, 267, 333, 363, 568,
 *                      680, 649, 692, 953, 159, 290, 31, 832, 302, 179, 587, 340, 286, 90, 442, 447, 641, 920, 219,
 *                      136, 966, 255, 647, 885, 753, 415, 982, 205, 779, 468, 752, 882, 814, 332, 702, 92, 15, 876,
 *                      903, 807, 234, 73, 998, 927, 80, 275, 353, 544, 342, 716, 215, 374, 504, 799, 784, 842, 66, 991,
 *                      738, 456, 455, 435, 474, 83, 168, 171, 352, 142, 318, 13, 446, 546, 828, 232, 851, 317, 747,
 *                      595, 101, 403, 21
 *                   ]) => 2586
 * ```
 * - 491 + 846 + 835 = 2172
 * - 846 + 835 + 202 = 1883
 * - ...
 * - 876 + 903 + 807 = 2586  << highest!!!
 * - ...
 * - 101 + 403 + 21 = 525
 *
 * ### Resources to use
 * - for statement
 * - array access
 *
 * ### Estimated amount of time needed to complete the task
 * 30 minutes
 */
exports.highestConsecutive = function(array) {
    
    console.log(array.length)

    let nroMasAlto = 0;


    for (let i = 0; i < array.length; i++) {

        let sumaTresNros = array[i] + array[i+1] + array[i+2];
        
        if(sumaTresNros > nroMasAlto) {
            nroMasAlto = sumaTresNros;
        }

        if(i ===  array.length - 3) {
            return nroMasAlto 
        }

        
    }

};

/**
 * Given an array of numbers, sort them in ascending order **without using .sort() method**.
 *
 * ### Expected behavior
 * ```
 * sort([9,4,1,6]) => [1,4,6,9]
 * sort([1388, 12, 679, 335, 987, 1010, 431, 295]) => [12, 295, 335, 431, 679, 987, 1010, 1388]
 * ```
 *
 * ### Resources to use
 * - for statement
 * - array access
 * - DO NOT use .sort() method
 *
 * ### Estimated amount of time needed to complete the task
 * 30 to 60 minutes
 */


//sort([9,4,1,6]) => [1,4,6,9]

exports.sort = function(array) {

    let newArray = [];
    let biggerNumber= 0;
    let minorNumber;
    
    
    for (let i = 0; i < array.length; i++) {

        if (array[i]>biggerNumber) {
            biggerNumber = array[i]
        }

        





    };

    console.log(biggerNumber)

}