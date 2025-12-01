var inferenceMsg;
var soleArry,timeArray,lyophilicItems,lyophobicItems,inferenceArray;
var testName;
var sole_DropBoxValue=0;
var sample_DropBoxValue=0;
var aluHydro_labels,aluHydro_infMsg;
var arsenious_labels,arsenious_infMsg;
var mainTop,mainLeft;//mm added
var inferenceArray_EggAlbmn;
var aluHydro_help_scene_1,aluHydro_help_scene_2;
var arsenious_help_scene_1,arsenious_help_scene_2;
var help_starch,help_gum,help_egg,help_ferric;

window.onload = function init(){

	$(document).ready(function(){
	
	testName=[[starch,gum,Eggalbumintest],[aluminiumHydroxide,ferricHydroxide,arseniousSulphide]];
	timeArray=[gt.gettext("10 minutes"),gt.gettext("30 minutes")];
	soleArry=[gt.gettext("Lyophilic sols"),gt.gettext("Lyophobic sols")];
	lyophilicItems=[gt.gettext("Starch"),gt.gettext("Gum"),gt.gettext("Egg albumin")];
	lyophobicItems=[gt.gettext("Aluminium hydroxide"),gt.gettext("Ferric hydroxide"),gt.gettext("Arsenious sulphide")];
	inferenceArray=[gt.gettext("There is no color change, thus it follows that starch molecules</br> do not diffuse through parchment membrane."),gt.gettext("A white precipitate of AgCl produced immediately indicates the presence<br/> of chloride ions and hence sodium chloride in water."),gt.gettext("No white precipitate is formed, Cl<sup>-</sup> ions are absent.")];
	
	lablsStarch=[gt.gettext("Starch paste(1g)"),gt.gettext("Starch Sol"),gt.gettext("Dialysis of starch sol"),gt.gettext("Replace the water"),gt.gettext("Water replaced from beaker"),gt.gettext("Water(100 ml)")]
	

	lablsEgg=[gt.gettext("Egg Albumin"),gt.gettext("Egg-albumin sol"),gt.gettext("5% NaCl Solution")];

	lablsGum=[gt.gettext("Gum paste (1g)"),gt.gettext("Gum Sol")];

	lablsFerric=[gt.gettext("Water (100ml)"),gt.gettext("Ferric chloride solution (2%)"),gt.gettext("Dialysis of ferric hydroxide sol"),gt.gettext("Silver nitrate"),gt.gettext("Water"),gt.gettext("Replace the water"),gt.gettext("Water replaced from beaker"),gt.gettext("Ferric Hydroxide Sol")];

	inferenceArrayGum=[gt.gettext("Preparation of gum sol has been completed.")];
	inferenceArray_Ferric=[gt.gettext("Ferric chloride undergoes hydrolysis with <br/>boiling distilled water to form ferric hydroxide sol."),gt.gettext("On adding silver nitrate to water,<br/> a white precipitate of silver chloride is produced immediately,<br/> which indicates the presence of chloride ions and hence, NaCl in water. <br/>It means that chloride ions diffuse through the parchment membrane."),gt.gettext("No white precipitate is formed,<br/> indicating that Cl<sup>-</sup> ions are absent and dialysis is complete.")];
	aluHydro_labels=[gt.gettext("30 minutes"),gt.gettext("10 minutes"),gt.gettext("Water(100ml)"),gt.gettext("AlCl<sub>3</sub>"),gt.gettext("Aluminium chloride(2%)"),gt.gettext("Dialysis of aluminium hydroxide sol."),gt.gettext("Water replaced from beaker"),gt.gettext("Aluminum hydroxide sol"),gt.gettext("Silver nitrate"),gt.gettext("AgNO<sub>3</sub>"),gt.gettext("Replace distilled water from the beaker")];
	aluHydro_infMsg=[gt.gettext("Aluminium chloride undergoes hydrolysis with boiling<br>distilled water to form aluminium hydroxide sol."),gt.gettext("On adding silver nitrate to water, a white precipitate of silver<br>chloride is produced immediately, which indicates the presence<br of chloride ions and hence, NaCl in water. It means that<br>chloride ions diffuse through the parchment membrane."),gt.gettext("No white precipitate is formed, indicating that<br>Cl<sup>-</sup> ions are absent and dialysis is complete. ")];
	arsenious_labels=[gt.gettext("Water (100 ml)"),gt.gettext("Arsenious oxide (0.2 g)"),gt.gettext("Pass H<sub>2</sub>S gas through arsenous acid"),gt.gettext("5 minutes"),gt.gettext("Filter the solution"),gt.gettext("Arsenious Sulphide(Hot solution)"),gt.gettext("Water"),gt.gettext("Solution of Arsenous acid"),gt.gettext("Arsenious sulphide sol"),gt.gettext("Solution of Arsenous acid")];
	arsenious_infMsg=[gt.gettext("Filtrate is arsenious sulphide sol."),gt.gettext("Arsenious oxide "),gt.gettext("Arsenious oxide undergoes hydrolysis with<br>boiling distilled water to form arsenous acid."),gt.gettext("Arsenous acid reacts with H<sub>2</sub>S gas to<br>form arsenious sulphide sol.")]
	aluHydro_help_scene_1=[gt.gettext("Click on the ‘knob’ of the burner<br>to turn it on. "),gt.gettext("Drag the conical flask to the burner<br>to place it over the wire gauze."),gt.gettext("Drag the dropper to the conical flask to drop<br>aluminium chloride solution into it.")]
	aluHydro_help_scene_2=[gt.gettext("Drag the conical flask to the funnel to pour<br>aluminium hydroxide sol into the parchment bag. "),gt.gettext("Drag the dropper to the beaker to take water<br>in it and drop water into the 1st test tube."),gt.gettext("Drag the dropper to drop silver nitrate solution<br>into the test tube."),gt.gettext("Drag the dropper to the beaker to take water in it<br>and drop water into the 2nd test tube."),gt.gettext("Drag the dropper to drop silver nitrate solution<br>into the test tube.")];
	arsenious_help_scene_1=[gt.gettext("Drag the watch glass to the conical flask<br>to add arseniuos oxide into water."),gt.gettext("Drag the conical flask to the burner<br>to place it over the wire gauze."),gt.gettext("Click on the ‘knob’ of the burner<br>to turn it on. "),gt.gettext("Drag the conical flask to the funnel<br>to filter the solution.")];
	arsenious_help_scene_2=[gt.gettext("Click on the ‘knob’ of the Kipp’s apparatus to<br>pass hydrogen sulphide gas through the solution."),gt.gettext("Drag the beaker to the burner<br>to place it over the wire gauze."),gt.gettext("Click on the ‘knob’ of the burner<br>to turn it on."),gt.gettext("Drag the beaker to the funnel to<br>filter the arseniuos sulphide sol.")];
	
	inferenceArray_EggAlbmn=[gt.gettext("Preparation of Egg-albumin sol has been completed.")];
	silverNtrt=gt.gettext("Silver nitrate");
	iodineSln=gt.gettext("Iodine solution");
	water=gt.gettext("Water");

	help_starch=[gt.gettext("Drag the beaker to the<br/> burner to place it over the wire gauze."),gt.gettext("Click on the ‘knob’ of the<br/> burner to turn it on."),gt.gettext("Drag the watch glass to the beaker<br/> to transfer starch paste into it."),gt.gettext("Drag the glass rod to the beaker to <br/>stir the contents of the beaker."),gt.gettext("Drag the beaker to the funnel <br/>to filter the starch sol."),gt.gettext("Drag the conical flask to the funnel to<br/> pour starch sol into the parchment bag."),gt.gettext("Drag the dropper to the beaker to take water<br/> in it and drag it back to drop water<br/> into the 1<sup>st</sup> test tube."),gt.gettext("Drag the dropper to drop iodine<br/> solution into the 1<sup>st</sup> test tube."),gt.gettext("Drag the dropper to the beaker to take water <br/>in it and drag it back to drop water into the 2<sup>nd</sup> test tube."),gt.gettext("Drag the dropper to drop silver nitrate <br/>solution into the 2<sup>nd</sup> test tube."),gt.gettext("Drag the dropper to the beaker to take water in <br/>it and drag it back to drop water into the test tube."),gt.gettext("Drag the dropper to drop silver <br/>nitrate solution into the test tube.")];
	help_gum=[gt.gettext("Drag the beaker to the burner to<br/> place it over the wire gauze."),gt.gettext("Click on the ‘knob’ of<br/> the burner to turn it on."),gt.gettext("Drag the watch glass to the beaker to<br/> transfer gum paste into it."),gt.gettext(" Drag the glass rod to the beaker to stir the<br/> contents of the beaker."),gt.gettext("Drag the beaker to the<br/> funnel to filter the gum sol.")];
	help_egg=[gt.gettext("Drag the beaker to the beaker <br/>containing NaCl solution to transfer<br/> egg albumin into it."),gt.gettext("Drag the glass rod to the beaker<br/> to stir the contents of the beaker."),gt.gettext("Drag the beaker to the<br/> funnel to filter the egg albumin sol.")];
	help_ferric=[gt.gettext("Drag the conical flask to the<br/> burner to place it over the wire gauze."),gt.gettext("Click on the ‘knob’ of<br/>  the burner to turn it on."),gt.gettext("Drag the dropper to the conical<br/> flask to drop ferric chloride solution into it."),gt.gettext("Drag the conical flask to the <br/>funnel to pour ferric hydroxide<br/> sol into the parchment bag."),gt.gettext("Drag the dropper to the<br/>  beaker to take water in it and drag it back to<br/>  drop water into the 1<sup>st</sup>  test tube."),gt.gettext("Drag the dropper to drop silver<br/>  nitrate solution into the test tube."),gt.gettext("Drag the dropper to the beaker to take water<br/>  in it and drag it back to drop <br/> water into the 2<sup>nd</sup>  test tube. ")]
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	$("#selectTheSoleHeading").html(gt.gettext("Select the sol:"));
	$("#selectTheSampleHeading").html(gt.gettext("Select the sample:"));
	$('#expName').html(gt.gettext("Preparation of Lyophilic and Lyophobic Sols"));
	$("#resetBtn").val(gt.gettext("Reset"));
	mainTop=$('#mainDiv').position().top;//mm
	mainLeft=$('#mainDiv').position().left;	//mm
	hideAllTests();
			//Function for Select the sole drop-down.
		
		function selectTheSole_dropdownFN(getid,array_set){
				$.each(array_set, function(val, text) {
				getid.append(
				$('<option></option>').val(val).html(text)
					);
				});
			}
			$("#inference").hide();
			selectTheSole_dropdownFN($("#selectTheSole"),soleArry);
			selectTheSole_dropdownFN($("#selectTheSample"),lyophilicItems);

			function hideAllTests(){
			$('#starchSln_canvas,#starchSlnDialysis_canvas,#gumSln_canvas,#ferricHydroxide_canvas,#aluHydroWrap,#arseniousSulphideWrap').hide();
			$("#Egg_albumindiv,#ferricHydroxideDlsy_canvas,#inference,#clockContainer").hide();
			clearInterval(flameClrIntvl);
			clearInterval(clockinterval);
			clearTimeout(flameClrIntvl_1);
			clearInterval(flameClrIntvl);
			resetStarch();
			resetferricHydroxide();
			resetGum();
			resetgroup_albumin();
		}

		//Function for sole selection. 
			$("#selectTheSole").change(function(){
				hideAllTests();
				sole_DropBoxValue=$("#selectTheSole").find(':selected').val();
				
				
				if(sole_DropBoxValue==0){
					$("#selectTheSample").empty();
					selectTheSole_dropdownFN($("#selectTheSample"),lyophilicItems);
					sample_DropBoxValue=0;
				}
				else{

					$("#selectTheSample").empty();
					selectTheSole_dropdownFN($("#selectTheSample"),lyophobicItems);
					sample_DropBoxValue=0;	
				}
				testName[sole_DropBoxValue][sample_DropBoxValue]();
			});

			$("#selectTheSample").change(function(){
				sample_DropBoxValue=$("#selectTheSample").find(':selected').val();
				hideAllTests();
				testName[sole_DropBoxValue][sample_DropBoxValue]();
				
			});


			// Initialize function
			testName[sole_DropBoxValue][sample_DropBoxValue]();

	});
}