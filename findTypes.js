function findTypes(searchType)
{
  var pokeTypes = [];
  
  $(pokemonTypings).each(function( index ) {
    var type1 = pokemonTypings[index].type;
    var type2 = pokemonTypings[index].type2;
    var pokeToAdd = pokemonTypings[index].pokemonId;
    
    // if pokemon name is null, skip this iteration, otherwise lowercase
    if (pokeToAdd !== null) { pokeToAdd = pokeToAdd.toLowerCase();
    } else { return; }
    
    // skip single type pokemon
    if (type2 === null)
    { return; }
    
    // is it a dual type pokemon?
    if (type2.toLowerCase().indexOf(searchType)>-1) {
      //console.log("Found t2=" + searchType + " at index=" + index + ":" + pokemonTypings[index].pokemonId );
      
      // add this to the output array if it isn't there yet
      if (pokeTypes.length === 0)
      {
        // add first type2 to array
        pokeTypes.push(type1);
      } else {
        // check if we've already added this before
        if (pokeTypes.indexOf(type1) === -1) {
          // we have not added this type before
          pokeTypes.push(type1);
        }
      }
    } else {
      if (type1.toLowerCase().indexOf(searchType)>-1) {
        
        // add this to the output array if it isn't there yet
        if (pokeTypes.length === 0)
        {
          // add first type2 to array
          pokeTypes.push(type2);
        } else {
          // check if we've already added this before
          if (pokeTypes.indexOf(type2) === -1) {
            // we have not added this type before
            pokeTypes.push(type2);
          }
        }
      }
    }
  });
  return pokeTypes;
}