/*--------------- Global variable declarations--------------- */
var inferenceMsg,groupVal=testVal=aminesVal=unsaturationtestVal=0,typeChangeVal=0,helpMessage,helpFunctions,helpclickFlag=false,nextClickFlag=false,smelltripFlag=false,inferenceClickFalg=false,trip,trip1,backToOnetesttubeBack,unsaturationhelpFunctions;
var bromineWaterHelpMsg,testubeADragHelp,testubeBDragHelp,backToRack,commonhinsbergHelpMsg,hinsbergHelpMsg,commonNitrousAcidHelp1Msg,commonNitrousAcidHelp2Msg,nitrousAcidHelpMsg,azoDyeHelpMsg,carbylaminesHelpMsg,sodiumHydrogenCarbonateHelpMsg,sodiumNitroprussideHelpMsg,dinitrobenzeneHelpMsg,fehlingHelpMsg,tollenHelpMsg,sodiumBisulphiteHelpMsg,dintrophenylHydrazineHelpMsg,phthaleinDyeHelpMsg,liebermannHelpMsg,baeyerHelpMsg,litmusHelpMsg,iodoformHelpMsg,burnerOnHelp,lucasHelpMsg,waitHelp,esterHelpMsg,commonHelpMsg,waterBathHelp,heatwaterBathHelp,estertestDragDropper,sodiumMetalHelpMsg,testubeDragHelp,acetylChlorideHelpMsg,addCalciumSulphate,nextProcessHelp;
var gt=$;

