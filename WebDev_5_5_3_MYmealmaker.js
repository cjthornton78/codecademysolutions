function Menu() { //TODO - convert menu into an object constructor
    this._courses = {
        appetizers = [["soup", 3.50], ["salad", 2.50]],
        mains = [["steak", 7.50], ["chicken", 6.00], ["fish", 5.50]],
        desserts = [["cake", 5.00], ["ice cream", 4.50]],
        
        this.getRandomDishFromCourse = function(courseName) {
            let randDish = [];
            randDish = this[courseName][Math.floor(Math.random() * this[courseName].length)];
            return randDish;
        }
    };

    addDishToCourse = function(courseName, dishName, dishPrice) {
        console.log(`Adding ${dishName} at \$${dishPrice.toFixed(2)} to ${courseName}.`);
        this._courses[courseName].push([dishName, dishPrice]);
    };

    generateRandomMeal = function() {
        let totalCost = 0;
        randApp = this._courses.getRandomDishFromCourse("appetizers");
        randMai = this._courses.getRandomDishFromCourse("mains");
        randDes = this._courses.getRandomDishFromCourse("desserts");
        totalCost = randApp[1] + randMai[1] + randDes[1];
        return `For an appetizer: ${randApp[0]} (\$${randApp[1].toFixed(2)})\nFor the main course: ${randMai[0]} (\$${randMai[1].toFixed(2)})\nAnd for dessert: ${randDes[0]} (\$${randDes[1].toFixed(2)})\nThe total cost is \$${totalCost.toFixed(2)}`;
    };
};

let myRandMenu = new Menu;
let mySecondRandMenu = new Menu;

myRandMenu.addDishToCourse("appetizers", "nachos", 3.00);
myRandMenu.addDishToCourse("mains", "burritos", 4.50);
myRandMenu.addDishToCourse("desserts", "creme brulee", 4.00);

console.log("Meal 1:" + myRandMenu.generateRandomMeal());
console.log("\nMeal 2:" + myRandMenu.generateRandomMeal()); // Added dishes should still be present but a new menu should be generated
console.log("\nMeal 3:" + mySecondRandMenu.generateRandomMeal()); // SHOULDN'T generate a meal with any of the added dishes(test to see whether they're added to the instance or the prototype)
//TODO - ABOVE TEST FAILS FOR MEAL 3, NACHOS BURRITOS & CREME BRULEE STILL APPEAR - WOULD GETTERS & SETTERS FIX THIS?