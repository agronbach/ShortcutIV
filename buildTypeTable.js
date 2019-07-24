// Array with typings, built from https://imgur.com/PY95xi0
var types = {
	"Bug": {
		"W": {
			"Fire": "1.6",
			"Flying": "1.6",
			"Rock": "1.6"
		},
		"R": {
			"Fighting": "0.625",
			"Ground": "0.625",
			"Grass": "0.625"
		},
		"SE": {
			"Dark": "1.6",
			"Grass": "1.6",
			"Psychic": "1.6"
		},
		"NVE": {
			"Steel": "0.625",
			"Poison": "0.625",
			"Ghost": "0.625",
			"Flying": "0.625",
			"Fighting": "0.625",
			"Fire": "0.625",
			"Fairy": "0.625"
		}
	},
	"Dark": {
		"W": {
			"Bug": "1.6",
			"Fairy": "1.6",
			"Fighting": "1.6"
		},
		"R": {
			"Psychic": "0.391",
			"Ghost": "0.625",
			"Dark": "0.625"
		},
		"SE": {
			"Ghost": "1.6",
			"Psychic": "1.6"
		},
		"NVE": {
			"Fighting": "0.625",
			"Fairy": "0.625",
			"Dark": "0.625"
		}
	},
	"Dragon": {
		"W": {
			"Dragon": "1.6",
			"Fairy": "1.6",
			"Ice": "1.6"
		},
		"R": {
			"Water": "0.625",
			"Grass": "0.625",
			"Fire": "0.625",
			"Electric": "0.625"
		},
		"SE": {
			"Dragon": "1.6"
		},
		"NVE": {
			"Steel": "0.625",
			"Fairy": "0.391"
		}
	},
	"Electric": {
		"W": {
			"Ground": "1.6"
		},
		"R": {
			"Steel": "0.625",
			"Flying": "0.625",
			"Electric": "0.625"
		},
		"SE": {
			"Flying": "1.6",
			"Water": "1.6"
		},
		"NVE": {
			"Ground": "0.391",
			"Grass": "0.625",
			"Electric": "0.625",
			"Dragon": "0.625"
		}
	},
	"Fairy": {
		"W": {
			"Poison": "1.6",
			"Steel": "1.6"
		},
		"R": {
			"Fighting": "0.625",
			"Dragon": "0.391",
			"Dark": "0.625",
			"Bug": "0.625"
		},
		"SE": {
			"Dark": "1.6",
			"Dragon": "1.6",
			"Fighting": "1.6"
		},
		"NVE": {
			"Steel": "0.625",
			"Poison": "0.625",
			"Fire": "0.625"
		}
	},
	"Fighting": {
		"W": {
			"Fairy": "1.6",
			"Flying": "1.6",
			"Psychic": "1.6"
		},
		"R": {
			"Rock": "0.625",
			"Dark": "0.625",
			"Bug": "0.625"
		},
		"SE": {
			"Dark": "1.6",
			"Ice": "1.6",
			"Normal": "1.6",
			"Rock": "1.6",
			"Steel": "1.6"
		},
		"NVE": {
			"Psychic": "0.625",
			"Poison": "0.625",
			"Ghost": "0.391",
			"Flying": "0.625",
			"Fairy": "0.625",
			"Bug": "0.625"
		}
	},
	"Fire": {
		"W": {
			"Ground": "1.6",
			"Rock": "1.6",
			"Water": "1.6"
		},
		"R": {
			"Steel": "0.625",
			"Ice": "0.625",
			"Grass": "0.625",
			"Fire": "0.625",
			"Fairy": "0.625",
			"Bug": "0.625"
		},
		"SE": {
			"Bug": "1.6",
			"Grass": "1.6",
			"Ice": "1.6",
			"Steel": "1.6"
		},
		"NVE": {
			"Water": "0.625",
			"Rock": "0.625",
			"Fire": "0.625",
			"Dragon": "0.625"
		}
	},
	"Flying": {
		"W": {
			"Electric": "1.6",
			"Ice": "1.6",
			"Rock": "1.6"
		},
		"R": {
			"Ground": "0.391",
			"Grass": "0.625",
			"Fighting": "0.625",
			"Bug": "0.625"
		},
		"SE": {
			"Bug": "1.6",
			"Fighting": "1.6",
			"Grass": "1.6"
		},
		"NVE": {
			"Steel": "0.625",
			"Rock": "0.625",
			"Electric": "0.625"
		}
	},
	"Ghost": {
		"W": {
			"Dark": "1.6",
			"Ghost": "1.6"
		},
		"R": {
			"Poison": "0.625",
			"Normal": "0.391",
			"Fighting": "0.391",
			"Bug": "0.625"
		},
		"SE": {
			"Ghost": "1.6",
			"Psychic": "1.6"
		},
		"NVE": {
			"Normal": "0.391",
			"Dark": "0.625"
		}
	},
	"Grass": {
		"W": {
			"Bug": "1.6",
			"Fire": "1.6",
			"Flying": "1.6",
			"Ice": "1.6",
			"Poison": "1.6"
		},
		"R": {
			"Water": "0.625",
			"Ground": "0.625",
			"Grass": "0.625",
			"Electric": "0.625"
		},
		"SE": {
			"Ground": "1.6",
			"Rock": "1.6",
			"Water": "1.6"
		},
		"NVE": {
			"Steel": "0.625",
			"Poison": "0.625",
			"Grass": "0.625",
			"Flying": "0.625",
			"Fire": "0.625",
			"Dragon": "0.625",
			"Bug": "0.625"
		}
	},
	"Ground": {
		"W": {
			"Grass": "1.6",
			"Ice": "1.6",
			"Water": "1.6"
		},
		"R": {
			"Rock": "0.625",
			"Poison": "0.625",
			"Electric": "0.391"
		},
		"SE": {
			"Electric": "1.6",
			"Fire": "1.6",
			"Poison": "1.6",
			"Rock": "1.6",
			"Steel": "1.6"
		},
		"NVE": {
			"Grass": "0.625",
			"Flying": "0.391",
			"Bug": "0.625"
		}
	},
	"Ice": {
		"W": {
			"Fighting": "1.6",
			"Fire": "1.6",
			"Rock": "1.6",
			"Steel": "1.6"
		},
		"R": {
			"Ice": "0.625"
		},
		"SE": {
			"Dragon": "1.6",
			"Flying": "1.6",
			"Grass": "1.6",
			"Ground": "1.6"
		},
		"NVE": {
			"Water": "0.625",
			"Steel": "0.625",
			"Ice": "0.625",
			"Fire": "0.625"
		}
	},
	"Normal": {
		"W": {
			"Fighting": "1.6"
		},
		"R": {
			"Ghost": "0.391"
		},
		"SE": {},
		"NVE": {
			"Steel": "0.625",
			"Rock": "0.625",
			"Ghost": "0.391"
		}
	},
	"Poison": {
		"W": {
			"Ground": "1.6",
			"Psychic": "1.6"
		},
		"R": {
			"Poison": "0.625",
			"Grass": "0.625",
			"Fighting": "0.625",
			"Fairy": "0.625",
			"Bug": "0.625"
		},
		"SE": {
			"Fairy": "1.6",
			"Grass": "1.6"
		},
		"NVE": {
			"Steel": "0.391",
			"Rock": "0.625",
			"Poison": "0.625",
			"Ground": "0.625",
			"Ghost": "0.625"
		}
	},
	"Psychic": {
		"W": {
			"Bug": "1.6",
			"Dark": "1.6",
			"Ghost": "1.6"
		},
		"R": {
			"Psychic": "0.625",
			"Fighting": "0.625"
		},
		"SE": {
			"Fighting": "1.6",
			"Poison": "1.6"
		},
		"NVE": {
			"Steel": "0.625",
			"Psychic": "0.625",
			"Dark": "0.391"
		}
	},
	"Rock": {
		"W": {
			"Fighting": "1.6",
			"Grass": "1.6",
			"Ground": "1.6",
			"Steel": "1.6",
			"Water": "1.6"
		},
		"R": {
			"Poison": "0.625",
			"Normal": "0.625",
			"Flying": "0.625",
			"Fire": "0.625"
		},
		"SE": {
			"Bug": "1.6",
			"Fire": "1.6",
			"Flying": "1.6",
			"Ice": "1.6"
		},
		"NVE": {
			"Steel": "0.625",
			"Ground": "0.625",
			"Fighting": "0.625"
		}
	},
	"Steel": {
		"W": {
			"Fighting": "1.6",
			"Fire": "1.6",
			"Ground": "1.6"
		},
		"R": {
			"Steel": "0.625",
			"Rock": "0.625",
			"Psychic": "0.625",
			"Poison": "0.391",
			"Normal": "0.625",
			"Ice": "0.625",
			"Grass": "0.625",
			"Flying": "0.625",
			"Fairy": "0.625",
			"Dragon": "0.625",
			"Bug": "0.625"
		},
		"SE": {
			"Fairy": "1.6",
			"Ice": "1.6",
			"Rock": "1.6"
		},
		"NVE": {
			"Water": "0.625",
			"Steel": "0.625",
			"Fire": "0.625",
			"Electric": "0.625"
		}
	},
	"Water": {
		"W": {
			"Electric": "1.6",
			"Grass": "1.6"
		},
		"R": {
			"Water": "0.625",
			"Steel": "0.625",
			"Ice": "0.625",
			"Fire": "0.625"
		},
		"SE": {
			"Fire": "1.6",
			"Ground": "1.6",
			"Rock": "1.6"
		},
		"NVE": {
			"Water": "0.625",
			"Grass": "0.625",
			"Dragon": "0.625"
		}
	}
};

