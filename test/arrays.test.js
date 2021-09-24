const arrays = require('../src/arrays');



function newConsole() {
    return {
        arr: [],
        log: function (msg) {
            this.arr.push(msg);
        },
    };
}

describe('arrays module testing', function() {

    test('printArrayElementsUsingForOf', function() {
        const console = newConsole();
        arrays.printArrayElementsUsingForOf(['a','b','c','d','e'], console);
        expect(console.arr)
            .toEqual(['a','b','c','d','e']);
    });

    test('printArrayElementsUsingTraditionalFor', function() {
        const console = newConsole();
        arrays.printArrayElementsUsingTraditionalFor(['a','b','c','d','e'], console);
        expect(console.arr)
            .toEqual(['a','b','c','d','e']);
    });

    test('printArrayElementsReverseOrder', function() {
        const console = newConsole();
        arrays.printArrayElementsReverseOrder(['a','b','c','d','e'], console);
        expect(console.arr)
            .toEqual(['e','d','c','b','a']);
    });

    test('returnFirstElementsOfArray', function() {
        let result = arrays.returnFirstElementsOfArray(['a','b','c','d'], 2);
        expect(result)
            .toEqual(['a','b']);
    });

    test('returnLastElementsOfArray', function() {
        expect(arrays.returnLastElementsOfArray(['a', 'b', 'c', 'd'], 2))
            .toEqual(['c','d']);
        expect(arrays.returnLastElementsOfArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3))
            .toEqual(['f','g', 'h']);
    });

    test('returnFollowingElementsFromArray', function() {
        let result = arrays.returnFollowingElementsFromArray(['a','b','c','d','e','f','g'], 3, 4);
        expect(result)
            .toEqual(['c','d','e','f']);
    });

    test('returnPreviousElementsFromArray', function() {
        let result = arrays.returnPreviousElementsFromArray(['a','b','c','d','e','f','g'], 5, 2);
        expect(result)
            .toEqual(['d','e']);
    });

    test('returnPreviousElementsFromArrayInReverseOrder', function() {
        let result = arrays.returnPreviousElementsFromArrayInReverseOrder(['a','b','c','d','e','f','g'], 5, 2);
        expect(result)
            .toEqual(['e','d']);
    });

    test('isPalindrome', function() {
        expect(arrays.isPalindrome("race car")).toBeTruthy();
        expect(arrays.isPalindrome("raced car")).toBeFalsy();
        expect(arrays.isPalindrome("Eva, Can I Stab Bats In A Cave?")).toBeTruthy();
        expect(arrays.isPalindrome("Eva, Can I Satb Bats In A Cave?")).toBeFalsy();
        expect(arrays.isPalindrome("A Santa Lived As a Devil At NASA.")).toBeTruthy();
        expect(arrays.isPalindrome("A Santa Live As a Devil At NASA.")).toBeFalsy();
    });

    test('findMissing', function() {
        expect(arrays.findMissing([1,2,4,5,6])).toBe(3);
        expect(arrays.findMissing([10,9,1,6,2,8,4,3,5])).toBe(7);
        expect(arrays.findMissing([1,2,3,4,5,6,7,8,9,10,11,13])).toBe(12);
    });

    test('triplette', function() {
        expect(arrays.triplette([3453, 877, 4, 234, 23, 23, 23, 765, 560, 90])).toBe(23);
    });

    test('highestConsecutive', function() {
        expect(arrays.highestConsecutive([
            491, 846, 835, 202, 863, 336, 372, 992, 39, 211, 561, 282, 900, 270, 428, 267, 333, 363, 568, 680, 649, 692,
            953, 159, 290, 31, 832, 302, 179, 587, 340, 286, 90, 442, 447, 641, 920, 219, 136, 966, 255, 647, 885, 753,
            415, 982, 205, 779, 468, 752, 882, 814, 332, 702, 92, 15, 876, 903, 807, 234, 73, 998, 927, 80, 275, 353,
            544, 342, 716, 215, 374, 504, 799, 784, 842, 66, 991, 738, 456, 455, 435, 474, 83, 168, 171, 352, 142, 318,
            13, 446, 546, 828, 232, 851, 317, 747, 595, 101, 403, 21
        ])).toBe(2586);
    });

    test('switchHighestWithFirst', function() {
        expect(arrays.switchHighestWithFirst([1,4,9,6]))
            .toStrictEqual([9,4,1,6]);
        expect(arrays.switchHighestWithFirst([1388, 12, 679, 335, 1987, 1010, 431, 295]))
            .toStrictEqual([1987, 12, 679, 335, 1388, 1010, 431, 295]);
    });
    
    test('sort', function() {
        expect(arrays.sort([9,4,1,12,6]))
            .toStrictEqual([1,4,6,9,12]);
        expect(arrays.sort([1388, 12, 679, 335, 987, 1010, 431, 295]))
            .toStrictEqual([12, 295, 335, 431, 679, 987, 1010, 1388]);
    });
    test('sort2', function() {
        expect(arrays.sort2([9,4,1,12,6]))
            .toStrictEqual([1,4,6,9,12]);
        expect(arrays.sort2([1388, 12, 679, 335, 987, 1010, 431, 295]))
            .toStrictEqual([12, 295, 335, 431, 679, 987, 1010, 1388]);
    });

    test('reverse', function() {
        let arr = [1,6,3,7,4,9,2];
        arrays.reverse(arr);
        expect(arr).toEqual([2,9,4,7,3,6,1]);
    });

    test('removeAtIndex', function() {
        let arr = [9,3,7,4,1,9,5,2,0,3,2,5,5,2,8];
        arrays.removeAtIndex(arr, 6);
        expect(arr).toEqual([9,3,7,4,1,9,2,0,3,2,5,5,2,8]);
    });

    test('insertAtIndex', function() {
       let arr = [9,3,7,4,1,9,5,2,0,3,2,5,5,2,8];
        arrays.insertAtIndex(arr, 6, 2021);
        expect(arr).toEqual([9,3,7,4,1,9,2021,5,2,0,3,2,5,5,2,8]);
    });

    test('rotate', function() {
        let arr = [9,3,7,4,1,9,5,2,0,3,2,5,5,2,8];
        arrays.rotate(arr);
        expect(arr).toEqual([8,9,3,7,4,1,9,5,2,0,3,2,5,5,2]);
    });

    test('rotateMany', function() {
        let arr = [9,3,7,4,1,9,5,2,0,3,2,5,5,2,8];
        arrays.rotateMany(arr, 4);
        expect(arr).toEqual([5,5,2,8,9,3,7,4,1,9,5,2,0,3,2]);
    });

    test('separatePairsAndOdds', function() {
        let arr = [9,3,7,4,1,9,5,2,0,3,2,5,5,2,8];
        arrays.separatePairsAndOdds(arr);
        expect(arr).toEqual([4,2,0,2,2,8,9,3,7,1,9,5,3,5,5]);
    });
});

