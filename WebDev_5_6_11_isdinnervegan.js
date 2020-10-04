
function isTheDinnerVegan(menu) {
    let isVegan = true;
    menu.forEach(food => {
        if (food.source !== "plant") {
            isVegan = false;
        }
    });
    return isVegan;
}

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
//const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

console.log(isTheDinnerVegan(dinner));