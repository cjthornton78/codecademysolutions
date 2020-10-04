/////////////////////// sort() DEMO CODE 2 ///////////////////////

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

function sortSpeciesByTeeth(speciesArr){
    return speciesArr.sort(function(a, b) {return a.numTeeth-b.numTeeth}); // Sorts ascending, using the numTeeth key
}

console.log(sortSpeciesByTeeth(speciesArray));
