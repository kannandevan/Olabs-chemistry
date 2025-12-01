var helpFunctions=[colorTestfn,smellTestfn,dryHeatingTestfn,charcoalcavityHelpfn,cobaltNitrateHelpfn,flamehelpfn,boraxBeadHelpfn];

var helpGroupFuns=[groupZerofn,groupZerofn,groupOnefn,groupTwoHelpfn,groupthree_Help,groupthree_Help,groupFiveHelpfn,groupAmmonium_Help];

var helpConfnFuns=[[],
[[],[sodiumHydroxidefn,nesslersReagentfn]],[[],[coolSolutionfn,gOnePotassiumIodidfn,gOnePotassiumChroomatefn]],[[],[pb_pIodideTestfn,pb_pIodideTestfn],[pb_pIodideTestfn,pb_pIodideTestfn],[AmmoniumMolybdateTestHelpfn,MagnesiaMixtureTestHelpfn]],

[[],[potassiumFerrocyanideHelpfn,potassiumFerrocyanideHelpfn],[laketestHelpfn,charcoalcavityHelpfn]],

[[],[potassiumnitrateHelpfn,ammoniumthiocyanateHelpfn,boraxBeadHelpfn],[potassiumFerrocyanideHelpfn,confirmationnickelHelpfn,boraxBeadHelpfn],[sodiumhydroxideBr2Helpfn,LeadPeroxideHelpfn,boraxBeadHelpfn],[confirmationzincHelpfn,confirmationzincHelpfn,charcoalcavityHelpfn]],

[[],[potassiumChromateTestHelpfn,flamehelpfn],[ammoniumSulphateTestHelpfn,flamehelpfn],[ammoniumOxalateTestHelpfn,flamehelpfn]],

[[groupAmmonium_Help,charcoalcavityHelpfn]]];
$(document).ready(function() {
	$('#olabmenuBar li:first-child').bind('click',function(){
		$(".content").scrollTop(0);
		helpclickFlag=true;
		if(preliminary_help){
			helpFunctions[preliminaryIndex]();
		}else{	
			
			if(confirmationIndex==0){
				if(groupIndex==7){
					if(nextClickflag_charcoalcavity==true){
						helpFunctions[4]();
					}else{
						helpConfnFuns[groupIndex][confirmationIndex][confirmationSubIndex]();
					}
				}else{
					helpGroupFuns[groupIndex]();
				}
			}
			else{						
				switch (groupIndex+"-"+confirmationSubIndex) {				
						case "7-1"://Charcoal cavity/Cobalt nitrate test
						case "5-2":
						case "4-1":							
							if(nextClickflag_charcoalcavity==true){
								trip.stop();
								helpFunctions[4]();
							}else{
								helpConfnFuns[groupIndex][confirmationIndex][confirmationSubIndex]();
							}
							
						break;
						
						default:				
							helpConfnFuns[groupIndex][confirmationIndex][confirmationSubIndex]();
				}
			}
		}
	});
	$('#Inference').bind('click',function(){
	
		var trip1 = new Trip([
		{
			sel : $('#Inference'),
			position : 'e',
			content :inferenceMsg,
			expose : false,
			delay : 6000
		}]);
		trip1.start(); 
		window.trip1 = trip1;
	});
	
});