//---------------Onloading events--------------
window.onload = function init(){
	/*--------------- Variable declarations--------------- */
	var solutionDiv,solutionImg,testtubeSolnImg,testtubeDrag,testtubeImg,testtubeImgTop,testtubeImgLeft,rotateAmt=5,flameCount=0,flame;
	var flag_rotate=false,count=0,testtubeInt,changeSolnColor,dragTesttubeCount=0,dragDropperCount=0,dragDropper2Count=0;
	var corkFlag=true,clockInt,degree=0,heatFlag=false,filterPaperFlag=false;
	var testtubeRotateTop,testtubeRotateLeft,clockIntCnt=0,coolFlag=false,dipAmmoniaFlag=false,sodiumtakeFlag1=false,sodiumtakeFlag2=false;
	var iceBathcount=0,pourFlag=sodiumNitriteFlag=dropConch2so4=silverNitrateFlag=false;
	/*--------------- Language translating object--------------- */	
	var typesOfTests=[gt.gettext('Unsaturation'),gt.gettext('Functional group')];	
	var unsaturationTests=[gt.gettext('Bromine water test'),gt.gettext('Baeyer test')];
	var groups=[gt.gettext('Alcohols'),gt.gettext('Phenols'),gt.gettext('Aldehydes'),gt.gettext('Ketones'),gt.gettext('Carboxylic acids'),gt.gettext('Amines')];
	var tests=[[gt.gettext("Sodium metal test"),gt.gettext("Ester test"),gt.gettext("Ceric ammonium nitrate test"),gt.gettext("Acetyl chloride test"),gt.gettext("Iodoform test"),gt.gettext("Lucas test")],[gt.gettext('Litmus test'),gt.gettext('Ferric chloride test'),gt.gettext('Liebermann test'),gt.gettext('Phthalein Dye test')],[gt.gettext('Schiff test'),gt.gettext('Tollen test (Silver mirror test)'),gt.gettext('Fehling test'),gt.gettext('2 4 Dintrophenyl hydrazine test'),gt.gettext('Sodium bisulphite test')],[gt.gettext('2 4 Dintrophenyl hydrazine test'),gt.gettext('Sodium bisulphite test'),gt.gettext('m Dinitrobenzene test'),gt.gettext('Sodium nitroprusside test')],[gt.gettext('Litmus test'),gt.gettext('Sodium Hydrogen Carbonate test'),gt.gettext('Ester test')],[gt.gettext('Solubility test'),gt.gettext('Litmus test'),gt.gettext('Carbylamines test'),gt.gettext('Azo Dye test'),gt.gettext('Nitrous acid test'),gt.gettext('Hinsberg test')]];
	
	/*--------------- Template icon labels--------------- */
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
	//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
	/*--------------- Experiment heading--------------- */
	$('#expName').html(gt.gettext("Tests for Functional Groups"));
	/*--------------- Add labels--------------- */
	$('#selectTypeLbl').html(gt.gettext("Select the type:"));
	$('#unsaturationTestLbl').html(gt.gettext("Select the test:"));
	$('#dropboxTestLbl').html(gt.gettext("Select the functional group:"));
	$('#dropboxSubTestLbl').html(gt.gettext("Select the test:"));
	$('#aminesLbl').html(gt.gettext("Select the amines:"));
	$('#nextLabel').html(gt.gettext("Next"));
	$('#timeLabel').html(gt.gettext("10 Min"));
	$('#reset').val(gt.gettext("Reset"));
	/*------------Common help messages ------------*/
	testubeADragHelp=gt.gettext("Drag the test tube A to shake it well. ");
	testubeBDragHelp=gt.gettext("Drag the test tube B to shake it well. ");
	testubeDragHelp=gt.gettext("Drag the test tube to shake it well. ");
	nextProcessHelp=gt.gettext("Click on the Next button to <br>go to the next process.");
	filterHelp=gt.gettext("Drag the test tube A towards the test tube B to filter the contents <br>of A into B through the funnel and filter paper.");
	waterBathHelp=gt.gettext("Drag the test tube towards the beaker to<br> place it in the water bath.");
	heatwaterBathHelp=gt.gettext("Click on the switch of the hot plate <br>to heat the water bath.");
	waitHelp=gt.gettext("Wait for some time to heat <br>the contents of the test tube.");
	burnerOnHelp=gt.gettext("Click on the knob of the burner to turn it on.");
	backToRack=gt.gettext("Drag the test tubes towards the <br>test tube rack to place them back.");
	backTotesttubesRack=gt.gettext("Drag the test tubes to the test <br>tube rack to place them back.");
	/*---------------Bromine Water test -------------- */
	var bromineWater=gt.gettext("Bromine water");
	var saturatedText=gt.gettext("Saturated compound");
	var unsaturatedText=gt.gettext("Unsaturated compound");
	var bromineTestInference1=gt.gettext("Saturated compounds do not decolorize the <br>red-brown color of bromine water.");
	var bromineTestInference2=gt.gettext("When bromine water reacts with unsaturated compounds such as alkenes <br>or alkynes, bromine will react with alkenes to produce dibromoalkanes <br>and alkynes to produce tetrabromoalkanes.  When this reaction occurs, <br>molecular bromine is consumed, and its characteristic dark red -brown <br>color disappears.");	
	bromineWaterHelpMsg=[gt.gettext("Drag the dropper towards the test tube A to drop <br>bromine water into the saturated compound."),gt.gettext("Drag the dropper towards the test tube B to drop <br>bromine water into the unsaturated compound.")];
	/*---------------Baeyer's test-------------- */
	var kmno4Reagent=gt.gettext("Alkaline KMnO<sub>4</sub>");
	var baeyerTestInference1=gt.gettext("Saturated compounds do not decolorize the <br>pink color of potassium permanganate.");
	var baeyerTestInference2=gt.gettext("When KMnO<sub>4</sub> reacts with unsaturated compounds such as alkenes or <br>alkynes it oxidizes carbon-carbon double bond to give alkanediols and <br>the carbon-carbon triple bond to give carboxylic acids. The pink colored <br>permanganate is destroyed in the reaction, and a brown precipitate of <br>MnO<sub>2</sub> produced.");	
	baeyerHelpMsg=[gt.gettext("Drag the dropper towards the test tube A to drop alkaline <br>potassium permanganate into the saturated compound."),gt.gettext("Drag the dropper towards the test tube B to drop alkaline <br>potassium permanganate into the unsaturated compound.")];
	/*---------------Lucas test-------------- */
	var lucasReagent=gt.gettext("Lucas reagent");	
	var primaryAlcoholText=gt.gettext("Primary alcohol");
	var secondaryAlcoholText=gt.gettext("Secondary alcohol");
	var tertiaryAlcoholText=gt.gettext("Tertiary alcohol");
	var lucasTestInference1=gt.gettext("3 alcohols react instantaneously with Lucas reagent to form<br> alkyl chloride which is being insoluble result in cloudiness<br> in the solution.");
	var lucasTestInference2=gt.gettext("2 alcohols react in about 1-5 minutes with Lucas reagent to form <br>alkyl chloride which is being insoluble result in cloudiness <br>in the solution.");
	var lucasTestInference3=gt.gettext("On warming 1 alcohols react with Lucas reagent to form <br>alkyl chloride which is being insoluble result in <br>cloudiness in the solution.");
	lucasHelpMsg=[gt.gettext("Drag the dropper towards the test tube A to drop <br>Lucas reagent into the tertiary alcohol."),gt.gettext("Drag the dropper towards the test tube B to drop <br>Lucas reagent into the secondary alcohol."),gt.gettext("Drag the dropper towards the test tube C to drop <br>Lucas reagent into the primary alcohol."),gt.gettext("Drag the test tube C to shake it well and <br>place it over the Bunsen burner."),gt.gettext("Click on the knob of the burner to turn it on <br>and heat the contents of the test tube C.")];
	/*---------------Ceric ammonium nitrate-------------- */
	var cericAmmoniumNitrate =gt.gettext("Ceric ammonium nitrate") 
	var sampleLabel=gt.gettext("Sample");
	var cericTestInference=gt.gettext("Alcohols on reaction with ceric ammonium nitrate to give a red <br>colouration due to the formation of alkoxy cerium (IV) complex.");
	var cericTestHelp=gt.gettext("Drag the dropper towards the test tube to drop <br>ceric ammomium nitrate solution into the sample.");
	/*---------------Ferric chloride test-------------- */
	var ferricChloride=gt.gettext("Neutral ferric chloride"); 
	var fericTestInference=gt.gettext("Phenol on reaction with neutral ferric chloride to give <br>a violet color due to the formation of a complex.");
	var fericTestHelp=gt.gettext("Drag the dropper towards the test tube to drop the<br> sample into neutral ferric chloride solution.");
	
	/*---------------Schiff test-------------- */
	var schiffReagent=gt.gettext("Schiff's reagent");
	var schiffTestInference=gt.gettext("Schiff reagent gives characteristic pink <br>or magenta color with aldehydes.");
	var schiffTestHelp=gt.gettext("Drag the dropper towards the test tube to <br>drop Schiff reagent into the sample.");
	/*---------------Sodium Hydrogen Carbonate test-------------- */
	var sodiumBicarbonate=gt.gettext("Sodium bicarbonate");
	sodiumHydrogenCarbonateHelpMsg=gt.gettext("Drag the spatula towards the test tube <br>to add sodium bicarbonate into the sample.");
	/*---------------Sodium bisulphite test-------------- */
	var sodiumBisulphite=gt.gettext("Sodium bisulphite");
	var sodiumBisulphateTestInference1=gt.gettext("Aldehydes give bisulphite addition product with sodium bisulphite,<br> which is white crystalline in nature.");
	var sodiumBisulphateTestInference2=gt.gettext("Ketones give bisulphite addition product with sodium bisulphite,<br> which is white crystalline in nature.");
	sodiumBisulphiteHelpMsg=[gt.gettext("Drag the dropper towards the test tube <br> to drop saturated solution of sodium <br>bisulphite into the sample."),gt.gettext("Drag the cork towards the test tube to <br>close the test tube with it.")];
	/* ---------------Solubility test ---------------*/
	var dilHCl=gt.gettext("Dil. HCl ");
	var solubilityTestInference=gt.gettext("Amines are basic in nature and easily <br>reacts with acids to form soluble salts.");
	var solubilityTestHelp=gt.gettext("Drag the dropper towards the test tube <br>to drop dil. HCl into the sample.");
	/* ---------------Dintrophenyl hydrazine test ---------------*/
	var spiritLabel=gt.gettext("Rectified spirit ");
	var dinitrophenylhydrazineLabel=gt.gettext("2 4-dinitro phenyl hydrazine");
	var dinitrophenylhydrazineInference1=gt.gettext("2 4 Dinitrophenyl hydrazine on reaction with aldehydes to give<br> a yellow or orange precipitate of 2, 4  Dinitrophenyl hydrazone. "); 
	var dinitrophenylhydrazineInference2=gt.gettext("2 4  Dinitrophenyl hydrazine on reaction with ketones to give <br>a yellow or orange precipitate of 2, 4  Dinitrophenyl hydrazone."); 
	dintrophenylHydrazineHelpMsg=[gt.gettext("Drag the dropper towards the test tube to <br>drop rectified spirit into the sample."),gt.gettext("Drag the dropper towards the test tube <br>to drop 2,4  dinitrophenylhydrazine <br>reagent into the sample.")];
	/* ---------------Litmus test ---------------*/
	var bluepaperLabel=gt.gettext("Blue litmus paper");
	var redpaperLabel=gt.gettext("Red litmus paper");
	var litmusInference1=gt.gettext("Phenol is a weak acid, it turns the color of blue litmus paper red.");
	var litmusInference2=gt.gettext("Carboxylic acid turns blue litmus red.");
	var litmusInference3=gt.gettext("Amines are basic in nature that turns red litmus paper blue.");
	var litmusPhenol=gt.gettext("Drag the dropper towards the moist blue <br>litmus paper to drop the sample on it.");
	var litmusAmines=gt.gettext("Drag the dropper towards the moist red <br>litmus paper to drop the sample on it.");
	/* ---------------Ester test ---------------*/
	var glacialAceticAcidLabel=gt.gettext("Glacial acetic acid");
	var sulphuricAcid=gt.gettext("Conc. Sulphuric acid");
	var alcoholicEsterInference1=gt.gettext("A fruity smell is produced");
	var alcoholicEsterInference2=gt.gettext("Alcohols react with carboxylic acids in presence of conc. H<sub>2</sub>SO<sub>4</sub> <br>to form fruity smelling compound called esters.");
	var alcoholicEsterInference3=gt.gettext("Carboxylic acids react with alcohols in the acidic medium <br>to produce fruity smelling compound called esters.");
	var estertestDragDropper1=gt.gettext("Drag the dropper towards the test tube to <br>drop glacial acetic acid into the sample.");
	var estertestDragDropper2=gt.gettext("Drag the dropper towards the test tube to <br>drop ethyl alcohol into the sample.");
	esterHelpMsg=[gt.gettext("Drag the dropper towards the test tube to <br>drop Conc. sulphuric acid into the sample."),gt.gettext("Drag the test tube towards the small beaker to pour <br>the contents of the test tube into the cold water.")];
	var coldWaterLabel=gt.gettext("Cold water");
	var ethylAlcohol =gt.gettext("Ethyl alcohol");
	var smellSolnDiv="beakerSmallSolnDiv";
	var smellInference=alcoholicEsterInference1;
	var inferencePosition='w';
	/* ---------------Help message for drag the scale ---------------*/
	var smelltrip = new Trip([
	{
		sel : $('#'+smellSolnDiv),
		position : inferencePosition,
		content : smellInference,
		expose : false,
		delay : 4000
	}
	])	
	/* ---------------Fehling test---------------*/
	var fehlingSolutionA=gt.gettext("Fehling solution A ");
	var fehlingSolutionB=gt.gettext("Fehling solution B ");
	var fehlingInference=gt.gettext("Aldehydes reduces the Cu(II) ions in the test reagent <br>to red precipitate of copper (I) oxide.");
	fehlingHelpMsg=[gt.gettext("Drag the dropper towards the test tube to <br>drop Fehling solution A into the sample."),gt.gettext("Drag the dropper towards the test tube to <br>drop Fehling solution B into the sample.")];
	/* ---------------Iodoform test---------------*/
	var iodineLable=gt.gettext("1% iodine solution"); 
	var dilSodiumhydroxideLabel=gt.gettext("Dil. Sodium hydroxide");
	var iodoformInference=gt.gettext("This test is given by alcohols containing CH<sub>3</sub>-CH-OH <br>group.When alcohol is warmed with NaOH solution and iodine,<br> a yellow precipitate of iodoform is formed.");
	iodoformHelpMsg=[gt.gettext("Drag the dropper towards the test tube to drop <br>1% iodine solution into the sample."),gt.gettext("Drag the dropper towards the test tube to drop <br>dil. sodium hydroxide into the sample.")];
	/* ---------------Sodium Hydrogen Carbonate test--------------*/
	var sodiumHydrogenCarbonateInference=gt.gettext('Carboxylic acids react with sodium bicarbonate to produce brisk <br>effervescence due to the formation carbon dioxide gas.');
	/* ---------------m- Dinitrobenzene test--------------*/
	var mDinitrobenzene=gt.gettext('m-dinitrobenzene');
	var mDinitrobenzeneInference=gt.gettext('Ketones on reaction with m-dinitrobenzene and sodium hydroxide to<br> give a violet colouration that slowly fades away.');
	var spatulaMinTop,spatulaMaxTop,spatulaMinLeft,spatulaMaxLeft,spatulaTop,spatulaLeft; 
	dinitrobenzeneHelpMsg=[gt.gettext("Drag the spatula towards the test tube to <br>add m- dinitrobenzene into the sample."),gt.gettext("Drag the dropper towards the test tube to <br>drop dil. sodium hydroxide into the sample.")];
	/* ---------------Sodium nitroprusside test--------------*/
	var sodiumNitroprusside =gt.gettext('Sodium nitroprusside'); 
	var distWater=gt.gettext('Distilled water'); 
	var sodiumHydroxide=gt.gettext('Sodium hydroxide'); 
	var sodiumNitroprussideInference=gt.gettext('This test is given by methyl ketones. The anion of the <br>ketone formed by an alkali reacts with nitroprusside <br> ion to form red coloured complex.'); 
	sodiumNitroprussideHelpMsg=[gt.gettext("Drag the dropper towards the test tube to drop <br>sodium nitroprusside solution into the sample."),gt.gettext("Drag the dropper towards the test tube to drop<br> sodium hydroxide solution into the test tube.")];
	/* ---------------Liebermann's test---------------*/
	var sodiumNitrite=gt.gettext("Sodium nitrite");
	var liebermannTestInference1=gt.gettext("Phenol on reaction with sodium nitrite in presence of <br>Conc. H<sub>2</sub>SO<sub>4</sub> to give a deep blue or green colored product.");
	var liebermannTestInference2=gt.gettext("The blue or green colour changes to red or brown colour on <br>treatment with water due to the formation of indophenol.");
	var liebermannTestInference3=gt.gettext("The red colour again changes to blue or green by the addition of <br>strong alkali due to the formation of indophenol anion.");
	liebermannHelpMsg=[gt.gettext("Drag the spatula towards the test tube to<br> add sodium nitrite into the sample."),gt.gettext("Drag the test tube over the Bunsen burner <br>to heat the contents of the test tube."),gt.gettext("Wait for some time to cool the<br> contents of the test tube."),gt.gettext("Drag the dropper towards the test tube <br>to drop Conc. sulphuric acid into it."),gt.gettext("Drag the dropper towards the test tube <br>to drop distilled water into the <br>contents of the test tube."),gt.gettext("Drag the dropper towards the test tube to <br>drop excess sodium hydroxide solution <br>into the contents of the test tube.")];
	/* ---------------Phthalein Dye test---------------*/
	var phthalicAnhydride=gt.gettext("Phthalic anhydride");
	var phthalicAnhydrideTestInference1=gt.gettext("Pink colouration inside the beaker.");
	var phthalicAnhydrideTestInference2=gt.gettext("On heating, phenol reacts with phthalic anhydride in presence of H<sub>2</sub>SO<sub>4</sub> <br>to produces phenolphthalein, which gives pink colour with alkali like NaOH.");
	phthaleinDyeHelpMsg=[gt.gettext("Drag the spatula towards the test tube to <br>add phthalic anhydride into the sample."),gt.gettext("Drag the dropper towards the test tube to <br>drop Conc. sulphuric acid into the sample."),gt.gettext("Drag the test tube towards the beaker to<br> place it in the oil bath."),gt.gettext("Click on the switch of the hot plate <br>to heat the oil bath."),gt.gettext("Drag the test tube towards the small beaker <br>to pour the contents of the test tube into <br>the sodium hydroxide solution.")];
	/* ---------------Carbylamines test---------------*/
	var ethanolLabel=gt.gettext("Ethanol");
	var chloroform=gt.gettext("Chloroform");
	var potassiumHydroxide=gt.gettext("Potassium hydroxide");
	var carbylaminestestInference1=gt.gettext("Offensive smell is produced.");
	var carbylaminestestInference2=gt.gettext("Aliphatic as well as aromatic 1 amines when warmed with chloroform <br>and alcoholic KOH, give isocyanide, which has an offensive smell.");
	var alcoholicaKOH=gt.gettext("Alcoholic KOH");	
	carbylaminesHelpMsg=[gt.gettext("Drag the dropper towards the test tube to <br>drop ethyl alcohol into potassium hydroxide."),gt.gettext("Drag the test tube over <br>the burner to warm it."),gt.gettext("Drag the dropper towards the test tube <br>to drop chloroform into it."),gt.gettext("Drag the dropper towards the test tube<br> to drop the sample into it.")];
	/* ---------------Tollen test---------------*/
	var dilAmmonia=gt.gettext('Dil. Ammonia solution');
	var dilNaOH=gt.gettext('Dil. Sodium hydroxide');
	var silverNitrate=gt.gettext("Silver nitrate");
	var tollenTestInference1=gt.gettext("Silver nitrate reacts with sodium hydroxide to form brown precipitate<br> of silver oxide which is dissolved in ammonium hydroxide.");
	var tollenTestInference2=gt.gettext("In presence of aldehydes, the silver ions in the test reagent <br>are reduced to elemental silver, accumulated onto the inner <br>surface of the reaction vessel, producing silver mirror on <br>the inner surface of the vessel.");
	tollenHelpMsg=[gt.gettext("Drag the dropper towards the test tube to drop <br>silver nitrate solution into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop <br>dil. sodium hydroxide solution into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop <br>dil. ammonia solution into the test tube."),gt.gettext("Drag the dropper towards the test tube <br>to drop sample into the test tube.")];
	/* --------------Sodium metal test--------------*/
	var calciumSulphate=gt.gettext("Calcium sulphate (anhydrous)");
	var sodiumMetalTestInference=gt.gettext("Alcohols react with active metals like sodium to produce effervescence<br> due to the liberation of hydrogen gas.");
	var sodiumMetal=gt.gettext("Sodium metal");
	addCalciumSulphate=gt.gettext("Drag the spatula towards the test tube A to add <br>anhydrous calcium sulphate into the sample.");
	sodiumMetalHelpMsg=[gt.gettext("Drag the forceps towards the bottle containing sodium metal<br> to take small piece of sodium using it."),gt.gettext("Drag the forceps towards the filter paper to <br>place the sodium metal on the filter paper."),gt.gettext("Drag the other filter paper towards the <br>filter paper containing sodium to dry it."),gt.gettext("Drag the forceps towards the filter paper <br>to take the dry piece of sodium."),gt.gettext("Drag the forceps towards the test tube to put <br>the dry piece of sodium into the sample.")];
	/* --------------Acetyl chloride test--------------*/
	var acetylChloride=gt.gettext("Acetyl chloride");
	var ammoniumHydroxide=gt.gettext("Ammonium hydroxide");
	var acetylChlorideTestInference=gt.gettext("Alcohols on reaction with acetyl chloride to form esters and <br>give out hydrogen chloride gas that gives white fumes of <br>ammonium chloride with ammonium hydroxide.");
	acetylChlorideHelpMsg=[gt.gettext("Drag the dropper towards the test tube B to <br>drop acetyl chloride into the sample."),gt.gettext("Drag the glass rod towards the bottle to dip it <br>in ammonium hydroxide solution and drag it again <br>towards the test tube B to shown it over the <br>mouth of the test tube.") ];
	/* -------------Azo dye test--------------*/
	var hclLabel=gt.gettext("Hydrochloric acid");
	var sodiumnitriteAqu=gt.gettext("Sodium nitrite(aq)");
	var naphthol=gt.gettext("naphthol");
	var iceBath=gt.gettext("Ice bath container");
	var azoDyeInference=gt.gettext("Aromatic 1 amine reacts with sodium nitrite and HCl at <br>0 5 C to produce diazonium salt which couples with <br>naphthol to give a scarlet red dye.");
	azoDyeHelpMsg=[gt.gettext("Drag the dropper towards the test tube A to <br>drop dil. hydrochloric acid into the sample."),gt.gettext("Drag the dropper towards the test tube C to drop <br>dil. sodium hydroxide into the naphthol."),gt.gettext("Drag the test tube C to shake it well."),gt.gettext("Drag the test tubes A, B and C <br>towards the ice bath."),gt.gettext("Drag the test tube B towards the test tube A to<br> pour sodium nitrite solution into the sample."),
gt.gettext("Drag the test tube A towards the test tube C <br>to pour resulting solution into alkaline <br>solution of naphthol.")];
	/* -------------Nitrous acid test--------------*/
	var concSulphuricAcid=gt.gettext("Conc. sulphuric acid"); 
	var sodiumnitrate=gt.gettext("Sodium nitrite");
	var nitrousAcidInference=[gt.gettext("1 amine reacts with sodium nitrite and HCl<br> to liberate bubbles of nitrogen gas."),gt.gettext("2 amine reacts with sodium nitrite and HCl <br>to form a yellow oily layer of nitrosamine."),gt.gettext("No visual change is observed in this case, a colorless <br>solution is left. The 3 amine has formed a soluble <br>nitrite salt by reacting with the acid present.")];
	nitrousAcidHelpMsg=[gt.gettext("Drag the spatula towards the test tube B to <br>add sodium nitrite into distilled water."),gt.gettext("Drag the test tubes A and B towards the <br>ice bath to place them in ice bath.")];
	var commonNitrousAcidHelp1=[gt.gettext("Drag the dropper towards the test tube A <br>to drop Conc. hydrochloric acid into the <br>primary amine."),gt.gettext("Drag the dropper towards the test tube A to drop <br>Conc. hydrochloric acid into the secondary amine."),gt.gettext("Drag the dropper towards the test tube A <br>to drop Conc. hydrochloric acid into <br>the tertiary amine.")];
	var commonNitrousAcidHelp2=[gt.gettext("Drag the test tube B towards the <br>test tube A to pour sodium nitrite <br>solution into primary amine."),gt.gettext("Drag the test tube B towards the test tube A to <br>pour sodium nitrite solution into secondary amine."),gt.gettext("Drag the test tube B towards the <br>test tube A to pour sodium nitrite<br> solution into tertiary amine.")];
	/* -------------Hinsberg test  --------------*/ 
	var naoh = gt.gettext("25% NaOH");
	var waterLabel= gt.gettext("Water");
	var benzeneSulphonylChloride =gt.gettext("Benzene sulphonyl chloride");
	var concHcl= gt.gettext("Conc. HCl");
	var aminesInference=gt.gettext("Formation of precipitate inside the test tube A.");
	var aminesInference2=[gt.gettext("1 amine reacts with benzene sulphonyl chloride and NaOH <br>to form a soluble sulphonamide salt which precipitates <br>after addition of dil. HCl."),gt.gettext("2 amine reacts with benzene sulphonyl chloride and NaOH to <br>form an insoluble sulphonamide. Acidification of the mixture <br> does not dissolve the insoluble sulphonamide."),gt.gettext("3 amine will not react, but is insoluble.<br> After adding dilute acid this insoluble <br>amine is converted to a soluble ammonium salt.")];
	hinsbergHelpMsg=[gt.gettext("Drag the dropper towards the test tube <br>to drop water into it."),gt.gettext("Drag the dropper towards the test tube to <br> drop benzene sulphonyl chloride into it."),gt.gettext("Drag the test tube towards the beaker<br> to place it in the water."),gt.gettext("Drag the dropper towards the test tube to <br>drop Conc. hydrochloric acid into it.")];
	var commonhinsbergHelp=[gt.gettext("Drag the dropper towards the test tube to drop <br>25% sodium hydroxide into the primary amine."),gt.gettext("Drag the dropper towards the test tube to drop <br>25% sodium hydroxide into the secondary amine."),gt.gettext("Drag the dropper towards the test tube to drop <br>25% sodium hydroxide into the tertiary amine.")];
	/*--------------------------------------------*/
	var amines=[gt.gettext("Primary amines"),gt.gettext("Secondary amines"),gt.gettext("Tertiary amines")];
	var	mainTop=$('#mainDiv').position().top;
	var	mainLeft=$('#mainDiv').position().left;	
	//---------------Document ready function--------------
	$(document).ready(function() {
		/*--------------- Prevent the selection --------------- */
		$('#canvasBox').mousedown(function(event){	event.preventDefault();	});	
		//---------Add values into combobox--------	
		addintoDropDown($('#selectTypeTest'),typesOfTests);
		addintoDropDown($('#dropboxTest'),groups);
		addintoDropDown($('#aminesTests'),amines);
		addintoDropDown($('#dropboxSubTest'),tests[0]);
		addintoDropDown($('#unsaturationdropboxTest'),unsaturationTests);
		var unsaturationtestFunctions=[bromineWaterTest,baeyerTest];
		var unsaturationtestNames=["bromineWaterTest","baeyerTest"];
		var types=["unsaturationTest","functionalTest"];
		testFunctions=[[sodiumMetalOrAcetylChlorideTest,commonTest,cericAmmoniumNitrateTest,sodiumMetalOrAcetylChlorideTest,commonTest,lucasTest],[litmusTest,ferricChlorideTest,liebermannTest,phthaleinDyeTest],[schiffTest,tollenTest,commonTest,dintrophenylHydrazineTest,sodiumBisulphiteTest],[dintrophenylHydrazineTest,sodiumBisulphiteTest,dinitrobenzeneTest,commonTest],[litmusTest,sodiumHydrogenCarbonateTest,commonTest],[solubilityTest,litmusTest,carbylaminesTest,azoDyeTest,nitrousAcidTest,hinsbergTest]];
		var testNames=[["sodiumMetalTest","esterTest","cericAmmoniumNitrateTest","acetylChlorideTest","iodoformTest","lucasTest"],["litmusTest","ferricChlorideTest","liebermannTest","phthaleinDyeTest"],["schiffTest","tollenTest","fehlingTest","dintrophenylHydrazineTest","sodiumBisulphiteTest"],["dintrophenylHydrazineTest","sodiumBisulphiteTest","dinitrobenzeneTest","sodiumNitroprussideTest"],["litmusTest","sodiumHydrogenCarbonateTest","esterTest"],["solubilityTest","litmusTest","carbylaminesTest","azoDyeTest","nitrousAcidTest","hinsbergTest"]];
		var displayVal=["none","block"]
		unsaturationtestFunctions[0]();
		//-------Function to add values into combobox------
		function addintoDropDown(getId,valueSet){
			$.each(valueSet, function(val, text) {
				getId.append(
					$('<option ></option>').val(val).html(text) 
				);
			});
		}
		//-------Function for changing  unsaturation test combobox values------		
	    $typeChange=$('#selectTypeTest').on('change', function() {
	    	typeChangeVal=$typeChange.val();
	    	resetAll();
	    	groupVal=0;	 
	    	unsaturationtestVal=0;  
	    	testVal=0;
			aminesVal=0;
			$("#aminesTests").val(aminesVal); 	    		
	    	$('#dropboxTest').val(groupVal);
	    	$('#dropboxSubTest').val(testVal);
	    	$('#unsaturationdropboxTest').val(unsaturationtestVal);
	    	$('#unsaturationTest,#functionalTest').css({display:'none'});	    	
	    	$('#'+types[typeChangeVal]).css({display:'block'});
	    	$('#subTestContainer').css({display:displayVal[typeChangeVal]});
	    	if(typeChangeVal==0){
	    		unsaturationtestFunctions[unsaturationtestVal]();
	    		$('#aminesContainer').css({display:'none'})
	    	}else{
	    		testFunctions[groupVal][testVal](); 
	    	}

	    });	
		//-------Function for changing  unsaturation test combobox values------		
	    $unsaturationtestChange=$('#unsaturationdropboxTest').on('change', function() {
	    	unsaturationtestVal=$unsaturationtestChange.val();
	    	resetAll();	
	    	unsaturationtestFunctions[unsaturationtestVal]();
	    	groupVal=0;	    	
	    	$('#dropboxTest').val(groupVal);

	    });	
		//-------Function for changing group combobox values------		
	    $groupChange=$('#dropboxTest').on('change', function() {	    	
			groupVal=$groupChange.val();	// get attribute value of test combobox
			$('#dropboxSubTest').empty();	
			addintoDropDown($('#dropboxSubTest'),tests[groupVal]);	
			resetAll();	
			testVal=0;
			aminesVal=0;
			$("#aminesTests").val(aminesVal); 
	    	testFunctions[groupVal][testVal]();
	    	$('#subTestContainer').css({display:'block'});
	    	
	    });
	    //-------Function for changing  test combobox values------		
	    $testChange=$('#dropboxSubTest').on('change', function() {
	    	testVal=$testChange.val();	// get attribute value of solvent combobox
	    	resetAll();
	    	aminesVal=0;
	    	testFunctions[groupVal][testVal]();
	    	$("#aminesTests").val(aminesVal); 
	    });	
	    //-------Function for changing amines combobox values------		
	    $aminesChange=$('#aminesTests').on('change', function() {
	    	resetAll();
	    	aminesVal=$aminesChange.val();	// get attribute value of solvent combobox
	    	$('#labelText1').html(amines[aminesVal]);
	    	testFunctions[groupVal][testVal]();
	    });	
	    //-------Bromine Water Test-------
	    function bromineWaterTest(){
	    	$('#labelDiv').css({left:'77px'});
	    	$('#bottle1').css({left:'416px'});
	    	$('#dropper1').css({left:'435px'});
	    	$('#labelText1,#labelText2').css({top:'1px'});
	    	$('#testtubeA,#testtubeADrag').css({left:'123px'});
	    	$('#testtubeB,#testtubeBDrag').css({left:'210px'});
	    	$('#testtubeC,#testtubeCDrag').css({left:'291px'});
	    	$('#bottle1Img').attr('src',simPath+'images/brownBottle.png');
	    	$('.bottleSolnStyle').css({backgroundColor:'#CCC'});
	    	$('.drop').css({'border-bottom': '10px solid #f17f06'});
	    	$('#dropperSoln1').attr('src',simPath+'images/dropperSolnBrown.png');
	    	$('#bottle1SolnName').html(bromineWater);	   
	    	$('#labelText1').html(saturatedText);
	    	$('#labelText2').html(unsaturatedText);
	    	$('#label2Div,#testtubeBDrag,#testtubeB,#stand1').css({display:'block'}); 
	    	colorChange('#D52800',bromineTestInference1,0.7);
	    	displayCommonTestMaterials();
	    	testtubeImgLeft=123;
	    	dragDropperCount=1;
	    	testtubeRotateTop=20;
			testtubeRotateLeft=325;
	    	//Dropper drag 
		   	$('#dropper1').draggable({ disabled: false });
			$('#dropper1').css({cursor:'pointer'});
	   		dragDropper('dropper1','dropperSoln1',-18,128,98,435,-100,130,50,170,104,124,133);
	    }
	    //------Fnction to display common materials-----------
	    function displayCommonTestMaterials(){
	    	$('#testtubeA,#dropper1,#bottle1,#label1Div,#testtubeADrag').css({display:'block'}); 
	   		solutionDiv='testtubeASoln';
	   		solutionImg='testtubeASolnImg';
	   		testtubeDrag='testtubeADrag';
	   		testtubeImg='testtubeA';
	   		testtubeImgTop=100;
	    }
	    //------Fnction to assign color,opacity and inference-----------
	    function colorChange(colorCode,inference,changeOpacity){
			changeSolnColor=colorCode;
			inferenceMsg=inference;
			opacityValue=changeOpacity;
	    }
	    //---------Drag dropper to drop sample solutions---------
	 	function dragDropper(dropperId,droppersolnId,topPos,leftPos,defaultTopPos,defaultLeftPos,minTop,maxTop,minLeft,maxLeft,drop1Top,drop2Top,dropLeft){
	 		$('#'+dropperId).draggable({
				start:function(event, ui) {
					$('#inference').css({display:'none'}); // Inference	
					$('#'+dropperId).css({zIndex:1}); 
				},
				stop:function(event, ui){
					if(this.offsetTop>=minTop && this.offsetTop<=maxTop && this.offsetLeft>=minLeft &&this.offsetLeft<=maxLeft){
						$('#'+dropperId).css({top: topPos+'px',left:leftPos+'px'});
						$('#'+dropperId).draggable({ disabled: true });
						$('#'+dropperId).css({cursor:'default'});
						$('#'+dropperId).css({zIndex:0});					
						$('#drop1').css({top:drop1Top+'px',left:dropLeft+'px'});
						$('#drop2').css({top:drop2Top+'px',left:dropLeft+'px'});
						$('#drop1').css({display:'block'});//Drops							
						$('#drop1').animate({top:mainTop+180+'px'},500,function(){
							if(silverNitrateFlag==true){
								$('#testtubeASoln').css({display:'block'});		
								switch (testNames[groupVal][testVal]){
									case testNames[2][1]://Tollen test(Silver mirror test)	
										silverNitrateFlag=false;											
										$('#testtubeASoln').animate({top:'130px',height:'34px'});				
										$('#testtubeASolnImg').animate({top:'-82px'});
									break;
								}	
							}								
							$('#drop1').css({display:'none'});
							$('#drop2').css({display:'block'});							
							$('#drop2').animate({top:mainTop+228+'px'},500,function(){
								if(silverNitrateFlag==false){
									increaseTesttubeSample(solutionDiv,solutionImg);//increasing solution	
								}
								$('#drop1,#drop2').css({display:'none'});										
								$('#'+dropperId).animate({top: defaultTopPos+'px',left:defaultLeftPos+'px'},function(){
									$('#'+solutionImg).animate({backgroundColor:changeSolnColor,opacity:opacityValue});
	  								if(corkFlag==true){
	   									$('#'+testtubeDrag).css('cursor','pointer');
	   									dragTesttubeFn(testtubeDrag,testtubeImg,testtubeImgTop,testtubeImgLeft,testtubeRotateTop,testtubeRotateLeft);		   									
	   								}	   								
	   								$('#'+droppersolnId).css({top:'63px',height:'56px',width:'9px',left:'6px'});	   								
	   								if(dragDropper2Count==0){
	   									dragDropper2Count=1;
	   									switch (testNames[groupVal][testVal]){
											case testNames[2][3]://2,4-Dintrophenyl hydrazine test 
												//Dropper drag
												colorChange('#F28500',dinitrophenylhydrazineInference,1);
												$('.drop').css({'border-bottom': '10px solid #E1CF41'}); 
											   	$('#dropper2').draggable({ disabled: false });
												$('#dropper2').css({cursor:'pointer'});
										   		dragDropper('dropper2','dropperSoln2',-18,128,98,441,-100,130,50,170,104,124,133);
											break;	
											case testNames[0][1]://Alcoholic ester test 
												//Dropper drag								
												$('.drop').css({'border-bottom': '10px solid #CCC'}); 
											   	$('#dropper2').draggable({ disabled: false });
												$('#dropper2').css({cursor:'pointer'});
										   		dragDropper('dropper2','dropperSoln2',-18,128,98,441,-100,130,50,170,104,124,133);
											break;
											case testNames[0][4]://Iodoform test
												//Dropper drag
												colorChange('#CCC',iodoformInference,0.3);																				
												$('.drop').css({'border-bottom': '10px solid #CCC'}); 
											   	$('#dropper2').draggable({ disabled: false });
												$('#dropper2').css({cursor:'pointer'});
										   		dragDropper('dropper2','dropperSoln2',-18,128,98,441,-100,130,50,170,104,124,133);
											break;
											case testNames[1][2]://Liebermann's test																								
												$('#inference').css({display:'block'}); // Inference												
											break;
											case testNames[2][4]://Sodium bisulphite test
												$('#cork').css('cursor','pointer');
	   											$('#cork').draggable({disabled:false});																																
											break;
											case testNames[2][2]://Fehling's  test												
												colorChange('#313BA5',fehlingInference,1);
												$('.drop').css({'border-bottom': '10px solid #CCC'}); 
											   	$('#dropper2').draggable({ disabled: false });
												$('#dropper2').css({cursor:'pointer'});
										   		dragDropper('dropper2','dropperSoln2',-18,128,98,441,-100,130,50,170,104,124,133);
											break;											
											case testNames[1][3]://Phthalein Dye test
												$('#nextBtnDiv').css({display:'block'});
											break;
											case testNames[5][2]://Carbylamines test
												$('#testtubeASoln').css({opacity:1});
												$('#burnerhelpDiv').css({zIndex:0});
												burnerOn();
											break;
											case testNames[2][1]://Tollen test(Silver mirror test)			
												colorChange('#775530',tollenTestInference1,1);
												solutionDiv='testtubeASoln';
		    									solutionImg='testtubeASolnImg';
												//Dropper drag 
											   	$('#dropper1').draggable({ disabled: false });
												$('#dropper1').css({cursor:'pointer'});
										   		dragDropper('dropper1','dropperSoln1',-18,93,98,315,-100,130,50,170,104,124,99);
											break;
											
											case testNames[5][5]://Hinsberg test 																					
												$('#dropper2').draggable({ disabled: false });
												$('#dropper2').css({cursor:'pointer'});
										   		dragDropper('dropper2','dropperSoln2',-18,100,98,387,-100,130,40,160,104,124,106);
											break;
											case testNames[5][4]://Nitrous acid test
												dropConch2so4=true;
												if(sodiumNitriteFlag==true){
													dragTesttubeFn('testtubeADrag','testtubeA',100,49,33,340);
												}																				
											break;

										}
									}else if(dragDropper2Count==1){										
										console.log(testNames[0][1]);
										switch (testNames[groupVal][testVal]){
											case testNames[2][3]://2,4-Dintrophenyl hydrazine test 
												$('#inference').css({display:'block'}); // Inference
											break;
											case testNames[0][1]:
												$('#nextBtnDiv').css({display:'block'});// Next Button
											break;	
											case testNames[1][4]:
												$('#nextBtnDiv').css({display:'block'});// Next Button
											break;	
											case testNames[3][2]:
												$('#nextBtnDiv').css({display:'block'});// Next Button
											break;												
											case testNames[0][4]://Iodoform test
												$('#nextBtnDiv').css({display:'block'});// Next Button
											break;
											case testNames[1][2]://Liebermann's test
												//Dropper drag
												$('#inference').css({display:'block'}); // Inference
												colorChange('#000066',liebermannTestInference2,1);																																
												$('.drop').css({'border-bottom': '10px solid #CCC'}); 
											   	$('#dropper2').draggable({ disabled: false });
												$('#dropper2').css({cursor:'pointer'});
										   		dragDropper('dropper2','dropperSoln2',-18,128,98,441,-100,130,50,170,104,124,133);
												dragDropper2Count=2;
											break;
											case testNames[2][2]://Fehling's  test	
												$('#nextBtnDiv').css({display:'block'});// Next Button
											break;
											case testNames[3][3]://Sodium nitroprusside test
												$('#inference').css({display:'block'}); // Inference
											break;
											case testNames[5][2]://Carbylamines test
												dragDropper2Count=2;
												$('#dropper3').draggable({ disabled: false });
												$('#dropper3').css({cursor:'pointer'});
					   							dragDropper('dropper3','dropperSoln3',-18,196,98,489,-100,130,136,260,104,124,201);
											break;	
											case testNames[2][1]://Tollen test(Silver mirror test)	
												dragDropper2Count=2;
												$('#inference').css({display:'block'});	
												colorChange('#CCC',tollenTestInference1,0.3);
												$('#dropper2').draggable({ disabled: false });
												$('#dropper2').css({cursor:'pointer'});
										   		dragDropper('dropper2','dropperSoln2',-18,93,98,400,-100,130,50,170,104,124,99);											
											break;											
											case testNames[5][5]://Hinsberg test 																					
												$('#dropper3').draggable({ disabled: false });
												$('#dropper3').css({cursor:'pointer'});
										   		dragDropper('dropper3','dropperSoln3',-18,100,98,475,-100,130,40,160,104,124,106);
												dragDropper2Count=2;
											break;
											case testNames[5][3]://Nitrous acid test
												$('#testtubeCSoln').animate({opacity:1});	
											break;											
										}
										
									}else if(dragDropper2Count==2){
										switch (testNames[groupVal][testVal]){
											case testNames[5][2]://Carbylamines test
												$('#burnerhelpDiv').css({zIndex:0});
												$('#burnerOff').css({cursor:'pointer'});
												burnerOn();											
											break;
											case testNames[1][2]://Liebermann's test
												$('#inference').css({display:'block'}); // Inference
												colorChange('#000066',liebermannTestInference3,1);
											break	
											case testNames[2][1]://Tollen test(Silver mirror test)
												dragDropper2Count=3;												
												$('#dropper3').draggable({ disabled: false });
												$('#dropper3').css({cursor:'pointer'});
					   							dragDropper('dropper3','dropperSoln3',-18,93,98,484,-100,130,50,170,104,124,99);
											break;
											case testNames[5][5]://Hinsberg test 
												$('#'+testtubeDrag).css('cursor','pointer');
	   											dragTesttubeFn(testtubeDrag,testtubeImg,testtubeImgTop,testtubeImgLeft,testtubeRotateTop,testtubeRotateLeft);		   									
												dragDropper2Count=3;
											break;
	   										
										}
									}else if(dragDropper2Count==3){
										switch (testNames[groupVal][testVal]){
											case testNames[5][5]://Hinsberg test												
												$('#testtubeASolnImg').stop(true);
												if(aminesVal==2 ){//tertiary amines							    					
							    					$('#testtubeASolnImg').animate({backgroundColor:'#CCC',opacity:0.3}); 
 									    		}else{//Secondary amines,Primary amines	
									    			$('#testtubeASolnImg').animate({backgroundColor:'#CCC',opacity:1}); 									    	
									    		}
												inferenceMsg=aminesInference2[aminesVal];
												$('#inference').css({display:'block'}); // Inference
											break;
											case testNames[2][1]://Tollen test(Silver mirror test)
												$('#nextBtnDiv').css({display:'block'});
											break;
										}
									}	
								})												
							})
						})	
						$('#'+droppersolnId).delay(100).animate({top:'110px',height:'0px',width:'0px',left:'8px'});	
					}else{
						$('#'+dropperId).css({top: defaultTopPos+'px',left:defaultLeftPos+'px'});
						$('#'+dropperId).css({zIndex:0});
					}
				}	
	 		})	
		}
		//-------Function to drag testtube for ice bath--------------- 
		function dragForIceBath(dragObj,dragImg,testtubeTopChange,testtubeLeftChange,testtubeTop,testtubeLeft,minTop,maxTop,minLeft,maxLeft){
			$('#'+dragObj).draggable({
				start:function(event, ui) {
					$('#inference').css({display:'none'}); // Inference	
					$('#'+dragObj).css({zIndex:3});
					$('#'+dragImg).css({zIndex:3});  
				},
				drag:function(event, ui) {
					$('#'+dragImg).css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
				},
				stop:function(event, ui){
					$('#'+dragImg).css({zIndex:0});
					if(this.offsetTop>=minTop && this.offsetTop<=maxTop && this.offsetLeft>=minLeft &&this.offsetLeft<=maxLeft){
						$('#'+dragObj).css({cursor:'default',top:testtubeTopChange+'px',left:testtubeLeftChange+'px'});
						$('#'+dragObj).draggable({disabled:true});
						iceBathcount++;
						if(testNames[groupVal][testVal]=="azoDyeTest"){//Azo Dye test
							if(iceBathcount==3){
								$('#clockDiv').css({display:'block',left:'300px'});
								clockInt = setInterval(needleRotate,20);
							}else if(iceBathcount==6){
								solutionDiv='testtubeASoln';
		   						solutionImg='testtubeASolnImg';
								dragTesttubeToDropSoln('testtubeBDrag','testtubeB','testtubeBSoln','solnApourImg',-100,170,77,200,5,156,100,162,-90);
							}
						}else if(testNames[groupVal][testVal]=="nitrousAcidTest"){//Nitrous acid test
							if(iceBathcount==2){
								$('#clockDiv').css({display:'block',left:'300px'});
								clockInt = setInterval(needleRotate,20);
							}else if(iceBathcount==4){
								solutionDiv='testtubeBSoln';
		   						solutionImg='testtubeBSolnImg';
		   						pourFlag=true;
								dragTesttubeToDropSoln('testtubeBDrag','testtubeB','testtubeBSoln','solnApourImg',-100,170,77,200,5,156,100,164,-90);
							}
						}
						
					}else{
						$('#'+dragObj).css({top:testtubeTop+'px',left:testtubeLeft+'px'});
					}
					$('#'+dragImg).css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
				}
			})
		}
		//----Function to drag testtube to pour solution to another solution---------
		function dragTesttubeToDropSoln(testtubedragid,testtubeimgid,testtubesoln,solnPour,minTop,maxTop,minLeft,maxLeft,tubetop,tubeleft,tubeoriginaltop,tubeoriginalleft,degRotate){
			$('#'+testtubedragid).draggable({disabled:false});		
			$('#'+testtubedragid).css('cursor','pointer');
			$('#'+testtubedragid).draggable({
				start:function(event, ui) {
					$('#'+testtubeimgid).css({zIndex:2});				
				},
				drag:function(event, ui) {
					$('#'+testtubeimgid).css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
				},
				stop : function(event, ui) {					
					if(this.offsetTop>=minTop &&this.offsetTop<=maxTop && this.offsetLeft>=minLeft &&this.offsetLeft<=maxLeft){
						$('#'+testtubedragid).css('cursor','default');
						$('#'+testtubedragid).css({top:tubetop+'px',left:tubeleft+'px'});
						$('#'+testtubeimgid).rotate(degRotate);						
						$('#'+testtubesoln).css({display:'none'});	
						$('#'+testtubedragid).draggable({ disabled: true });
						$('#'+testtubedragid).css({cursor:'default'});	
						$('#'+testtubesoln).stop(true);				
						$('#'+testtubesoln).animate({opacity:0},function(){
							$('#'+solnPour).css({display:'block'});
							increaseTesttubeSoln(solutionDiv,solutionImg);//increasing solution				   
							$('#'+solnPour).animate({opacity:0.3},function(){
						     	$('#'+testtubeimgid).rotate(0);						     						    
						    	$('#'+testtubeimgid).css({zIndex:0});	
						    	$('#'+testtubedragid).animate({top:tubeoriginaltop+'px',left:tubeoriginalleft+'px'});
						    	$('#'+testtubeimgid).animate({top:tubeoriginaltop+'px',left:tubeoriginalleft+'px'},function(){
						    		if(testNames[groupVal][testVal]=="nitrousAcidTest"){//Nitrous acid test
						    			if(aminesVal==0){//Primary amines
						    				$('#bubbles').css({display:'block',top: '126px',left:'0px'});
						    			}else if(aminesVal==1){//Secondary amines
						    				$('#yellowOilLayer').css({display:'block'});
						    			}						    			
						    		}
						    	});
						     	$('#'+solnPour).css({display:'none'});						     
						     	if(pourFlag==false){
						     		pourFlag=true;
						     		solutionDiv='testtubeCSoln';
		   							solutionImg='testtubeCSolnImg';
						     		dragTesttubeToDropSoln('testtubeADrag','testtubeA','testtubeASoln','solnCpourImg',-100,170,77,245,5,164,100,76,90);
						    	}else{
						    		if(testNames[groupVal][testVal]=="azoDyeTest"){//Azo dye test
						    			$('#testtubeCSolnImg').css({backgroundColor:'#c82004',opacity:1});
						    		}
						    		$('#inference').css({display:'block'});
						    		
						    	}
						     })				     
						 });
						$('#'+testtubeimgid).draggable({disabled:true});
					}else {//Reset test tube drag
						$('#'+testtubeimgid).css({zIndex:0});
						$('#'+testtubedragid).css({top:tubeoriginaltop+'px',left:tubeoriginalleft+'px'});	
					}
					$('#'+testtubeimgid).css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
				}
			})
		}
		//--------Function to click next button-----------
		$('#nextBtnDiv').click(function(){	
			nextClickFlag=true;	
			if(helpclickFlag==true){
	   			trip.stop(); 
	   		}
			$('#inference').css({display:'none'}); // Inference		
			if(testNames[groupVal][testVal]=="liebermannTest"){//Liebermann test
				$('#burnerhelpDiv,#burnerContainer').css({display:'none'});
				$('#watchGlassDiv,#labelBoard').css({display:'none'});
				commonTest();
			}else if(testNames[groupVal][testVal]=="azoDyeTest"){//Azo Dye test
				$('#bottle1,#dropper1,#bottle2,#dropper2').css({display:'none'});	
				$('#icebathTop,#icebathBottom,#labelBoard').css({display:'block'});
				$('#labelBoard').css({top:'266px',left:'387px'});
				$('#testtubeADrag').css({cursor:'pointer'});
				$('#testtubeBDrag').css({cursor:'pointer'});
				$('#testtubeCDrag').css({cursor:'pointer'});
				$('#testtubeADrag').draggable({disabled:false});
				$('#testtubeBDrag').draggable({disabled:false});
				$('#testtubeCDrag').draggable({disabled:false});
				dragForIceBath("testtubeADrag","testtubeA",88,407,100,76,-50,200,333,525);
				dragForIceBath("testtubeBDrag","testtubeB",88,451,100,162,-50,200,333,525);
				dragForIceBath("testtubeCDrag","testtubeC",88,493,100,243,-50,200,333,525);
			}else if(testNames[groupVal][testVal]=="nitrousAcidTest"){//Nitrous acid test
				$('#bottle1,#dropper1,#bottle2,#dropper2,#watchGlassDiv,#labelBoard').css({display:'none'});	
				$('#icebathTop,#icebathBottom,#labelBoard').css({display:'block'});
				$('#icebathTop,#icebathBottom').css({left:'334px'});
				$('#labelBoard').css({top:'266px',left:'387px'});
				$('#labelBoardText').html(iceBath);
				$('#stand1').css({left:'35px'});
				$('#testtubeADrag,#testtubeA').css({left:'78px'});
				$('#testtubeBDrag,#testtubeB').css({left:'165px'});
				$('#labelDiv').css({left:'33px'});
				$('#testtubeADrag').draggable({disabled:false});
				$('#testtubeBDrag').draggable({disabled:false});
				$('#testtubeADrag').css({cursor:'pointer'});
				$('#testtubeBDrag').css({cursor:'pointer'});
				dragForIceBath("testtubeADrag","testtubeA",88,407,100,78,-50,200,333,525);
				dragForIceBath("testtubeBDrag","testtubeB",88,451,100,164,-50,200,333,525);
			}
			else if(testNames[groupVal][testVal]=="sodiumMetalTest"){//Sodium metal test				
				$('#stand3,#sodiumBottleDiv,#filterPaperStill,#filterPaperDrag,#forceps,#beakerSmallDiv').css({display:'block'});
				$('#stand1').css({display:'none'});
				$('#sodiumbottleName').html(sodiumMetal);
				$('#stand3').css({left:'41px'});
				$('#beakerSmallDiv').css({left:'329px'});
				$('#testtubeB,#testtubeBDrag').css({left:'93px'});
				$('#labelDiv').css({left:'47px'});
				$('#testtubeA,#testtubeADrag,#funnel').css({display:'none'});
				$('#watchGlassDiv,#labelBoard,#beakerSmallSolnDiv').css({display:'none'});				
				$('#forceps').css({cursor:'pointer'});	
				$('#forceps').draggable({
					start:function(event, ui) {
						$('#forceps').css({zIndex:2});
						if(sodiumtakeFlag1==false){
							$('#sodiumBottleTop').animate({top:'-51px',left:'120px'});	
						}			
					},
					stop:function(event, ui) {
						$('#forceps').css({zIndex:0});
						if(sodiumtakeFlag1==false){
							if(this.offsetTop>=30 && this.offsetTop<=220 && this.offsetLeft>=380 &&this.offsetLeft<=525){
								$('#forceps').css({top:'103px',left:'459px'});
								$('#forceps').attr('src',simPath+'images/forcepWithSodium.png');
								sodiumtakeFlag1=true;
							}else{
								$('#forceps').css({top:'158px',left:'326px'});
							}
						}else{
							if(sodiumtakeFlag2==false){
								if(this.offsetTop>=40 && this.offsetTop<=285 && this.offsetLeft>=150 &&this.offsetLeft<=294){
									$('#forceps').css({zIndex:2});
									$('#forceps').css({top:'156px',left:'223px'});
									$('#forceps').draggable({disabled:true});
									$('#forceps').css({cursor:'default'});
									if(filterPaperFlag==false){									
										$('#forceps').attr('src',simPath+'images/forceps.png');
										$('#sodium').css({display:'block'});
										$('#sodiumBottleTop').animate({top:'-5px',left:'12px'});
										$('#forceps').animate({top:'158px',left:'326px',zIndex:0});										
										$('#filterPaperDrag').draggable({disabled:false});
										$('#filterPaperDrag').css({cursor:'pointer'});
										$('#filterPaperDrag').draggable({
											start:function(event, ui) {
												$('#filterPaperDrag').css({zIndex:2});
											},
											stop:function(event, ui) {
												if(this.offsetTop>=235 && this.offsetTop<=275 && this.offsetLeft>=90 &&this.offsetLeft<=294){
													$('#filterPaperDrag').css({top:'254px',left:'193px'});
													$('#spot,#spotStill').css({display:'block'});
													$('#filterPaperDrag').animate({top:'226px',left:'203px'},function(){
														$('#forceps').css({cursor:'pointer'});
														$('#forceps').draggable({disabled:false});												
														$('#filterPaperDrag').draggable({disabled:true});
														$('#filterPaperDrag').css({cursor:'default'});
														$('#filterPaperDrag').css({zIndex:0});		
														filterPaperFlag=true;							
													});
												}else{													
													$('#filterPaperDrag').css({zIndex:0});
													$('#filterPaperDrag').css({top:'226px',left:'203px'});
												}
											}
											
										})
									}else{	
										$('#forceps').css({cursor:'pointer'});
										$('#forceps').draggable({disabled:false});
										$('#sodium').css({display:'none'});								
										$('#forceps').attr('src',simPath+'images/forcepWithSodium.png');		
										sodiumtakeFlag2=true;										
									}
								}else{
									$('#forceps').css({zIndex:0});	
									if(filterPaperFlag==false){
										$('#forceps').css({top:'103px',left:'459px'});
									}else{
										$('#forceps').css({top:'158px',left:'326px'});
									}
								}
							}else{	
								if(this.offsetTop>=-50 && this.offsetTop<=210 && this.offsetLeft>=18 &&this.offsetLeft<=160){
									$('#forceps').draggable({disabled:true});
									$('#forceps').css({cursor:'default'});  
									$('#forceps').attr('src',simPath+'images/forceps.png');
									$('#forceps').css({top:'-23px',left:'78px'});
									$('#sodium').css({display:'block',top:'102px',left:'102px'});
									$('#sodium').animate({top:'245px'},function(){
										$('#testtubeA,#bubbles').css({display:'block'});
										$('#testtubeA').css({left:'95px'});
										inferenceMsg=sodiumMetalTestInference;
										$('#inference').css({display:'block'});
										$('#testtubeASoln,#testtubeAImg,#testtubeALabel').css({display:'none'});
										$('#forceps').animate({top:'158px',left:'326px'});
									});
								}else{
									$('#forceps').css({zIndex:2});
									$('#forceps').css({top:'156px',left:'223px'});
								}
								
							}

						}
					}
				});	
			}else if(testNames[groupVal][testVal]=="acetylChlorideTest"){//Acetyl chloride test
				nextClickFlag=true;				
				$('#stand3,#dropper1,#bottle1,#nh3bottle,#cork,#glassRod').css({display:'block'});
				$('#cork').css({top:'142px',left:'467px'});
				$('#bottle1').css({left:'239px'});
	    		$('#dropper1').css({left:'259px'});
	    		$('#bottle1SolnName').html(acetylChloride);
	    		$('#nh3bottleSolnName').html(ammoniumHydroxide);
				$('#stand1').css({display:'none'});
				$('#stand3').css({left:'41px'});
				$('#testtubeB,#testtubeBDrag').css({left:'93px'});
				$('#labelDiv').css({left:'47px'});
				$('#testtubeA,#testtubeADrag,#funnel').css({display:'none'});
				solutionDiv='testtubeBSoln';
		   		solutionImg='testtubeBSolnImg';
		   		testtubeDrag='testtubeBDrag';
		   		testtubeImg='testtubeB';
		   		testtubeImgTop=100;
		   		testtubeImgLeft=93;
				colorChange('#CCC',acetylChlorideTestInference,0.4);
				$('#watchGlassDiv,#labelBoard').css({display:'none'});
				$('.drop').css({'border-bottom': '10px solid #CCC'});
				$('#dropperSoln1').attr('src',simPath+'images/dropperSoln.png');
				$('.bottleSolnStyle').css({backgroundColor:'#CCC',opacity:'0.6'});
				//Dropper drag 
		   		$('#dropper1').draggable({ disabled: false });
				$('#dropper1').css({cursor:'pointer'});
	   			dragDropper('dropper1','dropperSoln1',-18,99,98,259,-100,130,28,156,104,124,107);
			}else if(testNames[groupVal][testVal]=="hinsbergTest"){//Hinsberg test 
				$('#bottle3,#dropper3,#bottle2,#dropper2').css({display:'none'});
				$('#bottle1SolnName').html(concHcl);
				$('#beakerSmallDiv').css({display:'block',left:'290px'});
				$('#bottle1').css({left:'455px'});
	    		$('#dropper1').css({left:'475px'});
	    		$('#beakerSmallSolnDiv').css({top: '15px',height: '65px'});
	    		$('#beakerSmallSoln').css({height: '64px'});
	    		$('#testtubeADrag').draggable({ disabled: false });
				$('#testtubeADrag').css({cursor:'pointer'});
	    		dragToCool();
			}else{
				$('#hot_machine').css({display:'block'});
				smellInference=alcoholicEsterInference1;
				switch (testNames[groupVal][testVal]){
					case testNames[0][1]://Ester Test - Alcoholic group				
						$('#labelDiv').css({left:'50px'});
						$('#hot_machine').css({left:'230px'});	
						$('#beakerSmallDiv,#labelBoard').css({display:'block'});
						$('#stand3').css({left:'47px'});
						$('#testtubeA,#testtubeADrag').css({left:'100px'});
						minTopVal=-123;
						maxTopVal=100;
						minLeftVal=200;
						maxLeftVal=400;
						topVal=16;
						leftVal=299;
						defaulttopVal=100;
						defaultleftVal=98;
						bubblesBeakerLeft=264;
						$('#hotMachineHelpDiv').css({left:'320px'}); 
					break;
					case testNames[0][4]:	//Iodoform test
						$('#stand3').css({left:'77px'});
						$('#testtubeA,#testtubeADrag').css({left:'130px'});
						$('#labelDiv').css({left:'82px'});
						$('#hot_machine').css({left:'320px'});	
						minTopVal=-123;
						maxTopVal=100;
						minLeftVal=300;
						maxLeftVal=500;
						topVal=16;
						leftVal=385;
						defaulttopVal=100;
						defaultleftVal=130;
						bubblesBeakerLeft=358;					
					break;
					case testNames[2][2]://Fehling’s test
						$('#stand3').css({left:'77px'});
						$('#testtubeA,#testtubeADrag').css({left:'130px'});
						$('#labelDiv').css({left:'82px'});
						$('#hot_machine').css({left:'320px'});
						minTopVal=-123;
						maxTopVal=100;
						minLeftVal=300;
						maxLeftVal=500;
						topVal=16;
						leftVal=385;
						defaulttopVal=100;
						defaultleftVal=130;
						bubblesBeakerLeft=358;	
					break;
					case testNames[4][2]://Ester Test - Carboxilic group
						$('#labelDiv').css({left:'50px'});
						$('#hot_machine').css({left:'230px'});
						$('#beakerSmallDiv,#labelBoard').css({display:'block'});
						$('#stand3').css({left:'47px'});
						$('#testtubeA,#testtubeADrag').css({left:'100px'});
						$('#hotMachineHelpDiv').css({left:'320px'}); 	
					break;
					case testNames[1][3]://Phthalein Dye test
						minTopVal=-123;
						maxTopVal=100;
						minLeftVal=200;
						maxLeftVal=400;
						topVal=16;
						leftVal=299;
						defaulttopVal=100;
						defaultleftVal=98;
						bubblesBeakerLeft=264;
						$('#labelBoardText').html(sodiumHydroxide);
						$('#hot_machine').css({left:'230px'});	
						$('#watchGlassDiv').css({display:'none'});
						$('#beakerSmallDiv').css({display:'block'});
						$('#hotMachineHelpDiv').css({left:'320px'}); 
						smellInference=phthalicAnhydrideTestInference1;
					break;
					case testNames[2][1]:	//Tollen test(Silver mirror test)
						$('#stand3').css({left:'77px'});
						$('#testtubeA,#testtubeADrag').css({left:'130px'});
						$('#labelDiv').css({left:'82px'});
						$('#hot_machine').css({left:'320px'});
						$('#bottle3,#dropper3,#bottle4,#dropper4').css({display:'none'});	
						minTopVal=-123;
						maxTopVal=100;
						minLeftVal=300;
						maxLeftVal=500;
						topVal=16;
						leftVal=385;
						defaulttopVal=100;
						defaultleftVal=130;
						bubblesBeakerLeft=358;					
					break;
				}
				$('#labelBoard').css({top:'267px',left:'425px'});
				$('#bottle1,#bottle2,#dropper1,#dropper2').css({display:'none'});
				$('#testtubeADrag').draggable({ disabled: false });
				$('#testtubeADrag').css({cursor:'pointer'});
				smellSolnDiv="beakerSmallSolnDiv";				
				inferencePosition='w';
				smelltrip = new Trip([
				{
					sel : $('#'+smellSolnDiv),
					position : inferencePosition,
					content : smellInference,
					expose : false,
					delay : 4000
				}
				])	
				testtubeADragFn();
			}
			$('#nextBtnDiv').css({display:'none'});
		})
		//--------Function to drag testtube to cool----------- 
		function dragToCool(){
			$('#testtubeADrag').draggable({
				start:function(event, ui) {
					$('#testtubeADrag,#testtubeA').css({zIndex:2});				
				},
				drag:function(event, ui) {
					$('#testtubeA').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
				},
				stop : function(event, ui) {
					if(this.offsetTop>=0 && this.offsetTop<=230 && this.offsetLeft>=230 &&this.offsetLeft<=370){
						$('#testtubeADrag').css({top:'118px',left:'307px'});
						$('#clockDiv').css({display:'block'});
						clockInt = setInterval(needleRotate,20);
						$('#testtubeADrag').css('cursor','default');
						$('#testtubeADrag').draggable({disabled:true});

					}else{
						$('#testtubeADrag').css({top:'100px',left:'96px'});
						$('#testtubeADrag,#testtubeA').css({zIndex:0});
					}
					$('#testtubeA').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});	
				}
			})

		}
		//--------Function to drag testtube back to stand----------- 
		function testtubeBackToStand(){
			$('#testtubeADrag').draggable({
				start:function(event, ui) {
					$('#testtubeADrag,#testtubeA').css({zIndex:2});				
				},
				drag:function(event, ui) {
					$('#testtubeA').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
				},
				stop : function(event, ui) {
					if(this.offsetTop>=0 && this.offsetTop<=170 && this.offsetLeft>=5 &&this.offsetLeft<=170){
						$('#testtubeADrag').css({top:'100px',left:'96px'});						
						$('#testtubeADrag').css('cursor','default');
						$('#testtubeADrag,#testtubeA').css({zIndex:0});
						$('#testtubeADrag').draggable({disabled:true});
						$('#dropper1').draggable({ disabled: false });
						$('#dropper1').css({cursor:'pointer'});
					   	dragDropper('dropper1','dropperSoln1',-18,101,98,475,-100,130,40,165,104,124,106);
					}else{
						$('#testtubeADrag').css({top:'118px',left:'307px'});
						$('#testtubeADrag,#testtubeA').css({zIndex:0});
					}
					$('#testtubeA').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});	
				}
			})
		}
		//----------Function to drag testtube ------------ 
		function testtubeADragFn(){
			$('#testtubeADrag').draggable({
				start:function(event, ui) {
					$('#testtubeADrag,#testtubeA').css({zIndex:2});				
				},
				drag:function(event, ui) {
					$('#testtubeA').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
				},
				stop : function(event, ui) {
					if(heatFlag==false){ // Before heating
						if(this.offsetTop>=minTopVal && this.offsetTop<=maxTopVal && this.offsetLeft>=minLeftVal &&this.offsetLeft<=maxLeftVal){
							$('#testtubeADrag').css('cursor','default');
							$('#testtubeADrag').css({top:topVal+'px',left:leftVal+'px'});
							$('#testtubeADrag').draggable({disabled:true});
							$('#testtubeADrag,#testtubeA').css({zIndex:0});	
							if(coolFlag==false){
								$('#switchOff').css('cursor','pointer');
								$( "#switchOff" ).bind( "click", function() {
									$( "#switchOff" ).unbind( "click");								
									$('#switchOff,#lightOff').css({display:'none'});
									$('#switchOn,#lightOn,#clockDiv').css({display:'block'});
									clockInt = setInterval(needleRotate,20);
									setTimeout(function(){$('#bubblesBeaker').css({display:'block',left:bubblesBeakerLeft+'px'});	},70);
								})	
							}else{
								$('#clockDiv').css({display:'block'});
								clockInt = setInterval(needleRotate,20);
								
							}
						}else{
							$('#testtubeADrag').css({top:defaulttopVal+'px',left:defaultleftVal+'px'});
							$('#testtubeADrag,#testtubeA').css({zIndex:0});	
						}
					}else{
						if(this.offsetTop>=mainTop+0 && this.offsetTop<=mainTop+205 && this.offsetLeft>=mainLeft+390 &&this.offsetLeft<=mainLeft+550){
							$('#testtubeADrag').css('cursor','default');
							$('#testtubeADrag,#testtubeA').css({top:'100px',left:'550px'});
							$('#testtubeA').rotate(-90);
							$('#testtubePowder').css({display:'none'});
							$('#solutionPour').css({display:'block'});
							$('#solutionPour').css({borderTop:'60px solid #CCC'});
							$('#beakerSmallSolnDiv').animate({top:'41px',height:'40px'});				
							$('#beakerSmallSoln').animate({height:'39px'});
							$('#testtubeASoln').animate({opacity:0},1000,function(){
								$('#testtubeA').rotate(0);
								$('#solutionPour').css({display:'none'});
								$('#testtubeADrag,#testtubeA').css({zIndex:0});	
								$('#inference').css({display:'block'});
								if(groupVal!=1)
								$('#labelBoardText').html(sodiumHydroxide);
								smelltripFlag=true;
								smelltrip.start(); 
								window.smelltrip = smelltrip;	
								setTimeout(function(){$('#testtubeADrag,#testtubeA').animate({top:'100px',left:'98px'},500)},70);
							});	
							$('#testtubeADrag').draggable({disabled:true});
							$('#testtubeADrag,#testtubeA').css({zIndex:0});	
							if(coolFlag==true){
								$('#beakerSmallSoln').animate({backgroundColor: '#F660AB'})
							}
						}else{
							if(coolFlag==true){
								$('#testtubeADrag').css({top:'100px',left:'98px'});
							}else{
								$('#testtubeADrag').css({top:'16px',left:'299px'});
							}
							$('#testtubeADrag,#testtubeA').css({zIndex:0});	
						}
					}
					$('#testtubeA').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
				}
			})
		}	
		//-----Function for rotating needle of clock------------
		function needleRotate(){
			degree=degree+2;			//Clock needle rotate 
			$("#needle").css({"transform-origin":'4px 30px',"transform":'rotate(' + degree + 'deg)',"-webkit-transform-origin":'4px 30px',' -webkit-transform':'rotate(' + degree + 'deg)','-moz-transform-origin':'4px 30px',' -moz-transform':'rotate(' + degree + 'deg)'});
			if(degree>=290){
				switch (testNames[groupVal][testVal]){
					case testNames[1][3]://Phthalein Dye test:	
						if(coolFlag==false){
							$('#testtubePowder').animate({top: '146px',  left:'7px',  width: '17px', height: '12px', opacity:'0.7'});																								
						}
					break;
					case testNames[2][1]://	Tollen test(Silver mirror test)
						$('#silverMirror').css({display:'block'});	
					break;				
				}
			}
			if(degree>360){
				clearInterval(clockInt);
				degree=0;
				$('#clockDiv,#switchOn,#lightOn,#bubblesBeaker').css({display:'none'});
				$('#switchOff').css('cursor','default');
				$('#switchOff,#lightOff').css({display:'block'});
				switch (testNames[groupVal][testVal]){
					case testNames[0][1]:///Ester Test - Alcoholic group 	
						heatFlag=true;
						testtubeADragFn();
						$('#testtubeADrag').draggable({ disabled: false });
						$('#testtubeADrag').css({cursor:'pointer'});
					break;	
					case testNames[0][4]://Iodoform test						
						$('#testtubeASolnImg').animate({backgroundColor:'#FFD700',opacity:1},function(){
							$('#testtubeADrag,#testtubeA').animate({top:defaulttopVal+'px',left:defaultleftVal+'px'});
							$('#testtubeADrag,#testtubeA').css({zIndex:0});
							$('#inference').css({display:'block'});																			
						});
					break;
					case testNames[2][2]:	//Fehling's  test						
						$('#testtubeASolnImg').animate({backgroundColor:'#c33e12',opacity:1},function(){
							$('#testtubeADrag,#testtubeA').animate({top:defaulttopVal+'px',left:defaultleftVal+'px'});
							$('#testtubeADrag,#testtubeA').css({zIndex:0});
						});
	  					$('#inference').css({display:'block'});	
					break;
					case testNames[1][2]://Liebermann's test
						clockIntCnt++;						
						if(clockIntCnt<2){						
							$("#testtubeA").css({zIndex:0});
							$("#testtubeA").animate({top:'100px',left:'171px'},function(){
								$('#burnerFlame,#burnerOn').hide();			
								$('#burnerOff').show();
								$('#burnerhelpDiv').css({zIndex:5});	
								heatFlag=true;							
								$('#clockDiv').css({display:'block'});
								clockInt = setInterval(needleRotate,20);
							});
							$("#testtubeADrag").css({top:'100px',left:'171px'});
						}else{
							testtubeImgLeft=171;
							//Dropper drag 
						   	$('#dropper1').draggable({ disabled: false });
							$('#dropper1').css({cursor:'pointer'});
					   		dragDropper('dropper1','dropperSoln1',-18,176,98,500,-50,130,120,235,104,124,182);
						}							
					break;
					case testNames[1][3]://Phthalein Dye test:	
						if(coolFlag==false){
							minTopVal=-30;
							maxTopVal=150;
							minLeftVal=0;
							maxLeftVal=190;
							topVal=100;
							leftVal=98;
							defaulttopVal=16;
							defaultleftVal=299;
							coolFlag=true;
							testtubeADragFn();
																			
						}else{
							heatFlag=true;
							testtubeADragFn();							
						}
						$('#testtubeADrag').draggable({ disabled: false });
						$('#testtubeADrag').css({cursor:'pointer'});
					break;					
					case testNames[2][1]://	Tollen test(Silver mirror test)
						inferenceMsg=tollenTestInference2;
						$('#testtubeADrag,#testtubeA').animate({top:defaulttopVal+'px',left:defaultleftVal+'px'});
						$('#testtubeADrag,#testtubeA').css({zIndex:0});
						$('#inference,#silverMirror').css({display:'block'});	
					break;
					case testNames[5][3]://	Azo dye test
						$('#testtubeADrag').draggable({disabled:false});
						$('#testtubeBDrag').draggable({disabled:false});
						$('#testtubeCDrag').draggable({disabled:false});
						$('#testtubeADrag').css({cursor:'pointer'});
						$('#testtubeBDrag').css({cursor:'pointer'});
						$('#testtubeCDrag').css({cursor:'pointer'});
						dragForIceBath("testtubeADrag","testtubeA",100,76,88,407,-50,250,0,300);
						dragForIceBath("testtubeBDrag","testtubeB",100,162,88,451,-50,250,0,300);
						dragForIceBath("testtubeCDrag","testtubeC",100,243,88,493,-50,250,0,300);
					break;
					case testNames[5][4]://Nitrous acid test
						$('#testtubeADrag').draggable({disabled:false});
						$('#testtubeBDrag').draggable({disabled:false});
						$('#testtubeADrag').css({cursor:'pointer'});
						$('#testtubeBDrag').css({cursor:'pointer'});
						dragForIceBath("testtubeADrag","testtubeA",100,78,88,407,-50,250,0,300);
						dragForIceBath("testtubeBDrag","testtubeB",100,164,88,451,-50,250,0,300);
					break;
					case testNames[5][5]://Hinsberg test
						$('#testtubeADrag').draggable({ disabled: false });
						$('#testtubeADrag').css({cursor:'pointer'}); 
						//inferenceMsg=aminesInference;
						//$('#inference').css({display:'block'}); // Inference
						if(aminesVal!=0 ){//tertiary amines							    					
	    					$('#testtubeASolnImg').animate({backgroundColor:'#CCC',opacity:1});  									    	
			    		}												
						testtubeBackToStand();
					break;
				}	
				
			}	
		}
		//-------Function to drag cork-------
		$('#cork').draggable({
			start:function(event, ui){
				$('#cork').css({zIndex:1});
			},			
			stop:function(event, ui){
				if(this.offsetTop>=0 && this.offsetTop<=225 && this.offsetLeft>=50 &&this.offsetLeft<=250){
					corkFlag=true;	
					$('#cork').css({display:'none'});
					$('#corkOntesttube').css({display:'block'});
					$('#'+testtubeDrag).css('cursor','pointer');
					dragTesttubeFn(testtubeDrag,testtubeImg,testtubeImgTop,testtubeImgLeft,20,325);		   									
				}else{
					$('#cork').css({top: '253px',left:'291px'});
					$('#cork').css({zIndex:0});
				}
			}	
	 	})
	 	//-------Function to increase solution-------
		function increaseTesttubeSoln(solutionDiv,solutionImg){
			$('#'+solutionDiv).stop(true);
			$('#'+solutionImg).stop(true);
			var solnDivTop=$('#'+solutionDiv).position().top;
			var solnHeight=$('#'+solutionDiv).height();
			var solnTop=$('#'+solutionImg).position().top;						
			$('#'+solutionDiv).animate({top:solnDivTop-8+'px',height:solnHeight+7+'px'});				
			$('#'+solutionImg).animate({top:solnTop+8+'px'});
		}
		//-------Function to increase solution-------
		function increaseTesttubeSample(solutionDiv,solutionImg){
			var solnDivTop=$('#'+solutionDiv).position().top;
			var solnHeight=$('#'+solutionDiv).height();
			var solnTop=$('#'+solutionImg).position().top;						
			$('#'+solutionDiv).animate({top:solnDivTop-4+'px',height:solnHeight+3+'px'});				
			$('#'+solutionImg).animate({top:solnTop+4+'px'});
		}
		//-------Function to drag test tube-------
		function dragTesttubeFn(dragId,testubeid,testubetop,testubeleft,testubeRotateTop,testubeRotateLeft){	
			$('#'+dragId).draggable({disabled:false});		
			$('#'+dragId).css('cursor','pointer');
			$('#'+dragId).draggable({
				start:function(event, ui) {
					$('#'+testubeid).css({zIndex:2});				
				},
				drag:function(event, ui) {
					$('#'+testubeid).css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
				},
				stop : function(event, ui) {					
					if(this.offsetTop>=-100 &&this.offsetTop<=160 && this.offsetLeft>=0 &&this.offsetLeft<=400){
						$('#'+dragId).css('cursor','default');
						$('#'+dragId).css({top:testubeRotateTop+'px',left:testubeRotateLeft+'px'});
						$('#'+dragId).draggable({disabled:true});	
						dragTesttubeCount++;					
						//Testube drag disable for the time of shake 
						switch (testNames[groupVal][testVal]){
							case testNames[0][5]://Lucas Test 
								testtubeInt = setInterval( function() { testtubeShakeLucasTest(dragId,testubeid,testubetop,testubeleft); }, 20 );
								if(testubeid=='testtubeB'){
									$('#timeLabel').html(gt.gettext("5 Min"));
									$('#clockDiv,#timeLabel').css({display:'block'});
	   							}
							break;
							case testNames[1][2]://Liebermann's test
								if(heatFlag==false){
									$('#clockDiv').css({display:'block'});
								}
								testtubeInt = setInterval( function() { testtubeShake(dragId,testubeid,testubetop,testubeleft); }, 20 );
								
							break;
							case testNames[5][2]://Carbylamines test 								
								$('#clockDiv').css({display:'block'});								
								testtubeInt = setInterval( function() { testtubeShake(dragId,testubeid,testubetop,testubeleft); }, 20 ); 							
							break;
							default:
								testtubeInt = setInterval( function() { testtubeShake(dragId,testubeid,testubetop,testubeleft); }, 20 );
						}
							
					}else {//Reset test tube drag
						$('#'+testubeid).css({zIndex:0});
						$('#'+dragId).css({top:testubetop+'px',left:testubeleft+'px'});	
					}
					$('#'+testubeid).css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
				}
			})
		}
		//------- Function to rotate test tube ------- 
		function testtubeShake(dragId,testubeid,testubetop,testubeleft){
			degreeRotate=rotateValue(10);			
			switch (testNames[groupVal][testVal]){
				case testNames[1][2]://Liebermann's tes
					if(heatFlag==false){
						needleRotate();
					}
					count=count+1.3;
				break;
				case testNames[5][2]://Carbylamines test 					
					needleRotate();					
					count=count+1.3;
				break;
				default:
				count++;
			}
			//Shake the test tube
			$("#"+testubeid).rotate(degreeRotate);			
			if(count>=190){
				if(testubeid=='testtubeB'){					
					if(typeChangeVal==1){
						switch (testNames[groupVal][testVal]){					
							case testNames[5][4]://Nitrous acid test
								if(nextClickFlag==false){
									$('#testtubeBPowder').animate({opacity:0});
									$('#'+solutionImg).css({backgroundColor:'#CCC',opacity:0.3});
								}
							break;
						}
					}else{
						switch (unsaturationtestNames[unsaturationtestVal]){
							case unsaturationtestNames[0]://Bromine Water Test 
								colorChange('#CCC',bromineTestInference2,0.7);
							break;
							case unsaturationtestNames[1]://Baeyer Test
								colorChange('#CCC',baeyerTestInference2,0.7);
							break;					
						}
					}					
					$('#'+solutionImg).animate({backgroundColor:changeSolnColor});					
				}else if(testubeid=='testtubeC'){
					if(typeChangeVal==1){
						switch (testNames[groupVal][testVal]){
							case testNames[5][3]://Azo dye test
								$('#'+solutionImg).css({backgroundColor:'#bba7a6',opacity:1});
								$('#testtubeCPowder').animate({opacity:0});						
							break;
						}
					}
				}else {
					if(typeChangeVal==1){
						switch (testNames[groupVal][testVal]){
							case testNames[3][2]://m- Dinitrobenzene test
								$('#testtubePowder').animate({opacity:0});
								colorChange('#c89e6c',mDinitrobenzeneInference,0.3);
								$('#'+solutionImg).animate({backgroundColor:changeSolnColor});
							break;
							case testNames[3][3]://Sodium nitroprusside test							
								colorChange('#b2240e',sodiumNitroprussideInference,1);
							break;
							case testNames[0][0]://Sodium metal test
								$('#testtubePowder').animate({opacity:0});
								$('#'+solutionImg).css({backgroundColor:'#CCC',opacity:1});							
							break;
							case testNames[0][3]://Acetyl chloride test
								if(nextClickFlag==false){
									$('#testtubePowder').animate({opacity:0});
									$('#'+solutionImg).animate({backgroundColor:'#CCC',opacity:1});
								}
							break;
							case testNames[1][2]://Liebermann's test
								if(heatFlag==false){
									$('#testtubePowder').animate({opacity:0});
								}
							break;
						}
					}
				}
			}	
			//after shaking
			if(count>=250){					
				clearInterval(testtubeInt);
				$("#"+testubeid).rotate(0);
				$("#"+testubeid).css({zIndex:0});
				$("#"+testubeid).animate({top:testubetop+'px',left:testubeleft+'px'});
				$("#"+dragId).css({top:testubetop+'px',left:testubeleft+'px'});
				count=0;										
				$('#inference').css({display:'block'}); // Inference
				testtubeImgTop=100;
				testtubeImgLeft=210;
				solutionDiv='testtubeBSoln';
		   		solutionImg='testtubeBSolnImg';
		   		testtubeDrag='testtubeBDrag';
		   		testtubeImg='testtubeB';
		   		if(typeChangeVal==1){
			   		switch (testNames[groupVal][testVal]){
						case testNames[3][3]://Sodium nitroprusside test
							solutionDiv='testtubeASoln';
							solutionImg='testtubeASolnImg';
							$('.drop').css({'border-bottom': '10px solid #CCC'});
							$('#dropper2').draggable({ disabled: false });
							$('#dropper2').css({cursor:'pointer'});				
						   	dragDropper('dropper2','dropperSoln2',-18,131,98,440,-100,130,100,245,104,124,136);
							$('#inference').css({display:'none'}); // Inference
						break;
						case testNames[1][2]://Liebermann's test
							if(heatFlag==false){
								solutionDiv='testtubeASoln';
								solutionImg='testtubeASolnImg';
								testtubeDrag='testtubeADrag';
				   				testtubeImg='testtubeA';
								$('#inference').css({display:'none'}); // Inference	
							}else{
								$('#nextBtnDiv').css({display:'block'});// Next Button
							}								
						break;
						case testNames[0][0]://Sodium metal test					
							$('#inference').css({display:'none'}); // Inference
							dragTesttubeToFilter()
						break;
						case testNames[0][3]://Acetyl chloride test	
							$('#inference').css({display:'none'}); // Inference					
							if(nextClickFlag==true){
								$('#glassRod').css({cursor:'pointer'});	
								$('#glassRod').draggable({ disabled: false });
								$('#glassRod').draggable({
									start:function(event, ui) {
										$('#glassRod').css({zIndex:2});				
									},
									stop:function(event, ui) {
										if(dipAmmoniaFlag==false){
											if(this.offsetTop>=0 && this.offsetTop<=237 && this.offsetLeft>=423 &&this.offsetLeft<=554){
												$('#glassRod').css({zIndex:0});	
												$('#glassRod').css({top:'14px',left:'481px'});
												$('#cork').animate({top:'94px',left:'566px'},function(){
													$('#glassRod').animate({top:'138px'},function(){
														dipAmmoniaFlag=true;
													});
												});
											}else{
												$('#glassRod').css({zIndex:0});	
												$('#glassRod').css({top:'226px',left:'376px'});
											}
										}else{
											if(this.offsetTop>=0 && this.offsetTop<=215 && this.offsetLeft>=30 &&this.offsetLeft<=170){
												$('#glassRod').rotate(-90);
												$('#glassRod').css({top:'58px',left:'134px'});
												$('#cork').animate({top:'142px',left:'467px'});
												$('#smokeDivstill').css({display:'block',opacity:0});
												$('#smokeDivstill').animate({height:'110px',top:'118px'},50,function(){
													$('#smokeDiv').css({display:'block',top:'-138px'});
													$("#smokeDiv").animate({opacity:1},1000);
													$('#inference').css({display:'block'}); // Inference
												})
											}else{
												$('#glassRod').css({zIndex:0});	
												$('#glassRod').css({top:'138px',left:'481px'});
											}
										}
										
									}
								});
							}else{
								dragTesttubeToFilter()
							}
						break;
						case testNames[5][5]://	Hinsberg test
							solutionDiv='testtubeASoln';
			   				solutionImg='testtubeASolnImg'; 				
							$('#inference').css({display:'none'}); // Inference	
							$('#nextBtnDiv').css({display:'block'});// Next Button					
						break;
						case testNames[2][4]://Sodium bisulphite test
							$('#crystImg').css({display:'block'});// crystal	
						break;
						case testNames[5][4]://Nitrous acid test
							$('#inference').css({display:'none'}); // Inference	
							if(testubeid=='testtubeA'){	
								dragTesttubeFn('testtubeBDrag','testtubeB',100,136,33,340);
							}else{
								$('#nextBtnDiv').css({display:'block'});// Next Button	
							}
						break;
						case testNames[5][3]://Azo dye test
							$('#inference').css({display:'none'}); // Inference	
							if(testubeid=='testtubeC'){									
								$('#nextBtnDiv').css({display:'block'});// Next Button
							}else{							
								solutionDiv='testtubeCSoln';
								solutionImg='testtubeCSolnImg';	
								testtubeDrag='testtubeCDrag';
					   			testtubeImg='testtubeC';										
								$('#dropper2').draggable({ disabled: false });
								$('#dropper2').css({cursor:'pointer'});
						   		dragDropper('dropper2','dropperSoln2',-18,248,98,482,-100,130,208,295,104,124,254);
								testtubeImgLeft=243;	
							}						
						break;
						case testNames[5][2]://	Carbylamines test
							clockIntCnt++;
							solutionDiv='testtubeASoln';
			   				solutionImg='testtubeASolnImg'; 
			   				testtubeDrag='testtubeADrag';
					   		testtubeImg='testtubeA';
					   		testtubeImgLeft=193;
							$('#inference').css({display:'none'}); // Inference	
							$('#burnerFlame,#burnerOn').hide();			
							$('#burnerOff').show();
							$('#burnerhelpDiv').css({zIndex:5});
							$("#testtubeA").css({zIndex:0});
							if(clockIntCnt<2){
								$('#dropper2').draggable({ disabled: false });
								$('#dropper2').css({cursor:'pointer'});
					   			dragDropper('dropper2','dropperSoln2',-18,196,98,407,-100,130,136,260,104,124,201);
					   		}else{
					   			setTimeout(function() {
								    smelltripFlag=true;
									smelltrip.start(); 
									window.smelltrip = smelltrip;	
					   				$('#inference').css({display:'block'}); // Inference
								}, 1000);
					   			
					   		}						
							$("#testtubeADrag").css({top:'100px',left:'193px'});
						break;
													
					}	
				}   					   		
		   		if(dragTesttubeCount==dragDropperCount){
			   		//Dropper drag 
			   		$('#dropper1').draggable({ disabled: false });
					$('#dropper1').css({cursor:'pointer'});
			   		dragDropper('dropper1','dropperSoln1',-18,213,98,435,-100,130,170,290,104,124,219);
			    }
			}
		}
		//function to drag testtube to filter the solution
		function dragTesttubeToFilter(){
			$('#testtubeADrag').draggable({disabled:false});		
			$('#testtubeADrag').css('cursor','pointer');
			$('#testtubeADrag').draggable({
				start:function(event, ui) {
					$('#testtubeA').css({zIndex:2});				
				},
				drag:function(event, ui) {
					$('#testtubeA').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
				},
				stop : function(event, ui) {					
					if(this.offsetTop>=-100 &&this.offsetTop<=160 && this.offsetLeft>=50 &&this.offsetLeft<=292){
						$('#testtubeADrag').css('cursor','default');
						$('#testtubeADrag').css({top:'-12px',left:'280px'});
						$('#testtubeA').rotate(-90);
						$('#testtubeASoln').css({display:'none'});						
						$('#testtubeASoln').animate({opacity:0},function(){
							 $('#testtubeBSolnImg').css({backgroundColor:'#CCC',opacity:0.3});
							 $('#testtubeBSoln,#solnpourImg').css({display:'block'});
						     $('#testtubeA').rotate(0);	
						     $('#solnpourImg').animate({opacity:0.3},function(){
						     	$('#testtubeA').css({zIndex:0});	
						     	$('#testtubeADrag,#testtubeA').animate({top:'100px',left:'103px'},function(){
						     		$('#funnel').animate({top:'18px'},function(){
						     			$('#funnel').animate({left:'92px'},function(){
											$('#funnel').animate({top:'84px'},function(){
												$('#nextBtnDiv').css({display:'block'});// Next Button
											});
										});
						     		});
						     	});
						     	$('#solnpourImg').css({display:'none'});						     
						     })
						});

						$('#testtubeADrag').draggable({disabled:true});
					}else {//Reset test tube drag
						$('#testtubeA').css({zIndex:0});
						$('#testtubeADrag').css({top:'100px',left:'103px'});	
					}
					$('#testtubeA').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
				}
			})
		}
		//---Function to shake testtube-----------
		function testtubeShakeLucasTest(dragId,testubeid,testubetop,testubeleft){
			if(testubeid=='testtubeB'){
				needleRotate();
			}
			degreeRotate=rotateValue(10);
			//Shake the test tube
			$("#"+testubeid).rotate(degreeRotate);
			count++;
			if(count>160){
				if(testubeid=='testtubeB'){					
					$('#testtubeBSolnImg').css({backgroundColor:'#CCC',opacity:1});
				}
			}
			
			//after shaking
			if(count==250){
				clearInterval(testtubeInt);
				$("#"+testubeid).rotate(0);
				$("#"+testubeid).css({zIndex:0});
				$("#"+testubeid).animate({top:testubetop+'px',left:testubeleft+'px'});
				$("#"+dragId).animate({top:testubetop+'px',left:testubeleft+'px'});
				count=0;
				$('#inference').css({display:'block'}); // Inference
				if(testubeid=='testtubeA'){							
					solutionDiv='testtubeBSoln';
		   			solutionImg='testtubeBSolnImg';
		   			testtubeDrag='testtubeBDrag';
		   			testtubeImg='testtubeB';	
					testtubeImgLeft=275;
					colorChange('#CCC',lucasTestInference1,0.3);
					//Dropper drag 
			   		$('#dropper1').draggable({ disabled: false });
					$('#dropper1').css({cursor:'pointer'});
		   			dragDropperLucasTest('dropper1','dropperSoln1',-18,280,98,490,-100,130,234,320,104,124,286);
				}else if(testubeid=='testtubeB'){
					solutionDiv='testtubeCSoln';
		   			solutionImg='testtubeCSolnImg';
		   			testtubeDrag='testtubeCDrag';
		   			testtubeImg='testtubeC';
					testtubeImgLeft=60;
					testtubeImgTop=-55;
					colorChange('#CCC',lucasTestInference2,0.3);
					inferenceMsg=lucasTestInference2;
					//Dropper drag 
			   		$('#dropper1').draggable({ disabled: false });
					$('#dropper1').css({cursor:'pointer'});
		   			dragDropperLucasTest('dropper1','dropperSoln1',-18,361,98,490,-100,130,320,413,104,124,367);
				}else{
					$('#inference').css({display:'none'}); // Inference
					$('#burnerhelpDiv').css({zIndex:0});
					$('#burnerOff').css({cursor:'pointer'});
					inferenceMsg=lucasTestInference3;					
					burnerOn();
					$('#dropper1').draggable({ disabled: true });
					$('#dropper1').css({cursor:'default'});
				}
			}										
		}
		//-------Function to turn on the burner-------
		function burnerOn(){
			$('#burnerOff').click(function(){									
				$('#burnerFlame,#burnerOn').show();
				$('#burnerhelpDiv').css({zIndex:5});
				$('#burnerOff').hide();
				flame= setInterval(flameFn,50);
				burnerFlag=true;
				switch (testNames[groupVal][testVal]){
					case testNames[0][5]://Lucas test
						setTimeout(function(){ 
							$('#burnerFlame,#burnerOn').hide();			
							$('#burnerOff').show();
							$('#testtubeCSolnImg').animate({backgroundColor:'#CCC',opacity:1});
							$('#inference').css({display:'block'}); // Inference	
							$('#testtubeCDrag,#testtubeC').animate({top:'100px',left:'357px'},500);
						}, 2000);
					break;
					case testNames[1][2]://Liebermann's testtest
						dragTesttubeFn(testtubeDrag,testtubeImg,testtubeImgTop,testtubeImgLeft,-56,47);		   									
					break;
					case testNames[5][2]://Carbylamines test
						dragTesttubeFn(testtubeDrag,testtubeImg,testtubeImgTop,testtubeImgLeft,-56,58);		   									
					break;
				}
				
			})
		}	
		//-------Show Flame on the burner	-------
		function flameFn(){
			flameCount++;
			$("#burnerFlame").attr('src',simPath+"images/flame"+flameCount+".png");
			if(flameCount==5){
				flameCount=0;
			}
		}	   
		//-------Function to set testube rotate value-------
		function rotateValue(limit){
			if(flag_rotate==true){
				if(rotateAmt>=-limit){
					rotateAmt--;
					if(rotateAmt==-limit){
						flag_rotate=false;
					}
				}
			}else{
				rotateAmt++;
				if(rotateAmt==limit){
					flag_rotate=true;
				}
			}
			return rotateAmt;
		}
		//-------Baeyer's test------- 
	    function baeyerTest(){
	    	$('#bottle1SolnName').css({top:'72px'});
	    	$('#labelDiv').css({left:'77px'});
	    	$('#bottle1').css({left:'416px'});
	    	$('#dropper1').css({left:'435px'});
	    	$('#testtubeA,#testtubeADrag').css({left:'123px'});
	    	$('#testtubeB,#testtubeBDrag').css({left:'210px'});
	    	$('.bottleSolnStyle').css({backgroundColor:'#CCC'});
	    	$('.drop').css({'border-bottom': '10px solid #DE1BB5'});
	    	$('#bottle1Img').attr('src',simPath+'images/brownBottle.png');
	    	$('#dropperSoln1').attr('src',simPath+'images/dropperSolnPink.png');
	    	$('#bottle1SolnName').html(kmno4Reagent);	   
	    	$('#labelText1').html(saturatedText);
	    	$('#labelText2').html(unsaturatedText);	    	
	    	$('#label2Div,#testtubeBDrag,#testtubeB,#stand1').css({display:'block'}); 
	    	colorChange('#DE1BB5',baeyerTestInference1,0.7);
	    	displayCommonTestMaterials();
	    	testtubeImgLeft=123;
	    	dragDropperCount=1;
	    	//Dropper drag 
		   	$('#dropper1').draggable({ disabled: false });
			$('#dropper1').css({cursor:'pointer'});
	   		dragDropper('dropper1','dropperSoln1',-18,128,98,435,-100,130,50,170,104,124,133);
	    }
	    //-------Sodium metal test------- 
	    function sodiumMetalOrAcetylChlorideTest(){
	    	$('#stand1,#watchGlassDiv,#testtubeADrag,#testtubeA,#testtubeBDrag,#testtubeB,#funnel,#labelDiv,#label1Div,#labelBoard').css({display:'block'}); 
	    	$('#watchGlassDiv').css({top:'209px',left: '327px'});
	    	$('#labelDiv').css({left:'55px'});
	    	$('#labelBoard').css({top:'266px',left: '348px'});
	    	$('#funnel').css({top:'84px',left: '180px'});
	    	$('#testtubeA,#testtubeADrag').css({left:'103px'});
	    	$('#testtubeB,#testtubeBDrag').css({left:'190px'});
	    	$('#stand1').css({left:'60px'});	    	
	    	$('#testtubeBSoln').css({display:'none'});
	    	$('#labelBoardText').html(calciumSulphate);
	    	$('#labelText1').css({top:'9px'});	
	    	$('#labelBoardText').css({top:'2px'});	
	    	$('#labelText1').html(sampleLabel);
	    	$('#spatulaDiv').css({cursor:'pointer'});
	    	//$('.testtubeLabelStyle').css({display:'none'}); 
			spatulaMinTop=-245;
			spatulaMaxTop=0 ;
			spatulaMinLeft=-300;
			spatulaMaxLeft=-169;
			spatulaTop=-168; 
			spatulaLeft=-212; 
			powderSampleLeft=111;	
			solutionDiv='testtubeASoln';
	   		solutionImg='testtubeASolnImg';
	   		testtubeDrag='testtubeADrag';
	   		testtubeImg='testtubeA';	
			$('#spatulaDiv').draggable({ disabled: false });			
	    }
	    //-------Ceric ammonium nitrate test------- 
	    function cericAmmoniumNitrateTest(){
	    	displayCommonTestMaterials();
	    	$('#bottle1SolnName').html(cericAmmoniumNitrate);
	    	$('#labelText1').html(sampleLabel);
	    	$('#stand3').css({display:'block'}); 
	    	$('.testtubeLabelStyle').css({display:'none'}); 
	    	$('#labelDiv').css({left:'116px'});
	    	$('#bottle1').css({left:'393px'});
	    	$('#dropper1').css({left:'414px'});
	    	$('#dropperSoln1').attr('src',simPath+'images/dropperSolnBrown.png');
	    	$('.bottleSolnStyle').css({backgroundColor:'#f17f06'});
	    	$('.drop').css({'border-bottom': '10px solid #f17f06'});
	    	$('#testtubeA,#testtubeADrag').css({left:'162px'});
	    	$('#bottle1SolnName').css({top:'67px'});
			$('#bottle1WhiteLabel').css({top:'65px',height:'45px'});
			$('#labelText1').css({top:'9px'});
			colorChange('#cc0808',cericTestInference,0.7);
			testtubeImgLeft=162;
			dragDropperCount=0;
			commonHelpMsg=cericTestHelp;
			//Dropper drag 
		   	$('#dropper1').draggable({ disabled: false });
			$('#dropper1').css({cursor:'pointer'});
	   		dragDropper('dropper1','dropperSoln1',-18,167,98,414,-100,130,100,245,104,124,173);
	    }
	    //-------Lucas test------- 
	    function lucasTest(){
	    	$('#labelDiv').css({left:'147px'});
	    	$('#bottle1').css({left:'471px'});
	    	$('#dropper1').css({left:'490px'});
	    	$('#testtubeA,#testtubeADrag').css({left:'188px'});
	    	$('#testtubeB,#testtubeBDrag').css({left:'275px'});
	    	$('#testtubeC,#testtubeCDrag').css({left:'357px'});
	    	$('#stand2').css({left:'146px'});
	    	$('#bottle1SolnName').html(lucasReagent);	   
	    	$('#labelText1').html(tertiaryAlcoholText);
	    	$('#labelText2').html(secondaryAlcoholText);
	    	$('#labelText3').html(primaryAlcoholText);
	    	$('#label2Div,#testtubeBDrag,#testtubeB').css({display:'block'}); 
	    	$('#testtubeC,#label3Div,#testtubeCDrag,#stand2,#burnerhelpDiv,#burnerContainer').css({display:'block'}); 
			displayCommonTestMaterials();
			$('#dropperSoln1').attr('src',simPath+'images/dropperSoln.png');
	    	$('.bottleSolnStyle').css({backgroundColor:'#CCC',opacity:0.3});
	    	$('.drop').css({'border-bottom': '10px solid #CCC'});
	    	colorChange('#CCC',lucasTestInference1,1);
	    	testtubeRotateTop=-30;
			testtubeRotateLeft=106;
			testtubeImgLeft=188;
			//Dropper drag 
		   	$('#dropper1').draggable({ disabled: false });
			$('#dropper1').css({cursor:'pointer'});
	   		dragDropperLucasTest('dropper1','dropperSoln1',-18,193,98,490,-100,130,150,234,104,124,198);
	    }
	    //Drop solution in testtubes
	    function dragDropperLucasTest(dropperId,droppersolnId,topPos,leftPos,defaultTopPos,defaultLeftPos,minTop,maxTop,minLeft,maxLeft,drop1Top,drop2Top,dropLeft){
	 		$('#'+dropperId).draggable({
				start:function(event, ui) {
					$('#inference').css({display:'none'}); // Inference	
					$('#'+dropperId).css({zIndex:1}); 
				},
				stop:function(event, ui){
					if(this.offsetTop>=minTop && this.offsetTop<=maxTop && this.offsetLeft>=minLeft &&this.offsetLeft<=maxLeft){
						$('#'+dropperId).css({top: topPos+'px',left:leftPos+'px'});
						$('#'+dropperId).draggable({ disabled: true });
						$('#'+dropperId).css({cursor:'default'});
						$('#'+dropperId).css({zIndex:0});					
						$('#drop1').css({top:drop1Top+'px',left:dropLeft+'px'});
						$('#drop2').css({top:drop2Top+'px',left:dropLeft+'px'});
						$('#drop1').css({display:'block'});//Drops							
						$('#drop1').animate({top:mainTop+180+'px'},500,function(){							
							$('#drop1').css({display:'none'});
							$('#drop2').css({display:'block'});							
							$('#drop2').animate({top:mainTop+224+'px'},500,function(){
								$('#drop1').css({top:drop1Top+'px',left:dropLeft+'px'});
								$('#drop2').css({top:drop2Top+'px',left:dropLeft+'px'});
								$('#drop2').css({display:'none'});
								$('#drop1').css({display:'block'});//Drops							
								$('#drop1').animate({top:mainTop+180+'px'},500,function(){							
									$('#drop1').css({display:'none'});
									$('#drop2').css({display:'block'});							
										$('#drop2').animate({top:mainTop+224+'px'},500,function(){	
											$('#drop2').css({display:'none'});
											increaseTesttubeSample(solutionDiv,solutionImg);//increasing solution																			
											$('#'+dropperId).animate({top: defaultTopPos+'px',left:defaultLeftPos+'px'},function(){
											$('#'+solutionImg).animate({backgroundColor:changeSolnColor,opacity:opacityValue});
											$('#'+testtubeDrag).css('cursor','pointer');
											dragTesttubeFn(testtubeDrag,testtubeImg,testtubeImgTop,testtubeImgLeft,testtubeRotateTop,testtubeRotateLeft);		   									
	   										$('#'+droppersolnId).css({top:'63px',height:'56px',width:'9px',left:'6px'});	   								
									
										});
									});
								});
							});
						});
	  					$('#'+droppersolnId).delay(500).animate({top:'110px',height:'0px',width:'0px',left:'8px'});	
					}else{
						$('#'+dropperId).css({top: defaultTopPos+'px',left:defaultLeftPos+'px'});
						$('#'+dropperId).css({zIndex:0});
					}
	  			}
	  		});
	    }
	    //-------Litmus test------- 
	    function litmusTest(){
	    	//Phenolic Group - Litmus test
	    	litmusHelpMsg=litmusPhenol;
			if(groupVal==1){	
				inferenceMsg= litmusInference1;
				$('#labelText1').html(bluepaperLabel);
				paperColor='#659AFF';
				changeColor='#ee4f53';
			}else if(groupVal==4){	//Carboxilic Group - Litmus test
				inferenceMsg= litmusInference2;
				$('#labelText1').html(bluepaperLabel);
				paperColor='#659AFF';
				changeColor='#ee4f53';
			}else if(groupVal==5){	//Amino Group - Litmus test	
				$('#labelText1').html(redpaperLabel);
				paperColor='#ee4f53';
				changeColor='#659AFF';
				inferenceMsg= litmusInference3;
				litmusHelpMsg=litmusAmines;
			
			}	    	
			$('#bottle1SolnName').css({top:'79px'});
			$('#litmuspaper').css({'background': '-webkit-linear-gradient( '+paperColor+' , '+paperColor+')'}); /* For Safari 5.1 to 6.0 */
			$('#litmuspaper').css({'background': '-o-linear-gradient( '+paperColor+' , '+paperColor+')'});/* For Opera 11.1 to 12.0 */
    		$('#litmuspaper').css({'background': '-moz-linear-gradient( '+paperColor+' , '+paperColor+')'}); /* For Firefox 3.6 to 15 */
   			$('#litmuspaper').css({'background': 'linear-gradient('+paperColor+' , '+paperColor+')'}); /* Standard syntax (must be last) */
			$('#bottle1SolnName').html(sampleLabel);
	    	$('#labelDiv').css({left:'187px'});
	    	$('#bottle1').css({left:'393px'});
	    	$('#dropper1').css({left:'412px'});
	    	$('#litmusTestDiv,#label1Div,#dropper1,#bottle1').css({display:'block'});
	    	$('#dropper1').draggable({ disabled: false });
			$('#dropper1').css({cursor:'pointer'});
			$('.drop').css({'border-bottom': '10px solid #CCC'});
			$('.bottleSolnStyle').css({backgroundColor:'#CCC',opacity:'0.7'});
			$('#dropperSoln1').attr('src',simPath+'images/dropperSoln.png');
			$('#dropper1').draggable({
				start:function(event, ui){
					$('#dropper1').css({zIndex:1});
				},			
				stop:function(event, ui){
					if(this.offsetTop>=0 && this.offsetTop<=195 && this.offsetLeft>=90 &&this.offsetLeft<=270){
						$('#dropper1').css({top: '98px',left:'166px'});	
						$('#dropper1').draggable({ disabled: true });
						$('#dropper1').css({cursor:'default'});
						$('#dropperSoln1').delay(100).animate({top:'110px',height:'0px',width:'0px',left:'8px'});	
						$('#drop1').css({top:'217px',left:'171px',zIndex:1});
						$('#drop2').css({top:'217px',left:'171px',zIndex:1});
						$('#drop1,').css({display:'block'});//Drops							
						$('#drop1').animate({top:mainTop+268+'px'},500,function(){							
							$('#drop1').css({display:'none'});
							$('#drop2').css({display:'block'});
							$('#drop2').animate({top:mainTop+268+'px'},500,function(){
								$('#litmuspaper').css({'background': '-webkit-linear-gradient( '+paperColor+' , '+changeColor+')'}); /* For Safari 5.1 to 6.0 */
								$('#litmuspaper').css({'background': '-o-linear-gradient( '+paperColor+' , '+changeColor+')'});/* For Opera 11.1 to 12.0 */
    							$('#litmuspaper').css({'background': '-moz-linear-gradient( '+paperColor+' , '+changeColor+')'}); /* For Firefox 3.6 to 15 */
   								$('#litmuspaper').css({'background': 'linear-gradient('+paperColor+' , '+changeColor+')'}); /* Standard syntax (must be last) */
								$('#drop2').css({display:'none'});
								$('#dropper1').animate({top: '98px',left:'412px'});
								$('#inference').css({display:'block'}); // Inference
							})	
						})		
					}else{
						$('#dropper1').css({top: '98px',left:'412px'});
						$('#dropper1').css({zIndex:0});
					}
				}	
		 	})
	    }
	    //-------Ferric chloride test------- 
	    function ferricChlorideTest(){
	    	$('#labelText1').html(ferricChloride);
	    	$('#bottle1SolnName').html(sampleLabel)
	    	displayCommonTestMaterials();
	    	$('#stand3').css({display:'block'}); 
	    	$('#labelDiv').css({left:'116px'});
	    	$('#bottle1').css({left:'393px'});
	    	$('#dropper1').css({left:'412px'});
	    	$('.testtubeLabelStyle').css({display:'none'}); 
	    	$('#testtubeA,#testtubeADrag').css({left:'162px'});
			$('#dropperSoln1').attr('src',simPath+'images/dropperSoln.png');
	    	$('.bottleSolnStyle').css({backgroundColor:'#CCC',opacity:'0.6'});
	    	$('.drop').css({'border-bottom': '10px solid #CCC'});
	    	$('#bottle1SolnName').css({top:'77px'});
			$('#bottle1WhiteLabel').css({top:'72px',height:'26px'});
			$('#labelText1').css({top:'3px'});			
			colorChange('#3e0b73',fericTestInference);
			$('#testtubeASolnImg').css({backgroundColor:'#f17f06',opacity:0.7});
			testtubeImgLeft=162;
			dragDropperCount=0;
			commonHelpMsg=fericTestHelp;
			//Dropper drag 
		   	$('#dropper1').draggable({ disabled: false });
			$('#dropper1').css({cursor:'pointer'});
	   		dragDropper('dropper1','dropperSoln1',-18,167,98,414,-100,130,100,245,104,124,173);
	    }
	    //-------Liebermann test------- 
	    function liebermannTest(){
	    	displayCommonTestMaterials();
	    	$('#bottle1SolnName').html(sulphuricAcid);
	    	$('#labelText1').html(sampleLabel);
			$('#labelBoardText').html(sodiumNitrite);
	    	$('#stand3').css({display:'block'}); 
	    	$('.testtubeLabelStyle').css({display:'none'}); 
	    	$('#labelDiv').css({left:'126px'});
	    	$('#stand3').css({left:'118px'}); 
	    	$('#bottle1').css({left:'480px'});
	    	$('#dropper1').css({left:'500px'});
	    	$('#dropperSoln1').attr('src',simPath+'images/dropperSoln.png');             
	    	$('.bottleSolnStyle').css({backgroundColor:'#CCC'});
	    	$('.drop').css({'border-bottom': '10px solid #CCC'});
	    	$('#testtubeA,#testtubeADrag').css({left:'171px'});
	    	$('#bottle1SolnName').css({top:'67px'});
			$('#bottle1WhiteLabel').css({top:'65px',height:'45px'});
			$('#labelText1').css({top:'9px'});
			$('#watchGlassDiv,#labelBoard').css({display:'block'});
			$('#labelBoard').css({top:'267px',left:'296px'});
			$('#watchGlassDiv').css({top:'211px',left:'269px'});
			$('#burnerContainer').css({left:'-59px'});
			colorChange('#000066',liebermannTestInference1,1);
			testtubeImgLeft=171;
			dragDropperCount=0;
			spatulaMinTop=-245;
			spatulaMaxTop=0 ;
			spatulaMinLeft=-165;
			spatulaMaxLeft=-50;
			spatulaTop=-170; 
			spatulaLeft=-85; 
			powderSampleLeft=181; 
			$('#burnerhelpDiv,#burnerContainer').css({display:'block'});
			$('#spatulaDiv').css({cursor:'pointer'})
			$('#spatulaDiv').draggable({ disabled: false });
		 	$('#clockDiv').css({left:'389px'});
		 }
	    //-------Phthalein dye test------- 
	    function phthaleinDyeTest(){
	    	displayCommonTestMaterials();
	    	$('#labelText1').html(sampleLabel);
	    	$('#labelBoardText').html(phthalicAnhydride);
	    	$('#bottle1SolnName').html(sulphuricAcid);
	    	$('#bottle1WhiteLabel').css({top:'63px',height:'52px'});
			$('#bottle1SolnName').css({top:'67px'});
	    	$('#watchGlassDiv,#stand3,#labelBoard').css({display:'block'}); 
	    	$('#bottle1').css({left:'455px'});
	    	$('#dropper1').css({left:'475px'});
	    	$('#stand3').css({left:'45px'}); 
	    	$('#labelBoard').css({top:'267px',left: '254px'});
	    	$('#labelDiv').css({left:'73px'});
	    	$('#testtubeA,#testtubeADrag').css({left:'98px'});
			$('#labelText1').css({top:'9px'});
			$('#watchGlassDiv').css({top:'209px',left: '225px'});
			$('#spatulaDiv').css({cursor:'pointer'});
			spatulaMinTop=-245;
			spatulaMaxTop=0 ;
			spatulaMinLeft=-240;
			spatulaMaxLeft=-90;
			spatulaTop=-168; 
			spatulaLeft=-113; 
			powderSampleLeft=105;
			$('#dropperSoln1').attr('src',simPath+'images/dropperSoln.png');
			$('#beakerSoln').attr('src',simPath+'images/beakerOil.png');
	    	$('.bottleSolnStyle').css({backgroundColor:'#CCC',opacity:'0.6'});
	    	$('.drop').css({'border-bottom': '10px solid #CCC'});
	    	colorChange('#CCC',phthalicAnhydrideTestInference2,0.3);
			testtubeImgLeft=98;
			dragDropperCount=0;
			$('#spatulaDiv').draggable({ disabled: false });
	    }
	    //-------Dintrophenyl hydrazine test------- 
	    function dintrophenylHydrazineTest(){
	    	displayCommonTestMaterials();
	    	$('#bottle1SolnName').html(spiritLabel);
	    	$('#bottle2SolnName').html(dinitrophenylhydrazineLabel);	    	
	    	$('#labelText1').html(sampleLabel);
	    	$('#stand3').css({display:'block'}); 
	    	$('.testtubeLabelStyle').css({display:'none'}); 
	    	$('#labelDiv').css({left:'79px'});
	    	$('#stand3').css({left:'74px'}); 
	    	$('#bottle1').css({left:'306px'});
	    	$('#dropper1').css({left:'326px'});
	    	$('#bottle2').css({left:'421px'});
	    	$('#dropper2').css({left:'440px'});
	    	$('#dropperSoln1').attr('src',simPath+'images/dropperSoln.png');
	    	$('#dropperSoln2').attr('src',simPath+'images/dropperSolnYellow.png');
	    	$('#bottle1SolnStyle').css({backgroundColor:'#CCC' ,opacity:'0.3'});
	    	$('#bottle2SolnStyle').css({backgroundColor:'#E1CF41'});
	    	$('.drop').css({'border-bottom': '10px solid #CCC'});
	    	$('#testtubeA,#testtubeADrag').css({left:'126px'});
			$('#bottle1WhiteLabel').css({top:'72px',height:'30px'});
			$('#bottle1SolnName').css({top:'72px'});
			$('#bottle2WhiteLabel').css({top:'63px',height:'52px'});
			$('#bottle2SolnName').css({top:'67px'});
			$('#bottle1WhiteLabel').css({top:'72px',height:'30px'});
			$('#labelText1').css({top:'9px'});
			if(groupVal==2 || groupVal==3){
	    		dinitrophenylhydrazineInference=dinitrophenylhydrazineInference1;
		    }else{
				dinitrophenylhydrazineInference=dinitrophenylhydrazineInference2;
		    }
			colorChange('#CCC',dinitrophenylhydrazineInference,0.3);
			testtubeImgLeft=162;
			dragDropperCount=0;
			corkFlag=false;
			$('#bottle2,#dropper2').css({display:'block'});
			//Dropper drag 
		   	$('#dropper1').draggable({ disabled: false });
			$('#dropper1').css({cursor:'pointer'});
	   		dragDropper('dropper1','dropperSoln1',-18,131,98,326,-100,130,100,245,104,124,136);
	    }
	    //-------Sodium bisulphite test------- 
	    function sodiumBisulphiteTest(){
	    	displayCommonTestMaterials();
	    	$('#labelText1').html(sampleLabel);
	    	$('#bottle1SolnName').html(sodiumBisulphite);
	    	$('#stand3,#cork').css({display:'block'}); 
	    	$('#labelDiv').css({left:'116px'});
	    	$('#bottle1').css({left:'393px'});
	    	$('#dropper1').css({left:'412px'});
	    	$('#testtubeA,#testtubeADrag').css({left:'162px'});
			$('#labelText1').css({top:'9px'});
	    	$('#dropperSoln1').attr('src',simPath+'images/dropperSoln.png');
	    	$('.bottleSolnStyle').css({backgroundColor:'#CCC',opacity:'0.6'});
	    	$('.drop').css({'border-bottom': '10px solid #CCC'});
	    	$('.testtubeLabelStyle').css({display:'none'});
	    	if(groupVal==2 || groupVal==3){
	    		colorChange('#CCC',sodiumBisulphateTestInference1,0.3);
		    }else{
				colorChange('#CCC',sodiumBisulphateTestInference2,0.3);
		    }
			testtubeImgLeft=162;
			dragDropperCount=0;
			corkFlag=false;	
			$('#labelDiv').css({width:'140px'});
			//Dropper drag 
		   	$('#dropper1').draggable({ disabled: false });
			$('#dropper1').css({cursor:'pointer'});
	   		dragDropper('dropper1','dropperSoln1',-18,167,98,414,-100,130,100,245,104,124,173);
	    	
	    }
	    //-------Schiff test------- 
	    function schiffTest(){
	    	displayCommonTestMaterials();
	    	$('#labelText1').html(sampleLabel);
	    	$('#bottle1SolnName').html(schiffReagent);
	    	$('#stand3').css({display:'block'}); 
	    	$('#labelDiv').css({left:'116px'});
	    	$('#bottle1').css({left:'393px'});
	    	$('#dropper1').css({left:'412px'});
	    	$('#testtubeA,#testtubeADrag').css({left:'162px'});
	    	$('#labelText1').css({top:'9px'});
	    	$('#dropperSoln1').attr('src',simPath+'images/dropperSoln.png');
	    	$('.bottleSolnStyle').css({backgroundColor:'#CCC',opacity:'0.6'});
	    	$('.drop').css({'border-bottom': '10px solid #CCC'});
	    	colorChange('#78025E',schiffTestInference,0.7);
	    	$('#bottle1Img').attr('src',simPath+'images/brownBottle.png');
			testtubeImgLeft=162;
			dragDropperCount=0;
			commonHelpMsg=schiffTestHelp;
	    	//Dropper drag 
		   	$('#dropper1').draggable({ disabled: false });
			$('#dropper1').css({cursor:'pointer'});
	   		dragDropper('dropper1','dropperSoln1',-18,167,98,414,-100,130,100,245,104,124,173);
	    }
	    //-------Tollen test------- 
	    function tollenTest(){
			$('#bottle3SolnName').css({top:'79px'});			
	    	$('#dropperSoln1').attr('src',simPath+'images/dropperSoln.png');
	    	$('#dropperSoln2').attr('src',simPath+'images/dropperSoln.png');
	    	$('#bottle1SolnStyle').css({backgroundColor:'#CCC' ,opacity:'0.3'});
	    	$('#bottle2SolnStyle').css({backgroundColor:'#CCC' ,opacity:'0.3'});
	    	$('#bottle3SolnStyle').css({backgroundColor:'#CCC' ,opacity:'0.3'});
	    	$('.drop').css({'border-bottom': '10px solid #CCC'});
	    	$('#bottle2WhiteLabel').css({top:'63px',height:'52px'});
			$('#bottle2SolnName').css({top:'67px'});
			$('#bottle1SolnName').html(dilNaOH);
			$('#bottle2SolnName').html(dilAmmonia);
			$('#bottle3SolnName').html(sampleLabel);
			$('#bottle4SolnName').html(silverNitrate);
			displayCommonTestMaterials(); 
			colorChange('#CCC',tollenTestInference1,0.3);
	    	$('#labelBoardText').html(coldWaterLabel);
	    	$('#stand3').css({display:'block'}); 
	    	$('.testtubeLabelStyle,#labelDiv,#testtubeASoln').css({display:'none'}); 
	    	$('#stand3').css({left:'35px'}); 
	    	$('#bottle1').css({left:'295px'});
	    	$('#dropper1').css({left:'315px'});
	    	$('#bottle2').css({left:'380px'});
	    	$('#dropper2').css({left:'400px'});
	    	$('#bottle3').css({left:'464px'});
	    	$('#dropper3').css({left:'484px'});
	    	$('#testtubeA,#testtubeADrag').css({left:'88px'});
			$('#labelText1').css({top:'9px'});
			$('#testtubeASoln').css({top:'155px',height:'6px'});				
			$('#testtubeASolnImg').css({top:'-108px'});
			testtubeImgLeft=162;
			dragDropperCount=0;
			mainTop=20;
			corkFlag=false;
			silverNitrateFlag=true;
			$('#bottle2,#dropper2,#bottle3,#dropper3,#bottle4,#dropper4').css({display:'block'});
			solutionDiv='testtubeBSoln';
		    solutionImg='testtubeBSolnImg';
			//Dropper drag 
		   	$('#dropper4').draggable({ disabled: false });
			$('#dropper4').css({cursor:'pointer'});
	   		dragDropper('dropper4','dropperSoln4',-18,93,98,228,-100,130,50,170,104,124,99);
			
	    }	  
	    //-------m-Dinitrobenzene test------- 
	    function dinitrobenzeneTest(){
	    	displayCommonTestMaterials();
	    	$('#labelText1').html(sampleLabel);
	    	$('#labelBoardText').html(mDinitrobenzene);
	    	$('#bottle1SolnName').html(dilNaOH);
	    	$('#watchGlassDiv,#stand3,#labelBoard').css({display:'block'}); 
	    	$('#bottle1').css({left:'455px'});
	    	$('#dropper1').css({left:'475px'});
	    	$('#stand3').css({left:'45px'}); 
	    	$('#labelBoard').css({top:'267px',left: '254px'});
	    	$('#labelDiv').css({left:'73px'});
	    	$('#testtubeA,#testtubeADrag').css({left:'98px'});
			$('#labelText1').css({top:'9px'});
			$('#watchGlassDiv').css({top:'209px',left: '225px'});
			$('#spatulaDiv').css({cursor:'pointer'});
			spatulaMinTop=-245;
			spatulaMaxTop=0 ;
			spatulaMinLeft=-240;
			spatulaMaxLeft=-90;
			spatulaTop=-168; 
			spatulaLeft=-113; 
			powderSampleLeft=105;
			$('#dropperSoln1').attr('src',simPath+'images/dropperSoln.png');			
			$('#watchGlassPowder').attr('src',simPath+'images/yellowPowder.png');  
			$('#spatulaPowder').attr('src',simPath+'images/yellowSpatula.png');
			$('#testtubePowder').attr('src',simPath+'images/yellowPowderTesttube.png');
			$('#powderSample').attr('src',simPath+'images/yellowPowderTesttube.png');  
	    	$('.bottleSolnStyle').css({backgroundColor:'#CCC',opacity:'0.6'});
	    	$('.drop').css({'border-bottom': '10px solid #CCC'});
	    	colorChange('#a10ecb',mDinitrobenzeneInference,0.7);
			testtubeImgLeft=98;
			dragDropperCount=0;
			$('#spatulaDiv').draggable({ disabled: false });

	    }	 
	    //-------Sodium hydrogen carbonate test------- 
	    function sodiumHydrogenCarbonateTest(){
	    	$('#labelText1').html(sampleLabel);
	    	$('#labelBoardText').html(sodiumBicarbonate);
	    	$('#testtubeA,#label1Div,#testtubeADrag,#watchGlassDiv,#stand3,#labelBoard').css({display:'block'}); 
	    	$('#stand3').css({left:'67px'}); 
	    	$('#labelDiv').css({left:'73px'});
	    	$('#labelBoard').css({top:'266px',left: '348px'});
	    	$('#testtubeA,#testtubeADrag').css({left:'120px'});
			$('#labelText1').css({top:'9px'});
			$('#watchGlassDiv').css({top:'209px',left: '317px'});
			$('#spatulaDiv').css({cursor:'pointer'});
			spatulaMinTop=-245;
			spatulaMaxTop=0 ;
			spatulaMinLeft=-310;
			spatulaMaxLeft=-120;
			spatulaTop=-164; 
			spatulaLeft=-183; 
			powderSampleLeft=129; 
			$('#spatulaDiv').draggable({ disabled: false });
			inferenceMsg=sodiumHydrogenCarbonateInference;

	    }
	    //function to drag spatula
		$('#spatulaDiv').draggable({	
			start:function(){
				$('#spatulaDiv').css({zIndex:2});
			},
			stop : function(event, ui) {
				if(this.offsetTop>=spatulaMinTop &&this.offsetTop<=spatulaMaxTop && this.offsetLeft>=spatulaMinLeft &&this.offsetLeft<=spatulaMaxLeft){
					$('#spatulaDiv').draggable({ disabled: true });				
					$('#spatulaDiv').css({top:spatulaTop+'px',left:spatulaLeft+'px'});
					$('#powderSample').css({display:'block'});
					$('#powderSample').css({left:powderSampleLeft+'px'});	
					$('#powderSample').animate({top:'238px'},1000,function(){
						$('#powderSample').css({display:'none'});
						switch (testNames[groupVal][testVal]){
							case testNames[3][2]://m- Dinitrobenzene test
								$('#testtubePowder').css({display:'block'});
								$('#testtubePowder').animate({top: '146px',  left:'7px',  width: '17px', height: '12px', opacity:'0.7'});																								
								//Dropper drag 
							   	$('#dropper1').draggable({ disabled: false });
								$('#dropper1').css({cursor:'pointer'});
								dragDropper('dropper1','dropperSoln1',-18,103,98,475,-100,130,40,160,104,124,106);
							break;
							case testNames[4][1]://Sodium Hydrogen Carbonate test
								$('#bubbles,#inference,#testtubePowder').css({display:'block'});
								$('#testtubePowder').animate({top: '146px',  left:'7px',  width: '17px', height: '12px', opacity:'0.7'});																								
						
							break;
							case testNames[1][2]://Liebermann's test
								$('#testtubePowder').css({display:'block'});
								$('#burnerhelpDiv').css({zIndex:0});
								burnerOn();
							break;
							case testNames[1][3]://Phthalein Dye test
								corkFlag=false;
								$('#testtubePowder').css({display:'block'});
								$('#dropper1').draggable({ disabled: false });
								$('#dropper1').css({cursor:'pointer'});
								dragDropper('dropper1','dropperSoln1',-18,103,98,475,-100,130,40,160,104,124,106);
							break;
							case testNames[0][0]://Sodium metal test
								$('#testtubePowder').css({display:'block'});
								dragTesttubeFn('testtubeADrag','testtubeA',100,103,33,330);
							break;
							case testNames[0][3]://Acetyl chloride test
								$('#testtubePowder').css({display:'block'});
								dragTesttubeFn('testtubeADrag','testtubeA',100,103,33,330);
							break;	
							case testNames[5][4]://Nitrous acid test
								$('#testtubeBPowder').css({display:'block'});
								sodiumNitriteFlag=true;
								if(dropConch2so4==true){
									dragTesttubeFn('testtubeADrag','testtubeA',100,49,33,340);
								}
							break;	
						}
					});	
					$("#spatulaPowder").animate({top:'54px',width:'0px',height:'0px'},100,function(){
						$('#spatulaDiv').animate({top:'-7px',left:'81px'},function(){						
							$('#spatulaPowder').css({top:'45px',width:'19px',height:'13px'});	
						});
					});
					$('#spatulaDiv').css({cursor:'default'});	
				}else{
					$('#spatulaDiv').css({zIndex:0});
					$('#spatulaDiv').css({top:'-7px',left:'81px'});	
				}
			}
		})
	    //-------Ester test------- 
	    function commonTest(){
	    	$('#bottle1WhiteLabel').css({top:'72px',height:'30px'});
			$('#bottle1SolnName').css({top:'72px'});
			$('#bottle2WhiteLabel').css({top:'63px',height:'52px'});
			$('#bottle2SolnName').css({top:'67px'});			
	    	$('#dropperSoln1').attr('src',simPath+'images/dropperSoln.png');
	    	$('#dropperSoln2').attr('src',simPath+'images/dropperSoln.png');
	    	$('#bottle1SolnStyle').css({backgroundColor:'#CCC' ,opacity:'0.3'});
	    	$('#bottle2SolnStyle').css({backgroundColor:'#CCC' ,opacity:'0.3'});
	    	$('.drop').css({'border-bottom': '10px solid #CCC'});
	    	corkFlag=false;
    		switch (testNames[groupVal][testVal]){
				case testNames[0][1]://Ester Test - Alcoholic group
					if(groupVal==4){
						//Ester Test - Carboxilic group
						$('#bottle1SolnName').html(ethylAlcohol);
						colorChange('#CCC',alcoholicEsterInference3,0.3);
						estertestDragDropper=estertestDragDropper2;
					}else{
						$('#bottle1SolnName').html(glacialAceticAcidLabel);
						colorChange('#CCC',alcoholicEsterInference2,0.3);
						estertestDragDropper=estertestDragDropper1;
					}					
					$('#bottle2SolnName').html(sulphuricAcid);	
				break;
				case testNames[0][4]:	//Iodoform test
					$('#bottle1SolnName').html(iodineLable);
					$('#bottle2SolnName').html(dilSodiumhydroxideLabel);	
					$('#bottle2WhiteLabel').css({top:'72px',height:'30px'});
					$('#bottle2SolnName').css({top:'72px'});
					$('.drop').css({'border-bottom': '10px solid #951707'}); 
					$('#bottle1SolnStyle').css({backgroundColor:'#CCC' ,opacity:'1'});
					$('#dropperSoln1').attr('src',simPath+'images/dropperSolnBrown.png');	
					colorChange('#951707',iodoformInference,1);
					$('#bottle1Img').attr('src',simPath+'images/brownBottle.png');
				break;
				case testNames[2][2]://Fehling’s test
					colorChange('#0C97F4',fehlingInference,1);
					$('#bottle1SolnName').html(fehlingSolutionA);
					$('#bottle2SolnName').html(fehlingSolutionB);
					$('#bottle2WhiteLabel').css({top:'72px',height:'30px'});
					$('#bottle2SolnName').css({top:'72px'});
					$('.drop').css({'border-bottom': '10px solid #0C97F4'}); 
					$('#bottle1SolnStyle').css({backgroundColor:'#0C97F4' ,opacity:'1'});
					$('#dropperSoln1').attr('src',simPath+'images/dropperSolnBlue.png');	
				break;
				
				case testNames[1][2]://Liebermann's test
					nextClickFlag=true;	
					colorChange('#FF0000',liebermannTestInference2,1);					
					$('#bottle2WhiteLabel').css({top:'72px',height:'30px'});
					$('#bottle2SolnName').css({top:'72px'});
					$('#bottle1SolnName').html(distWater);
					$('#bottle2SolnName').html(sodiumHydroxide);	
				break;
				case testNames[3][3]://Sodium nitroprusside test
					$('#labelText1').html(sampleLabel);
	    			$('#bottle1SolnName').html(sodiumNitroprusside);
	    			$('#bottle2SolnName').html(sodiumHydroxide);
	    			$('#bottle1WhiteLabel').css({top:'63px',height:'52px'});
					$('#bottle1SolnName').css({top:'67px'});
					$('#bottle2WhiteLabel').css({top:'72px',height:'30px'});
					$('#bottle2SolnName').css({top:'72px'});
					$('#dropperSoln1').attr('src',simPath+'images/dropperSolnBrown.png');
			    	$('#bottle1SolnStyle').css({backgroundColor:'#c26216' ,opacity:'0.7'});
			    	$('.drop').css({'border-bottom': '10px solid #c26216'});
			    	colorChange('#e2b48e',sodiumNitroprussideInference,0.3);
					corkFlag=true;
				break;

			}
	    	displayCommonTestMaterials(); 
	    	$('#labelBoardText').html(coldWaterLabel);	
	    	$('#labelText1').html(sampleLabel);
	    	$('#stand3').css({display:'block'}); 
	    	$('.testtubeLabelStyle').css({display:'none'}); 
	    	$('#labelDiv').css({left:'79px'});
	    	$('#stand3').css({left:'74px'}); 
	    	$('#bottle1').css({left:'306px'});
	    	$('#dropper1').css({left:'326px'});
	    	$('#bottle2').css({left:'421px'});
	    	$('#dropper2').css({left:'440px'});
	    	$('#testtubeA,#testtubeADrag').css({left:'126px'});
			$('#labelText1').css({top:'9px'});
			testtubeImgLeft=126;
			dragDropperCount=0;
			testtubeRotateTop=0;
			testtubeRotateLeft=240;			
			$('#bottle2,#dropper2').css({display:'block'});
			//Dropper drag 
		   	$('#dropper1').draggable({ disabled: false });
			$('#dropper1').css({cursor:'pointer'});
	   		dragDropper('dropper1','dropperSoln1',-18,131,98,326,-100,130,100,245,104,124,136);
	    }
	    //-------Solubility test------- 
	    function solubilityTest(){
	    	displayCommonTestMaterials();
	    	$('#testtubeB,#stand1,#testtubeBDrag,#label2Div').css({display:'none'}); 
	    	$('#stand3').css({display:'block'}); 
	    	$('#labelDiv').css({left:'116px'});
	    	$('#bottle1').css({left:'393px'});
	    	$('#dropper1').css({left:'412px'});
	    	$('#testtubeA,#testtubeADrag').css({left:'162px'});
	    	$('#labelText1').css({top:'9px'});
	    	$('#labelText1').html(sampleLabel);
	    	$('.testtubeLabelStyle').css({display:'none'}); 
	    	$('#bottle1SolnName').html(dilHCl);
	    	$('#bottle1SolnName').css({top:'80px'});
	    	$('#dropperSoln1').attr('src',simPath+'images/dropperSoln.png');
	    	$('.bottleSolnStyle').css({backgroundColor:'#CCC',opacity:'0.6'});
	    	$('.drop').css({'border-bottom': '10px solid #CCC'});
	    	colorChange('#CCC',solubilityTestInference,0.3);
			testtubeImgLeft=162;
			dragDropperCount=0;
			commonHelpMsg=solubilityTestHelp;
	    	//Dropper drag 
		   	$('#dropper1').draggable({ disabled: false });
			$('#dropper1').css({cursor:'pointer'});
	   		dragDropper('dropper1','dropperSoln1',-18,167,98,414,-100,130,100,245,104,124,173);
	    }
	    //-------Carbylamines test------- 	    
	    function carbylaminesTest(){	    	
			$('#bottle3SolnName,#bottle2SolnName,#bottle1SolnName').css({top:'79px'});			
	    	$('#dropperSoln1').attr('src',simPath+'images/dropperSoln.png');
	    	$('#dropperSoln2').attr('src',simPath+'images/dropperSoln.png');
	    	$('#bottle2Img').attr('src',simPath+'images/brownBottle.png');
	    	$('#bottle1SolnStyle').css({backgroundColor:'#CCC' ,opacity:'0.3'});
	    	$('#bottle2SolnStyle').css({backgroundColor:'#CCC' ,opacity:'0.3'});
	    	$('#bottle3SolnStyle').css({backgroundColor:'#CCC' ,opacity:'0.3'});
	    	$('.drop').css({'border-bottom': '10px solid #CCC'});
			$('#bottle1SolnName').html(ethanolLabel);
			$('#bottle2SolnName').html(chloroform);
			$('#bottle3SolnName').html(sampleLabel);
			colorChange('#CCC',carbylaminestestInference2,0.3);
			displayCommonTestMaterials(); 
	    	$('#labelBoardText').html(coldWaterLabel);
	    	$('#labelText1').css({top:'9px'});	
	    	$('#labelText1').html(alcoholicaKOH);
	    	$('#stand3,#burnerContainer,#burnerhelpDiv').css({display:'block'}); 
	    	$('.testtubeLabelStyle').css({display:'none'});
	    	$('#labelDiv').css({left:'146px'});
	    	$('#stand3').css({left:'140px'}); 
	    	$('#bottle1').css({left:'306px'});
	    	$('#dropper1').css({left:'326px'});
	    	$('#bottle2').css({left:'389px'});
	    	$('#dropper2').css({left:'407px'});
	    	$('#bottle3').css({left:'469px'});
	    	$('#dropper3').css({left:'489px'});
	    	$('#testtubeA,#testtubeADrag').css({left:'193px'});
			testtubeImgLeft=193;
			dragDropperCount=0;
			corkFlag=false;
			$('#bottle2,#dropper2,#bottle3,#dropper3').css({display:'block'});
			//Dropper drag 
		   	$('#dropper1').draggable({ disabled: false });
			$('#dropper1').css({cursor:'pointer'});
	   		dragDropper('dropper1','dropperSoln1',-18,196,98,326,-100,130,136,260,104,124,201);
	   		smellSolnDiv="testtubeA";
			smellInference=carbylaminestestInference1;
			inferencePosition='n';
			smelltrip = new Trip([
			{
				sel : $('#'+smellSolnDiv),
				position : inferencePosition,
				content : smellInference,
				expose : false,
				delay : 4000
			}
			])	
	    }
	    //-------Azo dye test------- 
	    function azoDyeTest(){
	    	$('#dropperSoln1').attr('src',simPath+'images/dropperSoln.png');
	    	$('#dropperSoln2').attr('src',simPath+'images/dropperSoln.png');
	    	$('#bottle1SolnStyle').css({backgroundColor:'#CCC' ,opacity:'0.3'});
	    	$('#bottle2SolnStyle').css({backgroundColor:'#CCC' ,opacity:'0.3'});
	    	$('#bottle3SolnStyle').css({backgroundColor:'#CCC' ,opacity:'0.3'});
	    	$('.drop').css({'border-bottom': '10px solid #CCC'});
			$('#bottle1SolnName').html(hclLabel);
			$('#bottle2SolnName').html(dilSodiumhydroxideLabel);		
			colorChange('#CCC',azoDyeInference,0.3);
			displayCommonTestMaterials(); 
	    	$('#labelBoardText').html(iceBath);
	    	$('#labelText1,#labelText3').css({top:'9px'});	
	    	$('#labelText1').html(sampleLabel);
	    	$('#labelText2').html(sodiumnitriteAqu);
	    	$('#labelText3').html(naphthol);
	    	$('#stand2,#testtubeB,#testtubeBDrag,#label2Div,#label3Div,#testtubeC,#testtubeCDrag,#testtubeCPowder').css({display:'block'});
	    	$('#labelDiv').css({left:'28px'});
	    	$('#stand2').css({left:'32px'}); 
	    	$('#bottle1').css({left:'376px'});
	    	$('#dropper1').css({left:'396px'});
	    	$('#bottle2').css({left:'463px'});
	    	$('#dropper2').css({left:'482px'});
	    	$('#testtubeA,#testtubeADrag').css({left:'76px'});
	    	$('#testtubeB,#testtubeBDrag').css({left:'162px'});
	    	$('#testtubeC,#testtubeCDrag').css({left:'243px'});
			$('#labelText2').css({top:'3px'});
			$('#testtubeCSoln').css({opacity:0});
			testtubeImgLeft=76;
			testtubeRotateTop=0;
			testtubeRotateLeft=335;	
			corkFlag=true;
			$('#bottle2,#dropper2').css({display:'block'});
			//Dropper drag 
		   	$('#dropper1').draggable({ disabled: false });
			$('#dropper1').css({cursor:'pointer'});
	   		dragDropper('dropper1','dropperSoln1',-18,80,98,396,-100,130,40,130,104,124,87);
	   			
	    }
	    //-------Nitrous acid test------- 
	    function nitrousAcidTest(){
	    	$('#stand1,#watchGlassDiv,#testtubeADrag,#testtubeA,#testtubeBDrag,#testtubeB,#labelDiv,#label1Div,#label2Div,#labelBoard').css({display:'block'}); 
	    	$('#bottle1,#dropper1').css({display:'block'}); 
	    	$('#watchGlassDiv').css({top:'209px',left: '372px'});
	    	$('#labelDiv').css({left:'2px'});
	    	$('#stand1').css({left:'6px'});
	    	$('#labelBoard').css({top:'266px',left: '401px'});
	    	$('#testtubeA,#testtubeADrag').css({left:'49px'});
	    	$('#testtubeB,#testtubeBDrag').css({left:'136px'});
	    	$('#bottle1').css({left:'263px'});
	    	$('#dropper1').css({left:'283px'});
	    	$('#labelText1').html(amines[aminesVal]);
	    	$('#labelText2').html(distWater);
	    	$('#bottle1SolnName').html(concHcl);
			$('#labelBoardText').html(sodiumnitrate);
			$('#bottle1WhiteLabel').css({top:'72px',height:'30px'});
			$('#bottle1SolnName').css({top:'79px'});
			$('#labelText1').css({top:'1px'});	
			$('#labelText2').css({top:'1px',width:'75px'});	
			inferenceMsg=nitrousAcidInference[aminesVal];
			commonNitrousAcidHelp1Msg=commonNitrousAcidHelp1[aminesVal];
			commonNitrousAcidHelp2Msg=commonNitrousAcidHelp2[aminesVal];
			corkFlag=false;
			//Dropper drag 
		   	$('#dropper1').draggable({ disabled: false });
			$('#dropper1').css({cursor:'pointer'});
	   		dragDropper('dropper1','dropperSoln1',-18,54,98,283,-100,130,0,100,104,124,61);
	   		$('#spatulaDiv').css({cursor:'pointer'});
			spatulaMinTop=-245;
			spatulaMaxTop=0 ;
			spatulaMinLeft=-268;
			spatulaMaxLeft=-165;
			spatulaTop=-168; 
			spatulaLeft=-212; 
			powderSampleLeft=144;
			solutionDiv='testtubeASoln';
	   		solutionImg='testtubeASolnImg';
	   		testtubeDrag='testtubeADrag';
	   		testtubeImg='testtubeA';		
			$('#spatulaDiv').draggable({ disabled: false });	
	    }
	    //-------Hinsberg test------- 
	    function hinsbergTest(){
	    	$('#bottle1SolnName,#bottle2SolnName').css({top:'79px'});
	    	$('#bottle3WhiteLabel').css({top:'63px',height:'52px'});
			$('#bottle3SolnName').css({top:'67px'});			
	    	$('#dropperSoln1').attr('src',simPath+'images/dropperSoln.png');
	    	$('#dropperSoln2').attr('src',simPath+'images/dropperSoln.png');
	    	$('#bottle1SolnStyle').css({backgroundColor:'#CCC' ,opacity:'0.3'});
	    	$('#bottle2SolnStyle').css({backgroundColor:'#CCC' ,opacity:'0.3'});
	    	$('#bottle3SolnStyle').css({backgroundColor:'#CCC' ,opacity:'0.3'});
	    	$('#bottle3Img').attr('src',simPath+'images/brownBottle.png');
	    	$('.drop').css({'border-bottom': '10px solid #CCC'});
			$('#bottle1SolnName').html(naoh);
			$('#bottle2SolnName').html(waterLabel);
			$('#bottle3SolnName').html(benzeneSulphonylChloride);
			colorChange('#CCC',carbylaminestestInference2,0.3);
			displayCommonTestMaterials(); 
	    	$('#labelBoardText').html(coldWaterLabel);
	    	$('#labelText1').css({top:'1px'});	
	    	$('#labelText1').html(amines[aminesVal]);
	    	$('#stand3').css({display:'block'}); 
	    	$('#labelDiv').css({left:'49px'});
	    	$('#stand3').css({left:'44px'});
	    	$('#bottle1').css({left:'279px'});
	    	$('#dropper1').css({left:'299px'}); 
	    	$('#bottle2').css({left:'367px'});
	    	$('#dropper2').css({left:'387px'});
	    	$('#bottle3').css({left:'455px'});
	    	$('#dropper3').css({left:'475px'});
	    	$('#testtubeA,#testtubeADrag').css({left:'96px'});
			testtubeImgLeft=96;
			dragDropperCount=0;
			testtubeRotateTop=0;
			testtubeRotateLeft=200;
			corkFlag=false;
			commonhinsbergHelpMsg=commonhinsbergHelp[aminesVal];
			$('#bottle2,#dropper2,#bottle3,#dropper3').css({display:'block'});
			//Dropper drag 
		   	$('#dropper1').draggable({ disabled: false });
			$('#dropper1').css({cursor:'pointer'});
	   		dragDropper('dropper1','dropperSoln1',-18,100,98,299,-100,130,40,160,104,124,106);
	    }       
	   	//-------Function to reset all -------
		$('#reset').click(function(){			
			window.location.reload();
		})
		//-------Function to reset common changes -------
		function resetAll(){
			$('#clockDiv').css({left:'461px'});
			$('#inference,#bubbles,#aminesContainer,#crystImg').css({display:'none'}); // Inference
			$('#testtubeA,#testtubeB,#testtubeC,#stand1,#dropper1,#bottle1,#dropper2,#bottle2,#stand2,#stand3').css({display:'none'}); 
			$('#testtubeADrag,#testtubeBDrag,#testtubeCDrag,#cork,#dropper3,#bottle3,#nextBtnDiv').css({display:'none'}); 
			$('#drop1,#drop2').css({display:'none'}); 
			$('#dropper1,#dropper2,#dropper3').css({zIndex:0});
			$('#label1Div,#label2Div,#label3Div,#burnerhelpDiv,#burnerContainer').css({display:'none'});
			$('#watchGlassDiv,#hot_machine,#beakerSmallDiv,#inference').css({display:'none'});
			$('#clockDiv').css({display:'none',left:'461px'}); 
			$('#dropper1,#dropper2,#dropper3').draggable({ disabled: true });
			$('#dropper1,#dropper2,#dropper3').css({cursor:'default'});
			$('#testtubeADrag,#testtubeBDrag,#testtubeCDrag').css({cursor:'default'});
			$('#testtubeADrag,#testtubeBDrag,#testtubeCDrag').draggable({ disabled: true });
			$('#bottle1SolnName,#bottle2SolnName,#bottle3SolnName').css({top:'72px'});
			$('#bottle1WhiteLabel,#bottle2WhiteLabel,#bottle3WhiteLabel').css({top:'72px',height:'30px'});
			$('#labelText1').css({top:'3px'});
			$('#stand1').css({left:'80px'});
			$('.testtubeLabelStyle').css({display:'block'}); 
			$('#stand3').css({left:'110px'}); 
			$('#burnerhelpDiv').css({zIndex:5});
			$('#drop1,#drop2,#testtubeASoln,#testtubeASolnImg,#testtubeBSoln,#testtubeCSoln,#testtubeBSolnImg,#testtubeCSolnImg').stop(true);
			$('#testtubeASoln,#testtubeBSoln,#testtubeCSoln').css({top:'130px',height:'34px',opacity:1});				
			$('#testtubeASolnImg,#testtubeBSolnImg,#testtubeCSolnImg').css({top:'-82px'});
			clearInterval(testtubeInt);
			$("#testtubeA,#testtubeB,#testtubeC").rotate(0);
			$("#testtubeA,#testtubeB,#testtubeC").css({zIndex:0});
			$('#testtubeASolnImg').css({backgroundColor:'#CCC',opacity:0.3});
	    	$('#testtubeBSolnImg').css({backgroundColor:'#CCC',opacity:0.3});
	    	$('#testtubeCSolnImg').css({backgroundColor:'#CCC',opacity:0.3});
	    	$('.bottleSolnStyle').css({backgroundColor:'#CCC',opacity:1});
	    	dragTesttubeCount=0;	
	    	$('#testtubeA,#testtubeADrag,#testtubeB,#testtubeBDrag,#testtubeC,#testtubeCDrag').css({top:'100px'});
			$('#cork,#corkOntesttube,#litmusTestDiv,#nextBtnDiv,#solutionPour,#labelBoard').css({display:'none'});
			$('#cork').css({top:'253px',left:'291px'});
			$('#cork').draggable({disabled:true});	
			$('#labelDiv').css({width:'298px'});
			corkFlag=true;	
			$('#drop1').css({zIndex:0});
			$('#drop2').css({zIndex:0});
			dragDropper2Count=0;
			if(smelltripFlag==true){
				smelltrip.stop();
			}			
			testtubeRotateTop=20;
			testtubeRotateLeft=325;
			$('#labelBoardText').css({top:'7px'});
			if(typeChangeVal==0){
				$('.addSpace').css('padding','163px 0px 0px 0px');
			}else{
				if(testNames[groupVal][testVal]=="hinsbergTest" || testNames[groupVal][testVal]=="nitrousAcidTest"){//Amines test 
					$('#aminesContainer').css({display:'block'});
					$('.addSpace').css('padding','47px 0px 0px 0px');
				}else{
					$('.addSpace').css('padding','106px 0px 0px 0px');
				}				
			}
			rotateAmt=5,flag_rotate=false,count=0,flameCount=0;
			degree=0,heatFlag=false,smelltripFlag=false,nextClickFlag=false,filterPaperFlag=false;
			clockIntCnt=0,coolFlag=false,dipAmmoniaFlag=false,sodiumtakeFlag1=false,sodiumtakeFlag2=false;
			iceBathcount=0,pourFlag=sodiumNitriteFlag=dropConch2so4=false;
			$('#solnpourImg').css({display:'none',opacity:0});
			$('#bubbles').css({display:'none',top: '131px',left:'0px'});
			$('#burnerhelpDiv,#burnerContainer').css({display:'none'});
			$('#watchGlassDiv,#labelBoard').css({display:'none'});
			$('#icebathTop,#icebathBottom').css({display:'none'});
			$('#stand3,#sodiumBottleDiv,#filterPaperStill,#filterPaperDrag,#forceps,#beakerSmallDiv').css({display:'none'});
			$('#stand1,#funnel,#beakerSmallSolnDiv').css({display:'none'});
			$('#forceps').draggable({disabled:false});	
			$('#forceps').attr('src',simPath+'images/forceps.png');
			$('#beakerSoln').attr('src',simPath+'images/beakerSolution.png');
			$('#forceps').css({zIndex:0,cursor:'pointer',top: '158px',left: '326px'});
			$('#sodiumBottleTop').css({top:'-5px',left:'12px'});
			$('#sodiumBottleTop,#sodium,#testtubeASoln,#testtubeBSoln,#testtubeCSoln').stop(true);
			$('#sodium').css({display:'none',top:'258px',left:'235px'});	
			$('#hot_machine').css({display:'none'});
			$('#bubblesBeaker').css({left:'264px'});
			$('#testtubeA').rotate(0);
			$('#testtubeB').rotate(0);
			$('#beakerSmallSoln').animate({backgroundColor: '#CCC'})
			$('#clockDiv,#switchOn,#lightOn,#bubblesBeaker,#testtubeASolnImg').css({display:'none'});	
			$('#switchOff,#lightOff').css({display:'block'});
			$( "#switchOff" ).unbind( "click");
			clearInterval(clockInt);
			$('#beakerSmallSolnDiv').css({top: '49px',height: '30px'});
			$('#beakerSmallSoln').css({height: '30px'});
			$('#switchOff').css('cursor','default');
			$('#testtubePowder,#glassRod,#cork,#smokeDivstill').stop(true);
			$('#smokeDiv,#funnel,#testtubeASolnImg,#testtubePowder,#testtubeBPowder,#testtubeCPowder').stop(true);
			$('#cork').css({cursor:'default'});
			$('#corkOntesttube,#funnel').css({display:'none'});
			$('#testtubePowder').css({opacity:1,display:'none',top:'138px',left: '4px',width:'25px',height:'20px'});
			$('#glassRod').css({cursor:'default'});	
			$('#glassRod').css({zIndex:0});	
			$('#glassRod').css({top:'226px',left:'376px'});
			$('#glassRod').rotate(0);
			$('#smokeDivstill,#smokeDiv,#nh3bottle,#glassRod').css({display:'none'});
			$('#smokeDivstill').css({height:'0px',top:'228px'});
			$("#smokeDiv").css({opacity:0});
			$("#testtubeBPowder,#testtubeCPowder").css({opacity:1,display:'none'});
			$('#funnel').css({top:'138px'});
			$('#spatulaDiv').css({cursor:'default'});
			dragTesttubeCount=0,dragDropperCount=0,dragDropper2Count=0;
			$('#spatulaDiv').css({zIndex:0});
			$('#spatulaDiv').css({top:'-7px',left:'81px'});	
			$('#spatulaDiv').draggable({ disabled: true });
			$('#cork').draggable({ disabled: true });
			$('#glassRod').draggable({ disabled: true });
			$('#powderSample,#spatulaPowder,#spatulaDiv,#solnApourImg,#solnCpourImg,#solnpourImg').stop(true);
			$('#powderSample,#silverMirror,#solnApourImg,#solnCpourImg,#solnpourImg').css({display:'none'});
			$('#powderSample').css({top:'104px',left:'129px'});	
			$('#testtubeBPowder').css({display:'none',opacity:1});
			$('#spatulaPowder').css({top:'45px',width:'19px',height:'13px'});
			$('#bottle1WhiteLabel,#bottle2WhiteLabel,#bottle3WhiteLabel').css({top:'72px',height:'30px'});
			$('#bottle1SolnName,#bottle2SolnName,#bottle3SolnName').css({top:'72px'});
			$('#testtubeASolnImg,#testtubeBSoln,#testtubeAImg,#testtubeASoln,#testtubeCSoln,#labelDiv').css({display:'block'});
			$('#beakerSmallDiv').css({left:'450px'});
			$('#beakerSmallSolnDiv').css({display:'block'});
			if(inferenceClickFalg==true){
				trip1.stop(); 
			}
			$('#filterPaperDrag').draggable({disabled:true});
			$('#filterPaperDrag').css({cursor:'default'});
			$('#filterPaperDrag').css({zIndex:0});
			$('#spot,#spotStill,#bottle4,#dropper4,#yellowOilLayer').css({display:'none'});
			$('#filterPaperDrag').css({top:'226px',left:'203px'});
			$('#burnerFlame,#burnerOn').hide();			
			$('#burnerOff').show();
			$('#bottle2Img').attr('src',simPath+'images/bottle.png');
			$('#bottle1Img').attr('src',simPath+'images/bottle.png');
			$('#bottle3Img').attr('src',simPath+'images/bottle.png');
			solutionDiv='testtubeASoln';
	   		solutionImg='testtubeASolnImg';
	   		testtubeDrag='testtubeADrag';
	   		testtubeImg='testtubeA';
	   		mainTop=0;
	   		if(helpclickFlag==true){
	   			trip.stop(); 
	   		}
	   		$('#hotMachineHelpDiv').css({left:'407px'}); 	   		
			$('#watchGlassPowder').attr('src',simPath+'images/powder.png');  
			$('#spatulaPowder').attr('src',simPath+'images/spatulaPowder.png'); 
			$('#testtubePowder').attr('src',simPath+'images/whitePowderTesttube.png'); 
			$('#testtubeBPowder').attr('src',simPath+'images/whitePowderTesttube.png'); 
			$('#powderSample').attr('src',simPath+'images/whitePowderTesttube.png');
			$('#timeLabel').html(gt.gettext("10 Min"));
			silverNitrateFlag=false;
			$('#labelText2').css({top:'3px',width:'76px'});	
		}				
	});
}
