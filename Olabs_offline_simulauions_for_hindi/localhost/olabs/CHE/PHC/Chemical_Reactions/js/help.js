// JavaScript Document
var trip,trip1,trip2;
var tripFlag=false;
var trip1Flag=false;
var trip2Flag=false;
$(document).ready(function() {
	$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){		 
		tripFlag=true;
		$(".content").scrollTop(0);
		if(reactionIcon==iconSelected[0])//Burning of Magnesium in air	
		{
			trip = new Trip([
			{
				sel : $('#helpBurnerDiv'),
				position : 'w',
				content : burningMagnesiumHelp[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#tong1'),
				position : 'n',
				content :burningMagnesiumHelp[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#spatula1'),
				position : 'n',
				content :burningMagnesiumHelp[2],
				expose : false,
				delay : 4000
			}]);
			trip.start(); 
			window.trip = trip;	
		}
		else if(reactionIcon==iconSelected[2] )//Na2SO4(aq) with BaCl2(aq) 
		{
			trip = new Trip([
			{
				sel : $('#bCork3Div'),
				position : 'n',
				content : sodiumSO4BariumCl2Help[5],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#bCork3Div'),
				position : 'n',
				content : sodiumSO4BariumCl2Help[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#nCork3Div'),
				position : 'n',
				content : sodiumSO4BariumCl2Help[5],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#nCork3Div'),
				position : 'n',
				content : sodiumSO4BariumCl2Help[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#flask3'),
				position : 'n',
				content : sodiumSO4BariumCl2Help[2],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#flask3'),
				position : 'n',
				content : sodiumSO4BariumCl2Help[3],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#hCork3Div'),
				position : 'w',
				content : sodiumSO4BariumCl2Help[5],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#hCork3Div'),
				position : 'w',
				content : sodiumSO4BariumCl2Help[4],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#flask3'),
				position : 'n',
				content : sodiumSO4BariumCl2Help[2],
				expose : false,
				delay : 4000
			}
			]);
			trip.start(); 
			window.trip = trip;	
		} 
		else if(reactionIcon==iconSelected[3] )// iron with CuSo4
		{
			trip = new Trip([
			{
				sel : $('#resultdiv'),
				position : 'n',
				content : ironCuSO4Help[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#Help_testtube'),
				position : 'n',
				content : ironCuSO4Help[1],
				expose : false,
				delay : 4000
			}
			]);
			trip.start(); 
			window.trip = trip;	
		}else if(reactionIcon==iconSelected[4] )//  Heating CuSo4
		{
			trip = new Trip([
			{
				sel : $('#helpBurnerDiv5'),
				position : 'w',
				content : heatinCuso4Help[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtube5'),
				position : 'n',
				content : heatinCuso4Help[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dprWaterDiv5'),
				position : 'n',
				content : heatinCuso4Help[2],
				expose : false,
				delay : 4000
			}
			]);
			trip.start(); 
			window.trip = trip;	
		}
	    else if(reactionIcon==iconSelected[6]){//zinc granules
			 if(identIcon==iconSelected[7]){//litmus test
					trip = new Trip([
					{
						sel : $('#spatula7'),
						position : 'n',
						content : litmusTestHelp[0],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#redPaper7'),
						position : 'w',
						content :litmusTestHelp[1],
						expose : false,
						delay : 4000
					}]);
					trip.start(); 
					window.trip = trip;	
				}else if(identIcon==iconSelected[8]){//hydrogen pop test
				
					trip = new Trip([
					{
						sel : $('#spatula8'),
						position : 'w',
						content : hydrogenPopTestHelp[0],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#cork8'),
						position : 'e',
						content :hydrogenPopTestHelp[1],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#candle'),
						position : 'w',
						content :hydrogenPopTestHelp[2],
						expose : false,
						delay : 4000
					}]);
					trip.start(); 
					window.trip = trip;	
				}else if(identIcon==iconSelected[9])//zinc with NaOH
				{		
					trip = new Trip([
					{
						sel : $('#spatula9'),
						position : 'w',
						content : zinkSO4NaOHHelp[0],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#dropper_div'),
						position : 'e',
						content : zinkSO4NaOHHelp[1],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#testtube9'),
						position : 'e',
						content : zinkSO4NaOHHelp[2],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#dropper_div'),
						position : 'e',
						content : zinkSO4NaOHHelp[1],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#testtube9'),
						position : 'e',
						content : zinkSO4NaOHHelp[2],
						expose : false,
						delay : 4000
					}
					]);
					trip.start(); 
					window.trip = trip;	
				}else if(identIcon==iconSelected[10])//kipss apparatus help
				{		
					trip = new Trip([
					{
						sel : $('#spatula10'),
						position : 'n',
						content : zinkSO4H2SHelp[0],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#testtub_div10'),
						position : 'e',
						content : zinkSO4H2SHelp[1],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#knob'),
						position : 'w',
						content : zinkSO4H2SHelp[2],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#knob'),
						position : 'w',
						content : zinkSO4H2SHelp[3],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#testtub_div10'),
						position : 'n',
						content : zinkSO4H2SHelp[4],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#testtub_div10'),
						position : 'n',
						content : zinkSO4H2SHelp[5],
						expose : false,
						delay : 4000
					}
					]);
					trip.start(); 
					window.trip = trip;	
				}
		}
		
			
	});
	$('#inference').bind('click',function(){
		trip1Flag=true;				
		if(reactionIcon==iconSelected[0])//Burning of Magnesium in air	
		{
			if(powderFlag==true){
				trip1 = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content : burningMagnesiumInfer[0],
					expose : false,
					delay : 6000
				}]);
			}else{
				trip1 = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content : burningMagnesiumInfer[1],
					expose : false,
					delay : 6000
				}]);
				
			}
		}
		else if(reactionIcon==iconSelected[1])//Burning of Magnesium in air	
		{
			trip1 = new Trip([
			{
				sel : $('#inference'),
				position : 'e',
				content : sublimationIceInfer[0],
				expose : false,
				delay : 4000
			}]);
		}else if(reactionIcon==iconSelected[2])//BaCl2 with Na2SO4	
		{
			if(stirFlag==true){
				trip1 = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content : sodiumSO4BariumCl2Infer[0],
					expose : false,
					delay : 6000
				}]);
			}else{
				trip1 = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content : sodiumSO4BariumCl2Infer[1],
					expose : false,
					delay : 6000
				}]);
				
			}			
		}else if(reactionIcon==iconSelected[3])//Iron with Cuso4	
		{
			if(greenFlag==false){
				trip1 = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content : ironCuSO4Infer[0],
					expose : false,
					delay : 4000
				}]);
			}else{
				trip1 = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content : ironCuSO4Infer[1],
					expose : false,
					delay : 4000
				}]);
			}
		}else if(reactionIcon==iconSelected[5])//Melting point of ice	
		{
			trip1 = new Trip([
			{
				sel : $('#inference'),
				position : 'e',
				content : meltingIceInfer[0],
				expose : false,
				delay : 4000
			}]);
		}else if(reactionIcon==iconSelected[4] )//  Heating CuSo4
		{
			
			if(copperInf==false){
				trip1 = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content : heatinCuso4Infer[0],
					expose : false,
					delay : 4000
				}]);
			}else{
				trip1 = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content : heatinCuso4Infer[1],
					expose : false,
					delay : 4000
				}]);
			}
		}else if(identIcon==iconSelected[7])//litmus Inference
		{
			if(inferenceFlag==true){
			trip1 = new Trip([
			{
				sel : $('#inference'),
				position : 'e',
				content : litmusTestInfer[0],
				expose : false,
				delay : 4000
			}]);
			}
			else
			{
				trip1 = new Trip([
			{
				sel : $('#inference'),
				position : 'e',
				content : litmusTestInfer[1],
				expose : false,
				delay : 4000
			}]);
			}
			
		}else if(identIcon==iconSelected[8])////hydrogen pop test Inference
		{
			trip1= new Trip([
			{
				sel : $('#inference'),
				position : 'e',
				content : hydrogenPopTestInfer[0],
				expose : false,
				delay : 4000
			}]);
		}
		else if(identIcon==iconSelected[9])////naOH test Inference
		{
			if(NaohFlag==true){
				trip1 = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content : zinkSO4NaOHInfer[0],
					expose : false,
					delay : 4000
				}]);	
				
			}
			else{
			if(dragCount==1){
				trip1 = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content : zinkSO4NaOHInfer[1],
					expose : false,
					delay : 4000
				}]);
			}
			else{
				trip1 = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content : zinkSO4NaOHInfer[2],
					expose : false,
					delay : 4000
			}]);
				
			}
			}
		}else if(identIcon==iconSelected[10])////kipps appratus test Inference
		{
			if(kipsinferFlag==true){
			trip1 = new Trip([
			{
				sel : $('#inference'),
				position : 'e',
				content : zinkSO4NaOHInfer[0],//zinkSO4H2SInfer[0],
				expose : false,
				delay : 4000
			}]);
			}
			else
			{
			trip1 = new Trip([
			{
				sel : $('#inference'),
				position : 'e',
				content : zinkSO4H2SInfer[0],//
				expose : false,
				delay : 4000
			}]);
			}
		}
		trip1.start(); 
		window.trip1 = trip1;
	});
	$('#tong1flame').bind( "mouseover", function() {
		trip2Flag=true;	
		trip2 = new Trip([
		{
			sel : $('#dazzle'),
			position : 's',
			content : burningMagnesiumInfer[2],
			expose : false,
			delay : 2000
		}]);
		trip2.start(); 
		window.trip2 = trip2;
	});
});
