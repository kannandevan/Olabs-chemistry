var trip;
var tripClickFlag=false;
$(document).ready(function() {					   
	$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){

        tripClickFlag=true;
        if((help==1)&&(helpCount==1)) {
			{
                var trip = new Trip([
					{ 
						sel : $('#dropper'),
						position : 'n',
						content : helpMsg[0],
						expose : false,
						delay :4000
					},
					
				]);
				trip.start(); 
				window.trip = trip;	
			}
		}
		
		else if((help==1)&&(helpCount==2)) 
        {
            {
                var trip = new Trip([
					{ 
                        sel : $('#dropperInHand1'),
						position : 'w',
						content :helpMsg[1],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#dropperInHand1'),
						position : 'w',
						content : helpMsg[2],
						expose : false,
						delay : 4000
					},
					
				]);
				trip.start(); 
				window.trip = trip;	
			}
		}

        else if((help==1)&&(helpCount==2)) 
        {
            {
                var trip = new Trip([
					
                    {
						sel : $('#helpDiv'),
						position : 's',
						content : helpMsg[3],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker1'),
						position : 's',
						content : helpMsg[4],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker1'),
						position : 'n',
						content : helpMsg[5],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker2'),
						position : 'n',
						content : helpMsg[6],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker2'),
						position : 'n',
						content : helpMsg[7],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker3'),
						position : 'n',
						content : helpMsg[8],
						expose : false,
						delay : 4000
					},
				]);
				trip.start(); 
				window.trip = trip;	
			}
		}
        else if((help==1)&&(helpCount==3)) 
        {
            {
                var trip = new Trip([
					{ 
                        sel : $('#dropperInHand1'),
						position : 'w',
						content : helpMsg[2],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#helpDiv'),
						position : 's',
						content : helpMsg[3],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker1'),
						position : 'w',
						content : helpMsg[4],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker1'),
						position : 'n',
						content : helpMsg[5],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker2'),
						position : 'n',
						content : helpMsg[6],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker2'),
						position : 'n',
						content : helpMsg[7],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker3'),
						position : 'n',
						content : helpMsg[8],
						expose : false,
						delay : 4000
					},
				]);
				trip.start(); 
				window.trip = trip;	
			}
		}
        else if((help==1)&&(helpCount==4)) 
        {
            {
                var trip = new Trip([
                    {
						sel : $('#helpDiv'),
						position : 's',
						content : helpMsg[3],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker1'),
						position : 'w',
						content : helpMsg[4],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker1'),
						position : 'n',
						content : helpMsg[5],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker2'),
						position : 'n',
						content : helpMsg[6],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker2'),
						position : 'n',
						content : helpMsg[7],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker3'),
						position : 'n',
						content : helpMsg[8],
						expose : false,
						delay : 4000
					},
				]);
				trip.start(); 
				window.trip = trip;	
			}
		}
        else if((help==1)&&(helpCount==5)) 
        {
            {
                var trip = new Trip([
                    {
						sel : $('#handInBeaker1'),
						position : 'w',
						content : helpMsg[4],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker1'),
						position : 'n',
						content : helpMsg[5],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker2'),
						position : 'n',
						content : helpMsg[6],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker2'),
						position : 'n',
						content : helpMsg[7],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker3'),
						position : 'n',
						content : helpMsg[8],
						expose : false,
						delay : 4000
					},
				]);
				trip.start(); 
				window.trip = trip;	
			}
		}
        else if((help==1)&&(helpCount==6)) 
        {
            {
                var trip = new Trip([
                    {
						sel : $('#handInBeaker1'),
						position : 'n',
						content : helpMsg[5],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker2'),
						position : 'n',
						content : helpMsg[6],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker2'),
						position : 'n',
						content : helpMsg[7],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker3'),
						position : 'n',
						content : helpMsg[8],
						expose : false,
						delay : 4000
					},
				]);
				trip.start(); 
				window.trip = trip;	
			}
		}
        else if((help==1)&&(helpCount==7)) 
        {
            {
                var trip = new Trip([
                    {
						sel : $('#handInBeaker2'),
						position : 'n',
						content : helpMsg[6],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker2'),
						position : 'n',
						content : helpMsg[7],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker3'),
						position : 'n',
						content : helpMsg[8],
						expose : false,
						delay : 4000
					},
				]);
				trip.start(); 
				window.trip = trip;	
			}
		}
        else if((help==1)&&(helpCount==8)) 
        {
            {
                var trip = new Trip([
                    {
						sel : $('#handInBeaker2'),
						position : 'n',
						content : helpMsg[7],
						expose : false,
						delay : 4000
					},
                    {
						sel : $('#handInBeaker3'),
						position : 'n',
						content : helpMsg[8],
						expose : false,
						delay : 4000
					},
				]);
				trip.start(); 
				window.trip = trip;	
			}
		}
        else if((help==1)&&(helpCount==9)) 
        {
            {
                var trip = new Trip([
                    {
						sel : $('#handInBeaker3'),
						position : 'n',
						content : helpMsg[8],
						expose : false,
						delay : 4000
					},
				]);
				trip.start(); 
				window.trip = trip;	
			}
		}
		else if((help==1)&&(helpCount==10)) 
        {
            {
                var trip = new Trip([
                    {
						sel : $('#reset'),
						position : 'e',
						content : helpMsg[9],
						expose : false,
						delay : 4000
					},
				]);
				trip.start(); 
				window.trip = trip;	
			}
		}
    });

    $('#inference1').bind('click',function(){
		tripClickFlag = true;

      
            var trip = new Trip([
    
            {
                sel : $('#inference1'),
                position : 'e',
                content : Inference_msg[0],
                expose : false,
                delay : 8000
            },

			])
			trip.start(); 
			window.trip = trip;
	});

	$('#inference2').bind('click',function(){
		tripClickFlag = true;

      
		var trip = new Trip([

		{
			sel : $('#inference2'),
			position : 'e',
			content : Inference_msg[1],
			expose : false,
			delay : 8000
		},

		])
		trip.start(); 
		window.trip = trip;
    });
    $('#inference3').bind('click',function(){
		tripClickFlag = true;

      
		var trip = new Trip([

		{
			sel : $('#inference3'),
			position : 'e',
			content : Inference_msg[2],
			expose : false,
			delay : 8000
		},

		])
		trip.start(); 
		window.trip = trip;
    });
    $('#inference4').bind('click',function(){
		helpCount=10;
		tripClickFlag = true;

      
		var trip = new Trip([

		{
			sel : $('#inference4'),
			position : 'e',
			content : Inference_msg[3],
			expose : false,
			delay : 8000
		},

		])
		trip.start(); 
		window.trip = trip;
    });















});