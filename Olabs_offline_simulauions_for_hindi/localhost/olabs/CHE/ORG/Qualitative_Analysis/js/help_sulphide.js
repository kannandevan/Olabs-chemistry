// JavaScript Document
var trip,trip1,trip2;
var tripFlag=false;
var trip1Flag=false;
var trip2Flag=false;
$(document).ready(function() {
	$('#olabmenuBar li:first-child').bind('click',function(){		 
		//tripFlag=true;
			$(".content").scrollTop(0);		
			if($("#preliminary").find(':selected').val()==1){			
				if($("#confirmation").find(':selected').val()==0){				
					if($("#subDivision").find(':selected').val()==0){
						var trip = new Trip([
						{
							sel : $('#dragItem2_1'),
							position : 'w',
							content : dryHeatHelp[0],
							expose : false,
							delay : 4000
						},
						{
							sel : $('#dragItem2_0'),
							position : 'w',
							content :dryHeatHelp[1],
							expose : false,
							delay : 4000
						},
						{
							sel : $('#dragItem2_2'),
							position : 'w',
							content :dryHeatHelp[2],
							expose : false,
							delay : 4000
						},
						{
							sel : $('#burnerhelpDiv'),
							position : 'n',
							content :dryHeatHelp[3],
							expose : false,
							delay : 4000
						}]);
					}else if($("#subDivision").find(':selected').val()==1){
						var trip = new Trip([
						{
							sel : $('#dragItem2_3'),
							position : 'w',
							content : dryHeatHelp[4],
							expose : false,
							delay : 4000
						},
						{
							sel : $('#burnerhelpDiv'),
							position : 'n',
							content :dryHeatHelp[3],
							expose : false,
							delay : 4000
						},
						{
							sel : $('#dragItem2_4'),
							position : 'w',
							content :dryHeatHelp[5],
							expose : false,
							delay : 4000
						},
						{
							sel : $('#dragItem2_8'),
							position : 'w',
							content :dryHeatHelp[6],
							expose : false,
							delay : 4000
						},
						{
							sel : $('#burnerhelpDiv'),
							position : 'n',
							content :dryHeatHelp[3],
							expose : false,
							delay : 4000
						}]);
						
					}else if($("#subDivision").find(':selected').val()==2){
						var trip = new Trip([
						{
							sel : $('#dragItem2_5'),
							position : 'w',
							content : dryHeatHelp[7],
							expose : false,
							delay : 4000
						},
						{
							sel : $('#dragItem2_10'),
							position : 'w',
							content :dryHeatHelp[0],
							expose : false,
							delay : 4000
						},
						{
							sel : $('#dragItem2_9'),
							position : 'w',
							content :dryHeatHelp[1],
							expose : false,
							delay : 4000
						},						
						{
							sel : $('#burnerhelpDiv'),
							position : 'n',
							content :dryHeatHelp[3],
							expose : false,
							delay : 4000
						},
						{
							sel : $('#dragItem2_6'),
							position : 'w',
							content :dryHeatHelp[8],
							expose : false,
							delay : 4000
						},						
						{
							sel : $('#burnerhelpDiv'),
							position : 'n',
							content :dryHeatHelp[3],
							expose : false,
							delay : 4000
						},
						{
							sel : $('#dragItem2_7'),
							position : 'w',
							content :dryHeatHelp[9],
							expose : false,
							delay : 4000
						},
						{
							sel : $('#burnerhelpDiv'),
							position : 'n',
							content :dryHeatHelp[3],
							expose : false,
							delay : 4000
						}]);
					}
				}else{
					if($("#confirmationTests").find(':selected').val()==0){
						trip = new Trip([
						{
							sel : $('#confirm_drag0_0'),
							position : 'w',
							content : carbonateHelp[0],
							expose : false,
							delay : 4000
						},
						{
							sel : $('#dragLime_1'),
							position : 'n',
							content :carbonateHelp[1],
							expose : false,
							delay : 4000
						},
						{
							sel : $('#dragLime_2'),
							position : 'n',
							content :carbonateHelp[2],
							expose : false,
							delay : 4000
						},
						{
							sel : $('#dragLime_0'),
							position : 'n',
							content :carbonateHelp[3],
							expose : false,
							delay : 4000
						}
						]);
					}else if($("#confirmationTests").find(':selected').val()==1){
						trip = new Trip([
						{
							sel : $('#confirm_drag0_0'),
							position : 'w',
							content : carbonateHelp[4],
							expose : false,
							delay : 4000
						},
						{
							sel : $('#dragLime_1'),
							position : 'n',
							content :carbonateHelp[1],
							expose : false,
							delay : 4000
						},
						{
							sel : $('#dragLime_2'),
							position : 'n',
							content :carbonateHelp[2],
							expose : false,
							delay : 4000
						},
						{
							sel : $('#dragLime_0'),
							position : 'n',
							content :carbonateHelp[3],
							expose : false,
							delay : 4000
						}
						]);
					}
				}
				trip.start(); 
				window.trip = trip;	
			}
			
		
	});
	$('#inferButton').bind('click',function(){
		//Dry Heating test			
		if(tube1==true && cork1==true && limewater1==true && flame1==true)// Lime water
		{	
			if(dryHeatSample[0]==dryHeatSample[randomDryHeat]){		
				trip1 = new Trip([
				{
					sel : $('#inferButton'),
					position : 'e',
					content : dryHeatInfer[0],
					expose : false,
					delay : 6000
				}]);
			}else{
				trip1 = new Trip([
				{
					sel : $('#inferButton'),
					position : 'e',
					content : dryHeatInfer[8],
					expose : false,
					delay : 6000
				}]);
			}
		
		}else if(acetatePaper==true && flame1==true)//Acetate paper
		{	
			if(dryHeatSample[1]==dryHeatSample[randomDryHeat]){			
				trip1 = new Trip([
				{
					sel : $('#inferButton'),
					position : 'e',
					content : dryHeatInfer[1],
					expose : false,
					delay : 6000
				}]);
			}else{
				trip1 = new Trip([
				{
					sel : $('#inferButton'),
					position : 'e',
					content : dryHeatInfer[8],
					expose : false,
					delay : 6000
				}]);
			}
		
		}else if(starchiodidePaper==true && flame1==true)//Starch iodide paper
		{	
			if(dryHeatSample[6]==dryHeatSample[randomDryHeat]){			
				trip1 = new Trip([
				{
					sel : $('#inferButton'),
					position : 'e',
					content : dryHeatInfer[2],
					expose : false,
					delay : 6000
				}]);
			}else{
				trip1 = new Trip([
				{
					sel : $('#inferButton'),
					position : 'e',
					content : dryHeatInfer[8],
					expose : false,
					delay : 6000
				}]);
			}
		
		}else if(starchPaper==true && flame1==true)// Starch paper
		{	
			if(dryHeatSample[7]==dryHeatSample[randomDryHeat]){			
				trip1 = new Trip([
				{
					sel : $('#inferButton'),
					position : 'e',
					content : dryHeatInfer[3],
					expose : false,
					delay : 6000
				}]);
			}else{
				trip1 = new Trip([
				{
					sel : $('#inferButton'),
					position : 'e',
					content : dryHeatInfer[8],
					expose : false,
					delay : 6000
				}]);
			}
		
		}else if(amoniumsolnFlag==true && flame1==true && glassFlag==true )// Ammonia
		{	
			if(dryHeatSample[3]==dryHeatSample[randomDryHeat]){				
				trip1 = new Trip([
				{
					sel : $('#inferButton'),
					position : 'e',
					content : dryHeatInfer[4],
					expose : false,
					delay : 6000
				}]);
			}else{
				trip1 = new Trip([
				{
					sel : $('#inferButton'),
					position : 'e',
					content : dryHeatInfer[8],
					expose : false,
					delay : 6000
				}]);
			}
		
		}else if(tube1_sulphor==true && cork1_sulphor==true && limewater1_sulphor==true && flame1==true)//Ferrus slphate
		{	
			if(dryHeatSample[5]==dryHeatSample[randomDryHeat]){			
				trip1 = new Trip([
				{
					sel : $('#inferButton'),
					position : 'e',
					content : dryHeatInfer[5],
					expose : false,
					delay : 6000
				}]);
			}else{
				trip1 = new Trip([
				{
					sel : $('#inferButton'),
					position : 'e',
					content : dryHeatInfer[8],
					expose : false,
					delay : 6000
				}]);
			}
		
		}else if($("#subDivision").find(':selected').val()==1){
			if(dryHeatSample[2]==dryHeatSample[randomDryHeat])//Smell of sulphor
			{						
				trip1 = new Trip([
				{
					sel : $('#inferButton'),
					position : 'e',
					content : dryHeatInfer[6],
					expose : false,
					delay : 6000
				}]);
			
			}else if(dryHeatSample[4]==dryHeatSample[randomDryHeat])//Smell of vinegar
			{	
						
				trip1 = new Trip([
				{
					sel : $('#inferButton'),
					position : 'e',
					content : dryHeatInfer[7],
					expose : false,
					delay : 6000
				}]);
			
			}else if(amoniumsolnFlag==false && glassFlag==false && acetatePaper==false && flame1==true){
				trip1 = new Trip([
				{
					sel : $('#inferButton'),
					position : 'e',
					content : dryHeatInfer[8],
					expose : false,
					delay : 6000
				}]);
			}
		}
		else if($("#confirmation").find(':selected').val()==1){
			if($("#confirmationTests").find(':selected').val()==1){							
				trip1 = new Trip([
				{
					sel : $('#inferButton'),
					position : 'e',
					content : confirmationInfer[1],
					expose : false,
					delay : 6000
				}]);							
			}else{
				if(tubeLime==true && corkLime==true && limewaterinLime==true){
					trip1 = new Trip([
					{
						sel : $('#inferButton'),
						position : 'e',
						content : confirmationInfer[2],
						expose : false,
						delay : 6000
					}]);
				}
				else{
					trip1 = new Trip([
					{
						sel : $('#inferButton'),
						position : 'e',
						content : confirmationInfer[0],
						expose : false,
						delay : 6000
					}]);
				}
			}
		}
		else if($("#confirmation").find(':selected').val()==3){
			if($("#confirmationTests").find(':selected').val()==0){							
				trip1 = new Trip([
				{
					sel : $('#inferButton'),
					position : 'e',
					content : sulphideInfer[0],
					expose : false,
					delay : 6000
				}]);							
			}else if($("#confirmationTests").find(':selected').val()==1){							
				trip1 = new Trip([
				{
					sel : $('#inferButton'),
					position : 'e',
					content : sulphideInfer[1],
					expose : false,
					delay : 6000
				}]);							
			}
			else{
				trip1 = new Trip([
				{
					sel : $('#inferButton'),
					position : 'e',
					content : sulphideInfer[2],
					expose : false,
					delay : 6000
				}]);
			}
		}
		trip1.start(); 
		window.trip1 = trip1;
	});
	
});
