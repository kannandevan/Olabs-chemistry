/*Main variables */
var preliminary,confirmation,dryheatitems,confirmationExp,confnFuns,preliminaryIndex=0,confirmationIndex=0,confirmationSubIndex=0,preliminarySubIndex=0,randomDryHeat=0,mainTop,mainLeft,dryHeatFunc;
var flagstir=0,path,inferenceMsgs,preliminarySelected=true;
var sampleSalt=[[],"Carbonate","Sulphite","Sulphide","Nitrite","Nitrate","Chloride","Bromide","Iodide","Acetate","Oxalate","Sulphate","Phosphate"]//no need of translation
var result;
/* Dry heat variables */
var dryHeatLabel,dryHeatInfer,dryHeatHelp,dryHeatSmell;
/* Carbonate Variables */
var carbonateHelp,carbonateLabel,confirmationInfer,sulphideInfer,confirmationInference,confirmationHelp,help_k2cr2o7,help_kmno4,help_sodiumnitroprusside,help_leadacetate,help_cadmiumcarbonate,help_diphenylamine;
/*- Ferric sulphate test
Barium chloride test-*/		
var bariumchlorideconfirmation,ferricSulphateconfirmation,inferenceFe2SO43BaCl2,helpFe2SO43,helpBaCl2;
var helpFe2SO43BaCl2=[];
/*starchIodideBottleLabel */
var starchIodideBottleLabel,starchIodideInference,starchIodideHelp;
/* Copper Chip Test */
var copperChipTestLabel,copperChipHelp,copperChipInference;
/* Brown Ring Test */
var brownRingTestconfirmation,brownRingTestInference,brownRingTestHelp;
/* Confirmation sulphate test*/
var sulphateInference,helpsulphate;
/* Ammonium molybdate test*/
var ammoniummolybdateInference;
/* Match stick test*/
var matchstickLabels,matchsticktestInference,matchsticktestHelp;
/*Label arrays */
var commomLabels,potassiumLabel,concSulphuricLabel,esterInfMsg,fericChlorideLabel,silverNitrateLabel,silverNitrateInfMsg,manganeseDioxideLabel,chromylChlorideLabel,chlorineWaterLabel,calciumChloride,magnesiaMixture;
var toolTipMsgs;
window.onload = function init(){
	$(document).ready(function(){
		
		/*--Apply selectable false*/
		$('#mainDiv').mousedown(function(event){event.preventDefault();});
		var srcOfFlame=$("#esterFlame").attr('src');
		result = Math.floor(Math.random() * sampleSalt.length);
		if(result==13 || result==0){result=1;}
		path = srcOfFlame.substr(0,srcOfFlame.lastIndexOf("/")+1);
		document.getElementById("expName").innerHTML=gt.gettext("Identification of Anions");
		$('#olabmenuBar li:first-child a').html("HELP");
		//$('#olabmenuBar li:nth-child(2) a').html("FULLSCREEN");
		//$('#olabmenuBar li:last-child a').html("EXIT");
		//$(".labName").html("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT");		
		/*Common controls labels*/
		$("#inference_Div").hide();
		$("#reset").val(gt.gettext("Reset"));	
		HelpMsg_physical=[gt.gettext("Drag the original salt towards the watch glass<br>to put it into the watch glass."),gt.gettext("Drag the dropper towards the watch glass<br>to drop water into the sample."),gt.gettext("Drag the hand towards the watch glass to rub<br>the pre-wetted salt with the fingers.")];
		HelpMsg_potassium=[gt.gettext("Drag the original salt towards the test tube to<br>put it into the test tube."),gt.gettext("Drag the dropper towards the test tube to<br>drop dil. H<sub>2</sub>SO<sub>4</sub> into the test tube."),gt.gettext("Click on the knob of the burner to turn it on. "),gt.gettext("Again drag the dropper towards the test tube to<br>drop dil. H<sub>2</sub>SO<sub>4</sub> into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop potassium<br>permanganate solution into the test tube.")];
		HelpMsg_silverNitrate=[gt.gettext("Drag the dropper towards the test tube to drop<br>salt solution into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop<br>dil. HNO<sub>3</sub> into the test tube."),gt.gettext("Click on the knob of the burner to turn it on."),gt.gettext("Drag the dropper towards the test tube to drop<br>silver nitrate solution into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop potassium<br>permanganate solution into the test tube.")];
		HelpMsg_manganeseDioxide=[gt.gettext("Drag the original salt towards the test tube<br>to put it into the test tube."),gt.gettext("Drag manganese dioxide towards the test tube<br>to put it into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop<br>conc. H<sub>2</sub>SO<sub>4</sub> into the test tube."),gt.gettext("Click on the knob of the burner to turn it on."),gt.gettext("Drag the starch-iodide paper towards the test tube to show it<br>in the gas evolved from the test tube.")];
		HelpMsg_chromylChloride=[gt.gettext("Drag the original salt towards the test tube to<br>put it into the test tube."),gt.gettext("Drag the potassium dichromate powder towards the test tube to<br>put it into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop<br>conc. H<sub>2</sub>SO<sub>4</sub> into the test tube."),gt.gettext("Drag the cork towards the test tube to close<br>the test tube with it."),gt.gettext("Drag the delivery tube towards the test tube to insert it<br>into the test tube through the cork."),gt.gettext("Click on the knob of the burner to turn it on."),gt.gettext("Drag the dropper towards the test tube to drop<br>dil. acetic acid (CH<sub>3</sub>COOH) into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop lead acetate solution<br>into the test tube.")];
		HelpMsg_chlorineWater=[gt.gettext("Drag the dropper towards the test tube to drop<br>salt solution into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop dil.HCl<br>into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop<br>carbon disulphide into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop<br>chlorine water into the test tube."),gt.gettext("Drag the test tube towards<br>the canvas area to shake it.")];
		HelpMsg_oxalicAcid=[gt.gettext("Drag the watch glass towards the canvas area<br>to place it in the canvas area."),gt.gettext("Drag the original salt towards the watch glass<br>to put it into the watch glass."),gt.gettext("Drag the oxalic acid crystals towards the watch glass<br>to put it into watch glass."),gt.gettext("Drag the bottle of distilled water towards the canvas area<br>and drag the dropper towards the watch glass to<br>drop distilled water into the mixture."),gt.gettext("Drag the hand towards the watch glass to rub<br>the pre-wetted mixture with the fingers.")];
		HelpMsg_esterTest=[gt.gettext("Drag the original salt towards the test tube<br>to put it into the test tube."),gt.gettext("Drag the bottle of conc.H<sub>2</sub>SO<sub>4</sub> towards the canvas area<br>and drag the dropper towards the test tube to<br>drop conc. H<sub>2</sub>SO<sub>4</sub> into the salt. "),gt.gettext("Click on the knob of the burner to turn it on."),gt.gettext("Drag the bottle of ethyl alcohol towards the canvas area<br>and drag the dropper towards the test tube to drop ethyl alcohol<br>into the test tube."),gt.gettext("Drag the beaker containing water near the burner<br>to place it in canvas area."),gt.gettext("Click on the test tube and drag it towards the canvas area<br>to shake it well and pour the contents into<br>beaker containing water.")];
		HelpMsg_ferricChloride=[gt.gettext("Drag the dropper towards the first test tube placed<br>in the test tube rack to drop the salt solution<br> into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop ferric chloride<br>solution into the salt solution."),gt.gettext("Drag the filter funnel towards the second test tube in the test tube<br>rack to place it over the mouth of the test tube."),gt.gettext("Drag the test tube towards the funnel to filter the contents<br>into the second test tube through the funnel."),gt.gettext("Drag the test tube towards the stand to pour half of the reddish<br>coloured filtrate into the test tube fixed to the stand."),gt.gettext("Drag the dropper towards the stand to drop water into<br>the test tube containing reddish coloured filtrate. "),gt.gettext("Click on the knob of the burner to turn it on."),gt.gettext("Drag the dropper towards the test tube in the test tube rack to<br>drop dil. HCl in to the reddish coloured filtrate.")];	
		HelpMsg_concSulphuricAcid=[gt.gettext("Drag the original salt towards the stand to put it<br>into the test tube, fixed to the stand."),gt.gettext("Drag the dropper towards the test tube to drop conc. H<sub>2</sub>SO<sub>4</sub><br>into the salt."),gt.gettext("If colourless gas with pungent smell is evolved, drag<br>the glass rod towards the bottle containing aqueous ammonia to dip<br>it in ammonia solution and again drag it towards the test tube<br>to show it in the colourless gas. "),gt.gettext("If reddish brown gas with pungent smell is evolved,<br>drag the starch paper towards the tests tube to<br>show it in the reddish – brown gas."),gt.gettext("If deep violet vapours with pungent smell is evolevd,<br>drag the starch paper towards the tests tube to show it<br>in the violet vapours."),gt.gettext("If colourless gas is evolved, drag the cork towards the stand<br>to close the test tube fixed to the stand with it."),gt.gettext("Drag the delivery tube towards the stand to insert it<br>into the test tube through the cork.")];
		HelpMsg_calciumChlorid=[gt.gettext("Drag the dropper towards the test tube to drop salt<br>solution into the test tube."),gt.gettext("Drag the dropper towards the test tube to<br>drop acetic acid (C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>) into the test tube."),gt.gettext("Click on the knob of the burner to turn it on. "),gt.gettext("Drag the dropper towards the test tube to drop<br>calcium chloride solution into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop<br>dil.HNO<sub>3</sub> into the test tube.")];
		HelpMsg_oxalate_potassium=[gt.gettext("Drag the original salt towards the test tube to<br>put it into test tube."),gt.gettext("Drag the dropper towards the test tube to drop<br>dil. H<sub>2</sub>SO<sub>4 into the test tube."),gt.gettext("Click on the knob of the burner to turn it on."),gt.gettext("Drag the dropper towards the test tube to drop potassium permanganate<br> solution into the test tube.")];	
		HelpMsg_magnesiaMixture=[gt.gettext("Drag the dropper towards the test tube <br>to drop salt solution into test tube."),gt.gettext("Drag the dropper towards the test tube <br>to drop magnesia mixture into test tube.")];
		preliminary=[gt.gettext("Physical Examination"),gt.gettext("Dry Heating Test"),gt.gettext("Dilute Sulphuric Acid Test"),gt.gettext("Potassium permanganate test"),gt.gettext("Concentrated Sulphuric Acid Test"),gt.gettext("Independent Group Test")];
		confirmation=[gt.gettext("--Select--"),gt.gettext("Carbonate"),gt.gettext("Sulphite"),gt.gettext("Sulphide"),gt.gettext("Nitrite"),gt.gettext("Nitrate"),gt.gettext("Chloride"),gt.gettext("Bromide"),gt.gettext("Iodide"),gt.gettext("Acetate"),gt.gettext("Oxalate"),gt.gettext("Sulphate"),gt.gettext("Phosphate")];
		dryheatitems=[gt.gettext("Colourless and odourless gas"),gt.gettext("Colourless gas with odour"),gt.gettext("Coloured gases")];
		confirmationExp=[[],[gt.gettext("Dil HCl test"),gt.gettext("Magnesium sulphate test")],[gt.gettext("Barium chloride test"),gt.gettext("Potassium dichromate test"),gt.gettext("Potassium permanganate test")],[gt.gettext("Sodium nitroprusside test"),gt.gettext("Lead acetate test"),gt.gettext("Cadmium carbonate test")],[gt.gettext("Ferric sulphate test"),gt.gettext("Starch-iodide test"),gt.gettext("Diphenylamine test")],[gt.gettext("Diphenylamine test"),gt.gettext("Copper chip test"),gt.gettext("Brown Ring test")],[gt.gettext("Silver nitrate test"),gt.gettext("Maganese dioxide test"),gt.gettext("Chromyl chloride test")],[gt.gettext("Silver nitrate test"),gt.gettext("Maganese dioxide test"),gt.gettext("Chlorine water test")],[gt.gettext("Silver nitrate test"),gt.gettext("Maganese dioxide test"),gt.gettext("Chlorine water test")],[gt.gettext("Oxalic acid test"),gt.gettext("Ester test"),gt.gettext("Ferric chloride test")],[gt.gettext("Calcium chloride test"),gt.gettext("Potassium permanganate test")],[gt.gettext("Barium chloride test"),gt.gettext("Match stick test"),gt.gettext("Lead acetate test")],[gt.gettext("Ammonium molybdate test"),gt.gettext("Magnesia mixture test")]];		
		$("#preliminaryLbl").text(gt.gettext("Select the preliminary test:"));
		$("#confirmationLbl").text(gt.gettext("Select the confirmation test:"));
		$("#confSubLbl").text(gt.gettext("Select the experiment:"));
		$('#subDivisionText').html(gt.gettext("Select the subdivision of dry heating test:"));
		physicalLable=[gt.gettext("Water")];
		preliminaryFun=[physicalTest,dryHeatTest,physicalTest,potassiumPermanganateTest,concSulphuricAcidTest,physicalTest,physicalTest];
		dryHeatFunc=[dryHeatOdourColor,dryHeatOdour,dryHeatColor]
		confnFuns=[[hideConfirmSub],[hclTest,magnesiumSulphateTest],[confirmationOfAcetate,esterTest,ferricChlorideTest],[confirmationOfAcetate,esterTest,ferricChlorideTest],[confirmationOfAcetate,esterTest,ferricChlorideTest],[confirmationOfAcetate,esterTest,ferricChlorideTest],[chlorideSilvernitrateTest,chlorideManganesDioxideTest,chromylChlorideTest],[chlorideSilvernitrateTest,chlorideManganesDioxideTest,chlorineWaterTest],[chlorideSilvernitrateTest,chlorideManganesDioxideTest,chlorineWaterTest],[confirmationOfAcetate,esterTest,ferricChlorideTest],[calciumChlorideTest,oxalatePotassiumTest],[confirmationOfAcetate,esterTest,ferricChlorideTest],[confirmationOfAcetate,magnesiaMixtureTest]];
		
		/*Dry heating test labels*/
		dryHeatLabel=[gt.gettext("Cork"),gt.gettext("Lime water"),gt.gettext("Delivery tube"),gt.gettext("Lead acetate paper"),gt.gettext("Ferrous sulphate"),gt.gettext("Starch iodide paper"),gt.gettext("Starch paper"),gt.gettext("Ammonia"),gt.gettext("NH<sub>4</sub>OH"),gt.gettext("Glass rod")];
		dryHeatInfer=[gt.gettext("The gas evolved is CO2. CO<sub>3</sub><sup>2-</sup> or C<sub>2</sub>O<sub>4</sub><sup>2- </sup>may be present."),gt.gettext("The gas evolved is H<sub>2</sub>S.  Hydrated S<sup>2-</sup> may be present."),gt.gettext("The gas evolved is SO<sub>2</sub>. SO<sub>3</sub><sup>2-</sup> may be present."),gt.gettext("The gas evolved is NH<sub>4</sub>Cl. Cl<sup>-</sup> may be present."),gt.gettext("CH<sub>3</sub>COO<sup>-</sup> may be present."),gt.gettext("NO<sub>2</sub><sup>-</sup> or NO<sub>3</sub><sup>-</sup> may be present."),gt.gettext("Cl<sup>-</sup> may be present."),gt.gettext("I<sup>-</sup> may be present."),gt.gettext("No characteristic change")]
		dryHeatHelp=[gt.gettext("Drag the cork towards the test tube<br> to close the test tube with it."),gt.gettext("Drag the delivery tube towards the test tube to insert <br>it into the test tube through the cork."),gt.gettext("Drag test tube containing lime water towards <br>the delivery tube to insert the other end of the <br>delivery tube in the lime water."),gt.gettext("Click on the knob of the burner to turn it on."),gt.gettext("If colourless gas with the smell of rotten egg <br>is evolved, drag the lead acetate paper towards the <br>test tube to show it in the gas."),gt.gettext("If  colourless gas with pungent smell is <br>evolved, drag the glass rod towards the bottle containing <br>aqueous ammonia to dip it in ammonia solution and again drag it <br>towards the test tube to show it in the colourless gas."),gt.gettext("If reddish brown fumes are evolved,<br> drag the test tube containing ferrous sulphate solution <br>towards the delivery tube to insert the other end of <br>the delivery tube in the ferrous sulphate solution."),gt.gettext("If greenish yellow gas is evolved,drag the <br>starch-iodide paper towards the test tube to <br>shown it in the greenish yellow gas."),gt.gettext("If dark violet vapours are evolved, <br>drag the starch paper towards the tests tube <br>to show it in the violet vapours.")];
		dryHeatAmmonia=gt.gettext("Again drag the glass rod over the mouth of the test tube to <br>show it on the gas coming out of the test tube.")
		carbonateHelp=[gt.gettext("Drag the dropper towards the test tube <br>to drop dil.HCl into the test tube."),gt.gettext("Drag the cork towards the test tube <br>to close the test tube with it."),gt.gettext("Drag the delivery tube towards the test tube to insert it<br> into the test tube through the cork."),gt.gettext("Drag test tube containing lime water towards the delivery tube <br>to insert the other end of the delivery tube in the lime water."),gt.gettext("Drag the dropper towards the test tube to drop <br>magnesium sulphate solution into the test tube.")];
		dryHeatSmell=[gt.gettext("Colourless gas with the smell of <br>rotten eggs turns lead acetate paper black"),gt.gettext("Colourless gas with smell <br> of burning sulphur."),gt.gettext("Colourless gas with pungent smell, <br>gives white fumes with ammonia."),gt.gettext("Colourless gas with the smell of vinegar.")];
		/*Dil H2SO4 labels*/
		dilH2SO4Label=[gt.gettext("Acidified potassium dichromate paper")];
		dilH2SO4Inference=[gt.gettext("The gas evolved is CO<sub>2</sub>. This may be due to the presence of CO<sub>3</sub><sup>2-</sup>."),gt.gettext("The gas evolved is H<sub>2</sub>S. This may be due to the presence of S<sup>2-</sup>."),gt.gettext("The gas evolved is SO<sub>2</sub>. This may be due to the presence of SO<sub>3</sub><sup>2-</sup>."),gt.gettext("The gas evolved is NO<sub>2</sub>. This may be due to the presence of NO<sub>2</sub><sup>-</sup>.")];
		dilH2SO4Help=[gt.gettext("Drag the dropper towards the test tube <br>to drop dil.H<sub>2</sub>SO<sub>4</sub> into the test tube."),gt.gettext("If colourless gas with the smell of rotten egg<br> is evolved, drag the lead acetate paper towards <br>the test tube to show it in the gas."),gt.gettext("If colourless gas with the smell of burning sulphur <br>is evolved, drag the acidified potassium dichromate paper <br>towards the test tube to show it in the gas."),gt.gettext("If reddish brown fumes are evolved, drag the <br>test tube containing ferrous sulphate solution <br>towards the delivery tube to insert the other end of <br>the delivery tube in the ferrous sulphate solution."),gt.gettext("If colourless odourless gas with brisk effervescence <br>is seen, drag the test tube containing lime water towards <br>the delivery tube to insert the other end of the <br>delivery tube in the lime water."),gt.gettext("Drag the cork towards the test tube <br>to close the test tube with it."),gt.gettext("Drag the delivery tube towards the test tube to <br>insert it into the test tube through the cork.")];
		/*Independent group test */
		hno3Label=gt.gettext("Conc. HNO<sub>3</sub>");
		ammoniummolybdateLabel=gt.gettext("Ammonium molybdate");
		grouptestInference=[gt.gettext("This indicates the presence of SO<sub>4</sub><sup>2-</sup>. "),gt.gettext("This indicates he presence of PO<sub>4</sub><sup>3-</sup>.")];
		grouptestHelp=[gt.gettext("Drag the funnel towards the test tube <br>to place it over the mouth of  the test tube."),gt.gettext("Drag the test tube towards the funnel to<br>filter the contents into the other test tube through the funnel."),gt.gettext("Drag the dropper towards the test tube to <br>drop dil.HNO<sub>3</sub> into the test tube."),gt.gettext("Drag the dropper towards the test tube to<br> drop ammonium molybdate solution into the test tube.")];
		/* --CONFIRMATION ------*/
		carbonateLabel=[gt.gettext("Dil.HCl"),gt.gettext("MgSO<sub>4</sub>")];
		confirmationInfer=[gt.gettext("The gas evolved is CO<sub>2</sub>."),gt.gettext("The white precipitate is MgCO<sub>3</sub>."),gt.gettext("CO<sub>2</sub> reacts with lime water  to form <br> white precipitate of CaCO<sub>3</sub> which is <br>responsible for the milkness.")];

		confirmationBottleLabel=[gt.gettext("Acidified K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>"),gt.gettext("Acidified KMnO<sub>4</sub>"),gt.gettext("Na<sub>2</sub>[Fe(CN)<sub>5</sub>NO]"),gt.gettext("Pb(C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>)<sub>2</sub>"),gt.gettext("CdCO<sub>2</sub>"),gt.gettext("C12H11N")];
		confirmationTextLabel=[gt.gettext("Sodium nitroprusside"),gt.gettext("Lead acetate"),gt.gettext("Cadmium carbonate"),gt.gettext("Diphenylamine")];
		sulphideInfer=[gt.gettext("The purple or violet colouration is due to the formation of Na<sub>4</sub>[Fe(CN)<sub>5</sub>NOS]."),gt.gettext("The black precipitate is lead sulphide (PbS)."),gt.gettext("The yellow precipitate is cadmium sulphide (CdS).")];
		confirmationInference=[gt.gettext("This confirms the presence of sulphite ion."),gt.gettext("This confirms the presence of sulphite ion."),gt.gettext("The purple or violet colouration is due to the formation of Na<sub>4</sub>[Fe(CN)<sub>5</sub>NOS]."),gt.gettext("The black precipitate is lead sulphide (PbS)."),gt.gettext("The yellow precipitate is cadmium sulphide (CdS)."),gt.gettext("In the presence of nitrite diphenylamine gets oxidised, giving a blue colouration.")];
		help_k2cr2o7=[gt.gettext("Drag the dropper towards the test tube to drop acidified <br>potassium dichromate solution into the test tube.")];
		help_kmno4=[gt.gettext("Drag the dropper towards the test tube to drop <br>acidified potassium permanganate solution into the test tube.")];
		help_sodiumnitroprusside =[gt.gettext("Drag the dropper towards the test tube to drop <br>sodium nitroprusside solution into the test tube.")];
		help_leadacetate=[gt.gettext("Drag the dropper towards the test tube to drop<br> lead acetate solution into the test tube.")];
		help_cadmiumcarbonate=[gt.gettext("Drag the dropper towards the test tube to drop <br>cadmium carbonate suspension into the test tube.")];
		help_diphenylamine=[gt.gettext("Drag the dropper towards the test tube to <br>drop diphenylamine into the test tube.")];
		/*- Ferric sulphate test
		Barium chloride test-*/		
		bariumchlorideconfirmation=[gt.gettext("BaCl<sub>2</sub>"),gt.gettext("Barium chloride"),gt.gettext("Dil. hydrochloric acid"),gt.gettext("Dil. HCl")];
		ferricSulphateconfirmation=[gt.gettext("FeSO<sub>4</sub> (aq)"),gt.gettext("Ferrous sulphate"),gt.gettext("Dil. acetic acid"),gt.gettext("Dil. CH<sub>3</sub>COOH")];
		inferenceFe2SO43BaCl2=[gt.gettext("The white precipitate is barium sulphite(BaSO<sub>4</sub>)."),gt.gettext("Barium sulphite dissolves in Dil. HCl with the liberation of SO<sub>2</sub> gas."),gt.gettext("The black colour is due to the formation of FeSO<sub>4</sub>.NO.")];
		
		helpBaCl2=[gt.gettext("Drag the dropper towards the test tube to drop <br>barium chloride solution into the test tube."),gt.gettext("Drag the dropper towards the test tube to <br>drop dil.HCl into the test tube.")];
		helpFe2SO43=[gt.gettext("Drag the dropper towards the test tube to drop <br>ferrous sulphate solution into the test tube."),gt.gettext("Drag the dropper towards the test tube <br>to drop acetic acid into the test tube.")];
		/*Starch iodide test*/
		starchIodideBottleLabel=[gt.gettext("Dil. H<sub>2</sub>SO<sub>4</sub> "),gt.gettext("Potassium iodide"),gt.gettext("Starch solution"),gt.gettext("KI")];
		starchIodideInference=[gt.gettext("Iodine liberated during the reaction forms a blue-black complex with strach.")];	
		starchIodideHelp=[gt.gettext("Drag the dropper towards the test tube <br>to drop dil.H<sub>2</sub>SO<sub>4</sub> into the test tube."),gt.gettext("Drag the dropper towards the test tube <br>to drop potassium iodide solution into the test tube."),gt.gettext("Drag the dropper towards the test tube <br>to drop starch solution into the test tube.")];
		/* Copper Chip Test */
		copperChipTestLabel=[gt.gettext('Conc. Sulphuric acid'),gt.gettext('Conc. H<sub>2</sub>SO<sub>4</sub>'),gt.gettext('Copper chips')];	
		copperChipHelp=[gt.gettext("Click on the knob of the burner to turn it on. "),gt.gettext("Drag the dropper towards the test tube <br>to drop conc.H<sub>2</sub>SO<sub>4</sub> into the test tube."),gt.gettext("Drag the forceps towards the test tube to<br> put the copper chips into the test tube.")];
		copperChipInference=[gt.gettext("The reddish-brown fumes is due to the formation of NO<sub>2</sub> gas.")];
		/* Brown Ring Test */
		brownRingTestconfirmation=[gt.gettext('dil. Sulphuric acid')];
		brownRingTestHelp=[gt.gettext("Drag the dropper towards the test tube to <br>drop ferrous sulphate solution into the test tube."),gt.gettext("Drag the dropper towards the test tube <br>to drop conc.H<sub>2</sub>SO<sub>4</sub> into the test tube.")];
		brownRingTestInference=[gt.gettext('The brown ring is due to the formation of <br> nitrosonium complex [Fe(NO)(H<sub>2</sub>O)<sub>5]</sub>SO<sub>4</sub>')];		
		/* Confirmation sulphate test*/
		sulphateInference=[gt.gettext('BaSO<sub>4</sub> is insoluble in Dil. HCl'),gt.gettext('The white precipitate is lead sulphate (PbSO<sub>4</sub>)'),gt.gettext('PbSO<sub>4</sub> is insoluble in excess of hot ammonium acetate.') ];
		ammoniaacetateLabel=[gt.gettext('C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>NH<sub>4</sub>'),gt.gettext('Hot ammonium acetate ')];
		helpsulphate=[gt.gettext("Drag the dropper towards the test tube to<br> drop lead acetate solution into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop <br>hot ammonium acetate solution into the test tube. ")];
		/* Match stick test*/
		matchstickLabels=[gt.gettext("Sodium carbonate "),gt.gettext("Charcoal "),gt.gettext("Glass rod"),gt.gettext("Sodium nitroprusside"),gt.gettext("Match stick"),gt.gettext("Water")];
		matchsticktestInference=gt.gettext("This confirms the presence of sulphate");
		matchsticktestHelp=[gt.gettext("Drag the spatula towards the watch glass to <br>add sodium carbonate into the original salt. "),gt.gettext("Drag the spatula towards the watch glass to<br> put powdered charcoal into the watch glass."),gt.gettext("Drag the bottle of distilled water towards the watch<br> glass to drop water into the mixture."),gt.gettext("Drag glass rod towards the  watch glass to<br> mix the contents of the watch glass."),gt.gettext("Drag the dish containing sodium nitroprusside solution <br>towards the watch glass to place it in the canvas area. "),gt.gettext("Click on the knob of the burner to turn it on <br>and click on the air adjusting disc to close the <br>air hole to get the reducing flame."),gt.gettext("Drag match stick towards the watch glass <br>to dip it into the mixture."),gt.gettext("Drag match stick towards the burner <br>to heat the mixture on the tip of the match stick <br>in the reducing flame."),gt.gettext("Drag match stick towards the dish to dip the fused <br>mass into the sodium nitroprusside solution.")];		
		/*Ammonium molybdate test*/
		ammoniummolybdateInference=gt.gettext("The deep yellow precipitate is ammonium phosphate molybdate <br>{(NH<sub>4</sub>)<sub>3</sub>PO<sub>4</sub>.12MoO<sub>3</sub>.6H<sub>2</sub>O}.");
		toolTipMsgs=[gt.gettext("There is no characteristic changes")];
		/*Physical examination test labels*/
		inferenceMsgs=[gt.gettext("Vinegar like smell"),gt.gettext("Smell like that of rotten eggs"),gt.gettext("There is no smell"),gt.gettext("Presence of acetate ion."),gt.gettext("This may be due to the presence of CH<sub>3</sub>COO<sup>-</sup>."),gt.gettext("There is no characteristic changes.")];		
		/*------------- confirmation of Oxalic acid test------------- */
		labelArray=[gt.gettext("Oxalic acid test"),gt.gettext("Watch glass"),gt.gettext("Water"),gt.gettext("Distilled water"),gt.gettext("Hand"),gt.gettext("Oxalic acid"),gt.gettext("Original salt")];
		commomLabels=[gt.gettext("Original salt"),gt.gettext("H<sub>2</sub>SO<sub>4</sub>"),gt.gettext("Dil. H<sub>2</sub>SO<sub>4</sub>"),gt.gettext("KMnO<sub>4</sub>"),gt.gettext("conc. H<sub>2</sub>SO<sub>4</sub>"),gt.gettext("Salt"),gt.gettext("Salt solution")]//5  
		
		potassiumLabel=[gt.gettext("Potassium permanganate test"),gt.gettext("Potassium permanganate"),gt.gettext("This may be due to the presence of Cl<sup>-</sup>."),gt.gettext("This may be due to the presence of Br<sup>-</sup>."),gt.gettext("This may be due to the presence of I<sup>-</sup>."),gt.gettext("The potassium permanganate does not decolorized"),gt.gettext("The pink colour of potassium permanganate is decolourised<br> with the evolution of carbon dioxide gas."),gt.gettext("Potassium permanganate not decolorized and <br>there is no characteristic changes")]
		concSulphuricLabel=[gt.gettext("Conc. sulphuric acid test"),gt.gettext("Glass rod"),gt.gettext("Cork"),gt.gettext("Delivery tube"),gt.gettext("Ammonia"),gt.gettext("Aqueous ammonia"),gt.gettext("Starch paper"),gt.gettext("A pungent irritating smell"),gt.gettext("Reddish brown gas with pungent smell"),gt.gettext("Pungent smell"),gt.gettext("Colourless gass"),gt.gettext("The gas evolved is CO<sub>2</sub>. This may be due to the presence of C<sub>2</sub>O<sub>4</sub><sup>2-</sup>."),gt.gettext("The gas evolved is HCl. This may be due to the presence of Cl<sup>-</sup>."),gt.gettext("The gas evolved is Br<sub>2</sub>. This may be due to the presence of Br<sup>-</sup>."),gt.gettext("The gas evolved is I<sub>2</sub>. This may be due to the presence of I<sup>-</sup>."),gt.gettext("Lime Water")]
		/*-------------Ester test labels ---------------*/
		$( "#esterHeading" ).html(gt.gettext("Ester test"));
		$('#ester_h2so4Txt').html(gt.gettext("H<sub>2</sub>SO<sub>4</sub>"));	
		$('#ester_ethylTxt').html(gt.gettext("Ethyl alcohol"));	
		$( "#esterConfTxt" ).html(gt.gettext("Pleasant fruity smell of ester"));
		$( "#esterSaltTxt" ).html(gt.gettext("Original salt"));
		$( "#esterH2so4" ).html(gt.gettext("conc. H<sub>2</sub>SO<sub>4</sub>"));
		$( "#ester_h2so4_lbl" ).html(gt.gettext("H<sub>2</sub>SO<sub>4</sub>"));
		$( "#ester_ethyl_lbl" ).html(gt.gettext("ethyl a"));
		$( "#esterEthylTxt" ).html(gt.gettext("Ethyl alcohol"));
		$( "#esterBeakerTxt" ).html(gt.gettext("Water"));
		esterInfMsg=[gt.gettext("The fruity smell is due to the formation of ethyl acetate."),gt.gettext("There is no characteristic changes")];
		//--Feric chloride labels  ---	
		fericChlorideLabel=[gt.gettext("Ferric chloride test"),gt.gettext("Filter funnel"),gt.gettext("Salt"),gt.gettext("FeCl<sub>3</sub>"),gt.gettext("Water"),gt.gettext("Dil.HCl"),gt.gettext("The reddish coloured filtrate is due to the formation of (CH<sub>3</sub>COO)<sub>3</sub>Fe."),gt.gettext("Reddish colour disappears. This confirms the presence of acetate ion."),gt.gettext("The reddish brown precipitate is due to the formation of (CH<sub>3</sub>COO) (OH<sub>2</sub>) Fe"),gt.gettext("There is no characteristic changes")];
		
		// -------Silver Nitrate test labels-------------
		silverNitrateLabel=[gt.gettext("Silver nitrate test"),gt.gettext("HNO<sub>3</sub>"),gt.gettext("Dil. HNO<sub>3</sub>"),gt.gettext("AgNO<sub>3</sub>"),gt.gettext("NH<sub>4</sub>OH")];
		silverNitrateInfMsg=[gt.gettext("The white precipitate is silver chloride which dissolved in<br> ammonium hydroxide to form the soluble complex, [Ag(NH<sub>3</sub>)<sub>2</sub>]Cl."),gt.gettext("The pale yellow precipitate is silver bromide which<br> is sparingly soluble in ammonium hydroxide."),gt.gettext("The yellow precipitate is silver iodide<br> which is insoluble in ammonium hydroxide."),gt.gettext("There is no characteristic changes")];
		manganeseDioxideLabel=[gt.gettext("Manganese dioxide test"),gt.gettext("Original salt"),gt.gettext("MnO<sub>2</sub>"),gt.gettext("H<sub>2</sub>SO<sub>4</sub>"),gt.gettext("conc. H<sub>2</sub>SO<sub>4</sub>"),gt.gettext("Starch-iodide paper")];
		manganeseDioxideInfMsg=[gt.gettext("The greenish yellow gas is due to the formation of chlorine gas."),gt.gettext("The brown vapours is due to the formation of bromine gas."),gt.gettext("The violet vapours are due to the formation of iodine gas."),gt.gettext("There is no characteristic changes")]
		//--Chromyl chloride Test labels  ---	
		chromylChlorideLabel=[gt.gettext("Chromile chloride test"),gt.gettext("Original salt"),gt.gettext("Potassium dichromate"),gt.gettext("CH<sub>3</sub>COOH"),gt.gettext("Dil. CH<sub>3</sub>COOH"),gt.gettext("Lead"),gt.gettext("Lead acetate"),gt.gettext(" A pungent irritating smell"),gt.gettext("The red fumes is due to the formation of  chromyl chloride.<br>CrO<sub>2</sub>Cl<sub>2</sub> reacts with NaOH to form yellow solution of sodium chromate."),gt.gettext("Na<sub>2</sub>CrO<sub>4</sub> reacts with lead acetate in presence of Dil. acetic<br>acid to form yellow precipitate of lead chromate (PbCrO<sub>4</sub>)."),gt.gettext("There is no characteristic changes")];
		//--Chlorine Water Test labels  ---	
		chlorineWaterLabel=[gt.gettext("Chlorine water test"),gt.gettext("Salt"),gt.gettext("Original salt"),gt.gettext("HCL"),gt.gettext("Dil. HCL"),gt.gettext("Disulphide"),gt.gettext("Carbon disulphide"),gt.gettext("chlorine"),gt.gettext("Chlorine water"),gt.gettext("Bromine liberated during the reaction being soluble in<br>carbon disulphide (CS<sub>2</sub>) imparts an orange colour to the CS<sub>2</sub> layer."),gt.gettext("Iodine liberated during the reaction being soluble in carbon<br> disulphide (CS<sub>2</sub>) imparts an orange colour to the CS<sub>2</sub> layer")];
		//--Calcium chloride Test labels  ---	
		calciumChloride=[gt.gettext("Calcium chloride test"),gt.gettext("Salt"),gt.gettext("Original salt"),gt.gettext("C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>"),gt.gettext("Dil. Acetic acid"),gt.gettext("CaCl<sub>2</sub>"),gt.gettext("Calcium chloride"),gt.gettext("HNO<sub>3</sub>"),gt.gettext("Dil.HNO<sub>3</sub>"),gt.gettext("The white precipitate is calcium oxalate (CaC<sub>2</sub>O<sub>4</sub>)<br>and is dissolved in Dil.HNO<sub>3</sub>."),gt.gettext("There is no characteristic changes")];
		//----------Oxalate potassium label---------
		$( "#oxalateKMnO4InferenceTxt" ).html(gt.gettext("Evolution of CO<sub>2</sub> gas."));
		$( "#oxalateKMnO4InferenceTxt_1" ).html(gt.gettext("60<sup>0</sup> - 70<sup>0</sup> C "));
		//----------Magnesia Mixture label---------
		magnesiaMixture=[gt.gettext("Magnesia mixture test"),gt.gettext("Salt"),gt.gettext("Original salt"),gt.gettext("Magnesia"),gt.gettext("Magnesia Mixture"),gt.gettext("The white precipitate is magnesium<br> ammonium phosphate (Mg(NH<sub>4</sub>)PO<sub>4</sub>)."),gt.gettext("There is no characteristic changes")];
		addLabel();
		//*--Function for adding label for all controls---	
		function addLabel(){		
			$('#observation1').html(preliminary[0]);	
			//$('#text1_0').html(labelArray[1]);	
			//$('#water1_1').html(labelArray[2]);	
			//$('#text1_1').html(labelArray[3]);	
			$('#text1_2').html(labelArray[4]);
			$('#phySaltTxt').html(labelArray[6]);	
		}
		mainTop=$('#mainDiv').position().top;
		mainLeft=$('#mainDiv').position().left;	
		
		/*Draw background image*/
		var BGCanvas = document.getElementById("bgCanvas");
		BGCanvas.width = 570;
		BGCanvas.height = 345;
		var bgCtx = BGCanvas.getContext('2d');
		var bgImg = new Image;
		bgImg.onload = function(){ 
			bgCtx.drawImage(bgImg,0,0,570,345);
		};
		bgImg.src=simPath+'images/BG.gif'
		/*Add values into combobox*/
		addintoDropDown( $('#preliminary'),preliminary);
		addintoDropDown( $('#confirmation'),confirmation);
		addintoDropDown( $('#subDivision'),dryheatitems);
		/*confirmation combobox disabled*/
		$('#confirmation').attr("disabled","disabled");
		/*Hide sub  comboboxes*/
		$('#dryHeatSubCombo,#confirmationSubCombo').hide();		
		preliminaryFun[0]();
		
		//Function to add values into combobox
		function addintoDropDown(getId,valueSet){
			$.each(valueSet, function(val, text) {
				getId.append(
					$('<option ></option>').val(val).html(text) 
				);
			});
		}
		$('#preliminary,#confirmation,#confirmationTests').change(function() {
			hideAllTests();
		});
		//Preliminary combobox onchange
		$('#preliminary').change(function() {
			preliminarySelected=true;
			preliminaryIndex=$('#preliminary option:selected').val();	
			if(preliminaryIndex==1){$('#dryHeatSubCombo').show();dryHeatFunc[0]();}
			else{$('#dryHeatSubCombo').hide();}
			preliminaryFun[preliminaryIndex]();
		});
		//Dry heat sub combobox onchange
		$('#subDivision').change(function() {
			preliminarySubIndex=$('#subDivision option:selected').val();
			dryHeatFunc[preliminarySubIndex]();
		});
		//Conformation combobox onchange
		$('#confirmation').change(function() {	
			$('#confirmationTests').empty();		
			confirmationIndex=$('#confirmation option:selected').val();	
			confirmationSubIndex=0;
			$('#confirmationSubCombo').show();			
			addintoDropDown( $('#confirmationTests'),confirmationExp[confirmationIndex]);
			confnFuns[confirmationIndex][confirmationSubIndex](); 
			preliminarySelected=false;
		});	
		//Conformation combobox onchange
		$('#confirmationTests').change(function() {				
			confirmationSubIndex=$('#confirmationTests option:selected').val();
			confnFuns[confirmationIndex][confirmationSubIndex]();
		});	
		//Dry heat sub combobox hide
		function hideConfirmSub(){
			$('#confirmationSubCombo').hide();
		}
		
		function hideAllTests(){
			$('#inference_Div').hide();
			$('#inferButton').hide();
			$('#potassium,#acetate,#esterTest,#fericChloride,#physicalExam,#chlorideSilvernitrate').hide();
			$('#chlorideMaganese,#chromylChloride,#chlorineWater,#concSulphuricAcid').hide();
			$('#calciumChloride,#oxalatePotassium,#magnesiaMixture').hide();
			$('#preliminaryDryHeat,#carbonateTest,#sulphideTest,#hclTestDiv,#mgso4Test').hide();
			$('#confirmationTest,#confirmation_Fe2SO43_BaCl2,#starchIodideTest').hide();
			$('#copperChipTest,#brownRingtest,#matchstickTest,#ammoniummolybdateTestDiv').hide();	
			$('#preliminarydilH2SO4,#independentgroupTest').hide();	
		}
		//Function to reset everything
		$("#reset").click(function() {
			window.location.reload();			
		});
		function dropsFall(id,dLeft,dTop,animTo){alert("SDF");
		$("#"+id).css({
			left:dLeft,
			top:dTop
		})
		$("#"+id).css({display:"block"});
		$("#"+id).animate({
			top:animTo
		});
		$("#"+id).css({display:"none"});
	}
	});
	
}