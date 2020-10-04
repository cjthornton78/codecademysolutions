// Write your code here:
function convertToBaby(animalList) {
    let babyArray = [];
    for (i = 0; i < animalList.length; i++) {
        babyArray[i] = "baby " + animalList[i];
    }
    return babyArray;
}

// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals));

