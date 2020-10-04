const input = "Once a jolly swag man camped by a billabong under the shade of a coolibah tree";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log(input[i]);
  for (let j = 0; j < vowels.length; j++) {
    if ( vowels[j] === input[i].toLowerCase()) {
      if (vowels[j] === "u") {
        resultArray.push("uu");
      }
      else {
        resultArray.push(vowels[j]);
      }
    }
  }
}

console.log(resultArray.join("").toUpperCase()); //N.B. default behaviour of join() is to separate by a comma,
                                                    //but specifying an empty string as an argument outputs a fully joined string