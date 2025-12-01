// JavaScript Document
$(document).ready(function() {
	$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){
		if(propertyFlag==0){
			var trip = new Trip([
			   {
					sel : $('#testtubeSolnDivFeSO4'),
					position : 'n',
					content : helpMsgArray[0],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#burnerOff'),
					position : 'n',
					content : helpMsgArray[1],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#testtubeSolnDiv'),
					position : 'n',
					content : helpMsgArray[2],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#testtubeSolnDiv'),
					position : 'n',
					content : helpMsgArray[3],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#solnDragDiv_fecl3'),
					position : 'w',
					content : helpMsgArray[4],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#solnDragDiv'),
					position : 'w',
					content : helpMsgArray[5],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#resultCombo'),
					position : 'e',
					content : helpMsgArray[19],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#reset'),
					position : 'e',
					content : helpMsgArray[20],
					expose : false,
					delay : 3000
				},
				
				
			], {
				onTripStart : function() {
					console.log("onTripStart");
				},
				onTripEnd : function() {
					console.log("onTripEnd");
				},
				onTripStop : function() {
					console.log("onTripStop");
				},
				backToTopWhenEnded : true,
				delay : 2000
			});
		
				trip.start(); 
				window.trip = trip;
		}
		else if(propertyFlag==1){
			
		  if(methodFlag<=0){
			 
			  var trip = new Trip([
			   {
					sel : $('#solnDragDiv2'),
					position : 'n',
					content : helpMsgArray[6],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#resultCombo'),
					position : 'e',
					content : helpMsgArray[19],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#reset'),
					position : 'e',
					content : helpMsgArray[20],
					expose : false,
					delay : 3000
				},
				], {
				onTripStart : function() {
					console.log("onTripStart");
				},
				onTripEnd : function() {
					console.log("onTripEnd");
				},
				onTripStop : function() {
					console.log("onTripStop");
				},
				backToTopWhenEnded : true,
				delay : 2000
			});
			    trip.start(); 
				window.trip = trip;
			  
		  }
		  else{
		   var trip = new Trip([
			   {
		 
					sel : $('#testtubeSolnDiv2'),
					position : 'n',
					content : helpMsgArray[7],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#solnDragDiv3'),
					position : 'n',
					content : helpMsgArray[8],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#resultCombo'),
					position : 'e',
					content : helpMsgArray[19],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#reset'),
					position : 'e',
					content : helpMsgArray[20],
					expose : false,
					delay : 3000
				},
				
			], {
				onTripStart : function() {
					console.log("onTripStart");
				},
				onTripEnd : function() {
					console.log("onTripEnd");
				},
				onTripStop : function() {
					console.log("onTripStop");
				},
				backToTopWhenEnded : true,
				delay : 2000
			});
				trip.start(); 
				window.trip = trip;
			
		  }
				
		}
		else if(propertyFlag>=2){
			
		 if(methodFlag<=0){
			var trip = new Trip([
			   {
					sel : $('#testtubeSolnDivFeSO4'),
					position : 'n',
					content : helpMsgArray[13],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#burnerOff'),
					position : 'n',
					content : helpMsgArray[14],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#testtubeSolnDiv'),
					position : 'n',
					content : helpMsgArray[15],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#testtubeSolnDiv'),
					position : 'n',
					content : helpMsgArray[16],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#solnDragDiv_fecl3'),
					position : 'w',
					content : helpMsgArray[17],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#solnDragDiv'),
					position : 'w',
					content : helpMsgArray[18],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#resultCombo'),
					position : 'e',
					content : helpMsgArray[19],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#reset'),
					position : 'e',
					content : helpMsgArray[20],
					expose : false,
					delay : 3000
				},
			], {
				onTripStart : function() {
					console.log("onTripStart");
				},
				onTripEnd : function() {
					console.log("onTripEnd");
				},
				onTripStop : function() {
					console.log("onTripStop");
				},
				backToTopWhenEnded : true,
				delay : 2000
			});
		 }
		 else{
			 var trip = new Trip([
			   {
					sel : $('#solnDragDiv4'),
					position : 'n',
					content : helpMsgArray[9],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#solnDragDiv5'),
					position : 'w',
					content : helpMsgArray[10],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#testtubeSolnDiv_cl'),
					position : 'n',
					content : helpMsgArray[11],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#testtubeSolnDiv_halogen'),
					position : 'n',
					content : helpMsgArray[12],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#resultCombo'),
					position : 'e',
					content : helpMsgArray[19],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#reset'),
					position : 'e',
					content : helpMsgArray[20],
					expose : false,
					delay : 3000
				},
				
			], {
				onTripStart : function() {
					console.log("onTripStart");
				},
				onTripEnd : function() {
					console.log("onTripEnd");
				},
				onTripStop : function() {
					console.log("onTripStop");
				},
				backToTopWhenEnded : true,
				delay : 2000
			});
			 
		 }
		 
		 
				trip.start(); 
				window.trip = trip;
		}
		
});

$('#inferenceDiv').bind('click  ',function(){
	
	    
		var trip = new Trip([
		 
       {
		   
            sel : $('#inferenceDiv'),
            position : 'e',
            content : inferMsg,
            expose : false,
            delay : 5000
        }
	],
        {
        onTripStart : function() {
            console.log("onTripStart");
        },
        onTripEnd : function() {
            console.log("onTripEnd");
        },
        onTripStop : function() {
            console.log("onTripStop");
        },
        backToTopWhenEnded : true,
        delay : 2000
	});
		trip.start(); 
		window.trip = trip;
	});
	

});