function outputHTML() {
	var inputs = collectInputs();
	outputTable(inputs);
	stylizeTable();
}

function collectInputs() {
	$('#resultsContainer').empty();
	var selectedType = $("#type option:selected").text();
	var secondType = $("#type2 option:selected").text();
	if (secondType == "None") {
		secondType = "";
		document.title = "ShortcutIV - " + selectedType + " Type Chart"
	} else {
		document.title = "ShortcutIV - " + selectedType + "/" + secondType + " Type Chart"
	}
	console.log("Second Type selected is :" + secondType);

	var type1, type2;
	var prop1, prop2;
	$.each(types, function(typ1, pr1) {
		if (typ1 == selectedType) {
			type1 = selectedType;
			prop1 = pr1;
			//console.log("Found typ1 = "+type1);
			$.each(types, function(typ2, pr2) {
				if (typ2 == secondType) {
					type2 = typ2;
					prop2 = pr2;
					//console.log("Found typ2 = "+type2);
				}
			});
		}
	});

	//console.log ("Type1 = "+type1+" and Type2 = "+type2);
	//console.log ("Prop1 = "+JSON.stringify(prop1));
	//console.log ("Prop2 = "+JSON.stringify(prop2));

	if ((type2 === undefined) || (type1 == type2)) {
		return [prop1, type1]
		//outputTable(prop1, type1);
	} else {
		return [mergeTypes(prop1, prop2), type1, type2];
	} 
}

