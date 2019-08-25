// returns sorted list of all (up to 4096) combinations indexed by statProd + CP
function calculate(baseatk, basedef, basesta, league) {
  console.log("calculate: Received: baseatk="+baseatk+" basedef="+basedef+" basesta="+basesta+" league="+league);
  // Each item stored by statProd.CP
  // Rank definition: { "12613615.1500": { "IVs": {"A":14, "D":14, "S":14, "star": "3*"}, "base": {"A":145, "D":105, "S":115}, "battle": {"A":145, "D":105, "S":115}, "L":25},
  var ranks = {};
  
  for( var atk = 0; atk <= 15; atk++ ) {
	  for( var def = 0; def <= 15; def++ ) {
		  for( var sta = 0; sta <= 15; sta++ ) {
				//if( atk + def + sta < miniv ) continue;
				
				// account for half-level CPMs (40-1)*2 = 78
				for( var level = 78; level >= 0; level-- ) {
				  var cp = Math.max(10, Math.floor((baseatk + atk) * Math.sqrt(basedef + def) * Math.sqrt(basesta + sta) * cpm[level] * cpm[level] / 10));
				  if (cp > league) continue; // keep searching for level
				  
				  var aSt = (baseatk + atk)*cpm[level];
				  var dSt = (basedef + def)*cpm[level];
				  var sSt = Math.floor((basesta + sta)*cpm[level]);
				  var statProd = Math.round(aSt * dSt * sSt);
				  var newIndex = statProd + cp;
				  var IVsum = atk/1 + def/1 + sta/1;
				  var Star = "NA";
          if (IVsum < 23) {
            Star = "0*";
          } else if (IVsum < 30) {
            Star = "1*";
          } else if (IVsum < 40) {
            Star = "2*";
          } else if (IVsum < 45) {
            Star = "3*";
          } else {
            Star = "4*";
          }
				  level = level/2 + 1;
				  ranks[statProd+"."+cp] = { "IVs": {"A":atk, "D":def, "S":sta, "star":Star}, "battle":{"A":aSt, "D":dSt, "S":sSt}, "L":level};
				  break; // stop evaluating this IV combination
				}
			}
	  }
  }
  // sort by statProd+CP before returning
  const sorted = {};
  Object.keys(ranks).sort(function(a, b){return b-a}).forEach(function(key) {
    sorted[key] = ranks[key];
  });
  //console.log("calculate output:"+JSON.stringify(sorted));
  return sorted;
}