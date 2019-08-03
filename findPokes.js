function findPokes(searchType)
{
  var typePokes = [];
  
  $(pokemonTypings).each(function( index ) {
    var type1 = pokemonTypings[index].type;
    var type2 = pokemonTypings[index].type2;
    var pokeToAdd = pokemonTypings[index].pokemonId;
    
    // if pokemon name is null, skip this iteration, otherwise lowercase
    if (pokeToAdd !== null) { pokeToAdd = pokeToAdd.toLowerCase();
    } else { return; }
    
    // is it a dual type pokemon?
    if ((type2 !== null) && (type2.toLowerCase().indexOf(searchType)>-1)) {
      //console.log("Found t2=" + searchType + " at index=" + index + ":" + pokemonTypings[index].pokemonId );
      // add this to the output array if it isn't there yet
      if (typePokes.length === 0)
      {
        // add first poke to array
        typePokes.push(pokeToAdd);
      } else {
        // check if we've already added this poke before
        if (typePokes.indexOf(pokeToAdd) === -1) {
          // we have not added this poke before
          typePokes.push(pokeToAdd);
        }
      }
    } else {
      // check pokemon's first type
      if ((type1 !== null) && (type1.toLowerCase().indexOf(searchType)>-1)) {
          //console.log("Found t1=" + searchType + " at index=" + index + ":" + pokemonTypings[index].pokemonId );
          // add this to the output array if it isn't there yet
          if (typePokes.length === 0)
          {
            // add first poke to array
            typePokes.push(pokeToAdd);
          } else {
            // check if we've already added this poke before
            if (typePokes.indexOf(pokeToAdd) === -1) {
              // we have not added this poke before
              typePokes.push(pokeToAdd);
            }
          }
      }
    }
  });
  return typePokes;
}