// Merge type1 and type2 into one object
function mergeTypes(prop1, prop2) {
	var merged = "";
	var merged = JSON.parse(JSON.stringify(prop1));
	$.each(prop2, function(i, obj) {
		$.each(obj, function(k, v) {
			//console.log("Merging k="+k+" v="+v+" i="+i);
			merged[i][k] = v;
		});
	});

	// Remove SE and NVE values
	delete merged.SE;
	delete merged.NVE;

	//console.log("Merged pre-result:"+JSON.stringify(merged));

	// merge duplicate entries in "W"
	var keys1 = Object.keys(prop1.W);
	var keys2 = Object.keys(prop2.W);

	for (i = 0; i < keys1.length; i++) {
		for (j = 0; j < keys2.length; j++) {
			if (keys1[i] === keys2[j]) {
				merged.W[keys1[i]] = Math.round(((prop1.W[keys1[i]] / 1 * prop2.W[keys2[j]] / 1) + 0.00001) * 1000) / 1000;
				//console.log ("Merged "+[keys1[i]]+" = "+merged.W[keys1[i]]);
			}
		}
	}

	// merge duplicate entries in "R"
	var keys1 = Object.keys(prop1.R);
	var keys2 = Object.keys(prop2.R);

	for (i = 0; i < keys1.length; i++) {
		for (j = 0; j < keys2.length; j++) {
			if (keys1[i] === keys2[j]) {
				//console.log ("Merged "+keys1[i]+" "+prop1.R[keys1[i]]/1+" * "+prop2.R[keys2[j]]+"=");
				merged.R[keys1[i]] = Math.round(((prop1.R[keys1[i]] / 1 * prop2.R[keys2[j]] / 1) + 0.00001) * 1000) / 1000;
				//console.log ("="+merged.R[keys1[i]]);
			}
		}
	}

	//console.log("Merged dupes:"+JSON.stringify(merged));

	var keysW = Object.keys(merged.W);
	var keysR = Object.keys(merged.R);
	//console.log("keysW("+keysW.length+":"+keysW);
	//console.log("keysR("+keysR.length+":"+keysR);

	for (i = 0; i < (Object.keys(merged.W)).length; i++) {
		for (j = 0; j < (Object.keys(merged.R)).length; j++) {
			if (Object.keys(merged.W)[i] === Object.keys(merged.R)[j]) {
				var product = Math.round(((merged.W[Object.keys(merged.W)[i]] / 1 * merged.R[Object.keys(merged.R)[j]] / 1) + 0.00001) * 1000) / 1000;
				//console.log ("Merged "+Object.keys(merged.W)[i]+"("+merged.W[Object.keys(merged.W)[i]]/1+") and "+Object.keys(merged.R)[j]+"("+merged.R[Object.keys(merged.R)[j]]/1+") = "+product);

				// check the results of the merge
				if (product / 1 > 1) {
					// This is still a weakness
					merged.W[Object.keys(merged.W)[i]] = product / 1;
					delete merged.R[Object.keys(merged.R)[j]];
				} else if (product / 1 < 1) {
					// This is still a resistance
					merged.R[Object.keys(merged.R)[j]] = product / 1;
					delete merged.W[Object.keys(merged.W)[i]];
					i--; // decrement to not skip entries
				} else {
					// This cancels out, delete both
					delete merged.W[Object.keys(merged.W)[i]];
					delete merged.R[Object.keys(merged.R)[j]];
					i--; // decrement to not skip entries
				}
			}
		}
	}

	//console.log("Reduced result:"+JSON.stringify(merged));

	const prop = {};
	prop.W = {};
	prop.R = {};

	// Add empty sets so output code doesn't crash
	prop.SE = {};
	prop.NVE = {};

	// Alphabetize "W"
	Object.keys(merged.W).sort().forEach(function(key) {
		prop.W[key] = merged.W[key];
	});

	// Alphabetize "R"
	Object.keys(merged.R).sort().forEach(function(key) {
		prop.R[key] = merged.R[key];
	});
	return prop;
}

