// returns sorted list of all (up to 4096) combinations indexed by statProd + CP
function calculate(baseatk, basedef, basesta, league, floor, minLvl) {
  //console.log("calculate: Received: baseatk="+baseatk+" basedef="+basedef+" basesta="+basesta+" league="+league+" floor="+floor+" minLvl="+minLvl);
  // Each item stored by statProd.CP
  // Rank definition: { "12613615.1500": { "IVs": {"A":14, "D":14, "S":14, "star": "3*"}, "base": {"A":145, "D":105, "S":115}, "battle": {"A":145, "D":105, "S":115}, "L":25},
  var ranks = [];
  var maxAtk = {value:0,aIV:0,dIV:0,sIV:0,sp:0};
  var maxDef = {value:0,aIV:0,dIV:0,sIV:0,sp:0};
  var maxHP = {value:0,aIV:0,dIV:0,sIV:0,sp:0};
  minLvl = Math.max(0, (minLvl - 1) * 2) // use half-levels
  
  // cpm array used for calculations
  var cpm = [0.094, 0.1351374318, 0.16639787, 0.192650919, 0.21573247, 0.2365726613, 0.25572005, 0.2735303812, 0.29024988, 0.3060573775, 0.3210876, 0.3354450362, 0.34921268, 0.3624577511, 0.3752356, 0.387592416, 0.39956728, 0.4111935514, 0.4225, 0.4329264091, 0.44310755, 0.4530599591, 0.4627984, 0.472336093, 0.48168495, 0.4908558003, 0.49985844, 0.508701765, 0.51739395, 0.5259425113, 0.5343543, 0.5426357375, 0.5507927, 0.5588305862, 0.5667545, 0.5745691333, 0.5822789, 0.5898879072, 0.5974, 0.6048236651, 0.6121573, 0.6194041216, 0.6265671, 0.6336491432, 0.64065295, 0.6475809666, 0.65443563, 0.6612192524, 0.667934, 0.6745818959, 0.6811649, 0.6876849038, 0.69414365, 0.70054287, 0.7068842, 0.7131691091, 0.7193991, 0.7255756136, 0.7317, 0.7347410093, 0.7377695, 0.7407855938, 0.74378943, 0.7467812109, 0.74976104, 0.7527290867, 0.7556855, 0.7586303683, 0.76156384, 0.7644860647, 0.76739717, 0.7702972656, 0.7731865, 0.7760649616, 0.77893275, 0.7817900548, 0.784637, 0.7874736075, 0.7903];
  
  for(var atk=floor/1;atk<=15;atk++){for(var def=floor/1;def<=15;def++){for(var sta=floor/1;sta<=15;sta++){
    // account for half-level CPMs (40-1)*2 = 78
		for( var level = 78; level >= minLvl; level-- ) {
		  var cp = Math.max(10, Math.floor((baseatk + atk) * Math.sqrt(basedef + def) * Math.sqrt(basesta + sta) * cpm[level] * cpm[level] / 10));
		  if (cp > league) continue; // keep searching for level
		  
		  var aSt = (baseatk + atk)*cpm[level];
		  var dSt = (basedef + def)*cpm[level];
		  var sSt = Math.floor((basesta + sta)*cpm[level]);
		  var statProd = Math.round(aSt * dSt * sSt);
		  //update maxStats if necessary
	    if ((maxAtk.value < aSt) || ((maxAtk.sp < statProd) && (maxAtk.value <= aSt))) {
	      maxAtk.value = aSt;maxAtk.aIV = atk;maxAtk.dIV = def;maxAtk.sIV = sta;maxAtk.sp = statProd;}
		if ((maxDef.value < dSt) || ((maxDef.sp < statProd) && (maxDef.value <= dSt))) {
	      maxDef.value = dSt;maxDef.aIV = atk;maxDef.dIV = def;maxDef.sIV = sta;maxDef.sp = statProd;}
		if ((maxHP.value < sSt) || ((maxHP.sp < statProd) && (maxHP.value <= sSt))) {
	      maxHP.value = sSt;maxHP.aIV = atk;maxHP.dIV = def;maxHP.sIV = sta;maxHP.sp = statProd;}
	    
		  
		  var IVsum = atk/1 + def/1 + sta/1;
		  var Star = "NA";
      if (IVsum<23){Star="0*";}else if(IVsum<30){Star="1*";}else if (IVsum<37){Star="2*";}else if(IVsum<45){Star="3*";}else{Star="4*";}
		  level = level/2 + 1;
		  
		  // store as arrays to prevent hash collisions from dropping entires
		  var newIndex = statProd+"."+cp;
		  if (!(newIndex in ranks)) {
		    ranks[newIndex] = [{ "IVs": {"A":atk, "D":def, "S":sta, "star":Star}, "battle":{"A":aSt, "D":dSt, "S":sSt}, "L":level}];
		  } else {
		    ranks[newIndex].push({ "IVs": {"A":atk, "D":def, "S":sta, "star":Star}, "battle":{"A":aSt, "D":dSt, "S":sSt}, "L":level});
		  }
		  break; // stop evaluating this IV combination
  }}}}
  
  // sort by statProd+CP before returning
  const sorted = {};
  Object.keys(ranks).sort(function(a, b){return b-a}).forEach(function(key) {sorted[key] = ranks[key];});
  
  //add max stats to object
  sorted["maxAtk"] = maxAtk;
  sorted["maxDef"] = maxDef;
  sorted["maxHP"] = maxHP;
  
  //console.log("calculate output:"+JSON.stringify(sorted, null, 2));
  return sorted;
}