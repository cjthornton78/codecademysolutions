/////////////////////// map() DEMO CODE ///////////////////////

const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = num => num * num;

function squareNums(numsToSquare) {
    //return numsToSquare.map(x => x * x); //Could do the calculation as an argument to map(), like this...
    return numsToSquare.map(toSquare); //...or could pass a function to map() as an argument, like this.
}

console.log(squareNums(numbers));