// JavaScript Document
var trip;
var tripClickFlag=false;
$(document).ready(function() {
	$('#olabmenuBar li:first-child').bind('click',function(){
			$(".content").scrollTop(0);	
			if($("#property").find(':selected').val()==0){//Transparency				
				if(iconSelect==iconSelected[0]){//True solution
					trip = new Trip([
					{
						sel : $('#handDrag'),
						position : 'w',
						content :  helpTransparency[0],
						expose : false,
						delay : 4000
					}]);
				}else if(iconSelect==iconSelected[1]){//Suspension
					trip = new Trip([
					{
						sel : $('#handDrag'),
						position : 'w',
						content :  helpTransparency[1],
						expose : false,
						delay : 5000
					}]);
				}else{//Colloids
					trip = new Trip([
					{
						sel : $('#handDrag'),
						position : 'w',
						content :  helpTransparency[2],
						expose : false,
						delay : 5000
					}]);
				}
				
			}else if($("#property").find(':selected').val()==1){//Filtrations	
				trip = new Trip([
				{
					sel : $('#helpTesttube'),
					position : 'n',
					content :  helpFiltrations[0],
					expose : false,
					delay : 5000
				},
				{
					sel : $('#helpFunnel'),
					position : 'e',
					content :  helpFiltrations[1],
					expose : false,
					delay : 5000
				}]);
			}else if($("#property").find(':selected').val()==2){//Stability	
				trip = new Trip([
				{
					sel : $('#stopwatch'),
					position : 'w',
					content :  helpStability[0],
					expose : false,
					delay : 5000
				}]);
			}else if($("#property").find(':selected').val()==3){//Tyndal effect	
				trip = new Trip([
				{
					sel : $('.testtubeDrag'),
					position : 'n',
					content :  helpTyndal[0],
					expose : false,
					delay : 5000
				},
				{
					sel : $('#powerSource'),
					position : 'n',
					content :  helpTyndal[1],
					expose : false,
					delay : 5000
				}]);
			}
			
			trip.start(); 
			window.trip = trip;		
	});
	$('#inference').bind('click',function(){
		if($("#property").find(':selected').val()==0){//Transparency				
			if(iconSelect==iconSelected[0]){//True solution
				trip = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content :  inferenceTransparency[0],
					expose : false,
					delay : 5000
				}]);
			}else if(iconSelect==iconSelected[1]){//Suspension
				trip = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content :  inferenceTransparency[1],
					expose : false,
					delay : 5000
				}]);
			}else{// Colloids
				trip = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content :  inferenceTransparency[2],
					expose : false,
					delay : 5000
				}]);
			} 
		}else if($("#property").find(':selected').val()==1){//Filtration				
			if(iconSelect==iconSelected[0]){//True solution
				trip = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content :  inferenceFiltrations[0],
					expose : false,
					delay : 5000
				}]);
			}else if(iconSelect==iconSelected[1]){//Suspension
				trip = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content :  inferenceFiltrations[1],
					expose : false,
					delay : 5000
				}]);
			}else{// Colloids
				trip = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content :  inferenceFiltrations[2],
					expose : false,
					delay : 5000
				}]);
			} 
		}else if($("#property").find(':selected').val()==2){//Stability			
			if(iconSelect==iconSelected[0]){//True solution
				trip = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content :  inferenceStability[0],
					expose : false,
					delay : 5000
				}]);
			}else if(iconSelect==iconSelected[1]){//Suspension
				trip = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content :  inferenceStability[1],
					expose : false,
					delay : 5000
				}]);
			}else{// Colloids
				trip = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content :  inferenceStability[2],
					expose : false,
					delay : 5000
				}]);
			} 
		}else{//Tyndal Effect			
			if(iconSelect==iconSelected[0]){//True solution
				trip = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content :  inferenceTyndal[0],
					expose : false,
					delay : 10000
				}]);
			}else if(iconSelect==iconSelected[1]){//Suspension
				trip = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content :  inferenceTyndal[1],
					expose : false,
					delay : 10000
				}]);
			}else{// Colloids
				trip = new Trip([
				{
					sel : $('#inference'),
					position : 'e',
					content :  inferenceTyndal[2],
					expose : false,
					delay : 10000
				}]);
			} 
		}
		trip.start(); 
		window.trip = trip;
	});
});