function outputTable(prop, type1, type2) {
	var topRow = Math.max(Object.keys(prop.W).length, Object.keys(prop.SE).length);
	var bottomRow = Math.max(Object.keys(prop.R).length, Object.keys(prop.NVE).length);
	//console.log("Found topRow:"+topRow+" bottomRow:"+bottomRow);
	//console.log("prop = "+JSON.stringify(prop));

	// Output first row for selectedType
	var Weak = Object.keys(prop.W)[0];
	var xWeak = prop.W[Weak];
	var SuperEff = Object.keys(prop.SE)[0]
	var xSuperEff = prop.SE[SuperEff];

	// check if we are outputting one type or two
	if (typeof type2 === 'undefined') {
		// we are outputting one type only
		if (Weak && SuperEff) {
			$("#resultsContainer").append('<tr><td>' + Weak + '</td><td style="color:green">x' + xWeak + '</td><td style="vertical-align:middle" rowspan=' + (topRow + bottomRow + 1) + '>' + type1 + '</td><td style="color:green">x' + xSuperEff + '</td><td>' + SuperEff + '</td></tr>');
		} else if (typeof Weak === 'undefined') {
			$("#resultsContainer").append('<tr><td> </td><td> </td><td rowspan=' + (topRow + bottomRow + 1) + '>' + type1 + '</td><td style="color:green">x' + xSuperEff + '</td><td>' + SuperEff + '</td></tr>');
		} else {
			$("#resultsContainer").append('<tr><td>' + Weak + '</td><td style="color:green">x' + xWeak + '</td><td rowspan=' + (topRow + bottomRow + 1) + '>' + type1 + '</td><td> </td><td> </td></tr>');
		}
	} else {
		// We have dual types, no SuperEff to output
		if (Weak) {
			//console.log("Found Weak:"+Weak+" && SuperEff:"+SuperEff);
			$("#resultsContainer").append('<tr><td>' + Weak + '</td><td style="color:green">x' + xWeak + '</td><td rowspan=' + (topRow + bottomRow + 1) + '>' + type1 + '</td><td rowspan=' + (topRow + bottomRow + 1) + '>' + type2 + '</td><td> </td><td> </td></tr>');
		} else {
			console.log("ERROR: Didn't find Weak?? (" + Weak);
			$("#resultsContainer").append('<tr><td> </td><td style="color:green"> </td><td rowspan=' + (topRow + bottomRow + 1) + '>' + type1 + '</td><td rowspan=' + (topRow + bottomRow + 1) + '>' + type2 + '</td><td> </td><td> </td></tr>');
		}
	}

	// Output top half of the chart, skipping null entries
	for (i = 1; i < topRow; i++) {
		var Weak = Object.keys(prop.W)[i];
		var xWeak = prop.W[Weak];
		var SuperEff = Object.keys(prop.SE)[i]
		var xSuperEff = prop.SE[SuperEff];

		if ((typeof SuperEff !== 'undefined') && (Weak && SuperEff)) {
			$("#resultsContainer").append('<tr><td>' + Weak + '</td><td style="color:green">x' + xWeak + '</td><td style="color:green">x' + xSuperEff + '</td><td>' + SuperEff + '</td></tr>');
		} else if (typeof Weak === 'undefined') {
			$("#resultsContainer").append('<tr><td> </td><td> </td><td style="color:green">x' + xSuperEff + '</td><td>' + SuperEff + '</td></tr>');
		} else {
			$("#resultsContainer").append('<tr><td>' + Weak + '</td><td style="color:green">x' + xWeak + '</td><td> </td><td> </td></tr>');
		}
	}

	// Output blank center row for padding
	$("#resultsContainer").append('<tr><td> </td><td> </td><td> </td><td> </td></tr>');

	// Output bottom half of the chart skipping null entries
	for (i = 0; i < bottomRow; i++) {
		var Resist = Object.keys(prop.R)[i];
		var xResist = prop.R[Resist];
		var NotVeryEff = Object.keys(prop.NVE)[i]
		var xNotVeryEff = prop.NVE[NotVeryEff];

		if (Resist && NotVeryEff) {
			$("#resultsContainer").append('<tr><td>' + Resist + '</td><td style="color:red">x' + xResist + '</td><td style="color:red">x' + xNotVeryEff + '</td><td>' + NotVeryEff + '</td></tr>');
		} else if (typeof Resist === 'undefined') {
			$("#resultsContainer").append('<tr><td> </td><td> </td><td style="color:red">x' + xNotVeryEff + '</td><td>' + NotVeryEff + '</td></tr>');
		} else {
			$("#resultsContainer").append('<tr><td>' + Resist + '</td><td style="color:red">x' + xResist + '</td><td> </td><td> </td></tr>');
		}
	}
	// Let's add colors to our table!  
	stylizeTable();
}

function stylizeTable() {
	$("#resultsContainer tr").each(function() {
		$('td', this).each(function() {
			$("td:contains('Bug')").addClass('Bug');
			$("td:contains('Dark')").addClass('Dark');
			$("td:contains('Dragon')").addClass('Dragon');
			$("td:contains('Electric')").addClass('Electric');
			$("td:contains('Fairy')").addClass('Fairy');
			$("td:contains('Fighting')").addClass('Fighting');
			$("td:contains('Fire')").addClass('Fire');
			$("td:contains('Flying')").addClass('Flying');
			$("td:contains('Ghost')").addClass('Ghost');
			$("td:contains('Grass')").addClass('Grass');
			$("td:contains('Ground')").addClass('Ground');
			$("td:contains('Ice')").addClass('Ice');
			$("td:contains('Normal')").addClass('Normal');
			$("td:contains('Poison')").addClass('Poison');
			$("td:contains('Psychic')").addClass('Psychic');
			$("td:contains('Rock')").addClass('Rock');
			$("td:contains('Steel')").addClass('Steel');
			$("td:contains('Water')").addClass('Water');
		})
	})
};