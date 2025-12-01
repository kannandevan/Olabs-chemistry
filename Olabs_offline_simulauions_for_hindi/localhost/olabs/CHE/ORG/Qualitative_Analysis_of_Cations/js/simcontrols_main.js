// JavaScript Document
var gt=$;
var trip;
var Preliminary_Array;
var Group_array;
var Label_Array;
var conformation_test_array;
var sampleSalt,result,sampleSaltColor;
var	preliminaryIndex=0,preliminaryFunction,preliminary_help=true;
var confirmationExp,confirmationSubIndex=0,confirmationIndex=0,confnFuns;
var groupIndex=0;
var random_salt;
var inferenceMsg;
var infMsgPrefix,infMsgSufix,color_infMsg;
var smell_label,smell_infMsg;
var dryHeat_label;
var frame=0,flameClrIntvl;
var dryHeat_infMsg;
var random_solution;
var groupTestFunction,groupTestIndex=0,HelpMsg_groupZero;
//Charcoal cavity test
var random_spatulasalt,random_nickel,random_saltmix;
var charcoalcavitylabel;
var mainTop,mainLeft;
var charcoalcavityHelp;
var groupElements;
var zincInference,leadInference,ba2ca2mg2Inference;
var noreactionInference;
var residueLabel;
var gZeroExpHeadings;
var gZero_label,gZero_txt;
var NaOH_label,NaOH_txt,HelpMsg_sodiumHydroxide;
var nessler_label,HelpMsg_nesslersReagent;
var gOneTxt,HelpMsg_groupOne;
var coolTestTxt,HelpMsg_gOneCoolSolu;
var gOnePIodideTxt,HelpMsg_gOnePIodid;
var gOneChroomateTxt,HelpMsg_gOnePChromate;
var HelpMsg_colorTest,HelpMsg_smellTest,HelpMsg_dryHeatingTest;
var gTwoPIodideTxt;
var oxidizingFlameLabel,redusingFlameLabel;
//Cobalt nitrate test
var cobaltNitratelabel;
var magnesiumInference,aluminumInference,cobaltNitrateHelp;
//Borax bead test
var boraxbeadlabel,boraxBeadHelp,boraxBeadInference,oxidizingbeadhotInference,oxidizingbeadcoldInference,reducingbeadhotInference,reducingbeadcoldInference;
/*potassium Ferrocyanide Test*/
var dilHCllabel;
var pottasiumferrocyanidelabel,confirmation_fe_help1,confirmation_fe_inference1;
/*Potassium sulphocyanide test*/
var pottasiumsulphocyanidelabel,confirmation_fe_help2,confirmation_fe_inference2;
/*Sodium hydroxide-Br2 test*/
var NaOHlabel,brominewaterLabel,confirmation_mn_inference1,confirmation_mn_help1,confirmation_ni_inference2,confirmation_zn_inference1,confirmation_zn_inference2;
/*Dimethyl glyoxime test*/
var NH4OHlabel,dimethylglyoximeLabel,confirmation_ni_inference1,confirmation_ni_help1;
/* Lake test */
var bluelitmusLabel;
var laketest_inference,laketest_help;
var boardLabel_Laketest;
/* potassium nitrite test*/
var NH4OHexpandlabel,aceticacidlabel,aceticacidexpandlabel,potassiumnitrateexpandlabel,potassiumnitrate_inference,potassiumnitrate_help;
/*Ammonium thiocyanate*/
var ammoniumthiocyanateLabel,etherlabel,ammoniumthiocyanate_help,ammoniumthiocyanate_inference;
//Group three
var random_solution,groupThreelabel;
var group3_Inference,groupThree_Help;
var NH4_Inference,NH4_Help;
var leadperoxidelabel,confirmation_lead_inference,boardlabel_leadTest;
var confirmation_lead_help;
var salt_solutioncommon;
var helpclickFlag=false;
var arsenichotInference;
var copperhotInference;
var arseniccoldeInference;
var coppercoldInference;
var residuealuminumLabel;
var random_bead;
var sodiumhydroxideBr2_inference;
window.onload = function(){ 
	$(document).ready(function() {		
		document.getElementById("expName").innerHTML=gt.gettext("Qualitative Analysis of Cations");
		$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
		//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
		//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
		//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));	
		sampleSalt=[[],"Ammonium","Lead(I)","Copper(II)","Arsenic(III)","Iron(III)","Aluminum(III)","Cobalt(II)","Nickel(ll)","Manganese(II)","Zinc (II)","Barium","Strontium","Calcium","Magnesium","Lead(II)"];
		sampleSaltColor=[[],"#FFFFFF","#FFFFFF","#008fff","#FFFFFF","#c46f15","#FFFFFF","#9c273f",["#18c2ca","#7cda65"],"#d59fb7","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"];
		random_salt=["ammonium_chloride.png","ammonium_chloride.png","ammonium_chloride.png","copper_sulphate.png","ammonium_chloride.png","ferric_chloride.png","ammonium_chloride.png","cobalt_acetate.png",["nickel_sulphate.png","nickel_chloride.png"],"manganese_chloride.png","ammonium_chloride.png","ammonium_chloride.png","ammonium_chloride.png","ammonium_chloride.png","ammonium_chloride.png","ammonium_chloride.png"];
		random_solution=["#FFF","#FFF","#FFF","#1c87de","#FFF","#c36918","#FFF","#b3224a",["#09b3bb","#66c450"],"#d498b2","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF"];
		random_bead=["ammonium_chloride.png","ammonium_chloride.png","ammonium_chloride.png","copper_sulphate.png","ammonium_chloride.png","ferric_chloride.png","ammonium_chloride.png","cobalt_acetate.png",["nickel_sulphate.png","nickel_chloride.png"],"manganese_chloride.png","ammonium_chloride.png","ammonium_chloride.png","ammonium_chloride.png","ammonium_chloride.png","ammonium_chloride.png","ammonium_chloride.png"];
		random_nickel=Math.floor(Math.random() * 2);		
		random_salt[8]=random_salt[8][random_nickel];
		sampleSaltColor[8]=sampleSaltColor[8][random_nickel];
		random_solution[8]=random_solution[8][random_nickel];
		random_bead[8]=random_bead[8][random_nickel];
		result =Math.floor(Math.random() * sampleSalt.length);	
		if(result<=0 || result>=16) {result=1};
		$("#salt").attr('src',simPath+"images/"+random_salt[result]);
		preliminaryFunction=[colourTest,smellTest,dryHeatingTest,charcoalcavity,cobaltNitrate,flameTest,boraxBead];
		$("#saltsolution").css({"background-color" : random_solution[result]});
		salt_solutioncommon=gt.gettext("Salt solution");
		$('#saltsolutionlabel_saltsoln').html(salt_solutioncommon);
		//Combobox value of preliminary test.
		Preliminary_Array=[gt.gettext("Colour test"),gt.gettext("Smell test"),gt.gettext("Dry heating test"),gt.gettext("Charcoal cavity test"),gt.gettext("Cobalt nitrate test"),gt.gettext("Flame test"),gt.gettext("Borax bead test")];
		//Combobox value of Group test.
		Group_array=[gt.gettext("--Select--"),gt.gettext("Group zero"),gt.gettext("Group I"),gt.gettext("Group II"),gt.gettext("Group III"),gt.gettext("Group IV"),gt.gettext("Group V"),gt.gettext("Group VI")];
		//Text For label.
		Dropbox_Label_Array=[gt.gettext("Select preliminary test:"),gt.gettext("Select group analysis:"),gt.gettext("Select the cation:")]
		//Combobox value of conformation test.
		conformation_test_array=[gt.gettext("--Select--"),gt.gettext("Ammonium"),gt.gettext("Lead(II)"),gt.gettext("Copper(II)"),gt.gettext("Arsenic"),gt.gettext("Iron(III)"),gt.gettext("Aluminum"),gt.gettext("Cobalt"),gt.gettext("Nickel(ll)"),gt.gettext("Manganese(II)"),gt.gettext("Zinc (II)"),gt.gettext("Barium"),gt.gettext("Strontium"),gt.gettext("Calcium"),gt.gettext("Magnesium")];
		groupElements=[[gt.gettext("--Select--")],[gt.gettext("--Select--"),gt.gettext("Ammonium")],[gt.gettext("--Select--"),gt.gettext("Lead(II)")],[gt.gettext("--Select--"),gt.gettext("Lead(II)"),gt.gettext("Copper(II)"),gt.gettext("Arsenic (III)")],[gt.gettext("--Select--"),gt.gettext("Iron(III)"),gt.gettext("Aluminum (III)")], [gt.gettext("--Select--"),gt.gettext("Cobalt (II)"),gt.gettext("Nickel(ll)"),gt.gettext("Manganese(II)"),gt.gettext("Zinc (II)")],[gt.gettext("--Select--"),gt.gettext("Barium"),gt.gettext("Strontium"),gt.gettext("Calcium")],[gt.gettext("Magnesium")]];
		$("#confSubLbl").text(gt.gettext("Select the confirmatory test:"));		
		confirmationExp=[[],
						 [[],[gt.gettext("Sodium Hydroxide test"),gt.gettext("Nessler's Reagent test")]],
						 [[],[gt.gettext("Cool the solution"),gt.gettext("Potassium iodide test"),gt.gettext("Potassium chromate test")]],
						 [[],[gt.gettext("Potassium iodide test"),gt.gettext("Potassium chromate test")],[gt.gettext("Potassium ferrocyanide test"),gt.gettext("Potassium iodide test")],[gt.gettext("Ammonium molybdate test"),gt.gettext("Magnesia mixture test")]],
						 [[],[gt.gettext("Potassium ferrocyanide test"),gt.gettext("Potassium sulphocyanide test")],[gt.gettext("Lake test"),gt.gettext("Cobalt nitrate/Charcoal cavity test")]],						 
						 [[],[gt.gettext("Potassium nitrite test"),gt.gettext("Ammonium thiocyanate ether test"),gt.gettext("Borax bead test")],[gt.gettext("Dimethyl glyoxime test"),gt.gettext("Sodium hydroxide-Br")+'&#8322;'+" "+gt.gettext("test"),gt.gettext("Borax bead test")],[gt.gettext("Sodium hydroxide-Br")+'&#8322;'+" "+gt.gettext("test"),gt.gettext("Lead peroxide test"),gt.gettext("Borax bead test")],[gt.gettext("Sodium hydroxide test"),gt.gettext("Potassium ferrocyanide test"),gt.gettext("Charcoal cavity /Cobalt nitrate test")]],
						 [[],[gt.gettext("Potassium chromate test"),gt.gettext("Flame test")],
[gt.gettext("Ammonium sulphate test"),gt.gettext("Flame test")],
[gt.gettext("Ammonium oxalate test"),gt.gettext("Flame test")]],						 
[[gt.gettext("Ammonium Phosphate test"),gt.gettext("Charcoal cavity/Cobalt nitrate test")]]
						 ];						 
		groupTestFunction=[hideAllTests,groupZeroTest,groupOneTest,groupTwoTestfn,groupThreeTest,groupThreeTest,groupFiveTest,AmmoniumPhosphateTest];
		confnFuns=[[hideConfirmSub],[[hideConfirmSub],[sodiumHydroxideTest,nesslersReagentTest]],[[hideConfirmSub],[gOneCoolSoluTest,gOnePotassiumIodideTest,gOnePotassiumChromateTest]],[[hideConfirmSub],[gTwoPotassiumIodideTest,gTwoPotassiumIodideTest],[gTwoPotassiumIodideTest,gTwoPotassiumIodideTest],[AmmoniumMolybdateTest,Magnesiamixturetest]],
[[hideConfirmSub],[confirmationpotassiumFerrocyanide,confirmationpotassiumFerrocyanide],[confirmationLakeTest,charcoalcavity]],[[hideConfirmSub],[confirmationpotassiumNitrate,ammoniumthiocyanateethertest,boraxBead],[confirmationpotassiumFerrocyanide,confirmationpotassiumFerrocyanide,boraxBead],[confirmationsodiumhydroxideBr2,confirmationpotassiumFerrocyanide,boraxBead],[confirmationpotassiumFerrocyanide,confirmationpotassiumFerrocyanide,charcoalcavity]],[[hideConfirmSub],[PotassiumChromateTest,flameTest],[AmmoniumSulphateTest,flameTest],
[AmmoniumOxalateTest,flameTest]],[[AmmoniumPhosphateTest,charcoalcavity]]];		
		hideConfirmSub();
		//Adding label text.
		$("#reset").val(gt.gettext("Reset"));
				
		$("#Dropbox_Preliminary_label").html(Dropbox_Label_Array[0]);
		$("#Dropbox_group_label").html(Dropbox_Label_Array[1]);
		$("#Dropbox_conformation_label").html(Dropbox_Label_Array[2]);
		//Function for Combobox..
		dropdown_function($("#Dropbox_Preliminary_test_ID"),Preliminary_Array);
		dropdown_function($("#Dropbox_group_test_ID"),Group_array);
		dropdown_function($("#Dropbox_conformation_test_ID"),groupElements[0]);			
//----------Colour test-----------
		infMsgPrefix=gt.gettext("May be ");
		infMsgSufix=gt.gettext(" is present.");
		color_infMsg=["",gt.gettext("NH<sub>4</sub><sup>+</sup>"),gt.gettext("Pb<sup>2+</sup>"),gt.gettext("Cu<sup>2+</sup>"),gt.gettext("As<sup>3+</sup>"),gt.gettext("Fe<sup>3+</sup>"),gt.gettext("Al<sup>3+</sup>"),gt.gettext("Co<sup>2+</sup>"),[gt.gettext("Ni<sup>2+</sup>"),gt.gettext("Ni<sup>2+</sup>")],gt.gettext("Mn<sup>2+</sup>"),gt.gettext("Zn<sup>2+</sup>"),gt.gettext("Ba<sup>2+</sup>"),gt.gettext("Sr<sup>2+</sup>"),gt.gettext("Ca<sup>2+</sup>"),gt.gettext("Mg<sup>2+</sup>"),gt.gettext("Pb<sup>2+</sup>")];
		color_infMsg[8]=color_infMsg[8][random_nickel];	
		HelpMsg_colorTest=[gt.gettext("Note down the color of original salt.")];
//----------Smell test-----------
		smell_infMsg=[gt.gettext("Ammonical smell"),gt.gettext("There is no smell."),gt.gettext("NH<sub>4</sub><sup>+</sup>")] 
		smell_label=[gt.gettext("Original salt"),gt.gettext("Water"),gt.gettext("Hand")];
		HelpMsg_smellTest=[gt.gettext("Drag the original salt towards the watch glass<br>to put it into the watch glass."),gt.gettext("Drag the dropper towards the watch glass<br>to drop water into the sample."),gt.gettext("Drag the hand towards the watch glass<br>to rub the pre-wetted salt with the fingers.")];
//----------Dry Heating  test-----------
		dryHeat_label=[gt.gettext("Original salt"),gt.gettext("There is no characteristic changes."),gt.gettext("There is no characteristic changes and try another test.")];
		dryHeat_infMsg=[gt.gettext("Ammonical smell"),gt.gettext("Zn<sup>2+</sup>"),gt.gettext("Pb<sup>2+</sup>"),gt.gettext("due to the presence of Co<sup>2+</sup> or Cu<sup>2+</sup> or Mn<sup>2+</sup>"),gt.gettext("due to the presence of Ba<sup>2+</sup> or Ca<sup>2+</sup> or Sr<sup>2+</sup> or Mg<sup>2+</sup> or Al<sup>2+</sup>")];
		HelpMsg_dryHeatingTest=[gt.gettext("Drag the original salt towards the test tube<br>to put it into the test tube."),gt.gettext("Click on the knob of the burner to turn it on<br>and observe the characteristic changes.")];
//----------Falme  test-----------
		flame_help=[gt.gettext("Drag the original salt towards the watch glass<br> to put it into the watch glass."),gt.gettext("Drag the dropper towards the watch glass to pour<br> concentrated Hydrochloric acid into the sample."),gt.gettext("Drag the glass rod towards the watch glass<br> and mix the contents well to make a paste."),gt.gettext("Click on the knob of the burner to turn it on."),gt.gettext("Drag the platinum wire towards watch glass and dip it into<br>the paste and drag it again towards the Bunsen burner<br>and introduce it into the non-luminous flame.")];
		flame_label=[gt.gettext("Sample salt"),gt.gettext("Conc. HCl"),gt.gettext("Glass rod"),gt.gettext("Platinum wire"),gt.gettext("Non luminous flame ")];
		flame_infMsg=[gt.gettext("Ca<sup>2+</sup>"),gt.gettext("Sr<sup>2+</sup>"),gt.gettext("Ba<sup>2+</sup>"),gt.gettext("Cu<sup>2+</sup>"),gt.gettext("Zn<sup>2+</sup> or Mn<sup>2+</sup>"),gt.gettext("Pb<sup>2+</sup>"),gt.gettext("There is no characteristic changes.")];
//----------Charcoal cavity test ------------
		random_saltmix=["ammonium_chloridemix.png","ammonium_chloridemix.png","ammonium_chloridemix.png","copper_sulphatemix.png","ammonium_chloridemix.png","ferric_chloridemix.png","ammonium_chloridemix.png","cobalt_acetatemix.png",["nickel_sulphatemix.png","nickel_chloridemix.png"],"manganese_chloridemix.png","ammonium_chloridemix.png","ammonium_chloridemix.png","ammonium_chloridemix.png","ammonium_chloridemix.png","ammonium_chloridemix.png","ammonium_chloridemix.png"];
		random_spatulasalt=["spatula_nh4.png","spatula_nh4.png","spatula_nh4.png","spatula_copper.png","spatula_nh4.png","spatula_fe.png","spatula_nh4.png","spatula_co.png",["spatula_niso4.png","spatula_nicl.png"],"spatula_mg.png","spatula_nh4.png","spatula_nh4.png","spatula_nh4.png","spatula_nh4.png","spatula_nh4.png","spatula_nh4.png"];
//----------Group Zero test ------------
		gZeroExpHeadings=[gt.gettext("Sodium hydroxide test"),gt.gettext("Nessler's reagent test")];
		gZero_label=[gt.gettext("Original salt"),gt.gettext("Con.NaOH")];
		gZero_txt=[gt.gettext("Characteristic ammoniacal smell."),gt.gettext("There is no characteristic ammoniacal smell."),gt.gettext("Presence of group zero cation."),gt.gettext("Absence of group zero cation.")];
		HelpMsg_groupZero=[gt.gettext("Drag the original salt towards the test tube<br>to drop it into the test tube."),gt.gettext("Drag the dropper towards the test tube<br>to drop NaOH into the test tube."),gt.gettext("Click on the knob of the burner to turn it on.")];
//----------Sodium Hydroxide test ------------
		NaOH_label=[gt.gettext("Original salt"),gt.gettext("Con.NaOH"),gt.gettext("Dil. HCl"),gt.gettext("Glass rod")];
		NaOH_txt=[gt.gettext("NH<sub>3</sub> gas is evolved"),gt.gettext("There is no characteristic ammoniacal smell."),gt.gettext("The white fumes is due to the formation of NH<sub>4</sub>Cl.<br>Presence of NH<sub>4</sub><sup>+</sup> is confirmed."),gt.gettext("Absence of group zero cation."),gt.gettext("The white fumes is due to the formation of NH<sub>4</sub>Cl.")];
		HelpMsg_sodiumHydroxide=[gt.gettext("Drag the original salt towards the test tube<br>to drop it into the test tube."),gt.gettext("Drag the dropper towards the test tube<br>to drop NaOH into the test tube."),gt.gettext("Click on the knob of the burner to turn it on."),gt.gettext("Drag the glass rod towards the bottle to<br>dip it in dil. HCl and drag it towards the test tube<br>to shown it over the mouth of the test tube.")];
//----------Nessler's Reagent test ------------	
		nessler_label=[gt.gettext("Cork"),gt.gettext("Delivery tube")];
		nessler_txt=[gt.gettext("The brown percipitate is due to the formation of<br> H<sub>2</sub>N.HgO.Hgl. Presence of NH<sub>4</sub><sup>+</sup> is confirmed."),gt.gettext("Absence of group zero cation.")]
		HelpMsg_nesslersReagent=[gt.gettext("Drag the cork towards the test tube<br>to close the test tube."),gt.gettext("Drag the delivery tube towards the test tube<br>to insert it in the test tube.")]
//----------Group One test ------------	
		gOneTxt=[gt.gettext("Group one test"),gt.gettext("Salt"),gt.gettext("solution"),gt.gettext("Next"),gt.gettext("The white precipitate may due to the fomationo of PbCl<sub>2</sub>.<br>Presence of group I cation"),gt.gettext("White precipitate"),gt.gettext("Centrifuged and washed ppt."),gt.gettext("There is no white precipitate.<br>Absence of group I cation."),gt.gettext("There is no white  ppt.")];
		HelpMsg_groupOne=[gt.gettext("Drag the dropper towards the test tube to<br>drop the salt solution into the test tube."),gt.gettext("Drag the dropper towards the test tube to<br>drop dil. HCl into the test tube and click on<br>the 'next' button to go to the next step.")];
//---------- Group One Cooling solution  test ------------	
		coolTestTxt=[gt.gettext("Cooling of solution"),gt.gettext("Water"),gt.gettext("Centrifuged and washed ppt. obtained from group I analysis."),gt.gettext("Precipitate dissolved. Drag and drop test tube toward the beaker"),gt.gettext("There is no characteristic changes"),gt.gettext("On cooling precipitate settle down as PbCl<sub>2</sub>.<br>Presence of Pb<sup>2+</sup> ion is confirmed."),gt.gettext("Cold Water"),gt.gettext("White crystalline precipitate"),gt.gettext("Drag, then release test tube"),gt.gettext("Precipitate dissolved.")]
		HelpMsg_gOneCoolSolu=[gt.gettext("Drag the dropper towards the test tube<br>to drop water into the test tube."),gt.gettext("Click on the knob of the burner to turn it on."),gt.gettext("To cool the contents of the test tube, drag<br>the test tube towards the beaker and place it in<br>the beaker containing cold water.")];
//----------Group One potassium iodide   test ------------			
		gOnePIodideTxt=[gt.gettext("Potassium iodide test"),gt.gettext("KI"),gt.gettext("Potassium Iodide"),gt.gettext("Yellow precipitate"),gt.gettext("There is no characteristic changes"),gt.gettext("Yellow precipitate is due to the formation of PbI<sub>2</sub>.<br>Presence of Pb<sup>2+</sup> ion."),gt.gettext("There is no characteristic changes. Absence of Pb<sup>2+</sup> ion.")]
		HelpMsg_gOnePIodid=[gt.gettext("Drag the dropper towards the test tube to drop<br>potassium iodide solution into the test tube.")]
//----------Group One potassium chromate   test ------------	
		gOneChroomateTxt=[gt.gettext("Potassium chromate test"),gt.gettext("K<sub>2</sub>CrO<sub>4</sub>"),gt.gettext("Potassium chromate"),gt.gettext("Yellow precipitate is due to the formation of PbCrO<sub>4</sup>.<br>Presence of Pb<sup>2+</sup> ion.")]	
		HelpMsg_gOnePChromate=[gt.gettext("Drag the dropper towards the test tube to drop,br>potassium chromate solution into the test tube.")]
//----------Group Two potassium iodide   test ------------	
		gTwoPIodideTxt=[gt.gettext("50%HNO<sub>3</sub>"),gt.gettext("Dil. H<sub>2</sub>SO<sub>4</sub>"),gt.gettext("C<sub>2</sub>H<sub>5</sub>OH"),gt.gettext("Black precipitate formed during group II test"),gt.gettext("Black precipitate dissolves in 50% HNO<sub>3</sub> either due to the <br>formation of Pb(NO<sub>3</sub>)<sub>2</sub> or due to the formation of Cu(NO<sub>3</sub>)<sub>2</sub>"),gt.gettext("On adding H<sub>2</sub>SO<sub>4</sub>, white precipitate of<br> lead sulphate, PbSO<sub>4</sub> is formed"),gt.gettext("C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>NH<sub>4</sub>"),gt.gettext("Ammonium acetate"),gt.gettext("Kl"),gt.gettext("Potassium iodide"),gt.gettext("Water"),gt.gettext("Yellow precipitate is due to the formation of<br> Lead iodide, PbI<sub>2</sub>. Presence of Pb<sup>2+</sup> is confirmed"),gt.gettext("On adding H<sub>2</sub>SO<sub>4</sub>, there is a white precipitate"),gt.gettext("Yellow precipitate formed during group II test"),gt.gettext("Yellow precipitate dissolves in 50% HNO<sub>3</sub>"),gt.gettext("Precipitate dissolves in 50% HNO<sub>3</sub>")];
		HelpMsg_gTwoPIodide=[gt.gettext("Drag the dropper towards the test tube<br>to drop  50% HNO3 into the test tube."),gt.gettext("Click on the knob of the burner to turn it on."),gt.gettext("Drag the dropper towards the test tube to<br>drop dil. H<sub>2</sub>SO<sub></sub> into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop<br>C2H5OH (ethyl alcohol) into the test tube."),gt.gettext("Drag the dropper towards the test tube to<br>drop ammonium acetate into the test tube. "),gt.gettext("Drag the dropper towards the test tube to<br>drop potassium iodide into the test tube."),gt.gettext("Drag the test tube towards the beaker to<br>place it in the beaker containing water."),gt.gettext("Drag the dropper towards the test tube to<br>drop ammonium acetate into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop<br>potassium chromate solution into the test tube."),gt.gettext("Drag the dropper towards the test tube to<br>drop NaOH into the test tube."),gt.gettext("Drag the dropper towards the test tube to<br>drop ammonium hydroxide into the test tube."),gt.gettext("Drag the dropper towards the test tube to<br>drop acetic acid into the test tube."),gt.gettext("Drag the dropper towards the test tube to<br>drop potassium ferrocyanide into the test tube.")]
//----------Group Two potassium chromate   test ------------	
		gTwoPChromateTxt=[gt.gettext("Potassium chromate"),gt.gettext("Sodium hydroxide"),gt.gettext("K<sub>2</sub>CrO<sub>4</sub>"),gt.gettext("NaOH"),gt.gettext("Yellow precipitate is due to the formation of lead chromate.<br>Presence of Pb<sup>2+</sup> is confirmed."),gt.gettext("White precipitate formed is Cu<sub>2</sub>I<sub>2</sub>. Brown colour of the solution is<br> due to the formation of iodine. Presence of Cu<sup>2+</sup> is confirmed.")];
//----------Group Two potassium ferrocyanide   test ------------	
		gTwoPFerrocynideTxt=[gt.gettext("Potassium ferrocyanide test"),gt.gettext("NH<sub>4</sub>OH"),gt.gettext("Ammonium hydroxide"),gt.gettext("C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>"),gt.gettext("Acetic acid"),gt.gettext("C<sub>6</sub>N<sub>6</sub>FeK<sub>4</sub>"),gt.gettext("Potassium ferrocyanide"),gt.gettext("The blue coloured solution of [Cu(NH<sub>3</sub>)<sub>4</sub>][NO<sub>3</sub>]<sub>2</sub> is formed by<br>the reaction betweenCu(NO<sub>3</sub>)<sub>2</sub> and NH<sub>4</sub>OH."),gt.gettext("The chocolate brown precipitate is due to the formation of<br>Cu<sub>2</sub>[Fe(CN)<sub>6</sub>].Presence of Cu<sup>2+</sup> is confirmed.")];		
		
		//Charcoal cavity test
		random_saltmix=["ammonium_chloridemix.png","ammonium_chloridemix.png","ammonium_chloridemix.png","copper_sulphatemix.png","ammonium_chloridemix.png","ferric_chloridemix.png","ammonium_chloridemix.png","cobalt_acetatemix.png",["nickel_sulphatemix.png","nickel_chloridemix.png"],"manganese_chloridemix.png","ammonium_chloridemix.png","ammonium_chloridemix.png","ammonium_chloridemix.png","ammonium_chloridemix.png","ammonium_chloridemix.png","ammonium_chloridemix.png"];
		random_spatulasalt=["spatula_nh4.png","spatula_nh4.png","spatula_nh4.png","spatula_copper.png","spatula_nh4.png","spatula_fe.png","spatula_nh4.png","spatula_co.png",["spatula_niso4.png","spatula_nicl.png"],"spatula_mg.png","spatula_nh4.png","spatula_nh4.png","spatula_nh4.png","spatula_nh4.png","spatula_nh4.png","spatula_nh4.png"];
				
		random_spatulasalt[8]=random_saltmix[8][random_nickel];
		random_saltmix[8]=random_saltmix[8][random_nickel];
		mainTop=$('#mainDiv').position().top;
		mainLeft=$('#mainDiv').position().left;	
		charcoalcavitylabel=[gt.gettext("Sodium carbonate"),gt.gettext("Charcoal box "),gt.gettext("Water"),gt.gettext("Blow pipe"),gt.gettext("Tongs"),gt.gettext("Glass rod"),gt.gettext("NEXT STEP")];
		charcoalcavityHelp=[gt.gettext("Drag the spatula towards the watch glass to add <br>sodium carbonate into the original salt."),gt.gettext("Drag the glass rod towards the watch glass to mix<br> the contents of the watch glass."),gt.gettext("Drag the charcoal box near the watch glass <br>to place it in the canvas area."),gt.gettext("Drag the spatula towards the watch glass to take the mixture."),gt.gettext("Drag the spatula towards the charcoal box <br>to put the mixture in the cavity."),gt.gettext("Drag the bottle towards the charcoal box to <br>add water into the mixture."),gt.gettext("Click on the knob of the burner to turn it on."),gt.gettext("Click on the air adjusting disc to close<br> the air hole to get the reducing flame."),gt.gettext("Drag the tongs towards the charcoal box to hold the box."),gt.gettext("Drag the tongs towards the burner  to place <br>the charcoal box near the flame."),gt.gettext("Drag the blow pipe towards the burner to direct <br>the reducing flame and heat the mixture."),gt.gettext("Drag the tongs towards the watch glass to place back <br>the charcoal box to cool the residue.")];
		oxidizingFlameLabel=gt.gettext("Oxidising flame.");
		redusingFlameLabel=gt.gettext("Reducing flame.");
		residueLabel=[gt.gettext("Yellow residue formed on heating."),gt.gettext("White residue formed on cooling."),gt.gettext("Brown residue formed on heating."),gt.gettext("Yellow residue formed on cooling."),gt.gettext("White residue formed on heating."),gt.gettext("Green residue formed on heating."),gt.gettext("Pink residue formed on heating."),gt.gettext("Blue residue formed on heating.")];		
		residuealuminumLabel=gt.gettext("Light blue residue formed on heating.");	
		zincInference=gt.gettext("May be Zn<sup>2+</sup> is present.");
		leadInference=gt.gettext("May be Pb<sup>2+</sup> is present.");
		ba2ca2mg2Inference=gt.gettext("May be due to the presence of Ba<sup>2+</sup> or <br> Ca<sup>2+</sup> or Mg<sup>2+</sup>.");		
		arsenichotInference=gt.gettext("White residue with the odour of garlic formed on heating.");
		copperhotInference=gt.gettext("Red residue formed on heating.");
		arseniccoldeInference=gt.gettext("White residue formed on cooling.May be As<sup>3+</sup> is present.");
		coppercoldInference=gt.gettext("Red residue formed on cooling.May be Cu<sup>2+</sup> is present.");
		noreactionInference=gt.gettext("No characteristic change.");
		//Cobalt nitrate test		
		random_saltcobaltnitrate=["ammonium_chloridemix.png","ammonium_chloridemix.png","nickel_chloridemix.png","coppermix.png","ammonium_chloridemix.png","ferric_chloridemix.png","ammonium_chloridemix.png","cobalt_acetatemix.png",["nickel_sulphatemix.png","nickel_chloridemix.png"],"manganese_chloridemix.png","ammonium_chloridemix.png","ammonium_chloridemix.png","ammonium_chloridemix.png","ammonium_chloridemix.png","ammonium_chloridemix.png","ammonium_chloridemix.png"];
		random_saltcobaltnitrate[8]=random_saltcobaltnitrate[8][random_nickel];
		cobaltNitratelabel=[gt.gettext("The residue left after charcoal cavity test"),gt.gettext("Cobalt nitrate ")];		
		magnesiumInference=gt.gettext("May be Mg<sup>2+</sup> is present.");
		aluminumInference=gt.gettext("May be due to the presence of Al<sup>3+</sup>.");
		cobaltNitrateHelp=gt.gettext("Drag the dropper towards the charcoal box to<br>add cobalt nitrate solution into the residue left<br> in the charcoal box.");
		//Borax bead test
		
		boraxbeadlabel=[gt.gettext("Borax"),gt.gettext("Platinum wire")];
		boraxBeadHelp=[gt.gettext("Drag the watch glass containing borax towards <br>the original salt to place it in the canvas area."),gt.gettext("Drag the platinum wire towards the watch glass <br>to dip it in the borax powder."),gt.gettext("Drag the platinum wire towards the burner to <br>heat the borax powder in the oxidizing flame."),gt.gettext("Drag the platinum wire towards the watch glass<br> to dip it in the original salt."),gt.gettext("Click on the knob of the burner to turn it on to get<br> the oxidizing flame/ Click on the air adjusting disc to <br>close the air hole to get the reducing flame."), gt.gettext("Drag the platinum wire towards the burner to <br>heat the contents in the oxidizing/reducing flame.")];
		boraxBeadInference=[gt.gettext("Transparent colourless glassy bead formed.")];
		manganeseInference=gt.gettext("May be Mn<sup>2+</sup> is present.");
		nickelInference=gt.gettext("May be Ni<sup>2+</sup> is present.");
		cobaltmanganeseInference=gt.gettext("May be Co<sup>2+</sup> or Mn<sup>2+</sup> is present.");
		reducingbeadhotInference=[gt.gettext("Colourless bead formed on heating."),gt.gettext("Green bead formed on heating."),gt.gettext("Colourless bead formed on heating."),gt.gettext("Grey bead formed on heating."),gt.gettext("Deep blue bead formed on heating.")];
		reducingbeadcoldInference=[gt.gettext("Opaque red  bead formed on cooling. May be Cu<sup>2+</sup> is present."),gt.gettext("Green bead formed on cooling. May be Fe<sup>3+</sup> is present."),gt.gettext("Colourless bead formed on cooling. May be Mn<sup>2+</sup> is present."),gt.gettext("Opaque grey bead formed on cooling. May be Ni<sup>2+</sup> is present."),gt.gettext("Deep blue bead formed on cooling. May be Co<sup>2+</sup> is present.")];
		oxidizingbeadhotInference=[gt.gettext("Green bead formed on heating."),gt.gettext("Yellowish brown bead formed on heating."),gt.gettext("Pinkish violet bead formed on heating."),gt.gettext("Brown bead formed on heating."),gt.gettext("Deep blue bead formed on heating.")];
		oxidizingbeadcoldInference=[gt.gettext("Light blue bead formed on cooling. May be Cu<sup>2+</sup> is present."),gt.gettext("Pale yellow bead formed on cooling. May be Fe<sup>3+</sup> is present."),gt.gettext("Pinkish violet bead formed on cooling. May be Mn<sup>2+</sup> is present."),gt.gettext("Pale brown bead formed on cooling. May be Ni<sup>2+</sup> is present."),gt.gettext("Deep blue bead formed on cooling. May be Co<sup>2+</sup> is present.")];
		preliminaryFunction[0]();
		/*potassium Ferrocyanide Test*/
		dilHCllabel=gt.gettext("Dil. HCl");
		pottasiumferrocyanidelabel=gt.gettext("Potassium ferrocyanide");
		confirmation_fe_inference1=[gt.gettext("The reddish brown precipitate is soluble in dil. HCl"),gt.gettext("Prussian blue colour is due to the formation of ferric ferrocyanide,<br> Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub>. Presence of Fe<sup>3+</sup> is confirmed.")];
		confirmation_fe_help1=[gt.gettext("Drag the dropper towards the test tube to<br>drop dil. HCl into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop<br>Potassium ferrocyanide solution into the test tube.")];
		/*Potassium sulphocyanide test*/
		pottasiumsulphocyanidelabel=gt.gettext("Potassium sulphocyanide");
		confirmation_fe_inference2=gt.gettext("Blood red colouration is due to the formation of Ferric sulphocyanide,<br> Fe(CNS)<sub>3</sub>. Presence of Fe<sup>3+</sup> is confirmed.");
		confirmation_fe_help2=[gt.gettext("Drag the dropper towards the test tube to drop<br>dil. HCl into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop Potassium<br>sulphocyanide solution into the test tube.")];
		/*Sodium hydroxide-Br2 test*/
		NaOHlabel=gt.gettext("NaOH");
		brominewaterLabel=gt.gettext("Bromine water");
		confirmation_mn_inference1=[gt.gettext("White precipitate is due to the formation of<br> manganese hydroxide, Mn(OH)<sub>2</sub>."),gt.gettext("Mn(OH)<sub>2</sub> turns brown on adding Br<sub>2</sub> water due to <br>the oxidation of Mn(OH)<sub>2</sub> to MnO(OH)<sub>2</sub>.<br> Presence of Mn<sup>2+</sup> is confirmed.")];
		confirmation_ni_inference2=[gt.gettext("The green precipitate is due to the formation of Ni(OH)<sub>2</sub>."),gt.gettext("The black precipitate is due to the formation of nickelic hydroxide, Ni(OH)<sub>3</sub>.<br> Presence of Ni<sup>2+</sup> is confirmed.")];
		confirmation_mn_help1=[gt.gettext("Drag the dropper towards the test tube to<br>drop NaOH into the test tube."),gt.gettext("Drag the dropper towards the test tube to<br>drop bromine water into the test tube."),gt.gettext("Click on the knob of the burner to turn it on.")];	
		confirmation_zn_inference1=	[gt.gettext("The white precipitate of ZnS dissolves in dil. <br>HCl to form ZnCl<sub>2</sub> with the evolution of H<sub>2</sub>S gas."),gt.gettext("The white precipitate is due to the formation of zinc hydroxide."),gt.gettext("Zn(OH)<sub>2</sub> is soluble in excess NaOH due to the formation of Na<sub>2</sub>ZnO<sub>2</sub>.<br> Presence of Zn<sup>2+</sup> is confirmed.")];		
		confirmation_zn_inference2=	gt.gettext("The white or bluish white precipitate is due to the formation of Zn<sub>2</sub>[Fe(CN)<sub>6</sub>].<br> Presence of Zn<sup>2+</sup> is confirmed.");
		/*Dimethyl glyoxime test*/
		 NH4OHlabel=gt.gettext("NH<sub>4</sub>OH");		 
		 dimethylglyoximeLabel=gt.gettext("Dimethyl glyoxime");
		 confirmation_ni_inference1=gt.gettext("The bright rose red colour is due to the formation of Ni dimethyl glyoxime complex. <br>Presence of Ni<sup>2+</sup> is confirmed.");
		 confirmation_ni_help1=[gt.gettext("Drag the dropper towards the test tube<br>to drop NH<sub>4</sub>OH into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop<br>dimethyl glyoxime into the test tube.")];
		 /* Lake test */
		 bluelitmusLabel=gt.gettext("Blue litmus solution");
		 boardLabel_Laketest=gt.gettext("Precipitate after centrifugation");
		
		 laketest_inference=gt.gettext("The precipitate formed is aluminium hydroxide. Blue colour absorbs<br> on this precipitate. Presence of Al<sup>3+</sup> is confirmed.");
		 laketest_help=[gt.gettext("Drag the dropper towards the test tube to<br>drop dil. HCl into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop<br>blue litmus solution into the test tube."),gt.gettext("Drag the dropper towards the test tube to<br>drop NH<sub>4</sub>OH into the test tube.")];
		/* potassium nitrite test*/
		 NH4OHexpandlabel=gt.gettext("Ammonium hydroxide");
		 aceticacidlabel=gt.gettext("C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>");
		 aceticacidexpandlabel=gt.gettext("Acetic acid");
		 potassiumnitrateexpandlabel=gt.gettext("Potassium nitrite");
		 potassiumnitrate_inference=gt.gettext("The yellow precipitate is due to the formation of potassium cobaltinitrite,<br> K<sub>3</sub>[Co(NO<sub>2</sub>)<sub>6</sub>]. Presence of Co<sup>2+</sup> is confirmed.");
		 potassiumnitrate_help=[gt.gettext("Drag the dropper towards the test tube to<br>drop NH<sub>4</sub>OH into the test tube."),gt.gettext("Drag the dropper towards the test tube to<br>drop acetic acid into the test tube."),gt.gettext("Drag the spatula towards the test tube to<br>put potassium nitrite into the test tube.")];
		 /*Ammonium thiocyanate*/
		 ammoniumthiocyanateLabel=gt.gettext("Ammonium thiocyanate");
		 ammoniumthiocyanate_inference=gt.gettext("Blue colour is due to the formation of ammonium cobalti thiocyanate,<br> (NH<sub>4</sub>)<sub>2</sub>[Co(CNS)<sub>4</sub>]. Presence of Co<sup>2+</sup> is confirmed.");
		 ammoniumthiocyanate_help=[gt.gettext("Drag the dropper towards the test tube to<br>drop ether into the test tube."),gt.gettext("Drag the spatula towards the test tube to<br>drop ammonium thiocyanate into the test tube."),gt.gettext("Drag the test tube from the stand to shake it well.")];
		 etherlabel=gt.gettext("Ether");
		//Ammonium molybdate test
	AmmoniummolybdateTestText=[gt.gettext("The yellow precipitate may be<br/> due to the formation of As2S3.<br/>Presence of Group II cation."),gt.gettext("Conc. HNO<sub>3</sub>"),gt.gettext("Concentrated"),gt.gettext("nitric acid"),gt.gettext("Ammonium"),gt.gettext("molybdate solution"),gt.gettext("(NH<sub>4</sub>)<sub>2</sub>MoO<sub>4</sub>(aq)")];	
	//Ammonium molybdate test inference	
	AmmoniummolybdateInfrnce=[gt.gettext("The yellow residue of As<sub>2</sub>S<sub>3</sub> is dissolved in Conc.<br/> HNO<sub>3 </sub>forming arsenic acid, H<sub>3</sub>AsO<sub>4</sub>."),gt.gettext("Yellow precipitate is due to the formation of ammonium arseno molybdate <br/>{(NH<sub>4</sub>)<sub>3</sub>AsO<sub>4</sub>.12MoO<sub>3</sub>}. Presence of As<sup>3+</sup> is confirmed.")];	
	//Ammonium molybdate test  help.
	AmmoniumMolybdatehelp=[gt.gettext("Drag the dropper towards the test tube to<br>drop Conc. HNO3 into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop<br>ammonium molybdate solution into the test tube."),gt.gettext("Click on the knob of the burner to turn it on.")];
	//Magnesia mixture test
	MagnesiamixturetestText=[gt.gettext("Ammonium"),gt.gettext("hydroxide solution"),gt.gettext("NH<sub>4</sub>OH"),gt.gettext("Magnesia mixture"),gt.gettext("mixture"),gt.gettext("Magnesia")];	
	//Magnesia mixture test inference text
	MagnesiamixturetestInfrnce=[gt.gettext("The white precipitate is due to the formation of Mg(NH<sub>4</sub>)<sub>2</sub>AsO<sub>4</sub>.</br> Presence of As<sup>3+</sup> is confirmed.")];
	//Magnesia mixture test help text
	MagnesiaMixtureTest=[gt.gettext("Drag the dropper towards the test tube to<br>drop Conc. HNO3 into the test tube."),gt.gettext("Drag the dropper towards the test tube to<br>drop NH<sub>4</sub>OH into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop<br>Magnesia mixture into the test tube.")];
	//Potassium Chromate Test
		PotassiumChromateTestlabel=[gt.gettext("K<sub>2</sub>CrO<sub>4</sub> (aq)"),gt.gettext("Potassium chromate"),gt.gettext("solution"),gt.gettext("The yellow precipitate is due to the formation of barium<br/> chromate, BaCrO<sub>4</sub>. Presence of Ba<sup>2+</sup> is confirmed.")];
		//Potassium Chromate help text
		potassiumChromateTestHelpText=[gt.gettext("Drag the dropper towards the test tube to drop<br>Potassium chromate solution into the test tube.")];
		//Ammonium Sulphate Test
	AmmoniumSulphateTestlabel=[gt.gettext("Ammonium sulphate"),gt.gettext("solution"),gt.gettext("(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> (aq)"),gt.gettext("The white precipitate is due to the formation of strontium sulphate,<br/> SrSO<sub>4</sub>. Presence of Sr<sup>2+</sup> is confirmed.")];	
	//Ammonium Sulphate help text	
	ammoniumSulphateTestHelpText=[gt.gettext("Drag the dropper towards the test tube to drop<br>Ammonium sulphate solution into the test tube.")];
		 //Ammonium Oxalate Test
	AmmoniumOxalateTestlabel=[gt.gettext("(NH<sub>4</sub>)<sub>2</sub>C<sub>2</sub>O<sub>4</sub>"),gt.gettext("Ammonium"),gt.gettext("oxalate solution"),gt.gettext("NH<sub>4</sub>OH(aq)"),gt.gettext("Ammonium"),gt.gettext("hydroxide solution"),gt.gettext("Glass rod"),gt.gettext("The white precipitate is due to the formation of <br/> calcium oxalate, CaC<sub>2</sub>O<sub>4</sub>. Presence of Ca<sup>2+</sup> is confirmed.")];
	//Ammonium Oxalate help text
	ammoniumSulphateTestText=[gt.gettext("Drag the dropper towards the test tube to drop<br>Ammonium oxalate solution into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop<br>Ammonium hydroxide solution into the test tube."),gt.gettext("Drag the glass rod towards the test tube to<br>rub the sides of the test tube with it.")];
		 //Group Two Test
		GroupTwoTestText=[gt.gettext("Dil. HCl"),gt.gettext("Next"),gt.gettext("Kipp's apparatus"),gt.gettext("Centrifuged and separated <br/>precipitate.")];		
	//Group Two inferance text
	GroupTwoTestInfrnc=[gt.gettext("The black precipitate may be due to the formation of PbS or CuS.<br/> Presence of Group II cation. "),gt.gettext("The yellow precipitate may be due to the formation of As<sub>2</sub>S<sub>3</sub>.<br/>Presence of Group II cation.")];	
	//Group Two help text.	
groupTwoHelpText=[gt.gettext("Drag the dropper towards the test tube to<br>drop dil. HCl into  the test tube."),gt.gettext("Click on the knob of the burner to turn it on."),gt.gettext("Drag the test tube towards the Kipp apparatus to<br>pass H<sub>2</sub>S gas through the solution."),gt.gettext("Click on the nozzle to open/close the Kipp apparatus.")];
		//Group Five test 
		groupFivelabel=[gt.gettext("NH<sub>4</sub>OH"),gt.gettext("Ammonium"),gt.gettext("hydroxide"),gt.gettext("(NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>"),gt.gettext("carbonate"),gt.gettext("Next"),gt.gettext("Hot dil. CH<sub>3</sub>COOH"),gt.gettext("The precipitate is centrifuged<br/> and washed with water."),gt.gettext("Sample one"),gt.gettext("Sample two"),gt.gettext("Sample three"),gt.gettext("NH<sub>4</sub>Cl"),gt.gettext("The solution is divided into three <br/>parts.")];
		groupFivelabelInferce=[gt.gettext("The white precipitate may due to the formation of<br/> carbonates of Ba<sup>2+</sup>, Sr<sup>2+</sup> or Ca<sup>2+</sup>."),gt.gettext("The insoluble carbonate dissolves in acetic acid due to the formation of<br/> soluble acetates of Ba<sup>2+</sup>, Sr<sup>2+</sup> or Ca<sup>2+</sup>. Presence of Group V cation.")];
		//Group five test help text
		groupFiveHelpText=[gt.gettext("Drag ammonium chloride (NH<sub>4</sub>Cl) towards the test tube<br>to put it in the test tube."),gt.gettext("Click on the knob of the burner to turn it on."),gt.gettext("Drag the dropper towards the test tube to<br>drop ammonium hydroxide solution into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop<br>ammonium carbonate solution into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop hot<br>dil. CH3COOH (acetic acid) into the test tube.")];
		/* Group 3 ,4 & 6*/
		 group3_Inference=[gt.gettext("Reddish brown precipitate may be due to the formation of </br> ferric hydroxide,Fe(OH)<sub>3</sub>.  Presence of Group III cation."),gt.gettext("White precipitate may be due to the formation of</br> aluminium hydroxide,Al(OH)<sub>3</sub>.Presence of Group III cation"),gt.gettext("Black precipitate may be due to the formation of CoS or NiS.</br>Presence of Group IV cation."),gt.gettext("Buff coloured precipitate may be due to the formation of MnS.</br>Presence of Group IV cation."),gt.gettext("Dull white precipitate may be due to the formation of ZnS.</br>Presence of Group IV cation.")];
		 
		groupThree_Help=[gt.gettext("Drag the dropper towards the test tube to<br>drop Con.HNO3 into the test tube."),gt.gettext("Click on the knob of the burner to turn it on."),gt.gettext("Drag ammonium chloride (NH<sub>4</sub>Cl) towards the test tube<br>to put it in to the test tube."),gt.gettext("Drag the test tube holder towards<br> the test tube to hold the test tube<br> with it."),gt.gettext("Drag the test tube holder towards<br> the beaker to place the test tube <br>in water to cool the solution."),gt.gettext("Drag the test tube holder to take<br> out the test tube from the beaker."),gt.gettext("Drag the dropper towards the<br> test tube to drop  NH<sub>4</sub>OH in to the test tube."),gt.gettext("Click on the test tube to<br> shake it well."),gt.gettext("Click on the inference icon to see the inference.")];
		NH4_Inference=[gt.gettext("The white precipitate is due to the formation of magnesium</br> ammonium phosphate,  Mg(NH<sub>4</sub>)PO<sub>4</sub>. Presence of Mg<sup>2+</sup>is confirmed.")];
		
		NH4_Help=[gt.gettext("Drag ammonium chloride (NH<sub>4</sub>Cl) towards the test tube<br>to put it in the test tube."),gt.gettext("Drag the dropper towards the test tube to drop  NH<sub>4</sub>OH in to the test tube."),gt.gettext("Drag the dropper towards the test tube to drop ammonium phosphate<br>[(NH<sub>4</sub>)<sub>3</sub>PO<sub>4</sub>] solution in to the test tube."),gt.gettext("Drag the glass rod towards the test tube to rub the sides<br>of the test-tube with it."),gt.gettext("Click on the inference icon to see the inference.")]
 		confirmation_lead_inference=gt.gettext("The pink colour is due to the formation of </br>HMnO<sub>4</sub>.Presence of Mn<sup>2+</sup> is confirmed.");
		boardlabel_leadTest=gt.gettext("Precipitate after <br>Sodium hydroxide-Br<sub>2</sub>test"); 
		confirmation_lead_help=[gt.gettext("Drag the dropper towards the test tube to drop<br>Conc. HNO<sub>3</sub> into the test tube."),gt.gettext("Drag the dropper towards the test tube to drop<br>lead peroxide solution into the test tube.")];
		groupThreelabel=[gt.gettext("NH<sub>4</sub>OH"),gt.gettext("Ammonium"),gt.gettext("hydroxide"),gt.gettext("Conc.HNO<sub>3</sub>"),gt.gettext("Conc.Nitric"),gt.gettext("acid"),gt.gettext("NH<sub>4</sub>Cl"),gt.gettext("Glass Rod"),gt.gettext("(NH<sub>4</sub>)<sub>3</sub>PO<sub>4</sub>"),gt.gettext("Phosphate"),gt.gettext("Salt<br>solution")];
		leadperoxidelabel=gt.gettext("Lead Peroxide")
		/*------------------*/
		sodiumhydroxideBr2_inference=gt.gettext("The precipitate of MnS dissolves in dil. HCl <br>to form MnCl<sub>2</sub> with the evolution of H<sub>2</sub>S gas");
		document.getElementById("Dropbox_group_test_ID").disabled=true;
		document.getElementById("Dropbox_conformation_test_ID").disabled=true;		
		
		//Dropdown for Preliminary tests.
		function dropdown_function(getid,array_set){
			$.each(array_set, function(val, text) {
			getid.append(
			$('<option></option>').val(val).html(text)
				);
			});			
		}
		$('#Dropbox_Preliminary_test_ID,#Dropbox_group_test_ID,#Dropbox_conformation_test_ID,#confirmationTests').change(function() {
			hideAllTests();
		});
		$('#Dropbox_group_test_ID,#Dropbox_conformation_test_ID,#confirmationTests').change(function() {
			preliminary_help=false;
		});
		//Combobox for preliminary test
		$("#Dropbox_Preliminary_test_ID").change(function(){	
			preliminary_help=true;
			preliminaryIndex=$('#Dropbox_Preliminary_test_ID option:selected').val();
			preliminaryFunction[preliminaryIndex]();
			$('#Dropbox_group_test_ID').val(0);
			$('#Dropbox_conformation_test_ID').val(0);
			$('#confirmationTests').val(0);	
			$('#confirmationSubCombo').hide();
			$('#Dropbox_conformation_test_ID').empty();
			dropdown_function($("#Dropbox_conformation_test_ID"),groupElements[0]);
			document.getElementById("Dropbox_group_test_ID").disabled=true;
			document.getElementById("Dropbox_conformation_test_ID").disabled=true;	
		});
		$("#Dropbox_group_test_ID").change(function(){
			document.getElementById("Dropbox_conformation_test_ID").disabled=true;
			$('#Dropbox_conformation_test_ID').empty();
			groupIndex=$('#Dropbox_group_test_ID option:selected').val();
			groupTestIndex=groupIndex;
			groupTestFunction[groupIndex]();
			$('#expHeading').html(Group_array[groupIndex]);			
			dropdown_function($("#Dropbox_conformation_test_ID"),groupElements[groupIndex]);
			
			if(groupIndex==0)$('#expHeading').html(Preliminary_Array[preliminaryIndex]);			
			if(groupIndex==7){
				$('#confirmationTests').empty();	
				$('#confirmationSubCombo').show();
				confirmationIndex=0;
				dropdown_function( $('#confirmationTests'),confirmationExp[groupIndex][confirmationIndex]);
				$('#expHeading').html(confirmationExp[groupIndex][confirmationIndex][confirmationSubIndex]); 
			}else{
				$('#confirmationSubCombo').hide();
			}
			$('#confirmationTests').val(0);	
			$("#Dropbox_group_test_ID option[value=0]").attr('disabled','disabled');
			$('#Dropbox_conformation_test_ID').val(0);
			$('#confirmationSubCombo').val(0);	
		});	
		function hideConfirmSub(){
			$('#confirmationSubCombo').hide();
			hideAllTests();
		}
		$('#Dropbox_conformation_test_ID').change(function() {	
			$('#confirmationTests').empty();		
			confirmationIndex=$('#Dropbox_conformation_test_ID option:selected').val();	
			confirmationSubIndex=0;
			$('#confirmationSubCombo').show();			
			dropdown_function( $('#confirmationTests'),confirmationExp[groupIndex][confirmationIndex]);
			$('#confirmationSubCombo').hide();
			confnFuns[groupIndex][confirmationIndex][confirmationSubIndex]();
			$('#expHeading').html(confirmationExp[groupIndex][confirmationIndex][confirmationSubIndex]); 
			$("#Dropbox_conformation_test_ID option[value=0]").attr('disabled','disabled');
		});	
		$('#confirmationTests').change(function() {	
			confirmationSubIndex=$('#confirmationTests option:selected').val();
			confnFuns[groupIndex][confirmationIndex][confirmationSubIndex]();
			$('#expHeading').html(confirmationExp[groupIndex][confirmationIndex][confirmationSubIndex]);
		});
		function hideAllTests(){			 
			$('#charcoalcavityDiv,#cobaltNitrateDiv,#boraxBeadDiv,#confirmation_sodiumhydroxideBr2').hide();
			$('#confirmation_potassiumFerrocyanide,#confirmation_Laketest').hide();
			$('#smellTestWrap,#colourTestWrap,#dryHeatingTestWrap,#flameTestWrap').hide();
			$('#confirmation_potassiumnitrate,#confirmation_ammoniumthiocyanate').hide();
			$("#Inference,#salt,#AmmoniumMolybdateTestDiv,#MagnesiamixturetestDIv,#potassiumChromateTestDiv,#AmmoniumSulphateTestDIV,#saltsolution,#AmmoniumOxalateTestDIV,#groupTwoTestDIv,#groupFiveTestDIv").css({display:'none'});
			$('#groupThreeTestDIv,#Ammonium_Phosphate_test,.trip-block,#boardlabel_saltsoln').hide();
			$('#groupZeroWrap,#sodiumHydroxideWrap,#nesslersReagentWrap,#groupOneWrap,#gOneCoolSoluWrap,#gOnePotassiumIodideWrap,#gOnePotassiumChromateWrap,#gTwoPotassiumIodideWrap').hide();
			$('#gTwoPotassiumIodideNextSceneWrap,#gTwoPchromateNextSceneWrap,#gTwoCuPFerrocyanideNextWrap,#gTwoCuPIodideNextWrap').hide();
			nextClickflag_charcoalcavity=false;
			if(helpclickFlag==true){
				$('.trip-block').hide();
				trip.stop();
				helpclickFlag=false;
			}
			$('#boardlabel_saltsoln').css({top:'133px',left:'220px'});
			$("#saltsolutionlabel_saltsoln").css({top:'10px'});
		}		
	});
}