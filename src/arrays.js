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
const {param} = require("express/lib/router");

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
 * Given an array of numbers, find the highest and switch it with the first element.
 *
 * ### Expected behavior
 * ```
 * sort([1,4,9,6]) => [9,4,1,9]
 * sort([1388, 12, 679, 335, 1987, 1010, 431, 295]) => [1987, 12, 679, 335, 1388, 1010, 431, 295]
 * ```
 *
 * ### Resources to use
 * - for statement
 * - array access
 *
 * ### Estimated amount of time needed to complete the task
 * 30 to 60 minutes
 */
exports.switchHighestWithFirst = function(array) {

    let biggerNumber= 0;
    let positionBiggerNumber;

    for (let i = 0; i < array.length; i++) {
        if (array[i]>biggerNumber) {
            biggerNumber = array[i];
            positionBiggerNumber = i;
        }
    };
    array[positionBiggerNumber] = array[0];
    array[0] = biggerNumber;
    return array;
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

exports.sort = function(array) {
    let minorNumber = array[0];
    let newArrayToDecompose = [];
    let newArrayToReturn = [];
    let positionMinor;
    for (let i = 0; i < array.length; i++) {
        newArrayToDecompose.push(array[i]);
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < newArrayToDecompose.length ; j++) {
            if(newArrayToDecompose[j] < minorNumber || newArrayToDecompose[j] === minorNumber) {
                minorNumber = newArrayToDecompose[j];
                positionMinor = j;
            }
        }
        newArrayToReturn.push(minorNumber);
        newArrayToDecompose[positionMinor] =  newArrayToDecompose[0];
        newArrayToDecompose[0] = minorNumber;
        newArrayToDecompose.shift();
        minorNumber = newArrayToDecompose[0];
    }
    return newArrayToReturn;
}


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


exports.sort2 = function(array) {
    for (let i = 0; i < array.length; i++) {
        let positionMinor = i;
        for (let j = i + 1; j < array.length; j++) {
            if( array[j] < array[positionMinor]) {
                positionMinor = j
            }
        }
        let firstElementReplace = array[i]
        array[i] = array[positionMinor];
        array[positionMinor] = firstElementReplace;
    }
    return array;
}

/**
 * Given an array of numbers, reverse it
 *
 * ### Expected behavior
 * ```
 * let arr = [1,6,3,7,4,9,2];
 * reverse(arr);
 * console.log(arr);
 * > [2,9,4,7,3,6,1]
 * ```
 *
 * ### Resources to use
 * - for statement
 * - array access
 * - DO NOT use array's .reverse() method
 *
 * ### Estimated amount of time needed to complete the task
 * 1 to 2 hours
 */
exports.reverse = function(array) {
   for (let backIndexArray = array.length -1; backIndexArray > (array.length/2); backIndexArray--) {
       let currentBackNumber = array[backIndexArray]
       array[backIndexArray] = array[(array.length-1)-backIndexArray];
       array[(array.length-1)-backIndexArray] = currentBackNumber;
   }
};



/**
 * Given an array of numbers, remove the element at index i.
 *
 * ### Expected behavior
 * ```
 * let arr = [9,3,7,4,1,9,5,2,0,3,2,5,5,2,8];
 * remove(arr, 6);
 * console.log(arr);
 * > [9,3,7,4,1,9,2,0,3,2,5,5,2,8]
 * ```
 *
 * ### Resources to use
 * - any method of Array prototype
 *
 * ### Estimated amount of time needed to complete the task
 * 10 minutes
 */

exports.removeAtIndex = function(array, index) {
    for (let i = 0; i < array.length; i++) {
        if(i === array.length - 1) {
            array.pop();
            return array;
        }
        if(i >= index) {
              array[i] = array[i+1];
        }
    }
};




/**
 * Given an array of numbers, insert the given number into the specified position.
 *
 * ### Expected behavior
 * ```
 * let arr = [9,3,7,4,1,9,5,2,0,3,2,5,5,2,8];
 * insertAtIndex(arr, 6, 2021);
 * console.log(arr);
 * > [9,3,7,4,1,9,2021,5,2,0,3,2,5,5,2,8]
 * ```
 *
 * ### Resources to use
 * - any method of Array prototype
 *
 * ### Estimated amount of time needed to complete the task
 * 20 minutes
 */
exports.insertAtIndex = function(array, index, number) {
    let numberReplaced;
    let shifNumber;
    let lastNumberOfTheArray = array[array.length - 1];
    for (let i = 0; i < array.length; i++) {
        if(i === index) {
            numberReplaced = array[i];
            array[i] = number
        }
        if(i > index) {
            shifNumber = array[i]
            array[i] = numberReplaced;
            numberReplaced = shifNumber;
        }
    }
    array.push(lastNumberOfTheArray);
};

/**
 * Given an array of numbers, rotate the array one step to the right, moving the last element as first.
 *
 * ### Expected behavior
 * ```
 * let arr = [9,3,7,4,1,9,5,2,0,3,2,5,5,2,8];
 * rotate(arr);
 * console.log(arr);
 * > [8,9,3,7,4,1,9,5,2,0,3,2,5,5,2]
 * ```
 *
 * ### Resources to use
 * - any method of Array prototype
 *
 * ### Estimated amount of time needed to complete the task
 * 30 minutes
 */
exports.rotate = function(array) {
    let lastNumberArray = array[array.length - 1];
    let numberLastReplaced;
    let currentNumber;
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            numberLastReplaced = array[i];
            array[i] = lastNumberArray;
        } else {
            currentNumber = array[i];
            array[i] = numberLastReplaced;
            numberLastReplaced = currentNumber;
        }
    }
};



/**
 * Given an array of numbers, rotate the array N elements to the right, moving the last N elements at the beginning.
 *
 * ### Expected behavior
 * ```
 * let arr = [9,3,7,4,1,9,5,2,0,3,2,5,5,2,8];
 * rotate(arr, 4);
 * console.log(arr);
 * > [5,5,2,8,9,3,7,4,1,9,5,2,0,3,2]
 * ```
 *
 * ### Resources to use
 * - any method of Array prototype
 *
 * ### Estimated amount of time needed to complete the task
 * 1 hour
 */
exports.rotateMany = function(array, n) {
    // TODO
};

/**
 * Given an array of numbers, group pair numbers to the left and odd numbers to the right, maintaining the given order.
 *
 * ### Expected behavior
 * ```
 * let arr = [9,3,7,4,1,9,5,2,0,3,2,5,5,2,8];
 * separatePairsAndOdds(arr);
 * console.log(arr);
 * > [4,2,0,2,2,8,9,3,7,1,9,5,3,5,5]
 * ```
 *
 * ### Resources to use
 * - for statement
 * - array access
 * - any method of Array prototype
 *
 * ### Estimated amount of time needed to complete the task
 * 1 day
 */
exports.separatePairsAndOdds = function(array) {
    // TODO
};
