var pokeList = [{'label':'Bulbasaur','value':'1,118,111,128,2,3'},{'label':'Ivysaur','value':'2,151,143,155,1,3'},{'label':'Venusaur','value':'3,198,189,190,1,2'},{'label':'Charmander','value':'4,116,93,118,5,6'},{'label':'Charmeleon','value':'5,158,126,151,4,6'},{'label':'Charizard','value':'6,223,173,186,4,5'},{'label':'Squirtle','value':'7,94,121,127,8,9'},{'label':'Wartortle','value':'8,126,155,153,7,9'},{'label':'Blastoise','value':'9,171,207,188,7,8'},{'label':'Caterpie','value':'10,55,55,128,11,12'},{'label':'Metapod','value':'11,45,80,137,10,12'},{'label':'Butterfree','value':'12,167,137,155,10,11'},{'label':'Weedle','value':'13,63,50,120,14,15'},{'label':'Kakuna','value':'14,46,75,128,13,15'},{'label':'Beedrill','value':'15,169,130,163,13,14'},{'label':'Pidgey','value':'16,85,73,120,17,18'},{'label':'Pidgeotto','value':'17,117,105,160,16,18'},{'label':'Pidgeot','value':'18,166,154,195,16,17'},{'label':'Rattata','value':'19&!alola,103,70,102,20&!alola'},{'label':'Rattata_Alola','value':'19&alola,103,70,102,20&alola'},{'label':'Raticate','value':'20&!alola,161,139,146,19&!alola'},{'label':'Raticate_Alola','value':'20&alola,135,154,181,19&alola'},{'label':'Spearow','value':'21,112,60,120,22'},{'label':'Fearow','value':'22,182,133,163,21'},{'label':'Ekans','value':'23,110,97,111,24'},{'label':'Arbok','value':'24,167,153,155,23'},{'label':'Pikachu','value':'25,112,96,111,26&!alola,172&eggsonly'},{'label':'Raichu','value':'26&!alola,193,151,155,25,172&eggsonly'},{'label':'Raichu_Alola','value':'26&alola,201,154,155'},{'label':'Sandshrew','value':'27&!alola,126,120,137,28&!alola'},{'label':'Sandshrew_Alola','value':'27&alola,125,129,137,28&alola'},{'label':'Sandslash','value':'28&!alola,182,175,181,27&!alola'},{'label':'Sandslash_Alola','value':'28&alola,177,195,181,27&alola'},{'label':'Nidoran_Female','value':'29,86,89,146,30,31'},{'label':'Nidorina','value':'30,117,120,172,29,31'},{'label':'Nidoqueen','value':'31,180,173,207,29,30'},{'label':'Nidoran_Male','value':'32,105,76,130,33,34'},{'label':'Nidorino','value':'33,137,111,156,32,34'},{'label':'Nidoking','value':'34,204,156,191,32,33'},{'label':'Clefairy','value':'35,107,108,172,36,173&eggsonly'},{'label':'Clefable','value':'36,178,162,216,35,173&eggsonly'},{'label':'Vulpix','value':'37&!alola,96,109,116,38&!alola'},{'label':'Vulpix_Alola','value':'37&alola,96,109,116,38&alola'},{'label':'Ninetales','value':'38&!alola,169,190,177,37&!alola'},{'label':'Ninetales_Alola','value':'38&alola,170,193,177,37&alola'},{'label':'Jigglypuff','value':'39,80,41,251,40,174&eggsonly'},{'label':'Wigglytuff','value':'40,156,90,295,39,174&eggsonly'},{'label':'Zubat','value':'41,83,73,120,42,169'},{'label':'Golbat','value':'42,161,150,181,41,169'},{'label':'Oddish','value':'43,131,112,128,44,45,182'},{'label':'Gloom','value':'44,153,136,155,43,45,182'},{'label':'Vileplume','value':'45,202,167,181,43,44,182'},{'label':'Paras','value':'46,121,99,111,47'},{'label':'Parasect','value':'47,165,146,155,46'},{'label':'Venonat','value':'48,100,100,155,49'},{'label':'Venomoth','value':'49,179,143,172,48'},{'label':'Diglett','value':'50&!alola,109,78,67,51&!alola'},{'label':'Diglett_Alola','value':'50&alola,108,81,67,51&alola'},{'label':'Dugtrio','value':'51&!alola,167,134,111,50&!alola'},{'label':'Dugtrio_Alola','value':'51&alola,201,142,111,50&alola'},{'label':'Meowth','value':'52&!alola,92,78,120,53&!alola'},{'label':'Meowth_Alola','value':'52&alola,99,78,120,53&alola'},{'label':'Persian','value':'53&!alola,150,136,163,52&!alola'},{'label':'Persian_Alola','value':'53&alola,158,136,163,52&alola'},{'label':'Psyduck','value':'54,122,95,137,55'},{'label':'Golduck','value':'55,191,162,190,54'},{'label':'Mankey','value':'56,148,82,120,57'},{'label':'Primeape','value':'57,207,138,163,56'},{'label':'Growlithe','value':'58,136,93,146,59'},{'label':'Arcanine','value':'59,227,166,207,58'},{'label':'Poliwag','value':'60,101,82,120,61,62,186'},{'label':'Poliwhirl','value':'61,130,123,163,60,62,186'},{'label':'Poliwrath','value':'62,182,184,207,60,61,186'},{'label':'Abra','value':'63,195,82,93,64,65'},{'label':'Kadabra','value':'64,232,117,120,63,65'},{'label':'Alakazam','value':'65,271,167,146,63,64'},{'label':'Machop','value':'66,137,82,172,67,68'},{'label':'Machoke','value':'67,177,125,190,66,68'},{'label':'Machamp','value':'68,234,159,207,66,67'},{'label':'Bellsprout','value':'69,139,61,137,70,71'},{'label':'Weepinbell','value':'70,172,92,163,69,71'},{'label':'Victreebel','value':'71,207,135,190,69,70'},{'label':'Tentacool','value':'72,97,149,120,73'},{'label':'Tentacruel','value':'73,166,209,190,72'},{'label':'Geodude','value':'74&!alola,132,132,120,75&!alola,76&!alola'},{'label':'Geodude_Alola','value':'74&alola,132,132,120,75&alola,76&alola'},{'label':'Graveler','value':'75&!alola,164,164,146,74&!alola,76&!alola'},{'label':'Graveler_Alola','value':'75&alola,164,164,146,74&alola,76&alola'},{'label':'Golem','value':'76&!alola,211,198,190,74&!alola,75&!alola'},{'label':'Golem_Alola','value':'76&alola,211,198,190,74&alola,75&alola'},{'label':'Ponyta','value':'77,170,127,137,78'},{'label':'Rapidash','value':'78,207,162,163,77'},{'label':'Slowpoke','value':'79,109,98,207,80,199'},{'label':'Slowbro','value':'80,177,180,216,79,199'},{'label':'Magnemite','value':'81,165,121,93,82,462'},{'label':'Magneton','value':'82,223,169,137,81,462'},{'label':'Farfetchd','value':'83,124,115,141'},{'label':'Doduo','value':'84,158,83,111,85'},{'label':'Dodrio','value':'85,218,140,155,84'},{'label':'Seel','value':'86,85,121,163,87'},{'label':'Dewgong','value':'87,139,177,207,86'},{'label':'Grimer','value':'88&!alola,135,90,190,89&!alola'},{'label':'Grimer_Alola','value':'88&alola,135,90,190,89&alola'},{'label':'Muk','value':'89&!alola,190,172,233,88&!alola'},{'label':'Muk_Alola','value':'89&alola,190,172,233,88&alola'},{'label':'Shellder','value':'90,116,134,102,91'},{'label':'Cloyster','value':'91,186,256,137,90'},{'label':'Gastly','value':'92,186,67,102,93,94'},{'label':'Haunter','value':'93,223,107,128,92,94'},{'label':'Gengar','value':'94,261,149,155,92,93'},{'label':'Onix','value':'95,85,232,111,208'},{'label':'Drowzee','value':'96,89,136,155,97'},{'label':'Hypno','value':'97,144,193,198,96'},{'label':'Krabby','value':'98,181,124,102,99'},{'label':'Kingler','value':'99,240,181,146,98'},{'label':'Voltorb','value':'100,109,111,120,101'},{'label':'Electrode','value':'101,173,173,155,100'},{'label':'Exeggcute','value':'102,107,125,155,103&!alola'},{'label':'Exeggutor','value':'103&!alola,233,149,216,102'},{'label':'Exeggutor_Alola','value':'103&alola,230,153,216'},{'label':'Cubone','value':'104,90,144,137,105&!alola'},{'label':'Marowak','value':'105&!alola,144,186,155,104'},{'label':'Marowak_Alola','value':'105&alola,144,186,155'},{'label':'Hitmonlee','value':'106,224,181,137,107,236&eggsonly,237'},{'label':'Hitmonchan','value':'107,193,197,137,106,236&eggsonly,237'},{'label':'Lickitung','value':'108,108,137,207,463'},{'label':'Koffing','value':'109,119,141,120,110'},{'label':'Weezing','value':'110,174,197,163,109'},{'label':'Rhyhorn','value':'111,140,127,190,112,464'},{'label':'Rhydon','value':'112,222,171,233,111,464'},{'label':'Chansey','value':'113,60,128,487,242,440&eggsonly'},{'label':'Tangela','value':'114,183,169,163,465'},{'label':'Kangaskhan','value':'115,181,165,233'},{'label':'Horsea','value':'116,129,103,102,117,230'},{'label':'Seadra','value':'117,187,156,146,116,230'},{'label':'Goldeen','value':'118,123,110,128,119'},{'label':'Seaking','value':'119,175,147,190,118'},{'label':'Staryu','value':'120,137,112,102,121'},{'label':'Starmie','value':'121,210,184,155,120'},{'label':'Mr_Mime','value':'122,192,205,120,439&eggsonly'},{'label':'Scyther','value':'123,218,170,172,212'},{'label':'Jynx','value':'124,223,151,163,238&eggsonly'},{'label':'Electabuzz','value':'125,198,158,163,239&eggsonly,466'},{'label':'Magmar','value':'126,206,154,163,240&eggsonly,467'},{'label':'Pinsir','value':'127,238,182,163'},{'label':'Tauros','value':'128,198,183,181'},{'label':'Magikarp','value':'129,29,85,85,130'},{'label':'Gyarados','value':'130,237,186,216,129'},{'label':'Lapras','value':'131,165,174,277'},{'label':'Ditto','value':'132,91,91,134'},{'label':'Eevee','value':'133,104,114,146,134,135,136,196,197,470,471'},{'label':'Vaporeon','value':'134,205,161,277,133,135,136,196,197,470,471'},{'label':'Jolteon','value':'135,232,182,163,133,134,136,196,197,470,471'},{'label':'Flareon','value':'136,246,179,163,133,134,135,196,197,470,471'},{'label':'Porygon','value':'137,153,136,163,233,474'},{'label':'Omanyte','value':'138,155,153,111,139'},{'label':'Omastar','value':'139,207,201,172,138'},{'label':'Kabuto','value':'140,148,140,102,141'},{'label':'Kabutops','value':'141,220,186,155,140'},{'label':'Aerodactyl','value':'142,221,159,190'},{'label':'Snorlax','value':'143,190,169,330,446&eggsonly'},{'label':'Articuno','value':'144,192,236,207'},{'label':'Zapdos','value':'145,253,185,207'},{'label':'Moltres','value':'146,251,181,207'},{'label':'Dratini','value':'147,119,91,121,148,149'},{'label':'Dragonair','value':'148,163,135,156,147,149'},{'label':'Dragonite','value':'149,263,198,209,147,148'},{'label':'Mewtwo','value':'150,300,182,214'},{'label':'Mewtwo_A','value':'150,182,278,214'},{'label':'Mew','value':'151,210,210,225'},{'label':'Chikorita','value':'152,92,122,128,153,154'},{'label':'Bayleef','value':'153,122,155,155,152,154'},{'label':'Meganium','value':'154,168,202,190,152,153'},{'label':'Cyndaquil','value':'155,116,93,118,156,157'},{'label':'Quilava','value':'156,158,126,151,155,157'},{'label':'Typhlosion','value':'157,223,173,186,155,156'},{'label':'Totodile','value':'158,117,109,137,159,160'},{'label':'Croconaw','value':'159,150,142,163,158,160'},{'label':'Feraligatr','value':'160,205,188,198,158,159'},{'label':'Sentret','value':'161,79,73,111,162'},{'label':'Furret','value':'162,148,125,198,161'},{'label':'Hoothoot','value':'163,67,88,155,164'},{'label':'Noctowl','value':'164,145,156,225,163'},{'label':'Ledyba','value':'165,72,118,120,166'},{'label':'Ledian','value':'166,107,179,146,165'},{'label':'Spinarak','value':'167,105,73,120,168'},{'label':'Ariados','value':'168,161,124,172,167'},{'label':'Crobat','value':'169,194,178,198,41,42'},{'label':'Chinchou','value':'170,106,97,181,171'},{'label':'Lanturn','value':'171,146,137,268,170'},{'label':'Pichu','value':'172&eggsonly,77,53,85,25,26&!alola'},{'label':'Cleffa','value':'173&eggsonly,75,79,137,35,36'},{'label':'Igglybuff','value':'174&eggsonly,69,32,207,39,40'},{'label':'Togepi','value':'175&eggsonly,67,116,111,176,468'},{'label':'Togetic','value':'176,139,181,146,175&eggsonly,468'},{'label':'Natu','value':'177,134,89,120,178'},{'label':'Xatu','value':'178,192,146,163,177'},{'label':'Mareep','value':'179,114,79,146,180,181'},{'label':'Flaaffy','value':'180,145,109,172,179,181'},{'label':'Ampharos','value':'181,211,169,207,179,180'},{'label':'Bellossom','value':'182,169,186,181,43,44,45'},{'label':'Marill','value':'183,37,93,172,184,298&eggsonly'},{'label':'Azumarill','value':'184,112,152,225,183,298&eggsonly'},{'label':'Sudowoodo','value':'185,167,176,172,438&eggsonly'},{'label':'Politoed','value':'186,174,179,207,60,61,62'},{'label':'Hoppip','value':'187,67,94,111,188,189'},{'label':'Skiploom','value':'188,91,120,146,187,189'},{'label':'Jumpluff','value':'189,118,183,181,187,188'},{'label':'Aipom','value':'190,136,112,146,424'},{'label':'Sunkern','value':'191,55,55,102,192'},{'label':'Sunflora','value':'192,185,135,181,191'},{'label':'Yanma','value':'193,154,94,163,469'},{'label':'Wooper','value':'194,75,66,146,195'},{'label':'Quagsire','value':'195,152,143,216,194'},{'label':'Espeon','value':'196,261,175,163,133,134,135,136,197,470,471'},{'label':'Umbreon','value':'197,126,240,216,133,134,135,136,196,470,471'},{'label':'Murkrow','value':'198,175,87,155,430'},{'label':'Slowking','value':'199,177,180,216,79,80'},{'label':'Misdreavus','value':'200,167,154,155,429'},{'label':'Unown','value':'201,136,91,134'},{'label':'Wobbuffet','value':'202,60,106,382,360&eggsonly'},{'label':'Girafarig','value':'203,182,133,172'},{'label':'Pineco','value':'204,108,122,137,205'},{'label':'Forretress','value':'205,161,205,181,204'},{'label':'Dunsparce','value':'206,131,128,225'},{'label':'Gligar','value':'207,143,184,163,472'},{'label':'Steelix','value':'208,148,272,181,95'},{'label':'Snubbull','value':'209,137,85,155,210'},{'label':'Granbull','value':'210,212,131,207,209'},{'label':'Qwilfish','value':'211,184,138,163'},{'label':'Scizor','value':'212,236,181,172,123'},{'label':'Shuckle','value':'213,17,396,85'},{'label':'Heracross','value':'214,234,179,190'},{'label':'Sneasel','value':'215,189,146,146,461'},{'label':'Teddiursa','value':'216,142,93,155,217'},{'label':'Ursaring','value':'217,236,144,207,216'},{'label':'Slugma','value':'218,118,71,120,219'},{'label':'Magcargo','value':'219,139,191,137,218'},{'label':'Swinub','value':'220,90,69,137,221,473'},{'label':'Piloswine','value':'221,181,138,225,220,473'},{'label':'Corsola','value':'222,118,156,146'},{'label':'Remoraid','value':'223,127,69,111,224'},{'label':'Octillery','value':'224,197,141,181,223'},{'label':'Delibird','value':'225,128,90,128'},{'label':'Mantine','value':'226,148,226,163,458&eggsonly'},{'label':'Skarmory','value':'227,148,226,163'},{'label':'Houndour','value':'228,152,83,128,229'},{'label':'Houndoom','value':'229,224,144,181,228'},{'label':'Kingdra','value':'230,194,194,181,116,117'},{'label':'Phanpy','value':'231,107,98,207,232'},{'label':'Donphan','value':'232,214,185,207,231'},{'label':'Porygon2','value':'233,198,180,198,137,474'},{'label':'Stantler','value':'234,192,131,177'},{'label':'Smeargle','value':'235,40,83,146'},{'label':'Tyrogue','value':'236&eggsonly,64,64,111,106,107,237'},{'label':'Hitmontop','value':'237,173,207,137,106,107,236&eggsonly'},{'label':'Smoochum','value':'238&eggsonly,153,91,128,124'},{'label':'Elekid','value':'239&eggsonly,135,101,128,125,466'},{'label':'Magby','value':'240&eggsonly,151,99,128,126,467'},{'label':'Miltank','value':'241,157,193,216'},{'label':'Blissey','value':'242,129,169,496,113,440&eggsonly'},{'label':'Raikou','value':'243,241,195,207'},{'label':'Entei','value':'244,235,171,251'},{'label':'Suicune','value':'245,180,235,225'},{'label':'Larvitar','value':'246,115,93,137,247,248'},{'label':'Pupitar','value':'247,155,133,172,246,248'},{'label':'Tyranitar','value':'248,251,207,225,246,247'},{'label':'Lugia','value':'249,193,310,235'},{'label':'Ho_Oh','value':'250,239,244,214'},{'label':'Celebi','value':'251,210,210,225'},{'label':'Treecko','value':'252,124,94,120,253,254'},{'label':'Grovyle','value':'253,172,120,137,252,254'},{'label':'Sceptile','value':'254,223,169,172,252,253'},{'label':'Torchic','value':'255,130,87,128,256,257'},{'label':'Combusken','value':'256,163,115,155,255,257'},{'label':'Blaziken','value':'257,240,141,190,255,256'},{'label':'Mudkip','value':'258,126,93,137,259,260'},{'label':'Marshtomp','value':'259,156,133,172,258,260'},{'label':'Swampert','value':'260,208,175,225,258,259'},{'label':'Poochyena','value':'261,96,61,111,262'},{'label':'Mightyena','value':'262,171,132,172,261'},{'label':'Zigzagoon','value':'263,58,80,116,264'},{'label':'Linoone','value':'264,142,128,186,263'},{'label':'Wurmple','value':'265,75,59,128,266,267,268,269'},{'label':'Silcoon','value':'266,60,77,137,265,267,268,269'},{'label':'Beautifly','value':'267,189,98,155,265,266,268,269'},{'label':'Cascoon','value':'268,60,77,137,265,266,267,269'},{'label':'Dustox','value':'269,98,162,155,265,266,267,268'},{'label':'Lotad','value':'270,71,77,120,271,272'},{'label':'Lombre','value':'271,112,119,155,270,272'},{'label':'Ludicolo','value':'272,173,176,190,270,271'},{'label':'Seedot','value':'273,71,77,120,274,275'},{'label':'Nuzleaf','value':'274,134,78,172,273,275'},{'label':'Shiftry','value':'275,200,121,207,273,274'},{'label':'Taillow','value':'276,106,61,120,277'},{'label':'Swellow','value':'277,185,124,155,276'},{'label':'Wingull','value':'278,106,61,120,279'},{'label':'Pelipper','value':'279,175,174,155,278'},{'label':'Ralts','value':'280,79,59,99,281,282,475'},{'label':'Kirlia','value':'281,117,90,116,280,282,475'},{'label':'Gardevoir','value':'282,237,195,169,280,281,475'},{'label':'Surskit','value':'283,93,87,120,284'},{'label':'Masquerain','value':'284,192,150,172,283'},{'label':'Shroomish','value':'285,74,110,155,286'},{'label':'Breloom','value':'286,241,144,155,285'},{'label':'Slakoth','value':'287,104,92,155,288,289'},{'label':'Vigoroth','value':'288,159,145,190,287,289'},{'label':'Slaking','value':'289,290,166,284,287,288'},{'label':'Nincada','value':'290,80,126,104,291'},{'label':'Ninjask','value':'291,199,112,156,290'},{'label':'Shedinja','value':'292,153,73,1'},{'label':'Whismur','value':'293,92,42,162,294,295'},{'label':'Loudred','value':'294,134,81,197,293,295'},{'label':'Exploud','value':'295,179,137,232,293,294'},{'label':'Makuhita','value':'296,99,54,176,297'},{'label':'Hariyama','value':'297,209,114,302,296'},{'label':'Azurill','value':'298&eggsonly,36,71,137,183,184'},{'label':'Nosepass','value':'299,82,215,102,476'},{'label':'Skitty','value':'300,84,79,137,301'},{'label':'Delcatty','value':'301,132,127,172,300'},{'label':'Sableye','value':'302,141,136,137'},{'label':'Mawile','value':'303,155,141,137'},{'label':'Aron','value':'304,121,141,137,305,306'},{'label':'Lairon','value':'305,158,198,155,304,306'},{'label':'Aggron','value':'306,198,257,172,304,305'},{'label':'Meditite','value':'307,78,107,102,308'},{'label':'Medicham','value':'308,121,152,155,307'},{'label':'Electrike','value':'309,123,78,120,310'},{'label':'Manectric','value':'310,215,127,172,309'},{'label':'Plusle','value':'311,167,129,155'},{'label':'Minun','value':'312,147,150,155'},{'label':'Volbeat','value':'313,143,166,163'},{'label':'Illumise','value':'314,143,166,163'},{'label':'Roselia','value':'315,186,131,137,406&eggsonly,407'},{'label':'Gulpin','value':'316,80,99,172,317'},{'label':'Swalot','value':'317,140,159,225,316'},{'label':'Carvanha','value':'318,171,39,128,319'},{'label':'Sharpedo','value':'319,243,83,172,318'},{'label':'Wailmer','value':'320,136,68,277,321'},{'label':'Wailord','value':'321,175,87,347,320'},{'label':'Numel','value':'322,119,79,155,323'},{'label':'Camerupt','value':'323,194,136,172,322'},{'label':'Torkoal','value':'324,151,203,172'},{'label':'Spoink','value':'325,125,122,155,326'},{'label':'Grumpig','value':'326,171,188,190,325'},{'label':'Spinda','value':'327,116,116,155'},{'label':'Trapinch','value':'328,162,78,128,329,330'},{'label':'Vibrava','value':'329,134,99,137,328,330'},{'label':'Flygon','value':'330,205,168,190,328,329'},{'label':'Cacnea','value':'331,156,74,137,332'},{'label':'Cacturne','value':'332,221,115,172,331'},{'label':'Swablu','value':'333,76,132,128,334'},{'label':'Altaria','value':'334,141,201,181,333'},{'label':'Zangoose','value':'335,222,124,177'},{'label':'Seviper','value':'336,196,118,177'},{'label':'Lunatone','value':'337,178,153,207'},{'label':'Solrock','value':'338,178,153,207'},{'label':'Barboach','value':'339,93,82,137,340'},{'label':'Whiscash','value':'340,151,141,242,339'},{'label':'Corphish','value':'341,141,99,125,342'},{'label':'Crawdaunt','value':'342,224,142,160,341'},{'label':'Baltoy','value':'343,77,124,120,344'},{'label':'Claydol','value':'344,140,229,155,343'},{'label':'Lileep','value':'345,105,150,165,346'},{'label':'Cradily','value':'346,152,194,200,345'},{'label':'Anorith','value':'347,176,100,128,348'},{'label':'Armaldo','value':'348,222,174,181,347'},{'label':'Feebas','value':'349,29,85,85,350'},{'label':'Milotic','value':'350,192,219,216,349'},{'label':'Castform','value':'351,139,139,172'},{'label':'Kecleon','value':'352,161,189,155'},{'label':'Shuppet','value':'353,138,65,127,354'},{'label':'Banette','value':'354,218,126,162,353'},{'label':'Duskull','value':'355,70,162,85,356,477'},{'label':'Dusclops','value':'356,124,234,120,355,477'},{'label':'Tropius','value':'357,136,163,223'},{'label':'Chimecho','value':'358,175,170,181,433&eggsonly'},{'label':'Absol','value':'359,246,120,163'},{'label':'Wynaut','value':'360&eggsonly,41,86,216,202'},{'label':'Snorunt','value':'361,95,95,137,362,478'},{'label':'Glalie','value':'362,162,162,190,361,478'},{'label':'Spheal','value':'363,95,90,172,364,365'},{'label':'Sealeo','value':'364,137,132,207,363,365'},{'label':'Walrein','value':'365,182,176,242,363,364'},{'label':'Clamperl','value':'366,133,135,111,367,368'},{'label':'Huntail','value':'367,197,179,146,366,368'},{'label':'Gorebyss','value':'368,211,179,146,366,367'},{'label':'Relicanth','value':'369,162,203,225'},{'label':'Luvdisc','value':'370,81,128,125'},{'label':'Bagon','value':'371,134,93,128,372,373'},{'label':'Shelgon','value':'372,172,155,163,371,373'},{'label':'Salamence','value':'373,277,168,216,371,372'},{'label':'Beldum','value':'374,96,132,120,375,376'},{'label':'Metang','value':'375,138,176,155,374,376'},{'label':'Metagross','value':'376,257,228,190,374,375'},{'label':'Regirock','value':'377,179,309,190'},{'label':'Regice','value':'378,179,309,190'},{'label':'Registeel','value':'379,143,285,190'},{'label':'Latias','value':'380,228,246,190'},{'label':'Latios','value':'381,268,212,190'},{'label':'Kyogre','value':'382,270,228,205'},{'label':'Groudon','value':'383,270,228,205'},{'label':'Rayquaza','value':'384,284,170,213'},{'label':'Jirachi','value':'385,210,210,225'},{'label':'Deoxys','value':'386,345,115,137'},{'label':'Deoxys_Attack','value':'386,414,46,137'},{'label':'Deoxys_Defense','value':'386,144,330,137'},{'label':'Deoxys_Speed','value':'386,230,218,137'},{'label':'Turtwig','value':'387,119,110,146,388,389'},{'label':'Grotle','value':'388,157,143,181,387,389'},{'label':'Torterra','value':'389,202,188,216,387,388'},{'label':'Chimchar','value':'390,113,86,127,391,392'},{'label':'Monferno','value':'391,158,105,162,390,392'},{'label':'Infernape','value':'392,222,151,183,390,391'},{'label':'Piplup','value':'393,112,102,142,394,395'},{'label':'Prinplup','value':'394,150,139,162,393,395'},{'label':'Empoleon','value':'395,210,186,197,393,394'},{'label':'Starly','value':'396,101,58,120,397,398'},{'label':'Staravia','value':'397,142,94,146,396,398'},{'label':'Staraptor','value':'398,234,140,198,396,397'},{'label':'Bidoof','value':'399,80,73,153,400'},{'label':'Bibarel','value':'400,162,119,188,399'},{'label':'Kricketot','value':'401,45,74,114,402'},{'label':'Kricketune','value':'402,160,100,184,401'},{'label':'Shinx','value':'403,117,64,128,404,405'},{'label':'Luxio','value':'404,159,95,155,403,405'},{'label':'Luxray','value':'405,232,156,190,403,404'},{'label':'Budew','value':'406&eggsonly,91,109,120,315,407'},{'label':'Roserade','value':'407,243,185,155,315,406&eggsonly'},{'label':'Cranidos','value':'408,218,71,167,409'},{'label':'Rampardos','value':'409,295,109,219,408'},{'label':'Shieldon','value':'410,76,195,102,411'},{'label':'Bastiodon','value':'411,94,286,155,410'},{'label':'Burmy','value':'412,53,83,120,413,414'},{'label':'Wormadam_Plant','value':'413,141,180,155,412,414'},{'label':'Wormadam_Sandy','value':'413,141,180,155,412,414'},{'label':'Wormadam_Trash','value':'413,127,175,155,412,414'},{'label':'Mothim','value':'414,185,98,172,412,413'},{'label':'Combee','value':'415,59,83,102,416'},{'label':'Vespiquen','value':'416,149,190,172,415'},{'label':'Pachirisu','value':'417,94,172,155'},{'label':'Buizel','value':'418,132,67,146,419'},{'label':'Floatzel','value':'419,221,114,198,418'},{'label':'Cherubi','value':'420,108,92,128,421'},{'label':'Cherrim','value':'421,170,153,172,420'},{'label':'Shellos','value':'422,103,105,183,423'},{'label':'Gastrodon','value':'423,169,143,244,422'},{'label':'Ambipom','value':'424,205,143,181,190'},{'label':'Drifloon','value':'425,117,80,207,426'},{'label':'Drifblim','value':'426,180,102,312,425'},{'label':'Buneary','value':'427,130,105,146,428'},{'label':'Lopunny','value':'428,156,194,163,427'},{'label':'Mismagius','value':'429,211,187,155,200'},{'label':'Honchkrow','value':'430,243,103,225,198'},{'label':'Glameow','value':'431,109,82,135,432'},{'label':'Purugly','value':'432,172,133,174,431'},{'label':'Chingling','value':'433&eggsonly,114,94,128,358'},{'label':'Stunky','value':'434,121,90,160,435'},{'label':'Skuntank','value':'435,184,132,230,434'},{'label':'Bronzor','value':'436,43,154,149,437'},{'label':'Bronzong','value':'437,161,213,167,436'},{'label':'Bonsly','value':'438&eggsonly,124,133,137,185'},{'label':'Mime_Jr','value':'439&eggsonly,125,142,85,122'},{'label':'Happiny','value':'440&eggsonly,25,77,225,113,242'},{'label':'Chatot','value':'441,183,91,183'},{'label':'Spiritomb','value':'442,169,199,137'},{'label':'Gible','value':'443,124,84,151,444,445'},{'label':'Gabite','value':'444,172,125,169,443,445'},{'label':'Garchomp','value':'445,261,193,239,443,444'},{'label':'Munchlax','value':'446&eggsonly,137,117,286,143'},{'label':'Riolu','value':'447&eggsonly,127,78,120,448'},{'label':'Lucario','value':'448,236,144,172,447&eggsonly'},{'label':'Hippopotas','value':'449,124,118,169,450'},{'label':'Hippowdon','value':'450,201,191,239,449'},{'label':'Skorupi','value':'451,93,151,120,452'},{'label':'Drapion','value':'452,180,202,172,451'},{'label':'Croagunk','value':'453,116,76,134,454'},{'label':'Toxicroak','value':'454,211,133,195,453'},{'label':'Carnivine','value':'455,187,136,179'},{'label':'Finneon','value':'456,96,116,135,457'},{'label':'Lumineon','value':'457,142,170,170,456'},{'label':'Mantyke','value':'458&eggsonly,105,179,128,226'},{'label':'Snover','value':'459,115,105,155,460'},{'label':'Abomasnow','value':'460,178,158,207,459'},{'label':'Weavile','value':'461,243,171,172,215'},{'label':'Magnezone','value':'462,238,205,172,81,82'},{'label':'Lickilicky','value':'463,161,181,242,108'},{'label':'Rhyperior','value':'464,241,190,251,111,112'},{'label':'Tangrowth','value':'465,207,184,225,114'},{'label':'Electivire','value':'466,249,163,181,125,239&eggsonly'},{'label':'Magmortar','value':'467,247,172,181,126,240&eggsonly'},{'label':'Togekiss','value':'468,225,217,198,175&eggsonly,176'},{'label':'Yanmega','value':'469,231,156,200,193'},{'label':'Leafeon','value':'470,216,219,163,133,134,135,136,196,197,471'},{'label':'Glaceon','value':'471,238,205,163,133,134,135,136,196,197,470'},{'label':'Gliscor','value':'472,185,222,181,207'},{'label':'Mamoswine','value':'473,247,146,242,220,221'},{'label':'Porygon_Z','value':'474,264,150,198,137,233'},{'label':'Gallade','value':'475,237,195,169,280,281,282'},{'label':'Probopass','value':'476,135,275,155,299'},{'label':'Dusknoir','value':'477,180,254,128,355,356'},{'label':'Froslass','value':'478,171,150,172,361,362'},{'label':'Rotom','value':'479,185,159,137'},{'label':'Rotom_Fan','value':'479,204,219,137'},{'label':'Rotom_Frost','value':'479,204,219,137'},{'label':'Rotom_Heat','value':'479,204,219,137'},{'label':'Rotom_Mow','value':'479,204,219,137'},{'label':'Rotom_Wash','value':'479,204,219,137'},{'label':'Uxie','value':'480,156,270,181'},{'label':'Mesprit','value':'481,212,212,190'},{'label':'Azelf','value':'482,270,151,181'},{'label':'Dialga','value':'483,275,211,205'},{'label':'Palkia','value':'484,280,215,189'},{'label':'Heatran','value':'485,251,213,209'},{'label':'Regigigas','value':'486,287,210,221'},{'label':'Giratina_Altered','value':'487,187,225,284'},{'label':'Giratina_Origin','value':'487,225,187,284'},{'label':'Cresselia','value':'488,152,258,260'},{'label':'Phione','value':'489,162,162,190'},{'label':'Manaphy','value':'490,210,210,225'},{'label':'Darkrai','value':'491,285,198,172'},{'label':'Shaymin_Land','value':'492,210,210,225'},{'label':'Shaymin_Sky','value':'492,261,166,225'},{'label':'Arceus','value':'493,238,238,237'},{'label':'Victini','value':'494,210,210,225'},{'label':'Snivy','value':'495,88,107,128,496,497'},{'label':'Servine','value':'496,122,152,155,495,497'},{'label':'Serperior','value':'497,161,204,181,495,496'},{'label':'Tepig','value':'498,115,85,163,499,500'},{'label':'Pignite','value':'499,173,106,207,498,500'},{'label':'Emboar','value':'500,235,127,242,498,499'},{'label':'Oshawott','value':'501,117,85,146,502,503'},{'label':'Dewott','value':'502,159,116,181,501,503'},{'label':'Samurott','value':'503,212,157,216,501,502'},{'label':'Patrat','value':'504,98,73,128,505'},{'label':'Watchog','value':'505,165,139,155,504'},{'label':'Lillipup','value':'506,107,86,128,507,508'},{'label':'Herdier','value':'507,145,126,163,506,508'},{'label':'Stoutland','value':'508,206,182,198,506,507'},{'label':'Purrloin','value':'509,98,73,121,510'},{'label':'Liepard','value':'510,187,106,162,509'},{'label':'Pansage','value':'511,104,94,137,512'},{'label':'Simisage','value':'512,206,133,181,511'},{'label':'Pansear','value':'513,104,94,137,514'},{'label':'Simisear','value':'514,206,133,181,513'},{'label':'Panpour','value':'515,104,94,137,516'},{'label':'Simipour','value':'516,206,133,181,515'},{'label':'Munna','value':'517,111,92,183,518'},{'label':'Musharna','value':'518,183,166,253,517'},{'label':'Pidove','value':'519,98,80,137,520,521'},{'label':'Tranquill','value':'520,144,107,158,519,521'},{'label':'Unfezant','value':'521,226,146,190,519,520'},{'label':'Blitzle','value':'522,118,64,128,523'},{'label':'Zebstrika','value':'523,211,136,181,522'},{'label':'Roggenrola','value':'524,121,110,146,525,526'},{'label':'Boldore','value':'525,174,143,172,524,526'},{'label':'Gigalith','value':'526,226,201,198,524,525'},{'label':'Woobat','value':'527,107,85,163,528'},{'label':'Swoobat','value':'528,161,119,167,527'},{'label':'Drilbur','value':'529,154,85,155,530'},{'label':'Excadrill','value':'530,255,129,242,529'},{'label':'Audino','value':'531,114,163,230'},{'label':'Timburr','value':'532,134,87,181,533,534'},{'label':'Gurdurr','value':'533,180,134,198,532,534'},{'label':'Conkeldurr','value':'534,243,158,233,532,533'},{'label':'Tympole','value':'535,98,78,137,536,537'},{'label':'Palpitoad','value':'536,128,109,181,535,537'},{'label':'Seismitoad','value':'537,188,150,233,535,536'},{'label':'Throh','value':'538,172,160,260'},{'label':'Sawk','value':'539,231,153,181'},{'label':'Sewaddle','value':'540,96,124,128,541,542'},{'label':'Swadloon','value':'541,115,162,146,540,542'},{'label':'Leavanny','value':'542,205,165,181,540,541'},{'label':'Venipede','value':'543,83,99,102,544,545'},{'label':'Whirlipede','value':'544,100,173,120,543,545'},{'label':'Scolipede','value':'545,203,175,155,543,544'},{'label':'Cottonee','value':'546,71,111,120,547'},{'label':'Whimsicott','value':'547,164,176,155,546'},{'label':'Petilil','value':'548,119,91,128,549'},{'label':'Lilligant','value':'549,214,155,172,548'},{'label':'Basculin','value':'550,189,129,172'},{'label':'Sandile','value':'551,132,69,137,552,553'},{'label':'Krokorok','value':'552,155,90,155,551,553'},{'label':'Krookodile','value':'553,229,158,216,551,552'},{'label':'Darumaka','value':'554,153,86,172,555'},{'label':'Darmanitan','value':'555,263,114,233,554'},{'label':'Darmanitan_Standard','value':'555,263,114,233,554'},{'label':'Darmanitan_Zen','value':'555,243,202,233,554'},{'label':'Maractus','value':'556,201,130,181'},{'label':'Dwebble','value':'557,118,128,137,558'},{'label':'Crustle','value':'558,188,200,172,557'},{'label':'Scraggy','value':'559,132,132,137,560'},{'label':'Scrafty','value':'560,163,222,163,559'},{'label':'Sigilyph','value':'561,204,167,176'},{'label':'Yamask','value':'562,95,141,116,563'},{'label':'Cofagrigus','value':'563,163,237,151,562'},{'label':'Tirtouga','value':'564,134,146,144,565'},{'label':'Carracosta','value':'565,192,197,179,564'},{'label':'Archen','value':'566,213,89,146,567'},{'label':'Archeops','value':'567,292,139,181,566'},{'label':'Trubbish','value':'568,96,122,137,569'},{'label':'Garbodor','value':'569,181,164,190,568'},{'label':'Zorua','value':'570,153,78,120,571'},{'label':'Zoroark','value':'571,250,127,155,570'},{'label':'Minccino','value':'572,98,80,146,573'},{'label':'Cinccino','value':'573,198,130,181,572'},{'label':'Gothita','value':'574,98,112,128,575,576'},{'label':'Gothorita','value':'575,137,153,155,574,576'},{'label':'Gothitelle','value':'576,176,205,172,574,575'},{'label':'Solosis','value':'577,170,83,128,578,579'},{'label':'Duosion','value':'578,208,103,163,577,579'},{'label':'Reuniclus','value':'579,214,148,242,577,578'},{'label':'Ducklett','value':'580,84,96,158,581'},{'label':'Swanna','value':'581,182,132,181,580'},{'label':'Vanillite','value':'582,118,106,113,583'},{'label':'Vanillish','value':'583,151,138,139,582'},{'label':'Vanilluxe','value':'584,218,184,174,582,583'},{'label':'Deerling','value':'585,115,100,155,586'},{'label':'Sawsbuck','value':'586,198,146,190,585'},{'label':'Emolga','value':'587,158,127,146'},{'label':'Karrablast','value':'588,137,87,137,589'},{'label':'Escavalier','value':'589,223,187,172,588'},{'label':'Foongus','value':'590,97,91,170,591'},{'label':'Amoonguss','value':'591,155,139,249,590'},{'label':'Frillish','value':'592,115,134,146,593'},{'label':'Jellicent','value':'593,159,178,225,592'},{'label':'Alomomola','value':'594,138,131,338'},{'label':'Joltik','value':'595,110,98,137,596'},{'label':'Galvantula','value':'596,201,128,172,595'},{'label':'Ferroseed','value':'597,82,155,127,598'},{'label':'Ferrothorn','value':'598,158,223,179,597'},{'label':'Klink','value':'599,98,121,120,600,601'},{'label':'Klang','value':'600,150,174,155,599,601'},{'label':'Klinklang','value':'601,199,214,155,599,600'},{'label':'Tynamo','value':'602,105,78,111,603,604'},{'label':'Eelektrik','value':'603,156,130,163,604'},{'label':'Eelektross','value':'604,217,152,198,603'},{'label':'Elgyem','value':'605,148,100,146,606'},{'label':'Beheeyem','value':'606,221,163,181,605'},{'label':'Litwick','value':'607,108,98,137,608,609'},{'label':'Lampent','value':'608,169,115,155,607,609'},{'label':'Chandelure','value':'609,271,182,155,607,608'},{'label':'Axew','value':'610,154,101,130,611,612'},{'label':'Fraxure','value':'611,212,123,165,610,612'},{'label':'Haxorus','value':'612,284,172,183,610,611'},{'label':'Cubchoo','value':'613,128,74,146,614'},{'label':'Beartic','value':'614,233,152,216,613'},{'label':'Cryogonal','value':'615,190,218,190'},{'label':'Shelmet','value':'616,72,140,137,617'},{'label':'Accelgor','value':'617,220,120,190,616'},{'label':'Stunfisk','value':'618,144,171,240'},{'label':'Mienfoo','value':'619,160,98,128,620'},{'label':'Mienshao','value':'620,258,127,163,619'},{'label':'Druddigon','value':'621,213,170,184'},{'label':'Golett','value':'622,127,92,153,623'},{'label':'Golurk','value':'623,222,154,205,622'},{'label':'Pawniard','value':'624,154,114,128,625'},{'label':'Bisharp','value':'625,232,176,163,624'},{'label':'Bouffalant','value':'626,195,182,216'},{'label':'Rufflet','value':'627,150,97,172,628'},{'label':'Braviary','value':'628,232,152,225,627'},{'label':'Vullaby','value':'629,105,139,172,630'},{'label':'Mandibuzz','value':'630,129,205,242,629'},{'label':'Heatmor','value':'631,204,129,198'},{'label':'Durant','value':'632,217,188,151'},{'label':'Deino','value':'633,116,93,141,634,635'},{'label':'Zweilous','value':'634,159,135,176,633,635'},{'label':'Hydreigon','value':'635,256,188,211,633,634'},{'label':'Larvesta','value':'636,156,107,146,637'},{'label':'Volcarona','value':'637,264,189,198,636'},{'label':'Cobalion','value':'638,192,229,209'},{'label':'Terrakion','value':'639,260,192,209'},{'label':'Virizion','value':'640,192,229,209'},{'label':'Tornadus','value':'641,266,164,188'},{'label':'Tornadus_Incarnate','value':'641,266,164,188'},{'label':'Tornadus_Therian','value':'641,238,189,188'},{'label':'Thundurus','value':'642,266,164,188'},{'label':'Thundurus_Incarnate','value':'642,266,164,188'},{'label':'Thundurus_Therian','value':'642,295,161,188'},{'label':'Reshiram','value':'643,275,211,205'},{'label':'Zekrom','value':'644,275,211,205'},{'label':'Landorus','value':'645,261,182,205'},{'label':'Landorus_Incarnate','value':'645,261,182,205'},{'label':'Landorus_Therian','value':'645,289,179,205'},{'label':'Kyurem','value':'646,246,170,245'},{'label':'Kyurem_Black','value':'646,310,183,245'},{'label':'Kyurem_White','value':'646,310,183,245'},{'label':'Keldeo','value':'647,260,192,209'},{'label':'Keldeo_Ordinary','value':'647,260,192,209'},{'label':'Keldeo_Resolute','value':'647,260,192,209'},{'label':'Meloetta','value':'648,250,225,225'},{'label':'Meloetta_Aria','value':'648,250,225,225'},{'label':'Meloetta_Pirouette','value':'648,269,188,225'},{'label':'Genesect','value':'649,252,199,174'},{'label':'Meltan','value':'808,118,99,130,809'},{'label':'Melmetal','value':'809,226,190,264,808'}]