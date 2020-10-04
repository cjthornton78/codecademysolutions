const _ = {
    clamp(number, lower, upper) { // Clamps a number between two limits, returning the limits if the number is outside them
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
  
    inRange(number, start, end) { // Checks if a number is in a range & returns a bool
        if (!end) { //check if the end value isn't entered
            end = start;
            start = 0;
        }
        if (start > end) { //check if start & end are reversed
            let temp = end;
            end = start;
            start = temp;
        }
        let isInRange = (start <= number) && (number < end);
        return isInRange;
    },

    words(string) { // Splits a string into an array of words
        let words = string.split(" ");
        return words;
    },

    pad(string, length) { // Pads a string with spaces equally at either end
        if (length <= string.length) {
            return string;
        }
        else {
            let startPaddingLength = Math.floor(((length - string.length) / 2));
            let endPaddingLength = length - startPaddingLength - string.length;
            let paddedString = " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
            return paddedString;
        }
    },

    has(object, key) { // Checks if there's anything at a key in an object or if it's undefined, & returns a bool
        //let hasValue = object[key]; // Testing to return the value itself to make sure I referenced the correct one
        //let hasValue = !!object[key]; // Returns true if the value is truthy
        //return hasValue;
        return !!object[key]; // A more efficient way to evaluate the object
    },

    invert(object) { // Inverts the key value pairs in an object
        let invertedObject = {}
        for (key in object) {
            //console.log(key + ": " + object[key]);  // Testing
            invertedObject[object[key]] = key;
        }
        return invertedObject;
    },

    findKey(object, predicate) { // Returns the key of the matched element, else undefined
        for (key in object) {
            let value = object[key];
            let predicateReturnValue = predicate(value);
            if (!!predicateReturnValue) {
                return key;
            }
            else {
                return undefined;
            }
        }
    },

    drop(array, number) { // Takes two arguments: an array and a number representing the number of items to drop from the beginning of the array
        if (!number) {
            number = 1;
        }
        return array.slice(number, array.length);
    },

    dropWhile(array, predicate) { // I dunno what this does, something to do with that predicate function passed in here, then array filtering & stuff
        let dropNumber = array.findIndex(function (element, index) {
            return !predicate(element, index, array);
        });
        return this.drop(array, dropNumber);
    },

    chunk(array, size) { // Splits arrays into chunks of the specified size
        if (!size) {
            size = 1;
        }
        let arrayChunks = [];
        //console.log("size = " + size); // Testing
        for (i = 0; i < array.length; i += size){
            arrayChunk = array.slice(i, (i + size)); // Chop a chunk off the array...
            arrayChunks.push(arrayChunk); // ...then slap it on the end of the new array as its own array
        }
        return arrayChunks;
    }
};


const testObject = {
    fooKey: "hello",
    twoKey: "bye bye"
};

const testArray = ["alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta", "iota"];

console.log(_.chunk(testArray, 2));
  
  
// Do not write or modify code below this line.
//module.exports = _;