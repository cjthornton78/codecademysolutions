//NOPE. NO. CODECADEMY'S PROPOSED WAY OF DOING THIS IS COMPLETE NONSENSE AND I HATE IT,THIS IS UNFINISHED & I CAN DO IT MY OWN NOT-AWFUL WAY INSTEAD

const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get app() {},
    set app(newapp) {},
    
    get mai() {},
    set mai(newmai) {},
    
    get des() {},
    set des(newdes) {},

    get cou() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };

        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse: function(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
    }
};

console.log(menu);