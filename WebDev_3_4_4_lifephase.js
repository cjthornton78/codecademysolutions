// Write your function here:
const lifePhase = x => {
    console.log(x);
    if (0 <= x && x < 4) {
      return "baby";
    }
    else if (3 < x && x < 13) {
      return "child";
    }
    else if (12 < x && x < 20) {
      return "teen";
    }
    else if (19 < x && x < 65) {
      return "adult";
    }
    else if (64 < x && x < 141) {
      return "senior citizen";
    }
    else {
      return "This is not a valid age"
    }
  }
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(lifePhase(0)) //should print 'child'
  
  // We encourage you to add more function calls of your own to test your code!