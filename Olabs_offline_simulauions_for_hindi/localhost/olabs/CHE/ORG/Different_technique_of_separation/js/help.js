// JavaScript Document
$(document).ready(function() {
	$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){
		if(propertyFlag==1){
		
			var trip = new Trip([
			   {
					sel : $('#capTube'),
					position : 'n',
					content : helpMsgArray[0],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#champerDoor'),
					position : 'n',
					content : helpMsgArray[1],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#filterPaper'),
					position : 'n',
					content : helpMsgArray[2],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#champerDoor'),
					position : 'n',
					content : helpMsgArray[3],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#chamber'),
					position : 'w',
					content : helpMsgArray[4],
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
		else if(propertyFlag==2){
		
			var trip = new Trip([
			   {
					sel : $('#doorClick'),
					position : 'n',
					content : helpMsgArray[5],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#tubeA'),
					position : 'n',
					content : helpMsgArray[6],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#doorClick'),
					position : 'n',
					content : helpMsgArray[7],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#start_centrifug'),
					position : 'n',
					content : helpMsgArray[8],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#doorClick'),
					position : 'n',
					content : helpMsgArray[9],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#tubeB'),
					position : 'w',
					content : helpMsgArray[10],
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
		else if(propertyFlag==3){
			var trip = new Trip([
			  
				{
					sel : $('#dist_button'),
					position : 'w',
					content : helpMsgArray[11],
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
		else if(propertyFlag==4){
		  if(mixtureNum==0){
				
			var trip = new Trip([
			  
				{
					sel : $('#dist_button2'),
					position : 'w',
					content : helpMsgArray[12],
					expose : false,
					delay : 3000
				},
				
							
				{
					sel : $('#icebox'),
					position : 'w',
					content : helpMsgArray[13],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#dist_flask1'),
					position : 'w',
					content : helpMsgArray[14],
					expose : false,
					delay : 3000
				},
				
				{
					sel : $('#flsk2Div'),
					position : 'w',
					content : helpMsgArray[15],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#icebox'),
					position : 'w',
					content : helpMsgArray[16],
					expose : false,
					delay : 3000
				},
				
				{
					sel : $('#dist_button2'),
					position : 'w',
					content : helpMsgArray[17],
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
		 else if(mixtureNum==1){
			 var trip = new Trip([
			  
				/*{
					sel : $('#dist_button2'),
					position : 'w',
					content : helpMsgArray[12],
					expose : false,
					delay : 3000
				},
				
				{
					sel : $('#dist_flask1'),
					position : 'w',
					content : helpMsgArray[28],
					expose : false,
					delay : 3000
				},
				
				{
					sel : $('#flsk2Div'),
					position : 'w',
					content : helpMsgArray[29],
					expose : false,
					delay : 3000
				},
				
				{
					sel : $('#dist_button2'),
					position : 'w',
					content : helpMsgArray[15],
					expose : false,
					delay : 3000
				},
				*/
				{
					sel : $('#dist_button2'),
					position : 'w',
					content : helpMsgArray[12],
					expose : false,
					delay : 3000
				},
				
							
				{
					sel : $('#icebox'),
					position : 'w',
					content : helpMsgArray[13],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#dist_flask1'),
					position : 'w',
					content : helpMsgArray[30],
					expose : false,
					delay : 3000
				},
				
				{
					sel : $('#flsk2Div'),
					position : 'w',
					content : helpMsgArray[31],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#icebox'),
					position : 'w',
					content : helpMsgArray[16],
					expose : false,
					delay : 3000
				},
				
				{
					sel : $('#dist_button2'),
					position : 'w',
					content : helpMsgArray[17],
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
		 else if(mixtureNum==2){
			 var trip = new Trip([
			  
				/*{
					sel : $('#dist_button2'),
					position : 'w',
					content : helpMsgArray[12],
					expose : false,
					delay : 3000
				},
				
				{
					sel : $('#dist_flask1'),
					position : 'w',
					content : helpMsgArray[30],
					expose : false,
					delay : 3000
				},
				
				{
					sel : $('#flsk2Div'),
					position : 'w',
					content : helpMsgArray[31],
					expose : false,
					delay : 3000
				},
				
				{
					sel : $('#dist_button2'),
					position : 'w',
					content : helpMsgArray[15],
					expose : false,
					delay : 3000
				},*/
				{
					sel : $('#dist_button2'),
					position : 'w',
					content : helpMsgArray[12],
					expose : false,
					delay : 3000
				},
				
							
				{
					sel : $('#icebox'),
					position : 'w',
					content : helpMsgArray[13],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#dist_flask1'),
					position : 'w',
					content : helpMsgArray[32],
					expose : false,
					delay : 3000
				},
				
				{
					sel : $('#flsk2Div'),
					position : 'w',
					content : helpMsgArray[33],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#icebox'),
					position : 'w',
					content : helpMsgArray[16],
					expose : false,
					delay : 3000
				},
				
				{
					sel : $('#dist_button2'),
					position : 'w',
					content : helpMsgArray[17],
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
		else if(propertyFlag==5){
			var trip = new Trip([
			  
				{
					sel : $('#bottle3'),
					position : 'n',
					content : helpMsgArray[16],
					expose : false,
					delay : 3000
				},
				
				{
					sel : $('#funnel'),
					position : 'w',
					content : helpMsgArray[17],
					expose : false,
					delay : 3000
				},
				
				{
					sel : $('#glass_tube'),
					position : 'w',
					content : helpMsgArray[18],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#glass_tube'),
					position : 'w',
					content : helpMsgArray[19],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#glass_tube2'),
					position : 'w',
					content : helpMsgArray[18],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#funnel_objectDiv'),
					position : 'w',
					content : helpMsgArray[19],
					expose : false,
					delay : 3000
				},
				
				{
					sel : $('#tap_close'),
					position : 'w',
					content : helpMsgArray[20],
					expose : false,
					delay : 3000
				},
								
				{
					sel : $('#funnel_objectDiv'),
					position : 'w',
					content : helpMsgArray[21],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#tap_close'),
					position : 'n',
					content : helpMsgArray[22],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#tap_close'),
					position : 'w',
					content : helpMsgArray[23],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#bottle2'),
					position : 'n',
					content : helpMsgArray[24],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#bottle2'),
					position : 'n',
					content : helpMsgArray[26],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#tap_close'),
					position : 'w',
					content : helpMsgArray[25],
					expose : false,
					delay : 3000
				},
				{
					sel : $('#bottle1'),
					position : 'n',
					content : helpMsgArray[27],
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
});

$('#inferenceDiv').bind('click  ',function(){
	
	    if(propertyFlag!=3)
		{
		var trip = new Trip([
		 
       {
		   
            sel : $('#inferenceDiv'),
            position : 'e',
            content : inferenceMsg,
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
		}
		else
		{
			var trip = new Trip([
		 
       {
		   
            sel : $('#infersampleDiv'),
            position : 'e',
            content : inferenceMsg,
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
		}
		//~~~~~~~~~~~~~~~~~~~~
		//~~~~~~~~~~~~~~~~~~~~
		trip.start(); 
		window.trip = trip;
	});
	
	//~~~~~~~~~~~~~~~~~~~~
	$( "#filterPaperOuter" ) .mouseover(function() {
		
	var trip = new Trip([
		 
       {
		   
            sel : $('#filterPaperOuter'),
            position : 'e',
            content : filterString,
            expose : false,
            delay : 1000
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
