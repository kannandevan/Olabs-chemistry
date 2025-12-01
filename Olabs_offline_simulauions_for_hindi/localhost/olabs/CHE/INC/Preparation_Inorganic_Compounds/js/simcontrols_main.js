var simulationTypeIndex=0;
var turbidityIndex=0;
var carboFunctions;
var helpclickFlag=false;
var inferenceMag;
var expName;
var clrInfMsg;
var droped=false;
var angle=0;
var mohr_scene=1;
var pAlum_scene=1;
var pFerricOxa_scene=1;
var mohrsLabel,potashAlumLabel,pFerricOxalLabel;
var inferenceMsg,inferenceTxt;
function hideAllTest(){
	$('#mohrsSaltWrap,#potashAlumWrap,#pFerricOxalateWrap').hide();
	$("#pFerricOxa_scene2_beaker,#pFerricOxa_scene3_beaker").stop();
	if(helpclickFlag==true){
		$('.trip-block').hide();
		trip.stop();
		helpclickFlag=false;
	}
	clearInterval(clrInfMsg);
	$("#nextButton").hide();
	if(helpclickFlag){
		trip.stop();
	}
	clearInterval(clockinterval);
	clockAngle=0;
	mohr_scene=1;
	pAlum_scene=1;
	pFerricOxa_scene=1;
	$("#clockBody,#needle,#minutLabel").hide();
}
var gt=$;
window.onload = function init(){
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
	//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
	document.getElementById("expName").innerHTML=gt.gettext("Preparation of Inorganic Compounds");
	inorganicFuns=[mohrsSalt,potashAlum,potassiumFerricOxalate];
	mohrsLabel=[gt.gettext("Ferrous Sulphate(7g)"),gt.gettext("Ammonium Sulphate(3.5g)"),gt.gettext("Dil. H<sub>2</sub>SO<sub>4</sub>(3ml)"),gt.gettext("Next"),gt.gettext("Hot water(20ml)"),gt.gettext("Ferrous Sulphate+ Ammonium Sulphate"),gt.gettext("Crystallising dish"),gt.gettext("Cold water"),gt.gettext("Ferrous Ammonium Sulphate Crystals"),gt.gettext("Ethyl Alcohol"),gt.gettext("Filter papers"),gt.gettext("30 minutes"),gt.gettext("Crystals of Potash Alum"),gt.gettext("Ethyl Alcohol+ Cold Water")]
	potashAlumLabel=[gt.gettext("Potassium Sulphate (2.5g)"),gt.gettext("Aluminium Sulphate(10g)"),gt.gettext("Dil. H<sub>2</sub>SO<sub>4</sub>(1ml)"),gt.gettext("Water(20ml)"),gt.gettext("Aluminium Sulphate Solution"),gt.gettext("Potassium Sulphate Solution"),gt.gettext("China Dish & Glass Rod"),gt.gettext("Thin Crust")]
	pFerricOxalLabel=[gt.gettext("Ferric Chloride(3.5g)"),gt.gettext("Water(50ml)"),gt.gettext("Potassium Hydroxide(4g)"),gt.gettext("Glass Rod"),gt.gettext("Ferric hydroxide precipitate"),gt.gettext("Filter paper"),gt.gettext("Buchner Funnel"),gt.gettext("Oxalic Acid(4g)"),gt.gettext("Potassium Oxalate(5.5g)"),gt.gettext("Water(100ml)"),gt.gettext("Precipitate of Ferric Hydroxide"),gt.gettext("Black Paper"),gt.gettext("Cold Water"),gt.gettext("Potassium Trioxalatoferrate(III)")];
	
	$('#reset').val(gt.gettext("Reset"));
	//---------------Onloading events....
	$(document).ready(function() {
		$('#canvasBox').mousedown(function(event){	event.preventDefault();	});			
		$('#compoundsLbl').html(gt.gettext("Select the compound: "));
		compounds=[gt.gettext("Ferrous Ammonium Sulphate"),gt.gettext("Potash Alum"),gt.gettext("Potassium trioxalatoferrate(III)")];
		helpMsg_mohrs_1=[gt.gettext("Drag the watch glass to the beaker<br>to put ferrous sulphate into it."),gt.gettext("Drag the watch glass to the beaker<br>to add ammonium sulphate to it."),gt.gettext("Drag the measuring jar to the beaker<br>to pour 3 ml dil. H<sub>2</sub>SO<sub>4</sub> into it.")];
		helpMsg_mohrs_2=[gt.gettext("Drag the beaker to pour hot water into<br>the beaker containing ferrous sulphate<br>and ammonium sulphate."),gt.gettext("Drag the glass rod to the beaker<br>to stir the contents."),gt.gettext("Drag the beaker to the funnel to<br>filter the solution.")];
		helpMsg_mohrs_3=[gt.gettext("Click on the knob of the burner<br>to turn it on."),gt.gettext("Drag the glass rod to the china dish<br>to stir the solution."),gt.gettext("Drag the china dish to the crystallising dish<br>to transfer the solution into it."),gt.gettext("Drag the watch glass to the crystallising dish<br>to cover the dish with it."),gt.gettext("Drag the crystallising dish to the cold water<br>trough to place the dish in it.")];
		helpMsg_mohrs_4=[gt.gettext("Drag the crystallising dish to the beaker<br>to decant the mother liquor into it."),gt.gettext("Drag the bottle to the crystallising dish<br>to wash the crystals with ethyl alcohol."),gt.gettext("Drag the crystallising dish to<br>the filter paper to transfer<br>the crystals into it."),gt.gettext("Drag the filter paper to the filter paper<br>containing crystals to dry the crystals."),gt.gettext("Drag the filter paper to the watch glass<br>to transfer the crystals.")];
		helpMsg_pAlum_1=[gt.gettext("Drag the watch glass to the beaker to add<br>potassium sulphate into the distilled water."),gt.gettext("Drag the watch glass to the beaker to add<br>aluminium sulphate to the distilled water."),gt.gettext("Drag the measuring jar to the beaker to<br>pour 1 ml dil. dil. H<sub>2</sub>SO<sub>4</sub> into it.")];
		helpMsg_pAlum_2=[gt.gettext("Drag the beaker to the burner to heat<br>aluminium sulphate solution."),gt.gettext("Click on the knob of the burner<br>to turn it on."),gt.gettext("Drag the beaker to the china dish to transfer<br>aluminium sulphate solution into it."),gt.gettext("Drag the beaker to the china dish to transfer<br>potassium sulphate solution to it.")];
		helpMsg_pFerricOxa_1=[gt.gettext("Drag the watch glass to the beaker to add<br>ferric chloride into the distilled water."),gt.gettext("Drag the watch glass to the beaker to add<br>potassium hydroxide to the distilled water."),gt.gettext("Drag the glass rod to the beaker<br>to stir the contents"),gt.gettext("Drag the beaker to add potassium hydroxide<br>solution to the beaker containing ferric<br>chloride solution.")];
		helpMsg_pFerricOxa_2=[gt.gettext("Drag the filter paper to the Buchner funnel<br>to place it in the funnel"),gt.gettext("Drag the beaker to the Buchner funnel<br>to filter the contents of the beaker.")];
		helpMsg_pFerricOxa_3=[gt.gettext("Drag the watch glass to the beaker to add<br>hydrated oxalic acid into the distilled water."),gt.gettext("Drag the watch glass to the beaker to add<br>hydrated potassium oxalate to the beaker."),gt.gettext("Drag the watch glass to the beaker to add<br>ferric hydroxide precipitate."),gt.gettext("Drag the beaker to the funnel to<br>filter the solution.")];
		helpMsg_pFerricOxa_4=[gt.gettext("Click on the knob of the burner<br>to turn it on."),gt.gettext("Drag the glass rod to the china dish to<br>stir the solution."),gt.gettext("Drag the china dish to the cold water trough<br> to place the dish in it."),gt.gettext("Drag the black paper to the cold water trough<br>to cover the china dish with it.")];
		helpMsg_pFerricOxa_5=[gt.gettext("Drag the bottle to the china dish to<br>wash the crystals with ethyl alcohol."),gt.gettext("Drag the china dish to the filter paper<br>to transfer the crystals."),gt.gettext("Drag the filter paper to the filter paper<br>containing crystals to dry the crystals."),gt.gettext("Drag the filter paper to the watch glass<br>to transfer the crystals into it.")];
		inferenceTxt=[gt.gettext("The crystals of ferrous ammonium sulphate are<br>light green in colour and are monoclinic in shape."),gt.gettext("The crystals of potash alum are colourless, transparent<br>crystals and are octahedral in shape."),gt.gettext("Potassium trioxalatoferrate (III) are green in<br>colour and are octahedral in shape."),gt.gettext("Precipitate of ferric hydroxide filtered<br>through the Buchner funnel."),gt.gettext("Ferric chloride reacts with potassium hydroxide<br> to form brown precipitate of ferric hydroxide.")];
		/*-----------Add values into combobox------------*/
		addintoDropDown($('#compoundsType'),compounds);		
		//Function to add values into combobox
		function addintoDropDown(getId,valueSet){
			$.each(valueSet, function(val, text) {
				getId.append(
					$('<option ></option>').val(val).html(text) 
				);
			});
		}
		hideAllTest();	
		inorganicFuns[0]();
		$("#compoundsType").change(function(){
			hideAllTest();
			$("#inference").hide();
			simulationTypeIndex=$('#compoundsType option:selected').val();
			inorganicFuns[simulationTypeIndex]();
			droped=false;
		});		
		
	});
	
}