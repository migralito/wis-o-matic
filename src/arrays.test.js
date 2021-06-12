const arrays = require('./arrays');

function newConsole() {
    return {
        arr: [],
        log: function (msg) {
            this.arr.push(msg);
        },
    };
}

describe('arrays module testing', function() {

    test('printArrayElements', function() {
        const console = newConsole();
        arrays.printArrayElements(['a','b','c','d','e'], console);
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
        let result = arrays.returnLastElementsOfArray(['a','b','c','d'], 2);
        expect(result)
            .toEqual(['c','d']);
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
});