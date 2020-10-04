/////////////////////// filter() DEMO CODE ///////////////////////

function justCoolStuff(myStuffArr, coolStuffArr){
    let myCoolStuff = myStuffArr.filter((item) => coolStuffArr.includes(item)); //N.B. Could prepend coolStuffArr with ! to return NOT cool stuff instead
    return myCoolStuff;
  }
  
 const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  
  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
  console.log(justCoolStuff(myStuff, coolStuff))
  // Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
  