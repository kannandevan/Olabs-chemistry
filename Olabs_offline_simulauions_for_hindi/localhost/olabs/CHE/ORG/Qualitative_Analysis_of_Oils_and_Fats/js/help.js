
$(document).ready(function() {
	helpFunctions=[solubilityHelpfn,transluscentSpotHelpfn,acroleinHelpfn,baudouinHubleHelpfn,baudouinHubleHelpfn];
	$('#inference').bind('click',function(){	
		inferenceClickFalg=true;
		trip1 = new Trip([
		{
			sel : $('#inference'),
			position : 'e',
			content :inferenceMsg,
			expose : false,
			delay : 7000
		}]);
		trip1.start(); 
		window.trip1 = trip1;
	});
	$('#olabmenuBar li:first-child').bind('click',function(){
		$(".content").scrollTop(0);
		helpclickFlag=true;
		helpFunctions[testVal]();
	});
	
	function baudouinHubleHelpfn(){
		if(testName[testVal]==testName[3]){//Baudouin Test	
			trip = new Trip([
			{
				sel : $('#dropper1_baudouinTest'),
				position : 'w',
				content :baudouinHubleHelp[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper2_baudouinTest'),
				position : 'w',
				content :baudouinHubleHelp[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#stand_baudouinTest'),
				position : 'n',
				content :baudouinHubleHelp[4],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper1_baudouinTest'),
				position : 'w',
				content :baudouinHubleHelp[2],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#stand_baudouinTest'),
				position : 'n',
				content :baudouinHubleHelp[4],
				expose : false,
				delay : 4000
			}
			])
			trip.start(); 
			window.trip = trip;	
		}else{//Huble's Test	 
			trip = new Trip([
			{
				sel : $('#dropper1_baudouinTest'),
				position : 'w',
				content :baudouinHubleHelp[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeDrag1_baudouinTest'),
				position : 'n',
				content :testtubeToShake,
				expose : false,
				delay : 4000
			},			
			{
				sel : $('#dropper2_baudouinTest'),
				position : 'w',
				content :baudouinHubleHelp[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper1_baudouinTest'),
				position : 'w',
				content :baudouinHubleHelp[2],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeDrag2_baudouinTest'),
				position : 'n',
				content :testtubeToShake,
				expose : false,
				delay : 4000
			},			
			{
				sel : $('#dropper2_baudouinTest'),
				position : 'w',
				content :baudouinHubleHelp[3],
				expose : false,
				delay : 4000
			}
			])
			trip.start(); 
			window.trip = trip;	
		}
		
	}
	function acroleinHelpfn(){
		trip = new Trip([
		{
			sel : $('#spatulaDiv'),
			position : 'w',
			content : dragSpatula_acrolein,
			expose : false,
			delay : 4000
		},
		{
			sel : $('#burnerhelpDiv'),
			position : 'e',
			content : burnerOnHelp,
			expose : false,
			delay : 4000
		},
		{
			sel : $('#testtube_acroleinTest'),
			position : 'n',
			content : testtubeToHeat,
			expose : false,
			delay : 4000
		}
		])
		trip.start(); 
		window.trip = trip;	
	}
	function transluscentSpotHelpfn(){
		trip = new Trip([
		{
			sel : $('#dropper_transluscentSpot'),
			position : 'w',
			content :dragDropperHelp_initTransluscentSpot,
			expose : false,
			delay : 6000
		},
		{
			sel : $('#filterPaperDrag'),
			position : 'n',
			content : paperPressHelp,
			expose : false,
			delay : 6000
		},{
			sel : $('#filterPaperStill'),
			position : 'n',
			content : dragFilterPaperHelp_initTransluscentSpot,
			expose : false,
			delay : 6000
		}
		])
		trip.start(); 
		window.trip = trip;	
	}
	function solubilityHelpfn(){
		if(selectSubTest[solventVal] == "alcohol"){	//	alcohol	
			trip = new Trip([
			{
				sel : $('#dropper_solubility'),
				position : 'w',
				content : dragDropperDesiGheeHelp,
				expose : false,
				delay : 4000
			},			
			{
				sel : $('#burnerhelpDiv'),
				position : 'e',
				content : burnerOnHelp,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeDrag1_solubility'),
				position : 'n',
				content : testtubeDesiGheeToHeat,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper_solubility'),
				position : 'w',
				content :dragDropperVegGheeHelp ,
				expose : false,
				delay : 4000
			}
			,
			{
				sel : $('#burnerhelpDiv'),
				position : 'e',
				content : burnerOnHelp,
				expose : false,
				delay : 4000
			}
			,
			{
				sel : $('#testtubeDrag2_solubility'),
				position : 'n',
				content : testtubeVegGheeToHeat,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper_solubility'),
				position : 'w',
				content :dragDropperRefOilHelp ,
				expose : false,
				delay : 4000
			}
			,
			{
				sel : $('#burnerhelpDiv'),
				position : 'e',
				content : burnerOnHelp,
				expose : false,
				delay : 4000
			}
			,
			{
				sel : $('#testtubeDrag3_solubility'),
				position : 'n',
				content : testtuberefOilToHeat,
				expose : false,
				delay : 4000
			}
			])
			trip.start(); 
			window.trip = trip;	
		}else{//water ,chloroform
			trip = new Trip([
			{
				sel : $('#dropper_solubility'),
				position : 'w',
				content : dragDropperDesiGheeHelp,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeDrag1_solubility'),
				position : 'n',
				content : testtubeToShake,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper_solubility'),
				position : 'w',
				content :dragDropperVegGheeHelp ,
				expose : false,
				delay : 4000
			}
			,
			{
				sel : $('#testtubeDrag2_solubility'),
				position : 'n',
				content : testtubeToShake,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper_solubility'),
				position : 'w',
				content :dragDropperRefOilHelp ,
				expose : false,
				delay : 4000
			}
			,
			{
				sel : $('#testtubeDrag3_solubility'),
				position : 'n',
				content : testtubeToShake,
				expose : false,
				delay : 4000
			}
		
			])
			trip.start(); 
			window.trip = trip;	
		}
	}
});