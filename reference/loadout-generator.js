//const loadoutItems = ["outfitTurkey", "outfitWinter", "outfitGeometric", "outfitMilitary", "outfitDev", "outfitMod", "outfitWheat", "outfitNoir", "outfitRedLeaderAged", "outfitBlueLeaderAged", "outfitRedLeader", "outfitBlueLeader", "outfitSpetsnaz", "outfitWoodsCloak", "outfitElf", "outfitImperial", "outfitLumber", "outfitVerde", "outfitPineapple", "outfitTarkhany", "outfitWaterElem", "outfitHeaven", "outfitMeteor", "outfitIslander", "outfitAqua", "outfitCoral", "outfitKhaki", "outfitParma", "outfitParmaPrestige", "outfitCasanova", "outfitPrisoner", "outfitJester", "outfitWoodland", "outfitRoyalFortune", "outfitKeyLime", "outfitCobaltShell", "outfitCarbonFiber", "outfitDarkGloves", "outfitDarkShirt", "outfitGhillie", "outfitDesertCamo", "outfitCamo", "outfitRed", "outfitWhite", "outfitSunset", "outfitDeepPurple", "outfitSplotchfest", "outfitClaymore", "outfitChromesis", "outfitFragtastic", "outfitRusticSands", "outfitWaves", "outfitUrbanCamo", "outfitNeonEyesore", "outfitGiraffe", "outfitCow", "outfitMojo", "outfitZebra", "outfitAstronaut", "outfitDiamondy", "outfitMecha", "outfitFireball", "outfitBarrel", "outfitWoodBarrel", "outfitStone", "outfitTree", "outfitTreeSpooky", "outfitStump", "outfitBush", "outfitLeafPile", "outfitCrate", "outfitTable", "outfitSoviet", "outfitAirdrop", "outfitOven", "outfitRefrigerator", "outfitVending", "outfitPumpkin", "outfitWoodpile", "outfitToilet", "outfitBushRiver", "outfitCrab", "outfitStumpAxe", "outfitSpeedo", "outfitBlueLava", "outfitInfernoCamo", "outfitSpeedoSunburn", "outfitMango", "outfitParrot", "outfitCrusader", "outfitLasrDisk", "outfitBeachCamo", "outfitForest", "outfitGingerbread", "outfitVenom", "outfitBlueMecha", "outfitEventHorizon", "outfitGrinch", "outfitSnowman", "outfitChritstmasTree", "outfitYinYang", "outfitTiki", "outfitMachoLucha2", "outfitCalaca", "outfitSortaBlue", "outfitMellow", "outfitBengal", "outfitUnderbrush", "outfitMagmatic", "outfitPurpleMecha", "outfitRosePetals", "outfitViper", "outfitFullCircle", "outfitPleasingPart", "outfitItJustMist", "outfitOneInAMelon", "outfitColdestEdge", "outfitRetroSunset", "outfitBoet", "outfitOldKumo", "outfitPanteraOnca", "outfitTipTheScales", "outfitAvocadoh", "outfitEyes-T", "outfitEggnite", "outfitSunburn", "outfitElectricIce", "outfitBubblegum", "outfitGaudisque", "outfitMicro-wave", "outfitStarflag", "outfitGridflag", "outfitToxicBarrel", "outfitBlueZone", "outfitBraaains", "outfitStumpd", "outfitDigiturt", "outfitMelonWater", "outfitStarryNight", "outfitStreetArt", "outfitNorseCode", "outfitILavaYou", "outfitKingGalaxy", "outfitCosmicBlue", "outfitJuleVerny", "outfitGhoulFire", "outfitDragonTails", "outfitHotMagma", "outfitLustrousPaladin", "outfitVillageNinja", "outfitAhoy", "outfitHowPita-ful", "outfitChewieCheese", "outfitH2Oh", "outfitMug-nificient", "outfitHopelessRamen-tic", "outfitSoapPods", "outfitCatchemOl", "outfitSwords", "outfitScarween", "outfitTomatoandCheese", "outfitColorPalette", "outfitTurtleSweater", "outfitChromaticCTR", "outfitBuckTeeth", "outfitChemis-tree", "outfitPoinsetee", "outfitSnowyClaus", "outfitCamoDeer", "outfitWoodFire", "outfitBluntRazor", "outfitHoldinHide", "outfitTribeShield", "outfitPhoebonachi", "outfitRuppert", "outfitTribeMask", "outfitTirelessly", "outfitBrontoChop", "outfitDisasteroid", "outfitGreenTeaRex", "outfitMultiTusking", "outfitSunriseBlvd", "outfitIntoTheGrid", "outfitToontooine", "outfitIts-me-coin", "outfitTunelSun", "outfitHue-dini", "outfitBitplosion", "outfitSpaceSnout", "outfitBombyman", "outfitIdDie4U", "outfitMaxAttack", "outfitNeckNapkin", "outfitHowl-o-Days", "outfitTheySeeMeRolling", "outfitCaptnCactus", "outfitGoodFeather", "outfitNachoHat", "outfitSuppaPoncho", "outfitBronco-saurus", "outfitRanchDressing", "outfitDe-ranged", "outfitSirLoin", "outfitMoosli", "outfitPreyDinner", "emote_thumbsup", "emote_sadface", "emote_happyface", "emote_surviv", "emote_gg", "emote_question", "emote_tombstone", "emote_joyface", "emote_sobface", "emote_thinkingface", "emote_flagus", "emote_flagthailand", "emote_flaggermany", "emote_flagfrance", "emote_flagsouthkorea", "emote_flagbrazil", "emote_flagcanada", "emote_flagspain", "emote_flagrussia", "emote_flagmexico", "emote_flagpoland", "emote_flaguk", "emote_flagcolombia", "emote_flagukraine", "emote_flagturkey", "emote_flagphilippines", "emote_flagczechia", "emote_flagperu", "emote_flagaustria", "emote_flagargentina", "emote_flagjapan", "emote_flagvenezuela", "emote_flagvietnam", "emote_flagswitzerland", "emote_flagnetherlands", "emote_flagchina", "emote_flagtaiwan", "emote_flagchile", "emote_flagaustralia", "emote_flagdenmark", "emote_flagitaly", "emote_flagsweden", "emote_flagecuador", "emote_flagslovakia", "emote_flaghungary", "emote_flagromania", "emote_flaghongkong", "emote_flagindonesia", "emote_flagfinland", "emote_flagnorway", "emote_heart", "emote_sleepy", "emote_flex", "emote_angryface", "emote_upsidedownface", "emote_teabag", "emote_alienface", "emote_flagbelarus", "emote_flagbelgium", "emote_flagkazakhstan", "emote_egg", "emote_police", "emote_dabface", "emote_flagmalaysia", "emote_flagnewzealand", "emote_logosurviv", "emote_logoegg", "emote_logoswine", "emote_logohydra", "emote_logostorm", "emote_flaghonduras", "emote_logocaduceus", "emote_impface", "emote_monocleface", "emote_sunglassface", "emote_headshotface", "emote_potato", "emote_leek", "emote_eggplant", "emote_baguette", "emote_chick", "emote_flagbolivia", "emote_flagcroatia", "emote_flagindia", "emote_flagisrael", "emote_flaggeorgia", "emote_flaggreece", "emote_flagguatemala", "emote_flagportugal", "emote_flagserbia", "emote_flagsingapore", "emote_flagtrinidad", "emote_flaguruguay", "emote_logoconch", "emote_pineapple", "emote_coconut", "emote_crab", "emote_whale", "emote_logometeor", "emote_salt", "emote_disappointface", "emote_logocrossing", "emote_fish", "emote_campfire", "emote_chickendinner", "emote_cattle", "emote_icecream", "emote_cupcake", "emote_donut", "emote_logohatchet", "emote_acorn", "emote_trunk", "emote_forest", "emote_pumpkin", "emote_candycorn", "emote_pilgrimhat", "emote_turkeyanimal", "emote_heartface", "emote_logochrysanthemum", "emote_santahat", "emote_snowman", "emote_snowflake", "emote_flagmorocco", "emote_flagestonia", "emote_flagalgeria", "emote_flagegypt", "emote_flagazerbaijan", "emote_flagalbania", "emote_flaglithuania", "emote_flaglatvia", "emote_flaguae", "emote_flagdominicanrepublic", "emote_logocloud", "emote_ghost_base", "emote_bandagedface", "emote_picassoface", "emote_pooface", "emote_ok", "emote_rainbow", "emote_logotwins", "emote_oof", "emote_shockface", "emote_skull", "emote_trollface", "emote_greedy", "emote_easy", "emote_lies", "emote_sweaty", "emote_flushed", "emote_deadface", "emote_starstruck", "emote_panned", "emote_happyghost", "emote_shroomcloud", "emote_fabulorn", "emote_shur", "emote_its_ok", "emote_boffy", "emote_relief", "emote_eye", "emote_frustration", "emote_qq", "emote_sushi_roll", "emote_pay_respects", "emote_rip", "emote_puke", "emote_pwn", "emote_nutz", "emote_bagged", "emote_too_close", "emote_friend_ghost", "emote_mr_sockey", "emote_hi5", "emote_gogo", "emote_angry_blob", "emote_nooblet", "emote_rainy_day", "emote_tiny_turtle", "emote_wait", "emote_taunty", "emote_glasses", "emote_pills", "emote_chimpion", "emote_golden_bullet", "emote_puke_rainbow", "emote_wth", "emote_lootloot", "emote_buuurn", "emote_rawr", "emote_clown", "emote_oldrespects", "emote_lootbones", "emote_peacesign", "emote_rad", "emote_tonguesout", "emote_i-heart-you", "emote_send-some-potis", "emote_radical-ray", "emote_you-invader", "emote_yeehaw", "emote_dynaboom", "emote_horsin-zone", "emote_was-a-lovely-cow", "emote_new-in-town", "emote_prickly-business", "emote_neutral", "emote_chickend", "heal_basic", "heal_heart", "heal_moon", "heal_tomoe", "heal_hexa", "heal_patch", "heal_paramedicine", "heal_lotus", "heal_syringe", "heal_diamond", "heal_peace", "heal_santa_boots", "heal_santa_hat", "heal_simply_lucky", "heal_canceller", "heal_sickle", "heal_frostiest", "heal_safe_zone", "heal_basics", "heal_double_barrier", "heal_prsmd", "heal_family_hut", "heal_pacing_pack", "heal_ocean_hearing", "heal_bold_boost", "heal_milans_feathers", "heal_one-mist-call", "heal_ring-it-on", "heal_frayed-knot", "boost_basic", "boost_star", "boost_naturalize", "boost_shuriken", "boost_energel", "boost_sugar", "boost_gear", "boost_atomic", "boost_firestorm", "boost_drumstick", "boost_casing", "boost_bubble", "boost_speed", "boost_bloodbath", "boost_holly_ivy", "boost_rudolph", "boost_ch_star", "boost_just_dial_star", "boost_three_ways", "boost_slacker", "boost_hidden_village", "boost_perfect_fit", "boost_spinner", "boost_to_the_bone", "boost_hunting_zone", "boost_tuskies", "boost_bus_worms", "boost_weird_blob", "boost_tun-pattern", "boost_ruppert-stone", "turkeyFeathersDeath", "cupidDeath", "blackHoleDeath", "bloodExplosionDeath", "magicSparkDeath", "toonBlastDeath", "billionaireDeath", "sparklyDeath", "confettiDeath", "potatoBlastDeath", "coopRaidDeath", "peelOutDeath", "heartyBreakfastDeath", "yoursTrulyDeath", "nerveGasDeath", "boltsNNutsDeath", "pizzasDeath", "orangeSlimDeath", "buildinBasesDeath", "puzzledDeath", "espressoDeath", "constructionDeath", "cheeseBombDeath", "newDeathsEveDeath", "comicFxDeath", "waterBendedDeath", "basicPuffDeath", "aboutToRainDeath", "cavemanApparelDeath", "diggingSiteDeath", "chocolatarDeath", "pixie-dustDeath", "squiggliesDeath", "cotton-explosionDeath", "serving-just-iceDeath", "ore-worksDeath", "spring-waterDeath", "last-doorDeath", "fist_split", "fist_blueVelvet", "fist_frostpunch", "fist_immolate", "fist_bulletbills", "fist_moss", "fist_blackholes", "fist_rainbowhands", "fist_darklets", "fist_scifi", "fist_poke", "fist_paws", "fist_dinoclaws", "fist_leaf", "fist_ranger", "fist_linedUp", "fist_lit", "fist_gift_punch", "fist_ember", "fist_santa", "fist_purptog", "fist_golden_lobster", "fist_pineFury", "fist_dreidel", "fist_bePresent", "fist_tropicana", "fist_spongeguy", "fist_rafflesia", "fist_golddrops", "fist_grizzly", "fist_coco_nut", "fist_101Spots", "fist_atnet", "fist_vitaminc", "fist_marblerun2", "fist_beachballin", "fist_fritterpunch", "fist_dishsoap", "fist_watermelon", "fist_bloody", "fist_makeachoice", "fist_bologna", "fist_flashy", "fist_tigerseed", "fist_paddle", "fist_inkybusiness", "fist_theotherpong", "fist_getdowntonite", "fist_milestones", "fist_washilamps", "fist_ghostpoke", "fist_condimentium", "fist_shinyjello", "fist_graphbars", "fist_purpleshutter", "fist_orangeandlime", "fist_nopinenogain", "fist_bullseye", "fist_flamingnucleus", "fist_meteornite", "fist_orangemintstones", "fist_firsttool", "fist_stonedgy", "fist_bonkbonk", "fist_fuzzyhooves", "fist_retrhorizon", "fist_pixeldots", "fist_ranchchips", "fist_lolitapop", "fist_dizzielocs", "fist_q-fist", "fist_d-punch-pad", "fist_developtheserolls", "fist_squareycherry", "fist_tawget", "fist_boogiestripes", "fist_garbanjo", "fist_wreckedangle", "fist_woodyallan", "fist_cattlebattle", "fist_badmitten", "fist_milkshaked", "fist_horsepower", "fist_upandatom", "knuckles_rusted", "knuckles_heroic", "karambit_rugged", "karambit_prismatic", "karambit_drowned", "bayonet_rugged", "bayonet_woodland", "huntsman_rugged", "huntsman_burnished", "bowie_vintage", "bowie_frontier"];
//const ignoredItems = ["outfitKhaki", "outfitHeaven",  "outfitAirdrop", "outfitAqua", "outfitBarrel", "outfitBlueLeader", "outfitBush", "outfitCasanova", "outfitCoral", "outfitCrab", "outfitCrate", "outfitMeteor", "outfitRefrigerator", "outfitGhillie", "outfitWoodsCloak", "outfitImperial", "outfitIslander", "outfitJester", "outfitLeafPile", "outfitNoir", "outfitOven", "outfitVerde", "outfitPumpkin", "outfitRedLeader", "outfitBushRiver", "outfitSoviet", "outfitTreeSpooky", "outfitBlueLeaderAged", "outfitStone", "outfitStumpAxe", "outfitStump", "outfitTable", "outfitElf", "outfitTarkhany", "outfitPrisoner", "outfitToilet", "outfitTree", "outfitPineapple", "outfitVending", "outfitWaterElem", "outfitRedLeaderAged", "outfitWoodBarrel", "outfitWoodpile", "emote_thumbsup", "emote_sadface", "emote_happyface", "emote_surviv", "emote_gg", "emote_question", "emote_tombstone", "emote_joyface", "emote_sobface", "emote_thinkingface", "emote_flagus", "emote_flagthailand", "emote_flaggermany", "emote_flagfrance", "emote_flagsouthkorea", "emote_flagbrazil", "emote_flagcanada", "emote_flagspain", "emote_flagrussia", "emote_flagmexico", "emote_flagpoland", "emote_flaguk", "emote_flagcolombia", "emote_flagukraine", "emote_flagturkey", "emote_flagphilippines", "emote_flagczechia", "emote_flagperu", "emote_flagaustria", "emote_flagargentina", "emote_flagjapan", "emote_flagvenezuela", "emote_flagvietnam", "emote_flagswitzerland", "emote_flagnetherlands", "emote_flagchina", "emote_flagtaiwan", "emote_flagchile", "emote_flagaustralia", "emote_flagdenmark", "emote_flagitaly", "emote_flagsweden", "emote_flagecuador", "emote_flagslovakia", "emote_flaghungary", "emote_flagromania", "emote_flaghongkong", "emote_flagindonesia", "emote_flagfinland", "emote_flagnorway", "emote_heart", "emote_sleepy", "emote_flex", "emote_angryface", "emote_upsidedownface", "emote_teabag", "emote_alienface", "emote_flagbelarus", "emote_flagbelgium", "emote_flagkazakhstan", "emote_egg", "emote_police", "emote_dabface", "emote_flagmalaysia", "emote_flagnewzealand", "emote_logosurviv", "emote_logoegg", "emote_logoswine", "emote_logohydra", "emote_logostorm", "emote_flaghonduras", "emote_logocaduceus", "emote_impface", "emote_monocleface", "emote_sunglassface", "emote_headshotface", "emote_potato", "emote_leek", "emote_eggplant", "emote_baguette", "emote_chick", "emote_flagbolivia", "emote_flagcroatia", "emote_flagindia", "emote_flagisrael", "emote_flaggeorgia", "emote_flaggreece", "emote_flagguatemala", "emote_flagportugal", "emote_flagserbia", "emote_flagsingapore", "emote_flagtrinidad", "emote_flaguruguay", "emote_logoconch", "emote_pineapple", "emote_coconut", "emote_crab", "emote_whale", "emote_logometeor", "emote_salt", "emote_disappointface", "emote_logocrossing", "emote_fish", "emote_campfire", "emote_chickendinner", "emote_cattle", "emote_icecream", "emote_cupcake", "emote_donut", "emote_logohatchet", "emote_acorn", "emote_trunk", "emote_forest", "emote_pumpkin", "emote_candycorn", "emote_pilgrimhat", "emote_turkeyanimal", "emote_heartface", "emote_logochrysanthemum", "emote_santahat", "emote_snowman", "emote_snowflake", "emote_flagmorocco", "emote_flagestonia", "emote_flagalgeria", "emote_flagegypt", "emote_flagazerbaijan", "emote_flagalbania", "emote_flaglithuania", "emote_flaglatvia", "emote_flaguae", "emote_flagdominicanrepublic", "emote_logocloud", "emote_logotwins"];
//for(const ignored of ignoredItems) {
//    loadoutItems.splice(loadoutItems.indexOf(ignored), 1);
//}
const loadoutItems = [
    "outfitTurkey",
    "outfitWinter",
    "outfitGeometric",
    "outfitMilitary",
    "outfitDev",
    "outfitMod",
    "outfitWheat",
    "outfitSpetsnaz",
    "outfitLumber",
    "outfitParma",
    "outfitParmaPrestige",
    "outfitWoodland",
    "outfitRoyalFortune",
    "outfitKeyLime",
    "outfitCobaltShell",
    "outfitCarbonFiber",
    "outfitDarkGloves",
    "outfitDarkShirt",
    "outfitDesertCamo",
    "outfitCamo",
    "outfitRed",
    "outfitWhite",
    "outfitSunset",
    "outfitDeepPurple",
    "outfitSplotchfest",
    "outfitClaymore",
    "outfitChromesis",
    "outfitFragtastic",
    "outfitRusticSands",
    "outfitWaves",
    "outfitUrbanCamo",
    "outfitNeonEyesore",
    "outfitGiraffe",
    "outfitCow",
    "outfitMojo",
    "outfitZebra",
    "outfitAstronaut",
    "outfitDiamondy",
    "outfitMecha",
    "outfitFireball",
    "outfitSpeedo",
    "outfitBlueLava",
    "outfitInfernoCamo",
    "outfitSpeedoSunburn",
    "outfitMango",
    "outfitParrot",
    "outfitCrusader",
    "outfitLasrDisk",
    "outfitBeachCamo",
    "outfitForest",
    "outfitGingerbread",
    "outfitVenom",
    "outfitBlueMecha",
    "outfitEventHorizon",
    "outfitGrinch",
    "outfitSnowman",
    "outfitChritstmasTree",
    "outfitYinYang",
    "outfitTiki",
    "outfitMachoLucha2",
    "outfitCalaca",
    "outfitSortaBlue",
    "outfitMellow",
    "outfitBengal",
    "outfitUnderbrush",
    "outfitMagmatic",
    "outfitPurpleMecha",
    "outfitRosePetals",
    "outfitViper",
    "outfitFullCircle",
    "outfitPleasingPart",
    "outfitItJustMist",
    "outfitOneInAMelon",
    "outfitColdestEdge",
    "outfitRetroSunset",
    "outfitBoet",
    "outfitOldKumo",
    "outfitPanteraOnca",
    "outfitTipTheScales",
    "outfitAvocadoh",
    "outfitEyes-T",
    "outfitEggnite",
    "outfitSunburn",
    "outfitElectricIce",
    "outfitBubblegum",
    "outfitGaudisque",
    "outfitMicro-wave",
    "outfitStarflag",
    "outfitGridflag",
    "outfitToxicBarrel",
    "outfitBlueZone",
    "outfitBraaains",
    "outfitStumpd",
    "outfitDigiturt",
    "outfitMelonWater",
    "outfitStarryNight",
    "outfitStreetArt",
    "outfitNorseCode",
    "outfitILavaYou",
    "outfitKingGalaxy",
    "outfitCosmicBlue",
    "outfitJuleVerny",
    "outfitGhoulFire",
    "outfitDragonTails",
    "outfitHotMagma",
    "outfitLustrousPaladin",
    "outfitVillageNinja",
    "outfitAhoy",
    "outfitHowPita-ful",
    "outfitChewieCheese",
    "outfitH2Oh",
    "outfitMug-nificient",
    "outfitHopelessRamen-tic",
    "outfitSoapPods",
    "outfitCatchemOl",
    "outfitSwords",
    "outfitScarween",
    "outfitTomatoandCheese",
    "outfitColorPalette",
    "outfitTurtleSweater",
    "outfitChromaticCTR",
    "outfitBuckTeeth",
    "outfitChemis-tree",
    "outfitPoinsetee",
    "outfitSnowyClaus",
    "outfitCamoDeer",
    "outfitWoodFire",
    "outfitBluntRazor",
    "outfitHoldinHide",
    "outfitTribeShield",
    "outfitPhoebonachi",
    "outfitRuppert",
    "outfitTribeMask",
    "outfitTirelessly",
    "outfitBrontoChop",
    "outfitDisasteroid",
    "outfitGreenTeaRex",
    "outfitMultiTusking",
    "outfitSunriseBlvd",
    "outfitIntoTheGrid",
    "outfitToontooine",
    "outfitIts-me-coin",
    "outfitTunelSun",
    "outfitHue-dini",
    "outfitBitplosion",
    "outfitSpaceSnout",
    "outfitBombyman",
    "outfitIdDie4U",
    "outfitMaxAttack",
    "outfitNeckNapkin",
    "outfitHowl-o-Days",
    "outfitTheySeeMeRolling",
    "outfitCaptnCactus",
    "outfitGoodFeather",
    "outfitNachoHat",
    "outfitSuppaPoncho",
    "outfitBronco-saurus",
    "outfitRanchDressing",
    "outfitDe-ranged",
    "outfitSirLoin",
    "outfitMoosli",
    "outfitPreyDinner",
    "emote_ghost_base",
    "emote_bandagedface",
    "emote_picassoface",
    "emote_pooface",
    "emote_ok",
    "emote_rainbow",
    "emote_oof",
    "emote_shockface",
    "emote_skull",
    "emote_trollface",
    "emote_greedy",
    "emote_easy",
    "emote_lies",
    "emote_sweaty",
    "emote_flushed",
    "emote_deadface",
    "emote_starstruck",
    "emote_panned",
    "emote_happyghost",
    "emote_shroomcloud",
    "emote_fabulorn",
    "emote_shur",
    "emote_its_ok",
    "emote_boffy",
    "emote_relief",
    "emote_eye",
    "emote_frustration",
    "emote_qq",
    "emote_sushi_roll",
    "emote_pay_respects",
    "emote_rip",
    "emote_puke",
    "emote_pwn",
    "emote_nutz",
    "emote_bagged",
    "emote_too_close",
    "emote_friend_ghost",
    "emote_mr_sockey",
    "emote_hi5",
    "emote_gogo",
    "emote_angry_blob",
    "emote_nooblet",
    "emote_rainy_day",
    "emote_tiny_turtle",
    "emote_wait",
    "emote_taunty",
    "emote_glasses",
    "emote_pills",
    "emote_chimpion",
    "emote_golden_bullet",
    "emote_puke_rainbow",
    "emote_wth",
    "emote_lootloot",
    "emote_buuurn",
    "emote_rawr",
    "emote_clown",
    "emote_oldrespects",
    "emote_lootbones",
    "emote_peacesign",
    "emote_rad",
    "emote_tonguesout",
    "emote_i-heart-you",
    "emote_send-some-potis",
    "emote_radical-ray",
    "emote_you-invader",
    "emote_yeehaw",
    "emote_dynaboom",
    "emote_horsin-zone",
    "emote_was-a-lovely-cow",
    "emote_new-in-town",
    "emote_prickly-business",
    "emote_neutral",
    "emote_chickend",
    "heal_basic",
    "heal_heart",
    "heal_moon",
    "heal_tomoe",
    "heal_hexa",
    "heal_patch",
    "heal_paramedicine",
    "heal_lotus",
    "heal_syringe",
    "heal_diamond",
    "heal_peace",
    "heal_santa_boots",
    "heal_santa_hat",
    "heal_simply_lucky",
    "heal_canceller",
    "heal_sickle",
    "heal_frostiest",
    "heal_safe_zone",
    "heal_basics",
    "heal_double_barrier",
    "heal_prsmd",
    "heal_family_hut",
    "heal_pacing_pack",
    "heal_ocean_hearing",
    "heal_bold_boost",
    "heal_milans_feathers",
    "heal_one-mist-call",
    "heal_ring-it-on",
    "heal_frayed-knot",
    "boost_basic",
    "boost_star",
    "boost_naturalize",
    "boost_shuriken",
    "boost_energel",
    "boost_sugar",
    "boost_gear",
    "boost_atomic",
    "boost_firestorm",
    "boost_drumstick",
    "boost_casing",
    "boost_bubble",
    "boost_speed",
    "boost_bloodbath",
    "boost_holly_ivy",
    "boost_rudolph",
    "boost_ch_star",
    "boost_just_dial_star",
    "boost_three_ways",
    "boost_slacker",
    "boost_hidden_village",
    "boost_perfect_fit",
    "boost_spinner",
    "boost_to_the_bone",
    "boost_hunting_zone",
    "boost_tuskies",
    "boost_bus_worms",
    "boost_weird_blob",
    "boost_tun-pattern",
    "boost_ruppert-stone",
    "turkeyFeathersDeath",
    "cupidDeath",
    "blackHoleDeath",
    "bloodExplosionDeath",
    "magicSparkDeath",
    "toonBlastDeath",
    "billionaireDeath",
    "sparklyDeath",
    "confettiDeath",
    "potatoBlastDeath",
    "coopRaidDeath",
    "peelOutDeath",
    "heartyBreakfastDeath",
    "yoursTrulyDeath",
    "nerveGasDeath",
    "boltsNNutsDeath",
    "pizzasDeath",
    "orangeSlimDeath",
    "buildinBasesDeath",
    "puzzledDeath",
    "espressoDeath",
    "constructionDeath",
    "cheeseBombDeath",
    "newDeathsEveDeath",
    "comicFxDeath",
    "waterBendedDeath",
    "basicPuffDeath",
    "aboutToRainDeath",
    "cavemanApparelDeath",
    "diggingSiteDeath",
    "chocolatarDeath",
    "pixie-dustDeath",
    "squiggliesDeath",
    "cotton-explosionDeath",
    "serving-just-iceDeath",
    "ore-worksDeath",
    "spring-waterDeath",
    "last-doorDeath",
    "fist_split",
    "fist_blueVelvet",
    "fist_frostpunch",
    "fist_immolate",
    "fist_bulletbills",
    "fist_moss",
    "fist_blackholes",
    "fist_rainbowhands",
    "fist_darklets",
    "fist_scifi",
    "fist_poke",
    "fist_paws",
    "fist_dinoclaws",
    "fist_leaf",
    "fist_ranger",
    "fist_linedUp",
    "fist_lit",
    "fist_gift_punch",
    "fist_ember",
    "fist_santa",
    "fist_purptog",
    "fist_golden_lobster",
    "fist_pineFury",
    "fist_dreidel",
    "fist_bePresent",
    "fist_tropicana",
    "fist_spongeguy",
    "fist_rafflesia",
    "fist_golddrops",
    "fist_grizzly",
    "fist_coco_nut",
    "fist_101Spots",
    "fist_atnet",
    "fist_vitaminc",
    "fist_marblerun2",
    "fist_beachballin",
    "fist_fritterpunch",
    "fist_dishsoap",
    "fist_watermelon",
    "fist_bloody",
    "fist_makeachoice",
    "fist_bologna",
    "fist_flashy",
    "fist_tigerseed",
    "fist_paddle",
    "fist_inkybusiness",
    "fist_theotherpong",
    "fist_getdowntonite",
    "fist_milestones",
    "fist_washilamps",
    "fist_ghostpoke",
    "fist_condimentium",
    "fist_shinyjello",
    "fist_graphbars",
    "fist_purpleshutter",
    "fist_orangeandlime",
    "fist_nopinenogain",
    "fist_bullseye",
    "fist_flamingnucleus",
    "fist_meteornite",
    "fist_orangemintstones",
    "fist_firsttool",
    "fist_stonedgy",
    "fist_bonkbonk",
    "fist_fuzzyhooves",
    "fist_retrhorizon",
    "fist_pixeldots",
    "fist_ranchchips",
    "fist_lolitapop",
    "fist_dizzielocs",
    "fist_q-fist",
    "fist_d-punch-pad",
    "fist_developtheserolls",
    "fist_squareycherry",
    "fist_tawget",
    "fist_boogiestripes",
    "fist_garbanjo",
    "fist_wreckedangle",
    "fist_woodyallan",
    "fist_cattlebattle",
    "fist_badmitten",
    "fist_milkshaked",
    "fist_horsepower",
    "fist_upandatom",
    "knuckles_rusted",
    "knuckles_heroic",
    "bayonet_rugged",
    "bayonet_woodland",
];
const loadout = [], melee = [], outfits = [], emotes = [], heals = [], boosts = [], deaths = [];
for(const item of loadoutItems) {
    let itemObj = {
        type: item,
        source: "standard-issue",
        timeAcquired: 0,
        status: 2,
        id: "0",
        sourceRef: "0",
        stats: {
            makr: 'Surviv Reloaded',
            kills: 0,
            levels: 0,
            wins: 0
        }
    };
    if(item.startsWith("fist") || item.startsWith("knuckles") || item.startsWith("bayonet")) melee.push(item);
    else if(item.startsWith("outfit")) outfits.push(item);
    else if(item.)
    loadout.push(itemObj);
}
require('fs').writeFileSync("loadout2.json", JSON.stringify(loadoutItems, null, 2));
require('fs').writeFileSync("loadout.json", JSON.stringify(loadout, null, 2));
require('fs').writeFileSync("validation/melee.json", JSON.stringify(melee, null, 2));
require('fs').writeFileSync("validation/outfits.json", JSON.stringify(outfits, null, 2));
require('fs').writeFileSync("validation/emotes.json", JSON.stringify(emotes, null, 2));
require('fs').writeFileSync("validation/heals.json", JSON.stringify(heals, null, 2));
require('fs').writeFileSync("validation/boosts.json", JSON.stringify(boosts, null, 2));
require('fs').writeFileSync("validation/deaths.json", JSON.stringify(deaths, null, 2));

