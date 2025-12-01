
$(document).ready(function() {
	unsaturationhelpFunctions=[bromineWaterHelp,baeyerHelp];
	helpFunctions=[[sodiumMetalHelpfn,esterHelp,commonHelp,acetylChlorideHelpfn,iodoformHelp,lucasHelp],[litmusHelp,commonHelp,liebermannHelp,phthaleinDyeHelp],[commonHelp,tollenHelp,fehlingHelp,dintrophenylHydrazineHelp,sodiumBisulphiteHelp],[dintrophenylHydrazineHelp,sodiumBisulphiteHelp,dinitrobenzeneHelp,sodiumNitroprussideHelp],[litmusHelp,sodiumHydrogenCarbonateHelp,esterHelp],[commonHelp,litmusHelp,carbylaminesHelp,azoDyeHelp,nitrousAcidHelp,hinsbergHelp]];
	function bromineWaterHelp(){	
		trip = new Trip([
		{
			sel : $('#dropper1'),
			position : 'w',
			content :bromineWaterHelpMsg[0],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#testtubeA'),
			position : 'n',
			content :testubeADragHelp,
			expose : false,
			delay : 4000
		},
		{
			sel : $('#dropper1'),
			position : 'w',
			content :bromineWaterHelpMsg[1],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#testtubeB'),
			position : 'n',
			content :testubeBDragHelp,
			expose : false,
			delay : 4000
		}
		])
		trip.start(); 
		window.trip = trip;			
		
	}
	function baeyerHelp(){
		trip = new Trip([
		{
			sel : $('#dropper1'),
			position : 'w',
			content :baeyerHelpMsg[0],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#testtubeA'),
			position : 'n',
			content :testubeADragHelp,
			expose : false,
			delay : 4000
		},
		{
			sel : $('#dropper1'),
			position : 'w',
			content :baeyerHelpMsg[1],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#testtubeB'),
			position : 'n',
			content :testubeBDragHelp,
			expose : false,
			delay : 4000
		}
		])
		trip.start(); 
		window.trip = trip;	
	}
	function sodiumMetalHelpfn(){
		if(nextClickFlag==false){
			trip = new Trip([
			{
				sel : $('#spatulaDiv'),
				position : 'w',
				content :addCalciumSulphate,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeA'),
				position : 'n',
				content : testubeADragHelp,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeA'),
				position : 'e',
				content : filterHelp,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#nextBtnHelp'),
				position : 'w',
				content : nextProcessHelp,
				expose : false,
				delay : 4000
			}
			])
		}else{
			
			trip = new Trip([
			{
				sel : $('#forceps'),
				position : 'n',
				content :sodiumMetalHelpMsg[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#forceps'),
				position : 'n',
				content : sodiumMetalHelpMsg[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#filterPaperDrag'),
				position : 'n',
				content : sodiumMetalHelpMsg[2],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#forceps'),
				position : 'n',
				content : sodiumMetalHelpMsg[3],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#forceps'),
				position : 'n',
				content : sodiumMetalHelpMsg[4],
				expose : false,
				delay : 4000
			}
			])
		}
		trip.start(); 
		window.trip = trip;	
	}
	function acetylChlorideHelpfn(){
		if(nextClickFlag==false){
			trip = new Trip([
			{
				sel : $('#spatulaDiv'),
				position : 'w',
				content :addCalciumSulphate,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeA'),
				position : 'n',
				content : testubeADragHelp,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeA'),
				position : 'e',
				content : filterHelp,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#nextBtnHelp'),
				position : 'w',
				content : nextProcessHelp,
				expose : false,
				delay : 4000
			}
			])
		}else{
			
			trip = new Trip([
			{
				sel : $('#dropper1'),
				position : 'n',
				content :acetylChlorideHelpMsg[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeB'),
				position : 'n',
				content :testubeBDragHelp,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#glassRod'),
				position : 'n',
				content : acetylChlorideHelpMsg[1],
				expose : false,
				delay : 4000
			}
			])
		}
		trip.start(); 
		window.trip = trip;	
	}
	function esterHelp(){
		if(nextClickFlag==false){
			trip = new Trip([
			{
				sel : $('#dropper1'),
				position : 'w',
				content :estertestDragDropper,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper2'),
				position : 'w',
				content : esterHelpMsg[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#nextBtnHelp'),
				position : 'w',
				content : nextProcessHelp,
				expose : false,
				delay : 4000
			}
			])
		}else{
			trip = new Trip([
			{
				sel : $('#testtubeA'),
				position : 'e',
				content :waterBathHelp,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#hotMachineHelpDiv'),
				position : 'n',
				content : heatwaterBathHelp,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeA'),
				position : 'e',
				content : esterHelpMsg[1],
				expose : false,
				delay : 4000
			}
			])
		}
		trip.start(); 
		window.trip = trip;	
	}

	function commonHelp(){
		trip = new Trip([
		{
			sel : $('#dropper1'),
			position : 'w',
			content :commonHelpMsg,
			expose : false,
			delay : 4000
		},
		{
			sel : $('#testtubeA'),
			position : 'n',
			content :testubeDragHelp,
			expose : false,
			delay : 4000
		}
		])
		trip.start(); 
		window.trip = trip;	
	}	
	function iodoformHelp(){
		if(nextClickFlag==false){
			trip = new Trip([
			{
				sel : $('#dropper1'),
				position : 'w',
				content :iodoformHelpMsg[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper2'),
				position : 'w',
				content : iodoformHelpMsg[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#nextBtnHelp'),
				position : 'w',
				content : nextProcessHelp,
				expose : false,
				delay : 4000
			}
			])
		}else{
			trip = new Trip([
			{
				sel : $('#testtubeA'),
				position : 's',
				content :waterBathHelp,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#hotMachineHelpDiv'),
				position : 'n',
				content : heatwaterBathHelp,
				expose : false,
				delay : 4000
			}
			])
		}
		trip.start(); 
		window.trip = trip;	
	}
	function lucasHelp(){
		trip = new Trip([
		{
			sel : $('#dropper1'),
			position : 'w',
			content :lucasHelpMsg[0],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#testtubeA'),
			position : 'n',
			content : testubeADragHelp,
			expose : false,
			delay : 4000
		},
		{
			sel : $('#dropper1'),
			position : 'w',
			content : lucasHelpMsg[1],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#testtubeB'),
			position : 'n',
			content : testubeBDragHelp,
			expose : false,
			delay : 4000
		},
		{
			sel : $('#dropper1'),
			position : 'w',
			content : lucasHelpMsg[2],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#testtubeC'),
			position : 'w',
			content : lucasHelpMsg[3],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#burnerhelpDiv'),
			position : 'e',
			content : lucasHelpMsg[4],
			expose : false,
			delay : 4000
		}
		])
		
		trip.start(); 
		window.trip = trip;	
	}
	function litmusHelp(){
		trip = new Trip([
		{
			sel : $('#dropper1'),
			position : 'w',
			content :litmusHelpMsg,
			expose : false,
			delay : 4000
		}
		])		
		trip.start(); 
		window.trip = trip;	
	}

	function liebermannHelp(){
		if(nextClickFlag==false){
			trip = new Trip([
			{
				sel : $('#spatulaDiv'),
				position : 'w',
				content :liebermannHelpMsg[0],
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
				sel : $('#testtubeA'),
				position : 'n',
				content : liebermannHelpMsg[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeA'),
				position : 'n',
				content : liebermannHelpMsg[2],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper1'),
				position : 'w',
				content : liebermannHelpMsg[3],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeA'),
				position : 'n',
				content : testubeDragHelp,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#nextBtnHelp'),
				position : 'w',
				content : nextProcessHelp,
				expose : false,
				delay : 4000
			}
			])		
		}else{
			trip = new Trip([
			{
				sel : $('#dropper1'),
				position : 'n',
				content :liebermannHelpMsg[4],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper2'),
				position : 'w',
				content :liebermannHelpMsg[5],
				expose : false,
				delay : 4000
			}
			])	
		}
		trip.start(); 
		window.trip = trip;
	}
	function phthaleinDyeHelp(){
		if(nextClickFlag==false){
			trip = new Trip([
			{
				sel : $('#spatulaDiv'),
				position : 'w',
				content :phthaleinDyeHelpMsg[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper1'),
				position : 'w',
				content : phthaleinDyeHelpMsg[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#nextBtnHelp'),
				position : 'w',
				content : nextProcessHelp,
				expose : false,
				delay : 4000
			}
			])	
		}else{
			trip = new Trip([
			{
				sel : $('#testtubeA'),
				position : 's',
				content :phthaleinDyeHelpMsg[2],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#hotMachineHelpDiv'),
				position : 'n',
				content :phthaleinDyeHelpMsg[3],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeA'),
				position : 's',
				content :waitHelp,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeA'),
				position : 's',
				content :phthaleinDyeHelpMsg[4],
				expose : false,
				delay : 4000
			}
			])	
		}	
		trip.start(); 
		window.trip = trip;
	}
	function dintrophenylHydrazineHelp(){
		trip = new Trip([
		{
			sel : $('#dropper1'),
			position : 'w',
			content :dintrophenylHydrazineHelpMsg[0],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#dropper2'),
			position : 'w',
			content : dintrophenylHydrazineHelpMsg[1],
			expose : false,
			delay : 4000
		}
		])		
		trip.start(); 
		window.trip = trip;
	}
	function sodiumBisulphiteHelp(){
		trip = new Trip([
		{
			sel : $('#dropper1'),
			position : 'w',
			content :sodiumBisulphiteHelpMsg[0],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#cork'),
			position : 'n',
			content : sodiumBisulphiteHelpMsg[1],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#testtubeA'),
			position : 'n',
			content : testubeDragHelp,
			expose : false,
			delay : 4000
		}
		])		
		trip.start(); 
		window.trip = trip;
	}

	function tollenHelp(){
		if(nextClickFlag==false){
			trip = new Trip([
			{
				sel : $('#dropper4'),
				position : 'n',
				content :tollenHelpMsg[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper1'),
				position : 'n',
				content : tollenHelpMsg[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper2'),
				position : 'w',
				content : tollenHelpMsg[2],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper3'),
				position : 'w',
				content : tollenHelpMsg[3],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#nextBtnHelp'),
				position : 'w',
				content : nextProcessHelp,
				expose : false,
				delay : 4000
			}
			])	
		}else{
			trip = new Trip([
			{
				sel : $('#testtubeA'),
				position : 's',
				content :waterBathHelp,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#hotMachineHelpDiv'),
				position : 'n',
				content : heatwaterBathHelp,
				expose : false,
				delay : 4000
			}
			])	
		}	
		trip.start(); 
		window.trip = trip;
	} 
	function fehlingHelp(){
		if(nextClickFlag==false){
			trip = new Trip([
			{
				sel : $('#dropper1'),
				position : 'n',
				content : fehlingHelpMsg[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper2'),
				position : 'w',
				content : fehlingHelpMsg[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#nextBtnHelp'),
				position : 'w',
				content : nextProcessHelp,
				expose : false,
				delay : 4000
			}
			])	
		}else{
			trip = new Trip([
			{
				sel : $('#testtubeA'),
				position : 's',
				content :waterBathHelp,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#hotMachineHelpDiv'),
				position : 'n',
				content : heatwaterBathHelp,
				expose : false,
				delay : 4000
			}
			])	
		}	
		trip.start(); 
		window.trip = trip;
	} 
	function dinitrobenzeneHelp(){
		trip = new Trip([
		{
			sel : $('#spatulaDiv'),
			position : 'n',
			content :dinitrobenzeneHelpMsg[0],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#dropper1'),
			position : 'w',
			content : dinitrobenzeneHelpMsg[1],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#testtubeA'),
			position : 's',
			content : testubeDragHelp,
			expose : false,
			delay : 4000
		}
		])		
		trip.start(); 
		window.trip = trip;
	} 
	function sodiumNitroprussideHelp(){
		trip = new Trip([
		{
			sel : $('#dropper1'),
			position : 'n',
			content :sodiumNitroprussideHelpMsg[0],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#testtubeA'),
			position : 's',
			content : testubeDragHelp,
			expose : false,
			delay : 4000
		},
		{
			sel : $('#dropper2'),
			position : 'w',
			content : sodiumNitroprussideHelpMsg[1],
			expose : false,
			delay : 4000
		}
		])		
		trip.start(); 
		window.trip = trip;
	} 
	function sodiumHydrogenCarbonateHelp(){
		trip = new Trip([
		{
			sel : $('#spatulaDiv'),
			position : 'w',
			content :sodiumHydrogenCarbonateHelpMsg,
			expose : false,
			delay : 4000
		}
		])		
		trip.start(); 
		window.trip = trip;	
	} 
	function carbylaminesHelp(){
		trip = new Trip([
		{
			sel : $('#dropper1'),
			position : 'n',
			content :carbylaminesHelpMsg[0],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#burnerhelpDiv'),
			position : 'e',
			content :burnerOnHelp,
			expose : false,
			delay : 4000
		},
		{
			sel : $('#testtubeA'),
			position : 'e',
			content :carbylaminesHelpMsg[1],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#dropper2'),
			position : 'w',
			content :carbylaminesHelpMsg[2],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#dropper3'),
			position : 'w',
			content :carbylaminesHelpMsg[3],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#burnerhelpDiv'),
			position : 'e',
			content :burnerOnHelp,
			expose : false,
			delay : 4000
		},
		{
			sel : $('#testtubeA'),
			position : 'e',
			content :carbylaminesHelpMsg[1],
			expose : false,
			delay : 4000
		}
		])		
		trip.start(); 
		window.trip = trip;	
	} 
	function azoDyeHelp(){
		if(nextClickFlag==false){
			trip = new Trip([
			{
				sel : $('#dropper1'),
				position : 'n',
				content : azoDyeHelpMsg[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeA'),
				position : 'e',
				content : testubeADragHelp,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper2'),
				position : 'w',
				content :  azoDyeHelpMsg[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeC'),
				position : 'e',
				content :  azoDyeHelpMsg[2],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#nextBtnHelp'),
				position : 'w',
				content : nextProcessHelp,
				expose : false,
				delay : 4000
			}
			])	
		}else{
			trip = new Trip([
			{
				sel : $('#testtubeB'),
				position : 's',
				content :azoDyeHelpMsg[3],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeB'),
				position : 's',
				content :backTotesttubesRack,
				expose : false,
				delay : 4000			
			},
			{
				sel : $('#testtubeB'),
				position : 'n',
				content : azoDyeHelpMsg[4],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeA'),
				position : 'e',
				content :azoDyeHelpMsg[5],
				expose : false,
				delay : 4000
			}
			])	
		}	
		trip.start(); 
		window.trip = trip;
	} 
	function nitrousAcidHelp(){
		if(nextClickFlag==false){
			trip = new Trip([
			{
				sel : $('#dropper1'),
				position : 'n',
				content :commonNitrousAcidHelp1Msg,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#spatulaDiv'),
				position : 'w',
				content : nitrousAcidHelpMsg[0],
				expose : false,
				delay : 4000
			}
			,
			{
				sel : $('#testtubeA'),
				position : 'e',
				content : testubeADragHelp,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeB'),
				position : 'n',
				content : testubeBDragHelp,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#nextBtnHelp'),
				position : 'w',
				content : nextProcessHelp,
				expose : false,
				delay : 4000
			}
			])	
		}else{
			trip = new Trip([
			{
				sel : $('#testtubeA'),
				position : 's',
				content :nitrousAcidHelpMsg[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeA'),
				position : 's',
				content : backTotesttubesRack,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeA'),
				position : 's',
				content : commonNitrousAcidHelp2Msg,
				expose : false,
				delay : 4000
			}
			])	
		}	
		trip.start(); 
		window.trip = trip;
	} 
	function hinsbergHelp(){
		if(nextClickFlag==false){
			trip = new Trip([
			{
				sel : $('#dropper1'),
				position : 'n',
				content : commonhinsbergHelpMsg,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper2'),
				position : 'w',
				content : hinsbergHelpMsg[0],
				expose : false,
				delay : 4000
			}
			,
			{
				sel : $('#dropper3'),
				position : 'w',
				content : hinsbergHelpMsg[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeA'),
				position : 'e',
				content : testubeDragHelp,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#nextBtnHelp'),
				position : 'w',
				content : nextProcessHelp,
				expose : false,
				delay : 4000
			}
			])	
		}else{
			trip = new Trip([
			{
				sel : $('#testtubeA'),
				position : 'e',
				content :hinsbergHelpMsg[2],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeA'),
				position : 'e',
				content : backToRack,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper1'),
				position : 'w',
				content :hinsbergHelpMsg[3],
				expose : false,
				delay : 4000
			}
			])	
		}	
		trip.start(); 
		window.trip = trip;
	} 
	
	$('#inference').bind('click',function(){	
		inferenceClickFalg=true;
		trip1 = new Trip([
		{
			sel : $('#inferenceHelp'),
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
		if(typeChangeVal==0){
			unsaturationhelpFunctions[unsaturationtestVal]();
		}else{
			helpFunctions[groupVal][testVal]();
		}
		
	});
	
	
});