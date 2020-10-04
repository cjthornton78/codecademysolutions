/////////////////////// sort() DEMO CODE ///////////////////////

function sortYears(yrsArray) {
    return yrsArray.sort(function(a, b){return b-a}); // function passed to sort() causes sorting in descending order - passing no arguments would sort ascending by default
  }
  
  const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
  
  console.log(sortYears(years))
  // Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]