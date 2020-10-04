/////////////////////// includes() & findIndex() DEMO CODE ///////////////////////

function findMyKeys(placeToCheck) {
    //return placeToCheck.includes("keys"); // Here's how .include() works
    if (placeToCheck.indexOf("keys") != -1) { // .indexOf() returns -1 if the thing isn't found, or else the 1st index of it if it's present
        return placeToCheck.indexOf("keys");
    }
    else {
        return "Keys not found";
    }
}

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];

console.log(findMyKeys(randomStuff));