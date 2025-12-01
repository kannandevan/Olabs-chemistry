var tripClickFlag=false;
$(document).ready(function() {
	$('#Inference').bind('click',function(){
		if(iconSelect==dropbox[0]){
			if(count==0){
				trip = new Trip([{
					sel : $('#Inference'),
					position : 'e',
					content : inferenceMsg[0],
					expose : false,
					delay : 4000
				}]);
			}
			else if(count==1){
				trip = new Trip([
				{
					sel : $('#Inference'),
					position : 'e',
					content : inferenceMsg[1],
					expose : false,
					delay : 4000
				}]); 
			}
			else if(count==2){
				trip = new Trip([
				{
					sel : $('#Inference'),
					position : 'e',
					content : inferenceMsg[2],
					expose : false,
					delay : 4000
				}]); 
			}
			else if(count==3){
				trip = new Trip([
				{
					sel : $('#Inference'),
					position : 'e',
					content : inferenceMsg[3],
					expose : false,
					delay : 4000
				}]); 
			}
			trip.start();
				window.trip = trip;				
		}
		else if(iconSelect==dropbox[1]){
			if(count1==0){
				trip = new Trip([{
						sel : $('#Inference'),
						position : 'e',
						content : inferenceMsg[4],
						expose : false,
						delay : 4000
					}]); 				
			}
			else if(count1==1){
				trip = new Trip([{
					sel : $('#Inference'),
					position : 'e',
					content : inferenceMsg[5],
					expose : false,
					delay : 4000
				}]); 
			}
			trip.start();
			window.trip = trip;	
		}
	});	

	$('#olabmenuBar li:first-child').bind('click',function(){
		removeTrip();
		tripClickFlag=true;
		if((iconSelect==dropbox[0])&&(helpCount==0)&&(helpCnt==0)){
			trip = new Trip([{
				sel : $('#DropboxTest'),
				position : 'e',
				content : helpMsg[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#spatulaDiv'),
				position : 'n',
				content :helpMsg[1] ,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#cylinderDiv'),
				position : 'w',
				content :helpMsg[2] ,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#litmusRed'),
				position : 'n',
				content :helpMsg[3] ,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#litmusBlue'),
				position : 'n',
				content :helpMsg[4] ,
				expose : false,
				delay : 4000
			}
			]);
			trip.start(); 
			window.trip = trip;			
		}
		else if((iconSelect==dropbox[0])&&(helpCount==0)&&(helpCnt==1)){
			trip = new Trip([{
				sel : $('#cylinderDiv'),
				position : 'w',
				content :helpMsg[2] ,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#litmusRed'),
				position : 'n',
				content :helpMsg[3] ,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#litmusBlue'),
				position : 'n',
				content :helpMsg[4] ,
				expose : false,
				delay : 4000
			}
			]);
			trip.start(); 
			window.trip = trip;			
		}
		else if((iconSelect==dropbox[0])&&(helpCount==0)&&(helpCnt==2)){
			trip = new Trip([{
				sel : $('#litmusRed'),
				position : 'n',
				content :helpMsg[3] ,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#litmusBlue'),
				position : 'n',
				content :helpMsg[4] ,
				expose : false,
				delay : 4000
			}
			]);
			trip.start(); 
			window.trip = trip;			
		}
		else if((iconSelect==dropbox[0])&&(helpCount==0)&&(helpCnt==3)){
			trip = new Trip([
			{
				sel : $('#litmusBlue'),
				position : 'n',
				content :helpMsg[4] ,
				expose : false,
				delay : 4000
			}
			]);
			trip.start(); 
			window.trip = trip;
					
		}
		else if((iconSelect==dropbox[0])&&(helpCount==0)&&(helpCnt==4)){
			trip = new Trip([
			{
				sel : $('#buttonDiv'),
				position : 'w',
				content :helpMsg[5] ,
				expose : false,
				delay : 4000
			}
			]);
			trip.start(); 
			window.trip = trip;
					
		}
		else if((iconSelect==dropbox[0])&&(helpCount==1)&&(helpCnt==5)){
			console.log(helpCnt)
			trip = new Trip([{
				sel : $('#burnerDiv'),
				position : 'n',
				content : helpMsg[6],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeDiv1'),
				position : 'n',
				content : helpMsg[7],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#candleDiv'),
				position : 'w',
				content : helpMsg[8],
				expose : false,
				delay : 4000
			}
			]);
			trip.start(); 
			window.trip = trip;		
		}
		else if((iconSelect==dropbox[0])&&(helpCount==1)&&(helpCnt==6)){
			console.log(helpCnt)
			trip = new Trip([
			{
				sel : $('#testtubeDiv1'),
				position : 'n',
				content : helpMsg[7],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#candleDiv'),
				position : 'w',
				content : helpMsg[8],
				expose : false,
				delay : 4000
			}
			]);
			trip.start(); 
			window.trip = trip;		
		}
		else if((iconSelect==dropbox[0])&&(helpCount==1)&&(helpCnt==7)){
			console.log(helpCnt)
			trip = new Trip([
			{
				sel : $('#candleDiv'),
				position : 'w',
				content : helpMsg[8],
				expose : false,
				delay : 4000
			}
			]);
			trip.start(); 
			window.trip = trip;		
		}
		else if((iconSelect==dropbox[0])&&(helpCount==1)&&(helpCnt==9)){
			console.log(helpCnt)
			trip = new Trip([
			{
				sel : $('#DropboxTest'),
				position : 'e',
				content : helpMsg[0],
				expose : false,
				delay : 4000
			}
			]);
			trip.start(); 
			window.trip = trip;		
		}
		else if(iconSelect==dropbox[1]&&(helpCnt1==0)){
			trip = new Trip([{
				sel : $('#dropperWrapper'),
				position : 'w',
				content : helpMsg[9],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#cylinderDiv1'),
				position : 'n',
				content : helpMsg[10],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeDiv2'),
				position : 'n',
				content : helpMsg[11],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropperWrapper'),
				position : 'w',
				content : helpMsg[12],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#cylinderDiv1'),
				position : 'n',
				content : helpMsg[13],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#litmusRed1'),
				position : 'n',
				content : helpMsg[14],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#litmusBlue1'),
				position : 'n',
				content : helpMsg[15],
				expose : false,
				delay : 4000
			}
			]);
			trip.start(); 
			window.trip = trip;		
		}
		else if(iconSelect==dropbox[1]&&(helpCnt1==1)){
			trip = new Trip([
			{
				sel : $('#cylinderDiv1'),
				position : 'n',
				content : helpMsg[10],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#testtubeDiv2'),
				position : 'n',
				content : helpMsg[11],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropperWrapper'),
				position : 'w',
				content : helpMsg[12],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#cylinderDiv1'),
				position : 'n',
				content : helpMsg[13],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#litmusRed1'),
				position : 'n',
				content : helpMsg[14],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#litmusBlue1'),
				position : 'n',
				content : helpMsg[15],
				expose : false,
				delay : 4000
			}
			]);
			trip.start(); 
			window.trip = trip;		
		}
		else if(iconSelect==dropbox[1]&&(helpCnt1==2)){
			trip = new Trip([
			{
				sel : $('#testtubeDiv2'),
				position : 'n',
				content : helpMsg[11],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropperWrapper'),
				position : 'w',
				content : helpMsg[12],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#cylinderDiv1'),
				position : 'n',
				content : helpMsg[13],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#litmusRed1'),
				position : 'n',
				content : helpMsg[14],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#litmusBlue1'),
				position : 'n',
				content : helpMsg[15],
				expose : false,
				delay : 4000
			}
			]);
			trip.start(); 
			window.trip = trip;		
		}
		else if(iconSelect==dropbox[1]&&(helpCnt1==3)){
			trip = new Trip([
			{
				sel : $('#dropperWrapper'),
				position : 'w',
				content : helpMsg[12],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#cylinderDiv1'),
				position : 'n',
				content : helpMsg[13],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#litmusRed1'),
				position : 'n',
				content : helpMsg[14],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#litmusBlue1'),
				position : 'n',
				content : helpMsg[15],
				expose : false,
				delay : 4000
			}
			]);
			trip.start(); 
			window.trip = trip;		
		}
		else if(iconSelect==dropbox[1]&&(helpCnt1==4)){
			trip = new Trip([
			{
				sel : $('#cylinderDiv1'),
				position : 'n',
				content : helpMsg[13],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#litmusRed1'),
				position : 'n',
				content : helpMsg[14],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#litmusBlue1'),
				position : 'n',
				content : helpMsg[15],
				expose : false,
				delay : 4000
			}
			]);
			trip.start(); 
			window.trip = trip;		
		}
		else if(iconSelect==dropbox[1]&&(helpCnt1==5)){
			trip = new Trip([
			{
				sel : $('#litmusRed1'),
				position : 'n',
				content : helpMsg[14],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#litmusBlue1'),
				position : 'n',
				content : helpMsg[15],
				expose : false,
				delay : 4000
			}
			]);
			trip.start(); 
			window.trip = trip;		
		}
		else if(iconSelect==dropbox[1]&&(helpCnt1==6)){
			trip = new Trip([
			{
				sel : $('#litmusBlue1'),
				position : 'n',
				content : helpMsg[15],
				expose : false,
				delay : 4000
			}
			]);
			trip.start(); 
			window.trip = trip;		
		}
		else if(procStatus == 2){
			trip = new Trip([
				{
					sel : $('#reset'),
					position : 'e',
					content : helpMsg[16],
					expose : false,
					delay : 4000
				}
				]);
				trip.start(); 
				window.trip = trip;	
		}
		
		
		
	});		
	
});