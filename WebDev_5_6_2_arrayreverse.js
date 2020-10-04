// Write your code here:
function reverseArray(arrayToFlip) {
    let returnArray = [];
    for (let i = (arrayToFlip.length - 1); i >= 0; i--) {
        returnArray[(arrayToFlip.length - 1) - i] = arrayToFlip[i];
    }
    return returnArray;
  }
  
  // When you're ready to test your code, uncomment the below and run:
   
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];
  
  
  
  