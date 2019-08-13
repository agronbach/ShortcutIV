const boulder = ["Rock", "Ground", "Fighting", "Steel"]; //https://silph.gg/boulder-cup
const twilight = ["Dark", "Fairy", "Poison", "Ghost"]; //https://silph.gg/twilight-cup
const tempest = ["Electric", "Ice", "Flying", "Ground"]; //https://silph.gg/tempest-cup
const kingdom = ["Fire", "Ice", "Dragon", "Steel"]; //https://silph.gg/kingdom-cup
const nightmare = ["Psychic", "Dark", "Fighting"]; //https://silph.gg/nightmare-cup
const rainbow = ["Fire", "Electric", "Bug", "Grass" , "Water"]; //https://silph.gg/rainbow-cup
const jungle = ["Electric", "Bug", "Grass", "Normal"]; //https://silph.gg/cup/jungle
const s1regionals = ["Electric", "Ground", "Rock", "Steel", "Fighting", "Dark", "Poison", "Fairy", "Ghost", "Ice", "Flying", "Fire", "Dragon"]; //https://silph.gg/season-1-regionals

function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
}

function cupPokes(silphCup) {
  var pokes = [];
  
  for (i=0; i<silphCup.length; i++) {
    pokes = arrayUnique(pokes.concat(findPokes(silphCup[i].toLowerCase())));
  }
  return pokes;
}

function mergeCupTypes(silphCup)
{
  var finalTypes = {};
  for (var i=0; i<silphCup.length; i++)
  {
    finalTypes[silphCup[i]] = findTypes(silphCup[i].toLowerCase());
  }
  return finalTypes;
}