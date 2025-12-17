var tripClickFlag=false;
$(document).ready(function() {					   
	$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){
		tripClickFlag=true;
		$(".content").scrollTop(0);
		if(showArr==0){
				trip = new Trip([
			{//common help
				sel : $('#bottleCap'),
				position : 'n',
				content : helprarr[0],
				expose : false,
				delay : 6000
			}
			]);
			trip.start(); 
			window.trip = trip;	
			

		}
		else if(showArr==1){
			trip = new Trip([
				{
					sel : $('#spatulaDiv'),
					position : 'n',
					content : helprarr[1],
					expose : false,
					delay : 6000
				}
		]);
		trip.start(); 
		window.trip = trip;

		}
	
	else if(showArr==2){
		trip = new Trip([
			{
				sel : $('#spatulaDiv'),
				position : 'n',
				content : helprarr[2],
				expose : false,
				delay : 6000
			}
	]);
	trip.start(); 
	window.trip = trip;

	}
	else if(showArr==3){
		trip = new Trip([
			{
				sel : $('#burnerKnob'),
				position : 'e',
				content : helprarr[3],
				expose : false,
				delay : 6000
			},
	]);
	trip.start(); 
	window.trip = trip;

	}
	else if(showArr==4){
		trip = new Trip([
			{
				sel : $('#spatulaDiv1'),
				position : 'n',
				content : helprarr[4],
				expose : false,
				delay : 6000
			}
	]);
	trip.start(); 
	window.trip = trip;

	}
	else if(showArr==5){
		trip = new Trip([
			{
				sel : $('#watchglassDiv'),
				position : 'n',
				content : helprarr[5],
				expose : false,
				delay : 6000
			}
	]);
	trip.start(); 
	window.trip = trip;

	}
	else if(showArr==6){
		trip = new Trip([
			{
				sel : $('#inferenceImg'),
				position : 'e',
				content : helprarr[6],
				expose : false,
				delay : 6000
			}
	]);
	trip.start(); 
	window.trip = trip;

	}
	else if(showArr==7){
		trip = new Trip([
			{
				sel : $('#inferenceImg1'),
				position : 'e',
				content : helprarr[6],
				expose : false,
				delay : 6000
			}
	]);
	trip.start(); 
	window.trip = trip;

	}
});	

$('#inferenceImg').bind('click',function(){

	tripFlag=1;	
	showArr=4;
			trip = new Trip([{//common help
				sel : $('#inferenceImg'),
				position : 'e',
				content : inferenceMsg[0],
				expose : false,
				delay : 6000
		},
		
		]);
		trip.start(); 
		window.trip = trip;	
})
$('#inferenceImg1').bind('click',function(){

	tripFlag=1;	
			trip = new Trip([{//common help
				
			sel : $('#inferenceImg1'),
		position : 'e',
		content : inferenceMsg[1],
		expose : false,
		delay : 6000
		},
	
		]);
		trip.start(); 
		window.trip = trip;	
})
});