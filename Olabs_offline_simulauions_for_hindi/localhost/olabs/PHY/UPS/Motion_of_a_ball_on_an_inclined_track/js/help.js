var trip;
var tempSamp=true;
var tripClickFlag=false;
$(document).ready(function() {					   
	$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){
		tripClickFlag=true;	
		// alert(ttttt2)
		if(ttttt2==1)
		{
			{
				trip = new Trip([
					
					{
						sel : $('#reset'),
						position : 'e',
						content : helpMsg[9],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		if(QuestionDisplayStatus)
		{
			trip = new Trip([
				{
					sel : $('#2'),
					position : 'w',
					content : "Please select correct answer",
					expose : false,
					delay : 3000
				}
			]);
			trip.start(); 
			window.trip = trip;
		}
		// else if(helpMsgCount == 0){
		// 	{		
		// 		trip = new Trip([
		// 			{
		// 				sel : $('#questionNumber1'),
		// 				position : 'w',
		// 				content : helpMsg[0],
		// 				expose : false,
		// 				delay : 3000
		// 			}
		// 		]);
		// 		trip.start(); 
		// 		window.trip = trip;
		//     }
	    // }
		else if(helpMsgCount==1){
			{
				setTimeout(function()
				{
					if(statusBit==false)
					{
						trip = new Trip([
							{
								sel : $('#bpm'),
								position : 'e',
								content : helpMsg[1],
								expose : false,
								delay : 6000
							}
						]);
						trip.start(); 
						window.trip = trip;
						tempSamp=false;
					}
				});
			}
		}
		else if(helpMsgCount==2){
			{
				trip = new Trip([
					{
						sel : $('#start'),
						position : 'e',
						content : helpMsg[2],
						expose : false,
						delay : 3000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if((dropdownIndex == "30")&(helpMsgCount==3)) {
			{
				trip = new Trip([
					
					{
						sel : $('#clickButton'),
						position : 'n',
						content : helpMsg[3],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}

		}
		else if (helpMsgCount == 4){
			{
				trip = new Trip([
					
					{
						sel : $('#scale'),
						position : 'n',
						content : helpMsg[4],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
				// statusBit=true;
			}
		}
		else if(helpMsgCount == 5){
			{
				
			    trip = new Trip([
					{
						sel : $('#bpm'),
						position : 'e',
						content : helpMsg[1],
						expose : false,
						delay : 3000
					}
				]);
				trip.start(); 
				window.trip = trip;								
			}
		}
	    else if(helpMsgCount == 6){
			{
				trip = new Trip([
					{
						sel : $('#clickButton3'),
						position : 'n',
						content : helpMsg[3],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount == 7){
			{
				trip = new Trip([
					{
						sel : $('#scale'),
						position : 'n',
						content : helpMsg[4],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount == 8){
			{
				trip = new Trip([
					{
						sel : $('#bpm'),
						position : 'e',
						content : helpMsg[1],
						expose : false,
						delay : 4000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount == 9){
			{
				trip = new Trip([
					{
						sel : $('#clickButton4'),
						position : 'n',
						content : helpMsg[3],
						expose : false,
						delay : 4000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount == 10){
			{
				trip = new Trip([
					{
						sel : $('#scale'),
						position : 'n',
						content : helpMsg[4],
						expose : false,
						delay : 4000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount == 11){
			{
				trip = new Trip([
					{
						sel : $('#bpm'),
						position : 'e',
						content : helpMsg[1],
						expose : false,
						delay : 4000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount == 12){
			{
				trip = new Trip([
					{
						sel : $('#clickButton2'),
						position : 'n',
						content : helpMsg[3],
						expose : false,
						delay : 4000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount == 13){
			{
				trip = new Trip([
					{
						sel : $('#scale'),
						position : 'n',
						content : helpMsg[4],
						expose : false,
						delay : 4000
					}
				]);
				trip.start(); 
				window.trip = trip;
		    }
		}
		else if(helpMsgCount == 14){
			// alert()
			{
				trip = new Trip([
					{
						sel : $('#questionNumber2'),
						position : 'w',
						content : helpMsg[0],
						expose : false,
						delay : 4000
					}
				]);
				trip.start(); 
				window.trip = trip;
				// statusBit=true;
			}
		}
		else if(helpMsgCount == 15){
			{
				trip = new Trip([
					{
						sel : $('#inference'),
						position : 'w',
						content : helpMsg[5],
						expose : false,
						delay : 2000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount == 16){
			{
				trip = new Trip([
					{
						sel : $('#questionNumber3'),
						position : 'w',
						content : helpMsg[0],
						expose : false,
						delay : 4000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount == 17){
			{
				trip = new Trip([
					{
						sel : $('#next_btn'),
						position : 'w',
						content : helpMsg[6],
						expose : false,
						delay : 4000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount == 18){
			{
				trip = new Trip([
					{
						sel : $('#questionNumber4'),
						position : 'w',
						content : helpMsg[0],
						expose : false,
						delay : 4000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount == 19){
			{
				if(statusBitLight==false)
				{
					trip = new Trip([
						{
							sel : $('#time'),
							position : 'e',
							content : helpMsg[8],
							expose : false,
							delay : 4000
						}
					]);
					trip.start(); 
					window.trip = trip;
				}
				
			}
		}
		else if(helpMsgCount == 20){
			{
				trip = new Trip([
					{
						sel : $('#start2'),
						position : 'e',
						content : helpMsg[2],
						expose : false,
						delay : 4000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount==21) {
			{
				trip = new Trip([
					
					{
						sel : $('#buttonLight4'),
						position : 'n',
						content : helpMsg[7],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if((sliderValue == "30")&(helpMsgCount==22)) {
			{
				trip = new Trip([
					
					{
						sel : $('#scale2'),
						position : 'n',
						content : helpMsg[4],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if((sliderValue == "30")&(helpMsgCount==23)) {
			{
				trip = new Trip([
					
					{
						sel : $('#time'),
						position : 'e',
						content : helpMsg[8],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}

		}
		else if(helpMsgCount==24){
			{
				trip = new Trip([
					
					{
						sel : $('#buttonLight1'),
						position : 'n',
						content : helpMsg[7],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}

		}
		else if(helpMsgCount==25) {
			{
				trip = new Trip([
					
					{
						sel : $('#scale2'),
						position : 'n',
						content : helpMsg[4],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount==26) {
			{
				trip = new Trip([
					
					{
						sel : $('#time'),
						position : 'e',
						content : helpMsg[8],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount==27) {
			{
				trip = new Trip([
					
					{
						sel : $('#buttonLight2'),
						position : 'n',
						content : helpMsg[7],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount==28) {
			{
				trip = new Trip([
					
					{
						sel : $('#scale2'),
						position : 'e',
						content : helpMsg[4],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount==29) {
			{
				trip = new Trip([
					
					{
						sel : $('#time'),
						position : 'e',
						content : helpMsg[8],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount==30) {
			{
				trip = new Trip([
					
					{
						sel : $('#buttonLight3'),
						position : 'n',
						content : helpMsg[7],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount==31) {
			{
				trip = new Trip([
					
					{
						sel : $('#scale2'),
						position : 'e',
						content : helpMsg[4],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount==32) {
			{
				trip = new Trip([
					
					{
						sel : $('#inference2'),
						position : 'e',
						content : helpMsg[5],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if((helpMsgCount==33)&&(ttttt==1)) {
			{
				trip = new Trip([
					
					{
						sel : $('#reset'),
						position : 'e',
						content : helpMsg[9],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount==34) {
			{
				trip = new Trip([
					
					{
						sel : $('#reset'),
						position : 'e',
						content : helpMsg[9],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount==35) {
			{
				trip = new Trip([
					
					{
						sel : $('#reset'),
						position : 'e',
						content : helpMsg[9],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		else if(helpMsgCount==36) {
			{
				trip = new Trip([
					
					{
						sel : $('#reset'),
						position : 'e',
						content : helpMsg[9],
						expose : false,
						delay : 6000
					}
				]);
				trip.start(); 
				window.trip = trip;
			}
		}
		
	})


    $('#inference').bind('click',function(){
		tripClickFlag=true;	
		trip = new Trip([	
		{
			sel : $('#inference'),
			position : 'e',
	        content : Inference_msg[0],
			expose : false,
			delay : 30000
		}]);	
	   	trip.start();
		window.trip = trip;		
	});
	$('#inference2').bind('click',function(){
		
		//helpMsgCount += 1;
		trip = new Trip([	
		{
			sel : $('#inference2'),
			position : 'e',
	        content : Inference_msg[1],
			expose : false,
			delay : 30000
		}]);	
	   	trip.start();
		window.trip = trip;		
	});
});


